# Use Case: Remote Patient Monitoring (RPM)

> **Growth trajectory:** Strong — RPM market $34-49B (2025), 12-20% CAGR to $110-138B by 2033
> **Hologram priority:** HIGH — 13% of wins, stickiest vertical, proven land-and-expand
> **Industry:** Healthcare (primarily)

---

## What This Use Case Is

Cellular-connected medical devices in patients' homes or on their bodies, transmitting health data (blood pressure, glucose, heart rate, weight, oxygen levels) to healthcare providers for remote care management. Cellular is the growth differentiator vs. Bluetooth because it works out-of-the-box with no WiFi, no smartphone, and no patient setup.

**Jonathan Rosenfeld (Feb 19 sync):** "Remote patient monitoring — any sort of healthcare diagnostic. Common forms: blood pressure machines, glucose monitoring for diabetics, urinalysis tools. Anything that would allow for people that are elderly or live in very rural areas where it's difficult for them to get to their doctor, can transmit diagnostics remotely."

---

## Why RPM Deserves Its Own File

RPM has a completely different buyer persona, regulatory environment, and sales motion than other telemetry use cases:

- **Buyer:** Medtech VP Product / CTO, not plant managers or fleet ops
- **Regulatory:** FDA 510(k) clearance, CE marking, HIPAA compliance. Changing connectivity = re-validation. This makes healthcare the stickiest vertical.
- **Funded market:** CMS reimbursement codes (CPT 99453-99458) mean providers actively want to deploy RPM because they can bill for it
- **Patient compliance is the #1 barrier.** Cellular devices that work without WiFi/Bluetooth setup dramatically improve adoption among elderly and rural populations.

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Low (vital sign readings are small data packets) |
| **Latency** | Tolerant (seconds to minutes acceptable for most readings) |
| **Uptime** | High to mission-critical (missed readings = missed billing + patient risk) |
| **Data consumption** | Low per device (10-100MB/month typical) |
| **Protocols** | Cat-M1, NB-IoT, 4G LTE |

---

## Why Cellular Is the Growth Story

The RPM market is bifurcated: legacy Bluetooth devices that pair to a patient's smartphone, and newer cellular devices that transmit directly.

**Cellular wins because:**
- **~15% of US adults don't own a smartphone** — Bluetooth-dependent RPM excludes them entirely
- **Elderly patients struggle with Bluetooth pairing** — cellular "just works" out of the box
- **Rural areas lack broadband** — cellular reaches where WiFi doesn't
- **CMS reimbursement requires data transmission** — if the device can't send readings, the provider can't bill
- **No IT setup at patient home** — no WiFi passwords, no app downloads, no troubleshooting

This is why cellular RPM is growing faster than the broader RPM market. Device manufacturers adding cellular connectivity can access the patient populations that Bluetooth can't reach.

---

## Why This Matters for Hologram

- **Stickiest vertical.** FDA clearance ties connectivity to the device. Switching carriers means re-validation — so once Hologram is integrated, they stay. Lark Health expanded to $107.5K, Huxley Medical renewed, Tenovi renewed.
- **Land-and-expand.** RPM companies scale with patient enrollment. More patients = more devices = more connectivity spend.
- **HIPAA compliance.** Hologram's private APN provides network isolation required for PHI (Protected Health Information).
- **Multi-carrier failover.** Patient monitoring can't have gaps. Multi-carrier ensures readings transmit even if one carrier has issues.
- **Global expansion.** US medtech companies expanding into EU, APAC, LatAm need one SIM for all markets.

---

## Hologram Customers

### Confirmed:
- **Lark Health** — $107.5K expansion. RPM devices for chronic conditions. Started smaller, expanded significantly — proves land-and-expand model.
- **Vital Health Links** — RPM in rural Federally Qualified Health Centers. "Hologram's complete coverage helps ensure that all of our patients are served." — JoJo Ju, Director of Product Development
- **Tenovi** — $40K pipeline renewal. Cellular gateway connecting 50+ different medical devices.
- **Huxley Medical** — $55K pipeline renewal. Proves healthcare stickiness.
- **Transtek** — $582K. TeleRPM line of cellular-enabled devices.
- **Cadence** — $868K. Telehealth RPM platform.

---

## Target Companies

### Device Manufacturers (primary — they embed the SIM):
- **Transtek Medical** — TeleRPM product line, cellular blood pressure, weight scales, pulse oximeters
- **Tenovi** — Cellular gateway + 50+ compatible devices. Already a Hologram customer.
- **Smart Meter** — iBloodPressure, iGlucose cellular devices
- **Prevounce Health** — Pylo cellular RPM devices
- **Biobeat** — Chest-worn continuous vital signs monitor
- **Withings** — Connected health devices (blood pressure, scales, thermometers)

### CGM / Wearable (secondary — some use cellular, many are Bluetooth-first):
- **Dexcom** — Continuous glucose monitors (exploring direct-to-cloud cellular)
- **Abbott** — FreeStyle Libre CGM platform
- **Senseonics** — Implantable CGM (Eversense) with transmitter
- **BioIntellisense** — BioButton continuous vitals wearable

