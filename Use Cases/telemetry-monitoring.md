# Use Case: Telemetry & Monitoring

> **Salesforce `Use_Case_Type__c` value:** Telemetry & Monitoring
> **Growth trajectory:** Steady — IoT sensors market growing from $23.9B (2025) to $99.2B (2030)
> **Hologram priority:** HIGH — Largest installed base, bread-and-butter revenue

---

## What This Use Case Is

Traditional sensors reporting periodic readings — soil moisture, temperature, air quality, equipment vibration, glucose levels, water pressure. Data is transmitted in small packets at regular intervals. This is where most of Hologram's current customers live.

**Amy Schwartz (Feb 12 sync):** Noted this segment lacks the "expansive organic growth" of AI/edge — stable but not explosive.

---

## Connectivity Profile

| Attribute | Spec |
|---|---|
| **Bandwidth** | Low to medium (0-250MB/month typical) |
| **Latency** | Tolerant (seconds to minutes acceptable) |
| **Uptime** | Important but not always mission-critical |
| **Data consumption** | Low — priority is low MRC (monthly recurring charge) |
| **Protocols** | Cat-M1, NB-IoT |

---

## Why This Matters for Hologram

- **Large installed base.** This is where most of Hologram's current customers live.
- Price-sensitive segment — per-device cost matters at scale
- Sweet spot for Hologram's low-data pricing ($0.10-$1.50 MRC)
- International/multi-country deployment is often the trigger (sensors deployed globally in remote areas)
- Stable, predictable recurring revenue

---

## Where Telemetry Appears Across Industries

| Industry | Telemetry Application | Example Customers |
|---|---|---|
| **Agriculture** | Soil moisture, pH, weather stations, irrigation | Arable, Fasal, AgriSound |
| **Healthcare** | Patient vitals, blood pressure, glucose, wearables | Lark Health, Vital Health Links, Tenovi |
| **Manufacturing** | Machine vibration, temperature, run-time, OEE | Amper, ShopLogix |
| **Energy & Utilities** | Solar/wind performance, smart meters, grid sensors | Sunday Power, eologix/Ping Services, Tank Utility |
| **Smart Buildings** | HVAC, air quality, occupancy (non-AI), energy | Distech Controls, GlacierGrid |
| **Construction** | Environmental compliance (air quality, noise, dust) | Methalarms, Omni CleanAir |
| **Smart Cities** | Environmental monitoring, flood/stormwater, noise | — |
| **Fleet & Logistics** | Cold chain temperature, condition monitoring | Purfresh, GlacierGrid |

---

## Hologram Customers (Telemetry)

### Agriculture
- **Arable** — Crop monitoring sensors, 14 countries, 6 continents. Saved a cacao crop by catching irrigation failure.
- **Fasal** — India-based precision agriculture. Rural farmer deployments.
- **AgriSound** — $13.6K, agricultural sensors.

### Healthcare
- **Lark Health** — $107.5K expansion. RPM devices for chronic conditions.
- **Vital Health Links** — RPM in rural health centers. "Hologram's complete coverage helps ensure that all of our patients are served."
- **Tenovi** — $40K pipeline renewal. RPM devices.
- **Huxley Medical** — $55K pipeline renewal.

### Manufacturing & Construction
- **Amper Technologies** — Machine health monitoring. Factory WiFi unreliable due to metal structures.
- **ShopLogix** — $88.1K, manufacturing IoT.
- **Methalarms** — $21.6K, methane detection (industrial safety).
- **Omni CleanAir** — $20.3K, air quality monitoring.
- **Worldsensing** — $41.4K, infrastructure gateways (bridges, tunnels).

### Energy & Utilities
- **Sunday Power** — Solar as a Service, Norway. Chose Hologram over 12 providers.
- **eologix/Ping Services** — Energy monitoring, 17 countries.
- **Tank Utility** — Tank level monitoring, expansion deal.
- **FuelCloud** — $5.6K, fuel monitoring.

