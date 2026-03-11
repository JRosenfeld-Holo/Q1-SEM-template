import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { GlobeScene, Region } from './components/GlobeScene';

const continentData: Record<string, any> = {
  "North America": {
    count: 23,
    carriers: ["AT&T", "T-Mobile", "Verizon Wireless", "Rogers Wireless", "Telcel", "Digicel", "Claro"],
    tech: "5G, 4G LTE, LTE-M, NB-IoT"
  },
  "South America": {
    count: 12,
    carriers: ["Claro", "Telefonica", "TIM", "Entel", "Tigo", "Personal"],
    tech: "4G LTE, CAT-M"
  },
  "Europe": {
    count: 45,
    carriers: ["Vodafone", "Orange", "Deutsche Telekom", "O2", "Telefonica", "Telenor", "Telia", "Swisscom", "A1"],
    tech: "4G LTE, 5G, LTE-M, NB-IoT"
  },
  "Asia": {
    count: 38,
    carriers: ["China Mobile", "NTT Docomo", "SoftBank", "Singtel", "SK Telecom", "Vodafone", "Airtel", "Zain", "Ooredoo"],
    tech: "4G LTE, LTE-M"
  },
  "Africa": {
    count: 32,
    carriers: ["MTN", "Airtel", "Orange", "Vodacom", "Etisalat"],
    tech: "4G LTE, 3G"
  },
  "Oceania": {
    count: 5,
    carriers: ["Telstra", "Optus", "Vodafone", "Spark", "Digicel"],
    tech: "4G LTE"
  },
  "Middle East": {
    count: 18,
    carriers: ["Zain", "Ooredoo", "STC", "Etisalat", "du", "Mobily", "Batelco"],
    tech: "4G LTE, 5G, NB-IoT"
  }
};

const ContinentCenters: Record<string, { lat: number, lon: number }> = {
  'North America': { lat: 45, lon: -100 },
  'South America': { lat: -15, lon: -60 },
  'Europe': { lat: 50, lon: 15 },
  'Africa': { lat: 0, lon: 20 },
  'Asia': { lat: 40, lon: 95 },
  'Oceania': { lat: -20, lon: 135 },
  'Middle East': { lat: 25, lon: 45 },
};

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
  // Asia (excluding Middle East countries)
  "China": "Asia", "India": "Asia", "Indonesia": "Asia", "Pakistan": "Asia",
  "Bangladesh": "Asia", "Japan": "Asia", "Philippines": "Asia", "Vietnam": "Asia",
  "Turkey": "Asia", "Thailand": "Asia", "Myanmar": "Asia", "South Korea": "Asia",
  "Afghanistan": "Asia", "Uzbekistan": "Asia",
  "Malaysia": "Asia", "Nepal": "Asia", "Sri Lanka": "Asia",
  "Kazakhstan": "Asia", "Cambodia": "Asia",
  "Azerbaijan": "Asia", "Tajikistan": "Asia",
  "Laos": "Asia", "Kyrgyzstan": "Asia", "Turkmenistan": "Asia",
  "Singapore": "Asia",
  "Georgia": "Asia",
  "Mongolia": "Asia", "Armenia": "Asia", "Timor-Leste": "Asia",
  "Cyprus": "Asia", "Bhutan": "Asia", "Maldives": "Asia", "Brunei": "Asia",
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
  "Marshall Islands": "Oceania", "Palau": "Oceania", "Tuvalu": "Oceania", "Nauru": "Oceania"
};

// Regions that are not valid coverage zones
const EXCLUDED_REGIONS = new Set(['Unknown Region', 'Antarctica']);

