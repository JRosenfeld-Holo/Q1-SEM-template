# Use Case: Micromobility & Shared Vehicles

> **Growth trajectory:** Strong — IoT solutions for micromobility at $6.36B (2025), 17.4% CAGR to $22.96B by 2033
> **Hologram priority:** HIGH — Every shared vehicle needs a SIM, massive fleet scale, proven with Cowboy

---

## What This Use Case Is

Shared electric scooters, e-bikes, mopeds, and other light vehicles that consumers rent for short trips. Each vehicle needs always-on cellular for GPS tracking, trip billing, fleet management, and remote locking/unlocking. Cellular is non-negotiable — these vehicles operate outdoors across entire cities with no WiFi option.

**Jonathan Rosenfeld (Feb 19 sync):** "Micromobility — the easiest way to understand this is like Bird and Lime scooters, but anything that you care... rent for like a last mile thing. Maybe he gets off the train and is like, I don't want to walk, I'm going to rent a city bike or a Lime scooter."

**On the connectivity mix:** "It's a combination of factors. It is a bit of asset tracking. It's a bit of point of sale."

---

## What a Shared Vehicle Actually Needs from Connectivity

A single shared scooter uses cellular for multiple functions simultaneously:

| Function | Use Case Type | Why |
|---|---|---|
| **Vehicle location tracking** | Asset Tracking | Real-time GPS for rider app, geofencing, fleet rebalancing |
| **Trip billing & unlock** | Transaction & Control | User scans QR, vehicle unlocks, trip metered, payment processed |
| **Battery & health monitoring** | Telemetry & Monitoring | Battery level, motor diagnostics, maintenance alerts |
| **Firmware updates** | Data transfer | OTA updates pushed to fleet (operators skip these to save data costs) |

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Low to medium (GPS pings + periodic telemetry, occasional OTA updates) |
| **Latency** | Moderate (near-real-time for unlock/lock, GPS tracking) |
| **Uptime** | High (vehicle offline = lost revenue, theft risk) |
| **Data consumption** | Low per device (50-200MB/month), but massive fleet scale |
| **Protocols** | 4G LTE, Cat-M1 |

---

## Why This Matters for Hologram

- **Every vehicle = one SIM.** Fleets of 10,000-100,000+ vehicles. Scale play with predictable per-device revenue.
- **Multi-carrier roaming is essential.** Vehicles move across coverage areas within a city. Dead zones mean lost vehicles and lost revenue.
- **Data cost optimization is a massive pain point.** Operators are so cost-sensitive on cellular that they skip firmware updates and data downloads to save on data costs. Hologram's pay-per-use pricing directly addresses this.
- **International expansion.** Operators launching in new cities/countries need one SIM that works globally without renegotiating carrier contracts per market.
- **SIM pause for seasonal markets.** Scooter fleets in northern cities go dormant in winter. Hologram's SIM pause stops billing on inactive vehicles.

---

## Hologram Customers

### Confirmed:
- **Cowboy** — E-bike rental tracking. Listed in Asset Tracking customers.
- **Joyride** — Hologram partnership for micromobility IoT solutions. Joyride provides the fleet management platform; Hologram provides connectivity.

### Adjacent:
- **thl digital** — RV fleet tracking with keyless entry (shared vehicle concept at larger scale). Quote: "I really like Hologram's flexibility, allowing us to pay for just the data we use."

---

## Target Companies

Micromobility has two layers: **operators** (Bird, Lime, etc.) and **OEM hardware manufacturers** who build the vehicles and IoT modules. OEMs are the better Hologram target — they embed the SIM before the operator deploys.

### OEM / Hardware (primary targets):
- **Okai** — Major OEM supplier to Bird, Lime, and others. Manufactures the actual scooters/bikes with embedded IoT.
- **Segway-Ninebot** — Dominant scooter hardware supplier. Powers many sharing fleets.
- **NIU** — Electric scooter/moped manufacturer with connected vehicle platform.
- **Comodule** — IoT connectivity modules specifically for micromobility vehicles.
- **OMNI IoT** — Micromobility IoT hardware (trackers, controllers).
- **AVS Electronics** — Italian IoT modules for shared mobility.
- **Teltonika** — Lithuanian IoT hardware company with micromobility tracking modules.

### Operators (secondary targets — buy through OEMs but influence SIM choice):
- **Bird** — One of largest e-scooter operators globally
- **Lime** — Global scooter/bike sharing
- **Tier Mobility** — European leader, merged with Dott
- **Voi** — Nordic/European scooter operator
- **Levy Electric** — US-focused scooter operator
- **Gogoro** — Battery-swapping scooter network (Taiwan-based, expanding globally)

