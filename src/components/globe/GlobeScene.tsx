"use client";

import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export type Region = { name: string; lat: number; lon: number };

const BrandColors = {
    lime: '#bffd11',
    cyan: '#00FFFF',
    bg: '#00040F'
};

const MAX_SELECTIONS = 7;

const TEXTURE_URL = 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg';
const BORDERS_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

export const ContinentConfig: Record<string, { lat: number; lon: number; radius: number }> = {
    'North America': { lat: 45, lon: -100, radius: 1.3 },
    'South America': { lat: -15, lon: -60, radius: 1.0 },
    'Europe': { lat: 50, lon: 15, radius: 0.6 },
    'Africa': { lat: 0, lon: 20, radius: 1.1 },
    'Asia': { lat: 40, lon: 95, radius: 1.5 },
    'Oceania': { lat: -20, lon: 135, radius: 0.9 },
    'Middle East': { lat: 25, lon: 45, radius: 0.7 },
};

const getRegionName = (lat: number, lon: number): string => {
    if (lat < -60) return 'Antarctica';
    if (lat > 10 && lat < 42 && lon > 32 && lon < 65) return 'Middle East';
    if (lat > 15 && lon > -170 && lon < -50) return 'North America';
    if (lat > -60 && lat < 15 && lon > -90 && lon < -30) return 'South America';
    if (lat > 35 && lat < 72 && lon > -15 && lon < 40) return 'Europe';
    if (lat > -40 && lat < 38 && lon > -20 && lon < 52) return 'Africa';
    if (lat > -50 && lat < 10 && lon > 100 && lon < 180) return 'Oceania';
    if (lat > 5 && lat < 80 && lon > 25 && lon < 180) return 'Asia';
    return 'Unknown Region';
};

const latLonToArray = (lat: number, lon: number, radius: number): [number, number, number] => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return [x, y, z];
};

const VERTEX_SHADER = `
  varying vec2 vUv;
  varying vec3 vPos;
  void main() {
    vUv = uv;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D uTexture;
  uniform vec3 uColor;
  uniform vec3 uHighlightColor;
  uniform vec3 uFocusPoints[${MAX_SELECTIONS}];
  uniform float uFocusRadii[${MAX_SELECTIONS}];
  uniform int uActiveCount;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vPos;
  void main() {
    float val = texture2D(uTexture, vUv).r;
    float isLand = 1.0 - val;
    float distFromEdge = abs(val - 0.5);
    float edgeMask = 1.0 - smoothstep(0.0, 0.12, distFromEdge);
    float regionMask = 0.0;
    for(int i = 0; i < ${MAX_SELECTIONS}; i++) {
        if (i < uActiveCount) {
            float dist = distance(vPos, uFocusPoints[i]);
            float r = uFocusRadii[i];
            regionMask = max(regionMask, 1.0 - smoothstep(r * 0.8, r, dist));
        }
    }
    float pulse = 0.5 + 0.5 * sin(uTime * 3.0);
    float landAlpha = smoothstep(0.4, 0.6, isLand);
    float strength = edgeMask * regionMask * (2.0 + 1.5 * pulse);
    vec3 color = mix(uColor, uHighlightColor, 0.3 * regionMask);
    color = mix(color, uHighlightColor * 2.5, clamp(strength, 0.0, 1.0));
    gl_FragColor = vec4(color, max(landAlpha * 0.6, clamp(strength, 0.0, 1.0)));
  }
`;

class LandTester {
    data: Uint8Array | null = null;
    width = 0;
    height = 0;

    async load(url: string) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const bitmap = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bitmap.width;
            canvas.height = bitmap.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.drawImage(bitmap, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            this.data = new Uint8Array(canvas.width * canvas.height);
            for (let i = 0; i < imageData.length; i += 4) {
                this.data[i / 4] = imageData[i] < 128 ? 1 : 0;
            }
            this.width = canvas.width;
            this.height = canvas.height;
        } catch {
            console.warn("Land mask fallback enabled.");
        }
    }

    isLand(uv: THREE.Vector2 | undefined): boolean {
        if (!uv || !this.data) return false;
        const x = Math.max(0, Math.min(Math.floor(uv.x * this.width), this.width - 1));
        const y = Math.max(0, Math.min(Math.floor((1 - uv.y) * this.height), this.height - 1));
        return this.data[y * this.width + x] === 1;
    }
}

const landTester = new LandTester();

let _texturePromise: Promise<THREE.Texture> | null = null;
function loadSharedTexture(): Promise<THREE.Texture> {
    if (!_texturePromise) {
        _texturePromise = new Promise<THREE.Texture>((resolve, reject) => {
            const loader = new THREE.TextureLoader();
            loader.setCrossOrigin('anonymous');
            loader.load(
                TEXTURE_URL,
                (tex) => {
                    landTester.load(TEXTURE_URL);
                    resolve(tex);
                },
                undefined,
                reject
            );
        });
    }
    return _texturePromise;
}

