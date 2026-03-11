"use client";

import React, { useState, useCallback, useRef, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/ui/FadeIn";
import { useI18n } from "@/lib/i18n/context";

/* ── Lazy-load the Three.js scene (SSR disabled) ── */
const GlobeScene = dynamic(
    () => import("@/components/globe/GlobeScene").then((m) => ({ default: m.GlobeScene })),
    { ssr: false }
);

type Region = { name: string; lat: number; lon: number };

/* ── Continent data for the info panel ── */
const continentData: Record<string, { count: number; carriers: string[]; tech: string }> = {
    "North America": { count: 23, carriers: ["AT&T", "T-Mobile", "Verizon Wireless", "Rogers Wireless", "Telcel", "Digicel", "Claro"], tech: "5G, 4G LTE, LTE-M, NB-IoT" },
    "South America": { count: 12, carriers: ["Claro", "Telefonica", "TIM", "Entel", "Tigo", "Personal"], tech: "4G LTE, CAT-M" },
    "Europe": { count: 45, carriers: ["Vodafone", "Orange", "Deutsche Telekom", "O2", "Telefonica", "Telenor", "Telia", "Swisscom", "A1"], tech: "4G LTE, 5G, LTE-M, NB-IoT" },
    "Asia": { count: 38, carriers: ["China Mobile", "NTT Docomo", "SoftBank", "Singtel", "SK Telecom", "Vodafone", "Airtel", "Zain", "Ooredoo"], tech: "4G LTE, LTE-M" },
    "Africa": { count: 32, carriers: ["MTN", "Airtel", "Orange", "Vodacom", "Etisalat"], tech: "4G LTE, 3G" },
    "Oceania": { count: 5, carriers: ["Telstra", "Optus", "Vodafone", "Spark", "Digicel"], tech: "4G LTE" },
    "Middle East": { count: 18, carriers: ["Zain", "Ooredoo", "STC", "Etisalat", "du", "Mobily", "Batelco"], tech: "4G LTE, 5G, NB-IoT" },
};

const ContinentCenters: Record<string, { lat: number; lon: number }> = {
    "North America": { lat: 45, lon: -100 },
    "South America": { lat: -15, lon: -60 },
    "Europe": { lat: 50, lon: 15 },
    "Africa": { lat: 0, lon: 20 },
    "Asia": { lat: 40, lon: 95 },
    "Oceania": { lat: -20, lon: 135 },
    "Middle East": { lat: 25, lon: 45 },
};

/* ── Country → Continent lookup (from the original globe app) ── */
const CountryDatabase: Record<string, string> = {
    // North America
    "United States": "North America", "Canada": "North America", "Mexico": "North America",
    "Guatemala": "North America", "Cuba": "North America", "Haiti": "North America",
    "Dominican Republic": "North America", "Honduras": "North America", "Nicaragua": "North America",
    "El Salvador": "North America", "Costa Rica": "North America", "Panama": "North America",
    "Jamaica": "North America", "Trinidad and Tobago": "North America", "Bahamas": "North America",
    // South America
    "Brazil": "South America", "Argentina": "South America", "Colombia": "South America",
    "Peru": "South America", "Venezuela": "South America", "Chile": "South America",
    "Ecuador": "South America", "Bolivia": "South America", "Paraguay": "South America",
    "Uruguay": "South America", "Guyana": "South America", "Suriname": "South America",
    // Europe
    "United Kingdom": "Europe", "France": "Europe", "Germany": "Europe", "Italy": "Europe",
    "Spain": "Europe", "Ukraine": "Europe", "Poland": "Europe", "Romania": "Europe",
    "Netherlands": "Europe", "Belgium": "Europe", "Greece": "Europe", "Portugal": "Europe",
    "Sweden": "Europe", "Hungary": "Europe", "Belarus": "Europe", "Austria": "Europe",
    "Serbia": "Europe", "Switzerland": "Europe", "Bulgaria": "Europe", "Denmark": "Europe",
    "Finland": "Europe", "Slovakia": "Europe", "Norway": "Europe", "Ireland": "Europe",
    "Croatia": "Europe", "Moldova": "Europe", "Bosnia and Herzegovina": "Europe", "Albania": "Europe",
    "Lithuania": "Europe", "Slovenia": "Europe", "Latvia": "Europe", "Estonia": "Europe",
    "Montenegro": "Europe", "Luxembourg": "Europe", "Malta": "Europe", "Iceland": "Europe",
    // Middle East
    "Saudi Arabia": "Middle East", "United Arab Emirates": "Middle East", "Israel": "Middle East",
    "Iraq": "Middle East", "Jordan": "Middle East", "Kuwait": "Middle East", "Qatar": "Middle East",
    "Bahrain": "Middle East", "Oman": "Middle East", "Lebanon": "Middle East", "Syria": "Middle East",
    "Yemen": "Middle East", "Iran": "Middle East",
    // Asia
    "China": "Asia", "India": "Asia", "Indonesia": "Asia", "Pakistan": "Asia",
    "Bangladesh": "Asia", "Japan": "Asia", "Philippines": "Asia", "Vietnam": "Asia",
    "Turkey": "Asia", "Thailand": "Asia", "Myanmar": "Asia", "South Korea": "Asia",
    "Afghanistan": "Asia", "Uzbekistan": "Asia", "Malaysia": "Asia", "Nepal": "Asia",
    "Sri Lanka": "Asia", "Kazakhstan": "Asia", "Cambodia": "Asia", "Azerbaijan": "Asia",
    "Tajikistan": "Asia", "Laos": "Asia", "Kyrgyzstan": "Asia", "Turkmenistan": "Asia",
    "Singapore": "Asia", "Georgia": "Asia", "Mongolia": "Asia", "Armenia": "Asia",
    "Timor-Leste": "Asia", "Cyprus": "Asia", "Bhutan": "Asia", "Maldives": "Asia", "Brunei": "Asia",
    // Africa
    "Nigeria": "Africa", "Ethiopia": "Africa", "Egypt": "Africa", "DR Congo": "Africa",
    "Tanzania": "Africa", "South Africa": "Africa", "Kenya": "Africa", "Uganda": "Africa",
    "Algeria": "Africa", "Sudan": "Africa", "Morocco": "Africa", "Angola": "Africa",
    "Mozambique": "Africa", "Ghana": "Africa", "Madagascar": "Africa", "Cameroon": "Africa",
    "Ivory Coast": "Africa", "Niger": "Africa", "Burkina Faso": "Africa", "Mali": "Africa",
    "Malawi": "Africa", "Zambia": "Africa", "Senegal": "Africa", "Chad": "Africa",
    "Somalia": "Africa", "Zimbabwe": "Africa", "Guinea": "Africa", "Rwanda": "Africa",
    "Benin": "Africa", "Burundi": "Africa", "Tunisia": "Africa", "South Sudan": "Africa",
    "Togo": "Africa", "Sierra Leone": "Africa", "Libya": "Africa", "Congo": "Africa",
    "Liberia": "Africa", "Central African Republic": "Africa", "Mauritania": "Africa", "Eritrea": "Africa",
    "Namibia": "Africa", "Gambia": "Africa", "Botswana": "Africa", "Gabon": "Africa",
    "Lesotho": "Africa", "Guinea-Bissau": "Africa", "Equatorial Guinea": "Africa", "Mauritius": "Africa",
    "Eswatini": "Africa", "Djibouti": "Africa", "Comoros": "Africa", "Cabo Verde": "Africa",
    "Sao Tome and Principe": "Africa", "Seychelles": "Africa",
    // Oceania
    "Australia": "Oceania", "Papua New Guinea": "Oceania", "New Zealand": "Oceania",
    "Fiji": "Oceania", "Solomon Islands": "Oceania", "Micronesia": "Oceania",
    "Vanuatu": "Oceania", "Samoa": "Oceania", "Kiribati": "Oceania", "Tonga": "Oceania",
    "Marshall Islands": "Oceania", "Palau": "Oceania", "Tuvalu": "Oceania", "Nauru": "Oceania",
};

const EXCLUDED_REGIONS = new Set(["Unknown Region", "Antarctica"]);

export function CoverageSection() {
    const { t } = useI18n();
    const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
    const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const searchRef = useRef<HTMLDivElement>(null);

    /* ── Intersection Observer: only mount canvas when near viewport ── */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
            { rootMargin: "200px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* ── Close search suggestions on outside click ── */
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = useCallback((region: Region) => {
        if (EXCLUDED_REGIONS.has(region.name)) return;
        setSelectedRegions((prev) => {
            const exists = prev.find((r) => r.name === region.name);
            if (exists) return prev.filter((r) => r.name !== region.name);
            return [...prev, region];
        });
    }, []);

    const handleClear = useCallback(() => setSelectedRegions([]), []);

    /* ── Country search ── */
    const filteredCountries = useMemo(() => {
        if (!searchQuery) return [];
        const lowerQuery = searchQuery.toLowerCase();
        return Object.keys(CountryDatabase)
            .filter((country) => country.toLowerCase().includes(lowerQuery))
            .sort()
            .slice(0, 12);
    }, [searchQuery]);

    const handleSearchSelect = useCallback((country: string) => {
        const continentName = CountryDatabase[country];
        if (continentName) {
            const coords = ContinentCenters[continentName];
            if (coords) {
                setSelectedRegions((prev) => {
                    if (prev.find((r) => r.name === continentName)) return prev;
                    return [...prev, { name: continentName, lat: coords.lat, lon: coords.lon }];
                });
                setSearchQuery("");
                setShowSuggestions(false);
            }
        }
    }, []);

    const singleRegion = selectedRegions.length === 1 ? selectedRegions[0] : null;
    const singleRegionData = singleRegion ? continentData[singleRegion.name] : null;
    const totalCarriers = selectedRegions.reduce((acc, r) => acc + (continentData[r.name]?.count || 0), 0);

    const displayCoords = useMemo(() => {
        if (!singleRegion) return null;
        return ContinentCenters[singleRegion.name] ?? { lat: singleRegion.lat, lon: singleRegion.lon };
    }, [singleRegion]);

    return (
        <section
            ref={sectionRef}
            id="coverage-globe"
            className="relative w-full overflow-hidden hidden md:block"
            style={{ backgroundColor: "#000000" }}
        >
            {/* ── Section header ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-4">
                <FadeIn>
                    <p
                        className="text-sm tracking-[0.2em] uppercase mb-4"
                        style={{ fontFamily: "var(--font-messina-var)", color: "#bffd11" }}
                    >
                        {t.coverage.eyebrow}
                    </p>
                    <h2
                        className="font-medium text-3xl md:text-4xl lg:text-5xl mb-4 max-w-2xl leading-[1.1] text-white"
                        style={{ fontFamily: "var(--font-roobert-var)" }}
                    >
                        {(() => {
                            const parts = t.coverage.headline.split(/(?=190\+)/);
                            return (
                                <>
                                    {parts[0]?.trim()}
                                    <br />
                                    {parts[1] ?? ""}
                                </>
                            );
                        })()}
                        <br />
                        <span style={{ color: "#bffd11" }}>Zero dead zones.</span>
                    </h2>
                    <p
                        className="text-lg md:text-xl mb-2 max-w-xl leading-relaxed"
                        style={{ fontFamily: "var(--font-inter-var)", color: "rgba(255,255,255,0.55)" }}
                    >
                        {t.coverage.sub}
                    </p>
                </FadeIn>
            </div>

            {/* ── Globe canvas area ── */}
            <div className="relative w-full" style={{ height: "min(70vh, 700px)" }}>

                {/* Loading state */}
                {!isGlobeLoaded && isVisible && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <div className="text-center space-y-4">
                            <div className="w-8 h-8 border-2 border-[#bffd11]/20 border-t-[#bffd11] rounded-full animate-spin mx-auto" />
                            <p className="text-[#bffd11] text-[10px] uppercase tracking-[0.35em] font-mono">
                                {t.coverage.loading}
                            </p>
                        </div>
                    </div>
                )}

                {/* Three.js Canvas — rendered only when visible */}
                {isVisible && (
                    <div className="absolute inset-0" style={{ opacity: isGlobeLoaded ? 1 : 0, transition: "opacity 0.6s ease-out" }}>
                        <GlobeScene
                            onSelect={handleSelect}
                            selectedRegions={selectedRegions}
                            rotationSpeed={0.2}
                            onLoaded={() => setIsGlobeLoaded(true)}
                        />
                    </div>
                )}

                {/* ── Country search overlay (top-right) ── */}
                {isGlobeLoaded && (
                    <div
                        ref={searchRef}
                        className="absolute top-4 right-4 md:top-6 md:right-8 z-30 w-48 md:w-64 pointer-events-auto select-none"
                    >
                        <div
                            className="p-3 md:p-4 rounded-sm backdrop-blur-sm"
                            style={{
                                backgroundColor: "rgba(0,4,15,0.8)",
                                border: "1px solid rgba(191,253,17,0.3)",
                                boxShadow: "0 0 15px rgba(191,253,17,0.1)",
                            }}
                        >
                            <label
                                className="block text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-2 truncate"
                                style={{ color: "#bffd11" }}
                            >
                                {t.coverage.searchLabel}
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                                    onFocus={() => setShowSuggestions(true)}
                                    placeholder={t.coverage.searchPlaceholder}
                                    className="w-full text-base md:text-[10px] px-2 py-1.5 md:px-3 md:py-2 rounded-sm font-mono uppercase focus:outline-none"
                                    style={{
                                        backgroundColor: "#00040F",
                                        border: "1px solid rgba(191,253,17,0.5)",
                                        color: "#bffd11",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#bffd11")}
                                    onMouseLeave={(e) => {
                                        if (document.activeElement !== e.currentTarget) {
                                            e.currentTarget.style.borderColor = "rgba(191,253,17,0.5)";
                                        }
                                    }}
                                />
                                {showSuggestions && searchQuery && filteredCountries.length > 0 && (
                                    <ul
                                        className="absolute left-0 right-0 top-full mt-1 max-h-32 md:max-h-40 overflow-y-auto z-50 rounded-sm"
                                        style={{
                                            backgroundColor: "#00040F",
                                            border: "1px solid rgba(191,253,17,0.3)",
                                            boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
                                        }}
                                    >
                                        {filteredCountries.map((country) => (
                                            <li
                                                key={country}
                                                onClick={() => handleSearchSelect(country)}
                                                className="px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-xs cursor-pointer flex justify-between items-center group"
                                                style={{
                                                    color: "rgba(255,255,255,0.65)",
                                                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = "rgba(191,253,17,0.2)";
                                                    e.currentTarget.style.color = "#bffd11";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = "transparent";
                                                    e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                                                }}
                                            >
                                                <span>{country}</span>
                                                <span className="text-[6px] md:text-[8px] uppercase hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)" }}>
                                                    {CountryDatabase[country]}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* ── Region info panel (bottom-left overlay) ── */}
                {selectedRegions.length > 0 && (
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-20 flex justify-center md:block pointer-events-none">
                        <div
                            className="pointer-events-auto w-full max-w-sm md:w-80 p-4 md:p-5 rounded-lg backdrop-blur-md relative"
                            style={{
                                backgroundColor: "rgba(0,4,15,0.9)",
                                border: "1px solid #bffd11",
                                boxShadow: "0 0 20px rgba(191,253,17,0.15)",
                            }}
                        >
                            <button
                                onClick={handleClear}
                                className="absolute top-2 right-2 p-1 transition-colors cursor-pointer"
                                style={{ color: "rgba(191,253,17,0.5)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#bffd11")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(191,253,17,0.5)")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {singleRegion ? (
                                <>
                                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider truncate mb-2" style={{ color: "#bffd11" }}>
                                        {singleRegion.name}
                                    </h3>
                                    {displayCoords && (
                                        <span
                                            className="text-[8px] md:text-[10px] border px-1 py-0.5 rounded mb-2 block w-fit"
                                            style={{ color: "#bffd11", borderColor: "#bffd11", opacity: 0.8 }}
                                        >
                                            {Math.abs(displayCoords.lat).toFixed(1)}°{displayCoords.lat >= 0 ? "N" : "S"},&nbsp;
                                            {Math.abs(displayCoords.lon).toFixed(1)}°{displayCoords.lon >= 0 ? "E" : "W"}
                                        </span>
                                    )}
                                    <div className="h-px w-full mb-3" style={{ background: "linear-gradient(to right, rgba(191,253,17,0.5), transparent)" }} />
                                    {singleRegionData ? (
                                        <div className="space-y-3 text-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="p-2 rounded" style={{ backgroundColor: "rgba(191,253,17,0.1)", border: "1px solid rgba(191,253,17,0.2)" }}>
                                                    <span className="text-[8px] md:text-[10px] uppercase block mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Connectivity</span>
                                                    <span className="text-white font-mono leading-tight block text-[10px] md:text-xs">{singleRegionData.tech}</span>
                                                </div>
                                                <div className="p-2 rounded" style={{ backgroundColor: "rgba(191,253,17,0.1)", border: "1px solid rgba(191,253,17,0.2)" }}>
                                                    <span className="text-[8px] md:text-[10px] uppercase block mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Carriers</span>
                                                    <span className="font-mono text-base md:text-lg leading-none" style={{ color: "#bffd11" }}>{singleRegionData.count}</span>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded" style={{ backgroundColor: "rgba(191,253,17,0.1)", border: "1px solid rgba(191,253,17,0.2)" }}>
                                                <span className="text-[8px] md:text-[10px] uppercase block mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                                                    Sample Providers
                                                    <span className="normal-case ml-1 text-[7px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                                                        ({singleRegionData.carriers.length} of {singleRegionData.count})
                                                    </span>
                                                </span>
                                                <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                                                    {singleRegionData.carriers.map((carrier, index) => (
                                                        <span
                                                            key={index}
                                                            className="text-[9px] md:text-[10px] px-2 py-0.5 rounded-sm whitespace-nowrap"
                                                            style={{
                                                                color: "#bffd11",
                                                                backgroundColor: "rgba(191,253,17,0.1)",
                                                                border: "1px solid rgba(191,253,17,0.3)",
                                                            }}
                                                        >
                                                            {carrier}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="py-2 text-center font-mono text-xs uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                                            Low Signal Area
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h3 className="text-base md:text-lg font-bold uppercase tracking-wider mb-2" style={{ color: "#bffd11" }}>
                                        Multi-Sector Link
                                    </h3>
                                    <div className="h-px w-full mb-3" style={{ background: "linear-gradient(to right, rgba(191,253,17,0.5), transparent)" }} />
                                    <div className="p-2 rounded text-center mb-3" style={{ backgroundColor: "rgba(191,253,17,0.1)", border: "1px solid rgba(191,253,17,0.2)" }}>
                                        <span className="text-[8px] md:text-[10px] uppercase block mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Total Carriers Detected</span>
                                        <span className="font-mono text-lg md:text-xl leading-none" style={{ color: "#bffd11" }}>{totalCarriers}</span>
                                    </div>
                                    <div className="space-y-1">
                                        {selectedRegions.map((r, i) => (
                                            <div
                                                key={i}
                                                className="flex justify-between items-center text-[10px] pb-1 last:border-0"
                                                style={{ color: "rgba(255,255,255,0.65)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                                            >
                                                <span>{r.name}</span>
                                                <span className="font-mono text-[8px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                                                    {continentData[r.name]?.count || 0} providers
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Bottom fade — blends globe into page background */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to bottom, transparent, #000000)" }}
                    aria-hidden="true"
                />

                {/* Bottom status indicator */}
                <div className="absolute bottom-2 right-4 md:bottom-6 md:right-8 z-20 pointer-events-none text-right select-none">
                    <p className="text-[8px] md:text-xs tracking-widest" style={{ color: "#bffd11", opacity: 0.5 }}>
                        SYSTEM: ONLINE
                    </p>
                </div>
            </div>
        </section>
    );
}