export default function App() {
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [rotationSpeed, setRotationSpeed] = useState(0.2);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fade out loading overlay after globe texture is ready
  useEffect(() => {
    if (isGlobeLoaded) {
      const timer = setTimeout(() => setShowOverlay(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isGlobeLoaded]);

  const handleSelect = useCallback((region: Region) => {
    // Reject clicks on invalid regions (ocean fallthrough, Antarctica)
    if (EXCLUDED_REGIONS.has(region.name)) return;
    setSelectedRegions(prev => {
      const exists = prev.find(r => r.name === region.name);
      if (exists) return prev.filter(r => r.name !== region.name);
      return [...prev, region];
    });
  }, []);

  const handleClear = useCallback(() => {
    setSelectedRegions([]);
  }, []);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return Object.keys(CountryDatabase)
      .filter(country => country.toLowerCase().includes(lowerQuery))
      .sort();
  }, [searchQuery]);

  const handleSearchSelect = useCallback((country: string) => {
    const continentName = CountryDatabase[country];
    if (continentName) {
      const coords = ContinentCenters[continentName];
      if (coords) {
        setSelectedRegions(prev => {
          if (prev.find(r => r.name === continentName)) return prev;
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

  // Use centroid coordinates for display (accurate hemisphere indicators)
  const displayCoords = singleRegion ? (ContinentCenters[singleRegion.name] ?? { lat: singleRegion.lat, lon: singleRegion.lon }) : null;

  return (
    <div className="relative w-screen h-[100dvh] bg-[#00040F] text-white overflow-hidden font-sans">

      {/* Loading overlay — fades out when globe texture is ready */}
      {showOverlay && (
        <div
          className="absolute inset-0 z-50 bg-[#00040F] flex items-center justify-center pointer-events-none"
          style={{ opacity: isGlobeLoaded ? 0 : 1, transition: 'opacity 0.6s ease-out' }}
        >
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-[#bffd11]/20 border-t-[#bffd11] rounded-full animate-spin mx-auto" />
            <p className="text-[#bffd11] text-[10px] uppercase tracking-[0.35em] font-mono">
              Initializing Network Map
            </p>
          </div>
        </div>
      )}

      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-10 pointer-events-none select-none">
        <img
          src="https://cdn.sanity.io/images/14xthjfi/prod/7512ed9e38a442ecc944c09be330386e2309ca9c-261x261.png?w=1600&q=75&fit=clip&auto=format"
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(191,253,17,0.3)]"
        />
      </div>

      <div className="absolute top-4 right-4 md:top-6 md:right-8 z-30 flex flex-col gap-3 md:gap-4 w-40 md:w-64 pointer-events-auto select-none">
        <div className="bg-[#00040F]/80 backdrop-blur-sm border border-[#bffd11]/30 p-3 md:p-4 rounded-sm shadow-[0_0_15px_rgba(191,253,17,0.1)]">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="rotation-speed" className="block text-[8px] md:text-[10px] text-[#bffd11] uppercase tracking-widest font-bold">Rotation</label>
            <span className="text-[8px] md:text-[10px] text-[#bffd11] font-mono bg-[#bffd11]/10 px-1.5 rounded">{rotationSpeed.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="text-[8px] md:text-[10px] text-gray-600 font-mono">0</span>
            <input
              id="rotation-speed"
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#bffd11] hover:accent-[#d4ff50] transition-all"
            />
            <span className="text-[8px] md:text-[10px] text-gray-600 font-mono">5</span>
          </div>
        </div>

        <div
          className="bg-[#00040F]/80 backdrop-blur-sm border border-[#bffd11]/30 p-3 md:p-4 rounded-sm shadow-[0_0_15px_rgba(191,253,17,0.1)]"
          ref={searchRef}
        >
          <label className="block text-[8px] md:text-[10px] text-[#bffd11] uppercase tracking-widest font-bold mb-2 truncate">Search Database</label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Find Country..."
              className="w-full bg-[#00040F] border border-[#bffd11]/50 text-[#bffd11] text-[10px] md:text-xs px-2 py-1.5 md:px-3 md:py-2 rounded-sm focus:outline-none focus:border-[#bffd11] placeholder-gray-600 font-mono uppercase"
            />
            {showSuggestions && searchQuery && filteredCountries.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-[#00040F] border border-[#bffd11]/30 max-h-32 md:max-h-40 overflow-y-auto z-50 rounded-sm shadow-xl">
                {filteredCountries.map((country) => (
                  <li
                    key={country}
                    onClick={() => handleSearchSelect(country)}
                    className="px-2 py-1.5 md:px-3 md:py-2 text-[10px] md:text-xs text-gray-300 hover:bg-[#bffd11]/20 hover:text-[#bffd11] cursor-pointer border-b border-gray-800 last:border-0 flex justify-between items-center group"
                  >
                    <span>{country}</span>
                    <span className="text-[6px] md:text-[8px] text-gray-600 group-hover:text-[#bffd11]/70 uppercase hidden sm:inline">
                      {CountryDatabase[country]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-4 md:bottom-6 md:right-8 z-10 pointer-events-none text-right select-none opacity-50 md:opacity-100">
        <p className="text-[8px] md:text-xs text-[#bffd11] tracking-widest">SYSTEM: ONLINE</p>
      </div>

      {selectedRegions.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto z-20 pointer-events-none flex justify-center md:block">
          <div className="bg-[#00040F]/90 border border-[#bffd11] p-4 md:p-5 rounded-sm backdrop-blur-md shadow-[0_0_20px_rgba(191,253,17,0.15)] w-full max-w-sm md:w-80 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 relative pointer-events-auto">
            <button
              onClick={handleClear}
              className="absolute top-2 right-2 p-1 text-[#bffd11]/50 hover:text-[#bffd11] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {singleRegion ? (
              <>
                <h2 className="text-[#bffd11] text-lg md:text-xl font-bold uppercase tracking-wider truncate mb-2">
                  {singleRegion.name}
                </h2>
                {/* Fixed: use centroid coords with correct hemisphere indicators */}
                {displayCoords && (
                  <span className="text-[8px] md:text-[10px] text-[#bffd11] border border-[#bffd11] px-1 py-0.5 rounded opacity-80 mb-2 block w-fit">
                    {Math.abs(displayCoords.lat).toFixed(1)}°{displayCoords.lat >= 0 ? 'N' : 'S'},&nbsp;
                    {Math.abs(displayCoords.lon).toFixed(1)}°{displayCoords.lon >= 0 ? 'E' : 'W'}
                  </span>
                )}
                <div className="h-px w-full bg-gradient-to-r from-[#bffd11]/50 to-transparent mb-3"></div>
                {singleRegionData ? (
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#bffd11]/10 p-2 rounded border border-[#bffd11]/20">
                        <span className="text-gray-400 text-[8px] md:text-[10px] uppercase block mb-0.5">Connectivity</span>
                        <span className="text-white font-mono leading-tight block text-[10px] md:text-xs">{singleRegionData.tech}</span>
                      </div>
                      <div className="bg-[#bffd11]/10 p-2 rounded border border-[#bffd11]/20">
                        <span className="text-gray-400 text-[8px] md:text-[10px] uppercase block mb-0.5">Carriers</span>
                        <span className="text-[#bffd11] font-mono text-base md:text-lg leading-none">{singleRegionData.count}</span>
                      </div>
                    </div>
                    <div className="bg-[#bffd11]/10 p-2 rounded border border-[#bffd11]/20">
                      <span className="text-gray-400 text-[8px] md:text-[10px] uppercase block mb-2">
                        Sample Providers
                        <span className="text-gray-600 normal-case ml-1 text-[7px]">({singleRegionData.carriers.length} of {singleRegionData.count})</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                        {singleRegionData.carriers.map((carrier: string, index: number) => (
                          <span
                            key={index}
                            className="text-[9px] md:text-[10px] text-[#bffd11] bg-[#bffd11]/10 border border-[#bffd11]/30 px-2 py-0.5 rounded-sm whitespace-nowrap"
                          >
                            {carrier}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-2 text-center text-gray-500 font-mono text-xs uppercase">Low Signal Area</div>
                )}
              </>
            ) : (
              <>
                <h2 className="text-[#bffd11] text-base md:text-lg font-bold uppercase tracking-wider mb-2">Multi-Sector Link</h2>
                <div className="h-px w-full bg-gradient-to-r from-[#bffd11]/50 to-transparent mb-3"></div>
                <div className="bg-[#bffd11]/10 p-2 rounded border border-[#bffd11]/20 mb-3 text-center">
                  <span className="text-gray-400 text-[8px] md:text-[10px] uppercase block mb-0.5">Total Carriers Detected</span>
                  <span className="text-[#bffd11] font-mono text-lg md:text-xl leading-none">{totalCarriers}</span>
                </div>
                <div className="space-y-1">
                  {selectedRegions.map((r, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] text-gray-300 border-b border-gray-800 pb-1 last:border-0">
                      <span>{r.name}</span>
                      <span className="text-gray-500 font-mono text-[8px]">{continentData[r.name]?.count || 0} providers</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <GlobeScene
        onSelect={handleSelect}
        selectedRegions={selectedRegions}
        rotationSpeed={rotationSpeed}
        onLoaded={() => setIsGlobeLoaded(true)}
      />
    </div>
  );
}
