# Use Case: AI/Edge/Video

> **Salesforce `Use_Case_Type__c` value:** AI/Edge/Video
> **Growth trajectory:** Explosive — Edge AI market growing from $24.9B (2025) to $118.7B (2033) at 21.7% CAGR
> **Hologram priority:** HIGHEST — Largest expanding TAM, highest ARPU per device

---

## What This Use Case Is

Video cameras, image sensors, or compute-heavy devices where AI analyzes data at the edge or in the cloud. The output isn't raw sensor data — it's insights, predictions, or automated actions. This is the highest-bandwidth, highest-ARPU segment in IoT.

**Jonathan Rosenfeld (Feb 12 sync):** "The big takeaway from CES this year is that they're literally throwing a video up on damn near everything."

**Amy Schwartz (Feb 12 sync):** "The idea of sensor almost has two meanings now... you can think more about AI and edge use cases, video camera streams and things that are using that as a sensor. But in a smarter way."

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Ultra-high (video streams, image uploads, model inference) |
| **Latency** | Low (real-time processing often required) |
| **Uptime** | Mission-critical (99.95%+ SLA) |
| **Data consumption** | 250MB-40GB+ per device/month |
| **Protocols** | 4G LTE, 5G, FWA |

---

## Why This Matters for Hologram

- **Fastest-growing segment.** CES 2025 confirmed "video on everything" — the largest expanding TAM.
- Higher bandwidth = higher ARPU per device
- Multi-carrier failover is critical (can't have cameras go dark)
- Aligns with Hologram's FWA strategy for high-data use cases
- Verizon certification requirement ($20K upfront) is a real barrier — Hologram's pre-certified path (Verkada model) is a competitive advantage

---

## Where AI/Edge Appears Across Industries

This is a **cross-cutting use case**, not a single industry. It appears in almost every vertical:

| Industry | AI/Edge Application | Details |
|---|---|---|
| **Security & Surveillance** | Primary use case — security cameras, LPR, body cameras | See [security-surveillance/](../industries/security-surveillance/) |
| **Construction** | Jobsite safety cameras, progress monitoring | AI cameras monitoring PPE compliance, restricted zones |
| **Manufacturing** | QA vision systems, defect detection | Camera-based inspection on production lines |
| **Agriculture** | Autonomous equipment, drone imaging, pest detection | Segment B of agriculture — 10-100x data vs. telemetry |
| **Fleet & Logistics** | Video telematics — dash cams + AI analytics | Securing high-dollar cargo, driver monitoring |
| **Retail & Hospitality** | Loss prevention, foot traffic, shelf monitoring | AI-powered theft detection, customer analytics |
| **Smart Cities** | Pedestrian safety, traffic optimization | Las Vegas mayor pedestrian safety use case |
| **Smart Buildings** | Occupancy sensing, space utilization | Butlr: thermal sensors + AI (privacy-first) |
| **Healthcare** | Telehealth robots, surgical monitoring | Higher bandwidth 2-way video, emerging |
| **Entertainment** | Crowd monitoring, security cameras | Stadium-wide video networks |

---

## Hologram Customers (AI/Edge)

### Verkada — Physical Security Cameras
- **Scale:** 28,000+ devices powered by Hologram, 33,000+ customers, 85 countries
- **Deal profile:** High-bandwidth, Verizon certification in US, device pre-certified
- **Why Hologram:** Accelerated time-to-market, avoided AT&T/Verizon outages with multi-carrier failover
- **Trial acceleration insight:** Ships trial cameras with Hologram cellular gateways even for non-remote use cases. By making trials plug-and-play without IT/WiFi, they **significantly increased enterprise trial plug-in rates**, directly impacting net new revenue. Replicable pattern for all video/AI edge companies.
- **Quotes:**
  - "Partnering with Hologram was definitely the right decision for our team. It allowed us to get to market much faster." — Max Shen, Sr. Product Marketing Manager
  - "Remote and outdoor deployments are among the most challenging for customers. Our gateway solution enabled by Hologram's Cellular IoT Outage Protection SIMs makes it more likely for customers to choose Verkada for their outdoor use cases." — Brandon Davito, SVP of Product Management

### WiseEye — Security Cameras
- **Deal profile:** High-data, required Verizon in US, willing to certify
- **Pattern:** Similar to Verkada — high-bandwidth video + US Verizon requirement

### Butlr — $95.7K — Building Intelligence / Occupancy
- **Use case:** Thermal occupancy sensing (AI, not video cameras — privacy-first)
- **Intersection:** AI/Edge + Smart Buildings

### Vendera Technologies — $52.7K — AI Coolers
- **Use case:** AI-powered smart vending/retail
- **Intersection:** AI/Edge + Retail

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **Edge AI market (2025)** | $24.91B | Grand View Research |
| **Edge AI market (2033 projected)** | $118.69B | Grand View Research |
| **Edge AI CAGR** | 21.7% | Grand View Research |
| **Edge computing market (2025)** | $168.4B | MarketsandMarkets |
| **Edge computing (2030 projected)** | $248.96B | MarketsandMarkets |
| **Video security market (2032 projected)** | ~$14B (double current) | Industry estimates |
| **Global edge computing spend (2025)** | $261B | IDC |
| **Global edge computing spend (2028 projected)** | $380B (13.8% CAGR) | IDC |

**Key trend:** 5G-enabled sensors growing at 18%+ CAGR, with ultra-low latency enabling real-time video analytics that wasn't previously possible on cellular networks.

---

## Pain Points (Cross-Industry)

1. **Bandwidth limitations** — Current provider can't handle video streams reliably. Buffering, dropped connections, low resolution.
2. **Single-carrier outages** — Cameras went dark during an AT&T or Verizon outage. Unacceptable for security/safety.
3. **Multi-location complexity** — Deploying cameras across hundreds of locations with different carrier coverage. Need one SIM that works everywhere.
4. **Verizon certification barrier** — Need Verizon for US coverage but certification is $20K+ and time-consuming. Hologram's path simplifies this.
5. **International expansion** — Security/safety cameras deployed globally. Current carrier doesn't cover all markets.
6. **Cost at scale** — Paying per-device carrier contracts across thousands of cameras. Need flexible pricing.

---

## Competitive Landscape (AI/Edge Specific)

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **KORE Wireless** | Enterprise managed services, large-scale | Self-service platform and dev tools faster for growth-stage companies |
| **Telnyx** | Aggressive pricing on high-data plans | Multi-carrier failover critical for security cameras that can't go offline |
| **Carrier direct (Verizon/AT&T)** | Native coverage, lowest per-GB at massive scale | Eliminates single-carrier risk, simplifies multi-location management |
| **Soracom** | Developer-friendly, cloud-native | Stronger US carrier relationships and Verizon certification pathway |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: video analytics, computer vision, edge AI, smart camera, video surveillance, AI-powered monitoring, image recognition, visual inspection
- Job postings: computer vision engineer, edge computing, embedded video, camera firmware
- Product descriptions: cellular gateway, cellular backup, LTE camera, 4G/5G camera
- Funding announcements mentioning video/AI/edge
- Partnerships with NVIDIA (Jetson), Qualcomm, Intel (OpenVINO) — edge AI hardware

### Negative signals:
- Companies only doing cloud-based video analytics on existing camera feeds (no hardware)
- Pure software companies (Hologram needs device manufacturers)
- WiFi-only camera companies (unless expanding to cellular)
- Consumer-grade home security (Ring, Nest competitors — wrong buyer/scale)

---

## Campaign Strategy

### Don't run one giant "video" campaign. Split by industry because buyer personas differ:
- **Security & Surveillance** -> Product/Engineering leaders
- **Construction safety** -> Safety/Operations leaders
- **Manufacturing QA** -> Manufacturing/Quality leaders
- **Retail analytics** -> Operations/LP leaders
- **Fleet video telematics** -> Fleet Ops/Safety leaders

### Messaging angle:
**Lead with uptime and failover.** For video/security companies, the worst thing is cameras going dark. Multi-carrier failover is the killer feature.

**Secondary: Time to market.** Verkada case study proves Hologram accelerates product launches.

### Lookalike approach:
- Seed: Verkada, WiseEye, Butlr
- Layer in CES 2025 exhibitors from video/AI/edge categories
- Jonathan mentioned having a video telematics list from earlier — revisit for lookalike candidates

---

*Last updated: February 17, 2026*
*Source: Feb 12, 2026 Hologram weekly sync, Hologram SFDC data, market research*