/* ── Country Borders ── */
const CountryBorders = memo(() => {
    const [lineSegments, setLineSegments] = useState<THREE.LineSegments | null>(null);

    useEffect(() => {
        let cancelled = false;
        const BORDER_RADIUS = 1.515;

        (async () => {
            try {
                const res = await fetch(BORDERS_URL);
                const topo = await res.json();
                if (cancelled) return;

                const { scale, translate } = topo.transform;
                const posArr: number[] = [];

                for (const arc of topo.arcs as number[][][]) {
                    let ax = 0, ay = 0;
                    const decoded: [number, number][] = arc.map((pt: number[]) => {
                        ax += pt[0];
                        ay += pt[1];
                        return [ax * scale[0] + translate[0], ay * scale[1] + translate[1]] as [number, number];
                    });

                    for (let i = 0; i < decoded.length - 1; i++) {
                        const [lon0, lat0] = decoded[i];
                        const [lon1, lat1] = decoded[i + 1];
                        const p0 = latLonToArray(lat0, lon0, BORDER_RADIUS);
                        const p1 = latLonToArray(lat1, lon1, BORDER_RADIUS);
                        posArr.push(p0[0], p0[1], p0[2], p1[0], p1[1], p1[2]);
                    }
                }

                if (!cancelled) {
                    const geo = new THREE.BufferGeometry();
                    geo.setAttribute('position', new THREE.Float32BufferAttribute(posArr, 3));
                    const mat = new THREE.LineBasicMaterial({
                        color: '#3aaa18',
                        transparent: true,
                        opacity: 0.5,
                        depthWrite: false,
                    });
                    setLineSegments(new THREE.LineSegments(geo, mat));
                }
            } catch (e) {
                console.warn('Country borders failed to load:', e);
            }
        })();

        return () => { cancelled = true; };
    }, []);

    useEffect(() => {
        return () => {
            if (lineSegments) {
                lineSegments.geometry.dispose();
                (lineSegments.material as THREE.Material).dispose();
            }
        };
    }, [lineSegments]);

    if (!lineSegments) return null;
    return <primitive object={lineSegments} raycast={() => null} dispose={null} />;
});
CountryBorders.displayName = 'CountryBorders';

/* ── Ring animation ── */
const RingAnim = memo(({ scale, speed, delay = 0, color }: { scale: number; speed: number; delay?: number; color: string }) => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.elapsedTime * speed + delay;
            const s = (Math.sin(t) * 0.5 + 0.5) * scale + 0.05;
            ref.current.scale.set(s, s, s);
            const mat = ref.current.material as THREE.MeshBasicMaterial;
            if (mat) mat.opacity = 1.0 - (Math.sin(t) * 0.5 + 0.5);
        }
    });

    return (
        <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} dispose={null}>
            <ringGeometry args={[0.8, 1, 32]} />
            <meshBasicMaterial color={color} transparent side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
    );
});
RingAnim.displayName = 'RingAnim';

/* ── Selection marker ── */
const SelectionMarker = memo(({ lat, lon }: { lat: number; lon: number }) => {
    const position = useMemo(() => latLonToArray(lat, lon, 1.52), [lat, lon]);
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) groupRef.current.lookAt(0, 0, 0);
    });

    return (
        <group position={position} dispose={null}>
            <group ref={groupRef}>
                <pointLight color={BrandColors.cyan} intensity={3} distance={2} decay={2} position={[0, 0, -0.1]} />
                <group rotation={[Math.PI, 0, 0]}>
                    <Cylinder args={[0.012, 0.012, 0.5]} position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
                        <meshBasicMaterial color={BrandColors.cyan} transparent opacity={0.8} depthWrite={false} />
                    </Cylinder>
                    <RingAnim scale={0.1} speed={1} color={BrandColors.cyan} />
                    <RingAnim scale={0.18} speed={1.5} delay={0.5} color={BrandColors.cyan} />
                </group>
            </group>
        </group>
    );
});
SelectionMarker.displayName = 'SelectionMarker';