### Smart Buildings
- **Distech Controls** — $20.6K, building automation (HVAC).
- **GlacierGrid** — $74.8K expansion, cold storage monitoring.

---

## Market Size & Growth

| Metric | Value | Source |
|---|---|---|
| **IoT sensors market (2025)** | $23.9B | GM Insights |
| **IoT sensors market (2030 projected)** | $99.2B | GM Insights |
| **IoT in healthcare market (2024)** | $56.73B | Vantage Market Research |
| **Agriculture IoT market (2025)** | $8.86-17.78B | Multiple sources |
| **IoT utilities market (2025)** | $1.59B | Market Growth Reports |

Large volume but commoditizing — differentiation comes from global coverage and ease of management, not raw connectivity.

---

## Pain Points (Cross-Industry)

1. **Remote/rural deployment** — Sensors in locations where carrier coverage is weakest. Multi-carrier SIM is the only way to ensure connectivity.
2. **Global/multi-country** — Ag, energy, and healthcare companies deploy across many countries. Managing carrier contracts per country is unsustainable.
3. **Cost at scale** — Deploying thousands of low-cost sensors. Per-device MRC must be minimal.
4. **Battery life** — Low-power cellular (Cat-M1, NB-IoT) essential. Devices need to last years without maintenance.
5. **Seasonal deployment** — Some sensors only active during growing seasons or programs. SIM pause stops billing.
6. **WiFi unreliability** — Factories (metal interference), patient homes (elderly), remote farms. Cellular bypasses WiFi dependency.
7. **Regulatory compliance** — Healthcare (HIPAA/FDA), energy (grid reporting), food (HACCP). Continuous data is mandatory.

---

## Competitive Landscape (Telemetry Specific)

| Competitor | How They Position | Hologram's Advantage |
|---|---|---|
| **1NCE** | Flat-rate EUR10/10yr — ultra-low-cost for massive scale | Hologram for multi-country and flexible pricing; 1NCE for single-region mass deployments |
| **LoRaWAN (Actility, TTN)** | Free/cheap long-range for basic telemetry | LoRaWAN requires gateway infrastructure; cellular works without it |
| **Carrier direct** | Best native coverage in their territory | Multi-carrier covers gaps single carrier can't; simplifies multi-country |
| **Soracom** | Developer-friendly, cloud-native | Deeper US carrier relationships; better rural coverage for farms/remote |
| **Satellite IoT (Swarm/SpaceX)** | Coverage in truly remote areas | Higher latency, lower bandwidth; cellular covers most locations; satellite is complementary |

---

## Clay Filtering Criteria

### Positive signals:
- Website mentions: sensor, monitoring, telemetry, remote monitoring, IoT sensor, condition monitoring, predictive maintenance
- Product descriptions: cellular sensor, IoT gateway, monitoring device, data logger
- Low-power protocols mentioned: Cat-M1, NB-IoT, LTE-M
- Deploying in remote/rural/distributed locations

### Negative signals:
- Companies only using LoRaWAN, Sigfox, WiFi, or Bluetooth
- Software-only platforms (no hardware)
- Consumer-grade devices (wrong scale)

---

## Campaign Strategy

### Message by industry, not by use case type.
Telemetry is the broadest use case — the buyer persona varies entirely by industry. A plant manager cares about different things than a medtech VP Product.

**Agriculture telemetry:** "One SIM for your global sensor network — deploy in 200+ countries at $0.10/month per device"

**Healthcare telemetry:** "Reliable cellular that works in every patient home — no WiFi setup required"

**Manufacturing telemetry:** "Cellular that works where factory WiFi doesn't — deploy sensors across every plant, globally"

**Energy telemetry:** "Monitor every solar panel, wind turbine, and charging station — even in the most remote locations"

---

*Last updated: February 17, 2026*
*Source: Feb 12, 2026 Hologram weekly sync, SFDC data, market research*