### RPM Platforms (influence hardware decisions):
- **Health Recovery Solutions** — RPM platform for health systems
- **Rimidi** — Chronic disease management platform
- **Optimize Health** — RPM practice enablement

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **RPM market (2025)** | $34-49B | Grand View Research, MarketsandMarkets |
| **RPM market (2033 projected)** | $110-138B (12-20% CAGR) | Multiple sources |
| **US RPM market (2026)** | $18B+ | Industry estimates |
| **RPM share of healthcare IoT** | 34.78% (largest segment) | Towards Healthcare |
| **RPM growth rate** | 21.92% CAGR | Towards Healthcare |
| **CGM market (2025)** | $12-13B | Mordor Intelligence |
| **CGM market (2030 projected)** | $25B+ (14% CAGR) | Mordor Intelligence |

**Key drivers:**
- CMS reimbursement codes (CPT 99453-99458) make RPM a funded, billable service
- 761M people aged 65+ globally (2021), growing to 1.6B by 2050
- Post-pandemic acceleration of remote care models
- Hospital-at-home programs expanding
- Chronic disease prevalence increasing (diabetes, hypertension, heart failure)

---

## Pain Points

1. **Patient compliance with Bluetooth.** Elderly patients can't pair devices to phones. Cellular devices that work without setup dramatically improve adherence.
2. **Rural connectivity.** RPM needed most in underserved areas with low broadband penetration. Multi-carrier cellular reaches where WiFi doesn't.
3. **FDA re-validation risk.** Changing connectivity provider means re-testing through FDA design controls. Massive switching cost (Hologram's advantage once integrated).
4. **HIPAA compliance.** PHI must be transmitted securely. Need private APN and encryption.
5. **Scaling device fleet.** Growing from 1,000 to 100,000 patients. Need connectivity that scales without per-region carrier contracts.
6. **Reimbursement depends on data.** CMS only reimburses RPM if data is actually transmitted. Unreliable connectivity = lost revenue for the provider.
7. **International expansion.** US medtech companies entering EU/APAC markets need global SIM coverage.

---

## Competitive Landscape

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **KORE Wireless** | Deep healthcare relationships, managed services | Self-service faster for growth-stage medtech; KORE wins at large enterprise |
| **Aeris** | Healthcare-focused IoT | Broader carrier network and global coverage |
| **Carrier direct (AT&T, Verizon)** | Healthcare-grade SLAs | Multi-carrier failover better for nationwide RPM deployment |
| **Soracom** | Developer-friendly, cloud integration | Deeper US carrier relationships; healthcare needs proven US coverage |

**Hologram's healthcare-specific advantages:**
- Private APN for HIPAA compliance
- Multi-carrier failover (no patient monitoring gaps)
- SIM pause for device returns, seasonal programs, inventory
- Global coverage for international expansion
- HIPAA-compatible, PCI-compatible configurations

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: remote patient monitoring, RPM, connected health, medical device, telehealth device, cellular health monitor, digital therapeutics
- FDA 510(k) database entries for connected/wireless medical devices
- Job postings: embedded engineer, IoT health, medical device connectivity, regulatory affairs
- Funding announcements in digital health / medtech / RPM
- Partnerships with EHR systems (Epic, Cerner)
- CMS RPM billing capabilities mentioned

### Negative signals:
- Pure software health platforms (no hardware)
- Consumer wellness devices (Fitbit competitors — wrong buyer/scale)
- Hospital IT systems (not device manufacturers)
- Companies using only Bluetooth -> phone -> cloud (no direct cellular interest)
- Pharma companies (unless they have a connected device program)
- Medical implants (heart pumps, pacemakers — NOT a fit per Amy Schwartz)

---

## Campaign Strategy

### Messaging angle:
**Lead with patient compliance.** "Cellular RPM devices that work out of the box — no WiFi, no Bluetooth, no patient setup. Reach the 15% of adults who don't own a smartphone."

**Secondary: Reliability for reimbursement.** "Every missed reading is missed CMS reimbursement. Multi-carrier connectivity ensures your RPM devices transmit every time."

### Target personas:
- VP Product / Director of Product Development
- CTO / VP Engineering
- VP Regulatory Affairs (understands switching cost = advantage)
- CEO/COO at growth-stage medtech (Series A-C)

### Lookalike approach:
- Seed: Lark Health, Vital Health Links, Tenovi, Transtek, Cadence
- Target: Companies in FDA 510(k) database with recent connected device clearances
- Layer: Digital health funding announcements, HIMSS/HLTH conference exhibitors
- Also target: Companies currently on Twilio IoT (now KORE) evaluating alternatives

### Timing:
- Healthcare procurement is slow (6-12 month cycles)
- Target companies BEFORE commercial launch (just got FDA clearance, need connectivity NOW)
- Key conferences: HIMSS, CES Health, HLTH, ATA

---

*Last updated: February 20, 2026*
*Source: Feb 19 & Feb 12, 2026 Hologram weekly syncs, SFDC data, healthcare overview, market research*