/* ── Globe mesh ── */
const Globe = memo(({ onSelect, selectedRegions, onLoaded }: {
    onSelect: (data: Region) => void;
    selectedRegions: Region[];
    onLoaded?: () => void;
}) => {
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    useEffect(() => {
        loadSharedTexture().then((tex) => {
            setTexture(tex);
            onLoaded?.();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const uniforms = useMemo(() => ({
        uTexture: { value: null as THREE.Texture | null },
        uColor: { value: new THREE.Color(BrandColors.lime) },
        uHighlightColor: { value: new THREE.Color(BrandColors.cyan) },
        uFocusPoints: { value: Array.from({ length: MAX_SELECTIONS }, () => new THREE.Vector3()) },
        uFocusRadii: { value: new Array(MAX_SELECTIONS).fill(0.0) },
        uActiveCount: { value: 0 },
        uTime: { value: 0.0 }
    }), []);

    useEffect(() => {
        if (texture) uniforms.uTexture.value = texture;
    }, [texture, uniforms]);

    useFrame((state) => {
        if (!materialRef.current) return;

        uniforms.uTime.value = state.clock.elapsedTime;
        const points = uniforms.uFocusPoints.value;
        const radii = uniforms.uFocusRadii.value;

        for (let i = 0; i < MAX_SELECTIONS; i++) {
            const region = selectedRegions[i];
            if (region) {
                const config = ContinentConfig[region.name];
                const [x, y, z] = latLonToArray(
                    config ? config.lat : region.lat,
                    config ? config.lon : region.lon,
                    1.51
                );
                points[i].set(x, y, z);
                radii[i] = config ? config.radius : 0.5;
            } else {
                points[i].set(0, 0, 0);
                radii[i] = 0.0;
            }
        }
        uniforms.uActiveCount.value = Math.min(selectedRegions.length, MAX_SELECTIONS);
    });

    return (
        <group rotation={[0, 0, 0.15]} dispose={null}>
            {/* Solid dark base sphere */}
            <Sphere args={[1.5, 48, 48]} dispose={null}>
                <meshStandardMaterial color={BrandColors.bg} roughness={0.9} metalness={0.1} />
            </Sphere>

            {/* Land/shader overlay sphere */}
            <Sphere
                args={[1.51, 48, 48]}
                dispose={null}
                onPointerMove={(e) => {
                    e.stopPropagation();
                    const land = landTester.isLand(e.uv);
                    document.body.style.cursor = land ? 'pointer' : 'auto';
                }}
                onPointerOut={() => {
                    document.body.style.cursor = 'auto';
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (landTester.isLand(e.uv)) {
                        const lon = (e.uv!.x - 0.5) * 360;
                        const lat = (e.uv!.y - 0.5) * 180;
                        if (!isNaN(lat) && !isNaN(lon)) {
                            onSelect({ name: getRegionName(lat, lon), lat, lon });
                        }
                    }
                }}
            >
                <shaderMaterial
                    ref={materialRef}
                    args={[{
                        uniforms: uniforms,
                        vertexShader: VERTEX_SHADER,
                        fragmentShader: FRAGMENT_SHADER,
                        transparent: true,
                        depthWrite: false,
                        blending: THREE.AdditiveBlending
                    }]}
                />
            </Sphere>

            <CountryBorders />

            {/* Atmospheric glow */}
            <Sphere args={[1.68, 32, 32]} raycast={() => null} dispose={null}>
                <meshBasicMaterial
                    color={BrandColors.lime}
                    transparent
                    opacity={0.07}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </Sphere>

            {/* Selection markers */}
            {selectedRegions.map((region) => {
                const config = ContinentConfig[region.name];
                return (
                    <SelectionMarker
                        key={region.name}
                        lat={config?.lat ?? region.lat}
                        lon={config?.lon ?? region.lon}
                    />
                );
            })}
        </group>
    );
});
Globe.displayName = 'Globe';

/* ── Orbit controls ── */
const Controls = memo(({ rotationSpeed }: { rotationSpeed: number }) => {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <OrbitControls
            enableZoom={false}
            autoRotate={!isDragging}
            autoRotateSpeed={rotationSpeed}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            makeDefault
            onStart={() => setIsDragging(true)}
            onEnd={() => setIsDragging(false)}
        />
    );
});
Controls.displayName = 'Controls';

/* ── Main exported scene ── */
export type GlobeSceneProps = {
    onSelect?: (d: Region) => void;
    selectedRegions?: Region[];
    rotationSpeed?: number;
    onLoaded?: () => void;
};

export function GlobeScene({ onSelect, selectedRegions = [], rotationSpeed = 0.2, onLoaded }: GlobeSceneProps) {
    return (
        <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 4.5], fov: 45 }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            }}
            className="w-full h-full"
        >
            <color attach="background" args={[BrandColors.bg]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} color={BrandColors.lime} intensity={2} />

            <Globe
                onSelect={onSelect || (() => { })}
                selectedRegions={selectedRegions}
                onLoaded={onLoaded}
            />

            <Controls rotationSpeed={rotationSpeed} />
        </Canvas>
    );
}
