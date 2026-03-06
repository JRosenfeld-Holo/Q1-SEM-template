# Use Case: Drones / UAV

> **Growth trajectory:** High — Connected commercial drones at $18.6B (2024), 15% CAGR to $37.3B by 2029. BVLOS is the high-growth niche at 23.3% CAGR.
> **Hologram priority:** MEDIUM-HIGH — BVLOS requires cellular, FAA framework is a massive market catalyst, but some drones use custom RF + satellite

---

## What This Use Case Is

Commercial drones using cellular connectivity for command-and-control, live video streaming, telemetry, and beyond-visual-line-of-sight (BVLOS) operations. Cellular 4G/5G is becoming the primary technology for BVLOS — where the drone operates far from the pilot, requiring a continuous data link for safety and regulatory compliance.

**Jonathan Rosenfeld (Feb 19 sync):** "Drones is kind of like a flavor of video. Because that's generally like what they're using the connectivity for."

---

## Why Drones Are Their Own Use Case

Jonathan called drones "a flavor of video," and the data payload is mostly video/imaging. But the campaign and targeting story is distinct:

1. **Regulatory angle.** FAA's August 2025 proposed BVLOS framework is the single biggest market catalyst. Companies pursuing BVLOS waivers need proven cellular connectivity.
2. **Different buyer persona.** Drone companies have drone-specific engineering teams, not general security/video teams.
3. **Dual connectivity requirement.** Many drones bond cellular + satellite for redundancy — a different architecture than fixed cameras.
4. **Airborne connectivity challenges.** Signal handoff between towers at altitude, coverage at 400ft AGL, interference patterns are all unique to drones.

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | High (live video streaming, image uploads, sensor data) |
| **Latency** | Low (real-time command-and-control for BVLOS) |
| **Uptime** | Safety-critical (lost link = drone must return-to-home or land) |
| **Data consumption** | 1-10GB+ per flight depending on video resolution and duration |
| **Protocols** | 4G LTE, 5G (preferred for bandwidth), satellite backup |

---

## Three Drone Segments

### 1. Inspection & Monitoring
Drones inspecting infrastructure — power lines, cell towers, bridges, pipelines, solar farms, wind turbines. Replacing humans in dangerous or hard-to-reach locations.

**Cellular need:** Live video feed to remote operator, image uploads for AI analysis, telemetry.

**Target companies:** Skydio, Percepto (autonomous drone-in-a-box), senseFly (mapping), DroneDeploy (software + hardware integrations)

### 2. Delivery
Package and medical supply delivery by drone. Zipline pioneered medical delivery in Africa; Wing and Amazon are scaling consumer delivery.

**Cellular need:** Continuous command-and-control link for BVLOS operations, package tracking, fleet management.

**Target companies:** Zipline, Wing (Alphabet), Matternet (medical delivery, now part of Wingcopter), Flytrex (food delivery), DroneUp (Walmart partnership)

### 3. Agriculture & Surveying
Crop spraying, mapping, and surveying. High-resolution imaging for precision agriculture, construction site mapping, mining surveys.

**Cellular need:** Image/data uploads from field, fleet management across large areas, real-time monitoring.

**Already referenced in Hologram materials:** Agriculture overview mentions "drone-based crop health analysis and mapping" and "video drones for herd location."

**Target companies:** Wingtra (surveying), AgEagle (precision ag drones), Pix4D (mapping), DJI Enterprise (dominant hardware)

---

## Why This Matters for Hologram

- **BVLOS legally requires continuous data links.** FAA regulations mandate reliable command-and-control for beyond-visual-line-of-sight operations. Cellular is the primary technology being approved for this.
- **Multi-carrier failover is safety-critical.** Lost cellular link triggers emergency procedures (return-to-home, controlled landing). Multi-carrier reduces this risk.
- **Remote operations depend on cellular.** "Flying from states away" — operators controlling drones remotely rely entirely on cellular for the data link.
- **High data per flight.** Video streaming during flights means high ARPU compared to basic telemetry devices.
- **Growing fleet sizes.** Companies moving from single-drone operations to fleets of 50-500+ drones. Scale connectivity management becomes critical.

