# Use Case: Robotics & Autonomous Systems

> **Growth trajectory:** High — AMR market at $4.5-4.7B (2025), 14-19% CAGR. Delivery robots at 32% CAGR.
> **Hologram priority:** HIGH — Emerging segment with multi-use-case ARPU potential

---

## What This Use Case Is

Autonomous machines that move, navigate, and execute tasks without human intervention. Cellular connectivity is the backbone for command-and-control, real-time telemetry, and fleet management. This spans indoor (factory floor) and outdoor (sidewalk delivery, yard operations) environments.

**Jonathan Rosenfeld (Feb 19 sync):** "Robotics, generally speaking — we see the most in kind of two different flavors. The whole concept of the dark factory, so automation within a factory... and there's a lot around various forms of delivery, right? You may have seen these in major cities where you see a little thing on wheels delivering food or whatever — they need cellular connectivity."

---

## What a Robot Actually Needs from Connectivity

A single delivery robot uses cellular for multiple functions simultaneously:

| Function | Use Case Type | Why |
|---|---|---|
| **Navigation & obstacle avoidance** | AI/Edge/Video | Camera/LiDAR data, real-time inference |
| **Fleet location tracking** | Asset Tracking | GPS positioning, geofencing, route optimization |
| **Task completion & dispatch** | Transaction & Control | Delivery confirmed, payment triggered, next task assigned |
| **Diagnostics & health** | Telemetry & Monitoring | Battery level, motor temp, error codes |

This means robotics companies have higher ARPU potential — they're paying for multiple connectivity functions per device.

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Medium to high (video streams for navigation, lower for telemetry) |
| **Latency** | Low to ultra-low (real-time navigation, safety-critical decisions) |
| **Uptime** | Mission-critical (robot stops = production/delivery stops) |
| **Data consumption** | 500MB-5GB+ per device/month depending on video needs |
| **Protocols** | 4G LTE, 5G, Cat-M1 (telemetry only) |

---

## Three Flavors of Robotics

### 1. Dark Factory / Industrial Automation
Autonomous mobile robots (AMRs) and autonomous guided vehicles (AGVs) operating inside factories, warehouses, and distribution centers. Moving pallets, transporting materials, sorting packages.

**Why cellular over WiFi:** Factory environments are notoriously bad for WiFi — metal structures, interference, dead zones. LG moved 200+ factory robots from WiFi to 5G cellular for this reason. Hologram customer Amper Technologies already proved this pain point exists in manufacturing.

**Key stats:**
- 3.9M+ operational industrial robots globally
- AGV market growing at 9% CAGR through 2030
- Autonomous yard trucks growing at 52.7% CAGR (2022-2030)

**Target companies:** Locus Robotics, Seegrid, Vecna Robotics, OTTO Motors (Rockwell), MiR (Teradyne), Geek+, 6 River Systems (Shopify), Fetch Robotics (Zebra)

### 2. Delivery Robots (Last-Mile)
Sidewalk and road delivery robots operating in urban environments. Food delivery, grocery, package delivery. Outdoor operation means zero WiFi — cellular is the only option.

**Jonathan (Feb 19):** Referenced seeing "a little thing on wheels delivering food" in major cities.

**Key stats:**
- Delivery robot market at $795M (2024), projected $3.24B by 2030 (32% CAGR)
- 80K driver shortfall in the US accelerating autonomous delivery adoption

**Target companies:** Serve Robotics (Uber partnership), Starship Technologies, Kiwibot, Nuro, Coco, Ottonomy, Cartken (acquired by Jabil)

### 3. Yard & Port Operations
Autonomous vehicles operating in semi-controlled outdoor environments — container yards, shipping ports, airport tarmacs. Bridge between industrial and outdoor.

**Key stats:**
- Autonomous yard trucks growing at 52.7% CAGR
- Port automation market growing rapidly as labor costs rise

**Target companies:** Outrider, Phantom Auto, ISEE, Gaussin, Terberg (autonomous terminal tractors)

---

## Why This Matters for Hologram

- **Multi-carrier failover is safety-critical.** A connectivity drop means the robot stops. In a factory, that halts production. On a sidewalk, that blocks pedestrians.
- **Multi-use-case ARPU.** Each robot uses connectivity for navigation, tracking, telemetry, and task management — higher data consumption per device than pure telemetry.
- **WiFi limitations in industrial environments.** Metal structures, interference, and coverage gaps make WiFi unreliable for mobile robots. Cellular bypasses this entirely.
- **Outdoor robots have no WiFi option.** Delivery robots, yard trucks, and port vehicles require cellular by default.
- **International expansion.** Robotics companies scaling globally need one SIM that works across markets.

