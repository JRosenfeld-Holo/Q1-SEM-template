# Use Case: EV Charging Infrastructure

> **Growth trajectory:** Strong — EV charger cellular connectivity at $2.13B (2025), 19.1% CAGR to $12.23B by 2035
> **Hologram priority:** MEDIUM-HIGH — Every charger needs a SIM, remote locations make cellular the default, federal funding accelerating deployment

---

## What This Use Case Is

Connected EV charging stations that use cellular for payment processing, charger-to-cloud communication, energy management, and remote diagnostics. The industry standard protocol (OCPP) requires persistent connectivity for billing, load balancing, and firmware updates. Chargers deploy in parking lots, highway rest stops, and rural corridors where WiFi/Ethernet is often unavailable.

**Jonathan Rosenfeld (Feb 19 sync):** "Good call out with the charging stations — we work with ChargeFuse, it's just one of the bigger companies for that. You see these things at malls, and event spaces, use a lot for, like, festivals."

**Felix Morales (Feb 19 sync):** "I've been getting a lot of companies that are rolling out charging stations... that will take care of the processing, the data, things like that."

---

## What a Charger Actually Needs from Connectivity

A single EV charger uses cellular for multiple functions:

| Function | Use Case Type | Why |
|---|---|---|
| **Payment processing** | Transaction & Control | Credit card tap, app-based payment, session billing |
| **Charger health monitoring** | Telemetry & Monitoring | Temperature, power output, error codes, uptime tracking |
| **Energy load management** | Telemetry & Monitoring | Smart charging, peak shaving, grid balancing |
| **Firmware updates** | Data transfer | OCPP updates, security patches pushed remotely |
| **User authentication** | Transaction & Control | RFID, app unlock, fleet card validation |

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Low to medium (transactions are small, but firmware updates and energy data add up) |
| **Latency** | Low (payment processing must feel instant to drivers) |
| **Uptime** | Mission-critical (charger offline = lost revenue + stranded driver) |
| **Data consumption** | 50-500MB/month per charger depending on features |
| **Protocols** | 4G LTE, Cat-M1 |

---

## Why This Matters for Hologram

- **Every charger needs a SIM.** Most chargers deploy in locations without Ethernet. Cellular is the default connectivity method.
- **Remote/outdoor deployment.** Highway corridors, rural rest stops, parking garages — same "no WiFi" story as vending machines but with higher stakes (stranded EV driver).
- **Federal NEVI standards require credit card readers** on publicly funded chargers — meaning cellular payment connectivity is now mandatory for the biggest wave of deployments.
- **ChargeFuse is already a customer.** Proven use case with reference story.
- **Market consolidation creates winners.** Analysts expect ~6 major charger manufacturers to survive. Getting embedded with winners early = massive scale.
- **Multi-carrier failover matters.** A charger on a single carrier that goes down can't process payments. Multi-carrier = always-on payments.

---

## Hologram Customers

### Confirmed:
- **ChargeFuse** — Phone/device charging stations at malls, event spaces, festivals. Jonathan mentioned them by name as a customer.

### Adjacent:
- **Farmer's Fridge** — Same pattern: outdoor/public location, payment processing, cellular-first. Cut connectivity bills in half.
- **Avocado, Helix Pay** — POS/payment kiosk customers with same connectivity needs.

---

## Target Companies

### Charger Manufacturers (primary — they embed the SIM):
- **ChargePoint** — Largest US network, 200K+ ports. Both hardware and network.
- **Blink Charging** — US-based, manufacturing + operating chargers.
- **Wallbox** — Barcelona-based, home and commercial chargers. Growing fast.
- **Tritium** — Australian manufacturer, DC fast chargers. NEVI-compliant.
- **Kempower** — Finnish manufacturer, modular DC fast charging.
- **Autel Energy** — Chinese manufacturer expanding in US/Europe.
- **Alpitronic** — Italian manufacturer, high-power DC chargers.
- **ABB E-mobility** — Global manufacturer, wide product range.
- **EVBox** (Engie)** — European manufacturer and network.
- **Eaton** — Industrial conglomerate with EV charging division.