---

## Hologram Customers

**Direct drone customers:** None confirmed yet.

**Adjacent proof points:**
- **Fieldin** — Autonomous agricultural equipment including drone integration for field monitoring
- **Verkada** — Video streaming reliability story translates directly to drone video needs
- **Arable** — Agricultural remote monitoring in 14 countries (same rural/remote deployment challenge)

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **Connected commercial drones (2024)** | $18.6B | SatNews/industry estimates |
| **Connected commercial drones (2029)** | $37.3B (15% CAGR) | SatNews/industry estimates |
| **BVLOS drone market CAGR** | 23.3% | MarketsandMarkets |
| **Drone delivery market (2030)** | $10B+ | Industry estimates |
| **Commercial drone fleet (US, 2025)** | 900K+ registered | FAA |

**Key catalyst:** FAA published proposed BVLOS rules in August 2025. Once finalized, this opens the US market for routine commercial BVLOS operations — the single biggest unlock for drone cellular connectivity demand.

---

## Pain Points

1. **BVLOS regulatory compliance.** Companies need to demonstrate reliable continuous data links to get FAA waivers. Cellular with multi-carrier failover strengthens the safety case.
2. **Signal handoff at altitude.** Drones at 200-400ft AGL experience different coverage patterns than ground-level devices. Multi-carrier helps fill gaps.
3. **Remote/rural operations.** Infrastructure inspection, agriculture, and delivery often happen in areas with spotty single-carrier coverage.
4. **High data costs per flight.** Video streaming burns through data. Pay-per-use pricing prevents overpaying on flights with less video time.
5. **International fleet operations.** Drone companies expanding globally need one SIM for drones deployed across countries.
6. **Dual connectivity management.** Emerging best practice is cellular + satellite bonding. Need a connectivity partner that can manage the cellular side reliably while satellite handles backup.

---

## Competitive Landscape

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **Elsight** | BVLOS-specific connectivity hardware (bonding cellular + satellite) | Elsight is hardware/middleware; Hologram could be the cellular SIM inside Elsight or competing solutions |
| **Carrier direct (T-Mobile drone program)** | Dedicated drone connectivity plans | Multi-carrier failover for safety-critical operations vs. single-carrier risk |
| **Skyward (Verizon)** | Drone fleet management + Verizon connectivity | Carrier-locked; Hologram provides carrier-agnostic alternative |
| **Soracom** | Developer-friendly IoT connectivity | Hologram's US carrier relationships and multi-carrier stronger for FAA compliance story |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: BVLOS, beyond visual line of sight, drone delivery, drone inspection, autonomous drone, drone-in-a-box, UAV connectivity
- Product descriptions: cellular-connected drone, LTE drone link, command-and-control link, drone fleet management
- Job postings: drone pilot, BVLOS engineer, UAV systems engineer, drone connectivity
- FAA Part 107 waiver holders, BVLOS exemption applicants
- Partnerships with cellular carriers or connectivity platforms

### Negative signals:
- Consumer/hobbyist drone companies (DJI consumer line, toy drones)
- Software-only drone fleet management (no hardware)
- Military/defense drones (different procurement process, classified)
- Companies using only proprietary RF links with no cellular interest

---

## Campaign Strategy

### Messaging angle:
**Lead with BVLOS safety.** "Multi-carrier cellular connectivity that strengthens your BVLOS safety case. No single-carrier dependency for command-and-control."

**Secondary: Scale fleet management.** "One SIM per drone across your entire fleet. Manage connectivity for 500 drones from a single dashboard."

### Target personas:
- VP Engineering, CTO, Head of Autonomy/BVLOS
- Chief Pilot / Director of Flight Operations (for operators)
- VP Product (for drone manufacturers)

### Lookalike approach:
- Seed: FAA Part 107 BVLOS waiver holders (public record)
- Target: Companies building or operating commercial drone fleets with cellular connectivity
- Layer: AUVSI conference exhibitors, recent drone funding rounds, companies mentioning BVLOS on website

---

*Last updated: February 20, 2026*
*Source: Feb 19, 2026 Hologram weekly sync, FAA BVLOS framework, market research*