---

## Hologram Customers & Adjacent Wins

**Direct robotics customers:** None confirmed yet — this is an emerging segment.

**Adjacent proof points:**
- **Amper Technologies** — Manufacturing IoT, proved factory WiFi is unreliable due to metal interference
- **Fieldin** — 5,000+ autonomous farm vehicles, zero downtime with Hologram. Quote: "Our business can't afford downtime. With Hologram, latency is very low...We don't lose signal."
- **Cowboy** — E-bike fleet tracking (adjacent to delivery robots)
- **Verkada** — Multi-carrier failover for mission-critical video (same reliability story)

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **AMR market (2025)** | $4.5-4.7B | Grand View Research, MarketsandMarkets |
| **AMR CAGR** | 14-19% | Multiple sources |
| **Delivery robot market (2024)** | $795M | Industry estimates |
| **Delivery robot market (2030)** | $3.24B (32% CAGR) | Industry estimates |
| **Industrial robots globally** | 3.9M+ operational | IFR |
| **AGV CAGR** | 9% through 2030 | IFR |
| **Autonomous yard trucks CAGR** | 52.7% (2022-2030) | Industry estimates |

---

## Pain Points

1. **WiFi dead zones in factories.** Metal structures, moving equipment, and interference create unreliable coverage. Robots lose connection mid-task.
2. **Single-carrier outages.** A carrier outage stops the entire fleet. Multi-carrier failover keeps robots moving.
3. **Outdoor operation = no WiFi.** Delivery robots and yard vehicles have no choice but cellular.
4. **Multi-site deployment.** Warehouse operators deploying robots across dozens of facilities need one connectivity solution, not per-site ISP contracts.
5. **International expansion.** Robotics companies scaling to new countries face carrier fragmentation. One SIM simplifies global deployment.
6. **Private 5G is expensive.** Large enterprises are evaluating private 5G for factory automation, but it's $1M+ per facility. Hologram's public cellular approach is accessible to mid-market.

---

## Competitive Landscape

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **Private 5G (Nokia, Ericsson)** | Dedicated network, ultra-low latency | $1M+ per facility vs. Hologram's per-device model. Only viable for largest factories. |
| **KORE Wireless** | Enterprise managed IoT | Self-service, developer-friendly for robotics startups and mid-market |
| **Carrier direct** | Best native coverage | Multi-carrier failover critical for safety; multi-site simplicity |
| **Soracom** | Developer-friendly, AWS integration | Stronger US carrier relationships, better outdoor coverage |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: autonomous mobile robot, AMR, AGV, warehouse robot, delivery robot, autonomous vehicle, dark factory, lights-out manufacturing
- Job postings: robotics engineer, autonomous systems, ROS developer, computer vision for navigation
- Product descriptions: autonomous navigation, fleet management for robots, robot-as-a-service
- Partnerships with: NVIDIA (Isaac), ROS ecosystem, warehouse management systems
- Recent funding for autonomous/robotics companies

### Negative signals:
- Industrial robot arms (stationary — no cellular needed, Ethernet connected)
- Software-only robot fleet management (no hardware)
- Consumer/hobbyist robots (toy market, wrong scale)
- Companies using only WiFi mesh for indoor robots

---

## Campaign Strategy

### Messaging angle:
**Lead with reliability over WiFi.** "Your robots can't afford dead zones. Cellular connectivity that works where factory WiFi doesn't."

**Secondary: Multi-site simplicity.** "Deploy robots across every warehouse with one SIM. No per-site network setup."

### Split by sub-segment:
- **Industrial/warehouse AMRs** -> VP Operations, VP Supply Chain, CTO
- **Delivery robots** -> CTO, VP Engineering, Head of Fleet Operations
- **Yard/port automation** -> VP Logistics, Terminal Operations Director

### Lookalike approach:
- Seed: Fieldin (autonomous vehicles), Amper (factory connectivity)
- Target: Companies building AMRs, delivery robots, autonomous yard vehicles
- Layer: Recent funding rounds, ROS job postings, NVIDIA partnerships

---

*Last updated: February 20, 2026*
*Source: Feb 19, 2026 Hologram weekly sync, Feb 12 sync, ICP analysis, market research*