### Charging Network Software (secondary — influence hardware decisions):
- **EVConnect** — Software platform for charger management
- **Driivz** — Cloud-based EV charging management platform
- **ChargeLab** — Open-source OCPP platform

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **EV charger cellular connectivity (2025)** | $2.13B | Research Nester |
| **EV charger cellular connectivity (2035)** | $12.23B (19.1% CAGR) | Research Nester |
| **Broader EV charging infrastructure (2025)** | $40-48B | Grand View Research |
| **EV drivers worldwide (2030 projected)** | 40M+ | Industry estimates |
| **US public chargers needed by 2030** | 1.2M+ (from ~200K today) | DOE estimates |
| **NEVI federal funding** | $7.5B allocated | US IIJA |

**Key trends:**
- NEVI (National Electric Vehicle Infrastructure) program is the biggest catalyst — $7.5B in federal funding requiring OCPP-compliant, credit-card-enabled chargers
- OCPP 2.0.1 adoption standardizing charger-to-cloud communication
- Charger reliability is a major industry problem — 25%+ of public chargers report downtime issues
- Market consolidating — smaller manufacturers being acquired or failing

---

## Pain Points

1. **Remote deployment locations.** Highway rest stops, rural corridors, parking lots — no Ethernet, unreliable WiFi. Cellular is the only option.
2. **Payment processing must work.** Every failed transaction is a frustrated driver and lost revenue. Multi-carrier failover prevents payment outages.
3. **NEVI compliance.** Federal funding requires credit card capability — meaning reliable cellular for payment processing is now mandatory.
4. **Charger reliability crisis.** 25%+ downtime rates across the industry. Connectivity failures are a top contributor. Operators need proactive monitoring.
5. **Multi-site deployment at scale.** Operators deploying hundreds of chargers across a state/country need one connectivity solution, not per-site ISP contracts.
6. **International expansion.** European charger manufacturers entering US market (and vice versa) need global connectivity that works in both markets.
7. **Firmware update delivery.** OCPP updates and security patches need to reach every charger reliably. Spotty connectivity means unpatched chargers.

---

## Competitive Landscape

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **Carrier direct (AT&T, Verizon)** | Dedicated IoT plans, bulk pricing for large networks | Multi-carrier failover (charger can't go offline), multi-site simplicity |
| **KORE Wireless** | Enterprise managed services, EV charging vertical focus | Self-service platform, flexible pricing for growing networks |
| **1NCE** | Flat-rate pricing for low-data IoT | Great for basic telemetry, but payment processing needs reliability guarantees |
| **Telnyx** | Aggressive pricing | Multi-carrier failover for payment reliability |
| **Private cellular (Cradlepoint, Sierra Wireless)** | Cellular routers per site | Hologram's embedded SIM approach is simpler and cheaper per charger |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: EV charging, electric vehicle charger, OCPP, charging station, Level 2/DC fast charging, charging network
- Product descriptions: connected charger, smart charging, cellular-connected charging station
- Job postings: embedded systems engineer, OCPP developer, charging firmware, IoT connectivity for EV
- Industry: EV infrastructure, clean energy, electric transportation
- NEVI compliance mentions, federal funding recipients

### Negative signals:
- Software-only charging network platforms (no hardware)
- Home/residential-only charger companies (often WiFi-connected, different buyer)
- Extension cord / basic outlet companies
- Companies only doing charger installation (contractors, not manufacturers)

---

## Campaign Strategy

### Messaging angle:
**Lead with reliability.** "25% of public chargers have downtime issues. Multi-carrier cellular keeps your chargers online and payments processing — even when a carrier goes down."

**Secondary: Deployment simplicity.** "One SIM per charger, 200+ countries. Deploy across highway corridors, parking lots, and urban centers without per-site network setup."

### Target personas:
- **Manufacturers:** VP Engineering, Head of Connectivity/IoT, CTO
- **Network operators:** VP Operations, Head of Infrastructure, CTO
- **CPOs (Charge Point Operators):** VP Technology, Head of Network Reliability

### Lookalike approach:
- Seed: ChargeFuse (confirmed customer)
- Target: OCPP-compliant charger manufacturers, NEVI funding recipients
- Layer: Companies exhibiting at EV charging conferences, recent Series A-C funding in EV infrastructure

---

*Last updated: February 20, 2026*
*Source: Feb 19, 2026 Hologram weekly sync, ChargeFuse reference, NEVI program, market research*