### Fleet management platforms:
- **Joyride** — Already a Hologram partner
- **ATOM Mobility** — White-label micromobility platform
- **Wunder Mobility** — Fleet management for shared vehicles

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **IoT solutions for micromobility (2025)** | $6.36B | Straits Research |
| **IoT solutions for micromobility (2033)** | $22.96B (17.4% CAGR) | Straits Research |
| **Broader micromobility market (2025)** | $89-93B | Multiple sources |
| **E-scooter sharing market (2025)** | ~$5.2B | Industry estimates |
| **Shared e-bikes (2030 projected)** | $12B+ | Industry estimates |

**Key trends:**
- City regulations maturing — operators need reliable fleet management to comply with geofencing, speed limits, parking zones
- Battery-swapping (Gogoro model) replacing charging — changes logistics but still needs cellular per vehicle
- Consolidation in operators (Bird bankruptcy, Tier/Dott merger) but hardware OEM market growing
- Integration with public transit apps driving adoption in new markets

---

## Pain Points

1. **Data cost at massive scale.** 50,000 scooters x $2-5/month/SIM = $100K-250K/month. Every cent per device matters. Operators skip firmware updates to save data costs.
2. **Multi-city, multi-country deployment.** Operators launch in new cities constantly. Need one SIM that works in Paris, Mexico City, and Melbourne without per-market carrier deals.
3. **Dead zone = lost vehicle.** A scooter that goes offline can't be found for rebalancing, can't process payments, and is a theft risk.
4. **Seasonal dormancy.** Northern markets shut down in winter. Paying for SIMs on parked scooters is waste. Need SIM pause capability.
5. **Carrier coverage varies block by block.** In dense urban areas, a single carrier has coverage gaps. Multi-carrier failover keeps every vehicle connected.
6. **OTA update challenges.** Firmware updates across 50K devices need reliable, cost-effective data transfer. Operators delay updates because of data costs — creating security and performance issues.

---

## Competitive Landscape

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **1NCE** | Flat-rate EUR10/10yr for ultra-low-data | Great for basic GPS pings, but Hologram wins when OTA updates and higher data needs matter |
| **Carrier direct** | Bulk pricing in single markets | Hologram's global roaming eliminates per-market contracts for international operators |
| **KORE Wireless** | Enterprise managed services | Hologram's self-service and pay-per-use better for cost-sensitive operators |
| **EMnify** | Cloud-native, API-first | Strong competitor in European micromobility; Hologram stronger in US and multi-carrier failover |
| **Onomondo** | Scandinavian IoT MVNO | Competing in Nordic micromobility; Hologram has broader global coverage |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: shared scooter, e-bike sharing, micromobility, shared mobility, scooter rental, bike sharing, last-mile transportation
- Product descriptions: IoT module for scooters, vehicle tracking hardware, fleet management IoT, connected vehicle module
- Job postings: embedded IoT engineer, fleet connectivity, vehicle telematics
- Industry: micromobility, shared transportation, urban mobility

### Negative signals:
- Software-only fleet management platforms (no hardware)
- Consumer e-bike/scooter companies (personal vehicles, no SIM per device)
- Ride-hailing (Uber/Lyft model — uses driver's phone, no vehicle SIM)
- Bicycle-only sharing (non-electric, often GPS-only via Bluetooth beacon)

---

## Campaign Strategy

### Messaging angle:
**Lead with cost optimization.** "Pay only for the data each vehicle actually uses. Pause SIMs on dormant fleets. Stop overpaying for connectivity across 50,000 vehicles."

**Secondary: Global deployment.** "One SIM for every city you launch in. No carrier contracts per market."

### Target personas:
- **OEMs:** VP Engineering, Head of IoT/Connected Vehicle, CTO
- **Operators:** VP Operations, Head of Fleet Technology, CTO
- **Fleet platforms:** CTO, VP Product

### Lookalike approach:
- Seed: Cowboy, Joyride partnership
- Target: Scooter/bike OEMs (Okai, Segway-Ninebot, NIU), IoT module makers (Comodule, OMNI IoT)
- Layer: Companies exhibiting at micromobility conferences, raising funding for shared mobility hardware

---

*Last updated: February 20, 2026*
*Source: Feb 19, 2026 Hologram weekly sync, Joyride partnership, market research*
