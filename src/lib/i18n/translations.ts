export type Locale = "en" | "es" | "fr" | "de" | "pt" | "ja" | "ko" | "zh";

export interface Translations {
  nav: { products: string; pricing: string; customers: string; docs: string; cta: string };
  hero: { eyebrow: string; h1a: string; h1b: string; sub: string; cta1: string; cta2: string };
  socialProof: { headline: string };
  problem: {
    eyebrow: string; headline: string; sub: string;
    cards: { number: string; title: string; body: string }[];
  };
  pillars: {
    eyebrow: string; headline: string;
    reliability: { label: string; headline: string; body: string; features: string[]; stat: string; statLabel: string };
    pricing: { label: string; headline: string; body: string; stat: string; statLabel: string };
    partnership: { label: string; headline: string; body: string; stat: string; statLabel: string };
  };
  hyperSIM: { eyebrow: string; headline: string; sub: string };
  useCases: { eyebrow: string; headline: string; sub: string };
  stats: { labels: string[] };
  cta: { eyebrow: string; headline: string; sub: string; cta1: string; cta2: string; checks: string[] };
  contact: {
    eyebrow: string; headline: string; sub: string;
    trustPoints: string[];
    form: {
      firstName: string; lastName: string; email: string; company: string;
      jobTitle: string; phone: string; deviceCount: string; source: string;
      message: string; submit: string; privacy: string; privacyLink: string;
      successTitle: string; successBody: string; successCta: string;
    };
  };
  sticky: { text: string; cta: string };
  footer: {
    tagline: string; copyright: string; privacy: string; terms: string; security: string;
    product: string; useCases: string; resources: string; company: string;
  };
  customerSuccess: { eyebrow: string; headline: string };
  testimonials: { eyebrow: string; headline: string };
}

const en: Translations = {
  nav: { products: "Products", pricing: "Pricing", customers: "Customers", docs: "Docs", cta: "Talk to an IoT expert" },
  hero: { eyebrow: "Trusted by 6,000+ IoT teams worldwide", h1a: "Every device.", h1b: "Always online.", sub: "The only IoT connectivity platform that stops outages before they start. One SIM spans 550+ carriers, 190+ countries — with automatic failover and a contractual 99.95% uptime SLA.", cta1: "Talk to an IoT expert", cta2: "Start for free" },
  socialProof: { headline: "Powering mission-critical IoT for 6,000+ teams worldwide" },
  problem: { eyebrow: "The problem with most providers", headline: "Is your provider protecting your revenue, or putting it at risk?", sub: "Surprise price increases. Weeks-long support tickets. Single-carrier dead zones. If any of this sounds familiar, you're not alone.", cards: [{ number: "01", title: "Surprise Price Increases", body: "Carrier direct customers face 35%+ mid-contract rate increases with little notice. When your connectivity bill spikes without warning, your unit economics fall apart — and your margins take the hit." }, { number: "02", title: "Unresponsive Support", body: "You need a data pool adjustment today — not a ticket that sits for days. When devices go offline in the field, every hour of silence from your provider costs you customer trust and revenue." }, { number: "03", title: "Single-Carrier Dead Zones", body: "One carrier means dead zones in half your deployment locations. Every coverage gap is a device that isn't generating data — or revenue. Multi-carrier should be table stakes, not a premium." }] },
  pillars: { eyebrow: "How Hologram is different", headline: "Anyone can sell you a SIM card. Hologram delivers measurable ROI.", reliability: { label: "Reliability", headline: "Multi-carrier redundancy, not single-carrier risk.", body: "HyperSIM connects across 550+ carriers. If one network falters, your devices automatically switch — before your customers notice.", features: ["Multi-carrier automatic failover", "Real-time outage detection", "Zero-touch remediation", "99.95% uptime SLA (historical 99.99%)"], stat: "99.95%", statLabel: "Uptime SLA — in the contract, not just the marketing" }, pricing: { label: "Pricing", headline: "Transparent pricing you can build a business on.", body: "Predictable rates, flexible plans, no hidden fees. Your unit economics stay intact from 10 devices to 10,000.", stat: "50%", statLabel: "average cost reduction — reported by customers" }, partnership: { label: "Partnership", headline: "An engineering partner, not a support ticket queue.", body: "Our solutions engineers dig into modem logs with you. Scale from 1 to 1 million devices with a team that actually picks up the phone.", stat: "1 → 1M", statLabel: "devices with hands-on support" } },
  hyperSIM: { eyebrow: "HyperSIM Technology", headline: "The SIM that keeps your fleet online — everywhere.", sub: "HyperSIM is an eUICC SIM that intelligently connects across 550+ carriers in 200+ countries. Outage Protection automatically switches carriers when networks go down." },
  useCases: { eyebrow: "Use cases", headline: "Built for the devices your business depends on.", sub: "From cameras to charging stations to robots — Hologram keeps every connected device online." },
  stats: { labels: ["average cost reduction — reported by customers", "Uptime SLA — contractually guaranteed", "Carrier partners across 190+ countries", "IoT teams trust Hologram to keep devices online"] },
  cta: { eyebrow: "Get started today", headline: "Ready to stop losing revenue to connectivity downtime?", sub: "Start with a free developer account and 1 SIM. Scale to 1,000,000. No minimums, no contracts, and predictable pricing that protects your unit economics.", cta1: "Start for free", cta2: "Talk to an IoT expert", checks: ["99.95% uptime SLA — contractually guaranteed", "Transparent, predictable pricing", "Dedicated engineering support, not ticket queues"] },
  contact: { eyebrow: "Get a response today", headline: "Talk to an IoT expert.", sub: "Tell us about your deployment. We'll match you with the right connectivity plan and get you up and running fast.", trustPoints: ["Same-day response from a connectivity specialist", "No long-term contracts required", "Free developer SIMs to test with"], form: { firstName: "First name", lastName: "Last name", email: "Work email", company: "Company", jobTitle: "Job title", phone: "Phone", deviceCount: "Estimated device count", source: "How did you hear about us?", message: "Tell us about your use case", submit: "Talk to an IoT expert", privacy: "By submitting, you agree to Hologram's", privacyLink: "Privacy Policy", successTitle: "Thank you!", successBody: "A connectivity specialist will reach out within 1 business day.", successCta: "Submit another inquiry" } },
  sticky: { text: "Stop losing revenue to connectivity downtime.", cta: "Start for free →" },
  footer: { tagline: "Carrier-grade IoT connectivity with multi-carrier redundancy, transparent pricing, and responsive engineering support.", copyright: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Use", security: "Security", product: "Product", useCases: "Use cases", resources: "Resources", company: "Company" },
  customerSuccess: { eyebrow: "Customer success", headline: "Teams that switched to Hologram — and never looked back." },
  testimonials: { eyebrow: "What customers say", headline: "Trusted by teams who can't afford to go offline." },
};

const es: Translations = {
  nav: { products: 'Productos', pricing: 'Precios', customers: 'Clientes', docs: 'Documentación', cta: 'Habla con un experto en IoT' },
  hero: { eyebrow: 'Conectividad IoT — Diseñada para escalar', h1a: 'Cada dispositivo.', h1b: 'Siempre en línea.', sub: 'Tus dispositivos merecen más que la fiabilidad de un solo operador. Una SIM abarca más de 550 operadores en más de 190 países, con conmutación automática y un SLA de disponibilidad del 99,95%.', cta1: 'Habla con un experto en IoT', cta2: 'Empieza gratis' },
  socialProof: { headline: 'Impulsando IoT de misión crítica para más de 6.000 empresas' },
  problem: { eyebrow: 'El problema', headline: 'Tu proveedor de conectividad te cuesta más de lo que crees.', sub: 'Precios impredecibles. Tickets de soporte de semanas. Zonas muertas. ¿Te suena?', cards: [{ number: '01', title: 'Precios impredecibles', body: 'Tu operador subió las tarifas a mitad de contrato. Mereces precios transparentes y predecibles.' }, { number: '02', title: 'Soporte que no responde', body: 'Necesitas un ajuste del pool de datos ahora, no un ticket que se queda días.' }, { number: '03', title: 'Dependencia de un solo operador', body: 'Un solo operador significa zonas sin cobertura. Multi-operador debería ser lo mínimo.' }] },
  pillars: { eyebrow: 'Cómo Hologram es diferente', headline: 'Conectividad de nivel operador sin los dolores de cabeza.', reliability: { label: 'Fiabilidad', headline: 'Redundancia multi-operador, no riesgo de un solo operador.', body: 'HyperSIM se conecta a más de 550 operadores. Si una red falla, tus dispositivos cambian automáticamente.', features: ['Conmutación automática multi-operador', 'Detección de cortes en tiempo real', 'Remediación sin intervención', 'SLA de 99,95% (histórico 99,99%)'], stat: '99,95%', statLabel: 'SLA de disponibilidad garantizado' }, pricing: { label: 'Precios', headline: 'Precios transparentes para tu negocio.', body: 'Tarifas predecibles, planes flexibles, sin costos ocultos.', stat: 'Hasta 50%', statLabel: 'ahorro vs. operador directo' }, partnership: { label: 'Asociación', headline: 'Un socio de ingeniería, no una cola de tickets.', body: 'Nuestros ingenieros revisan logs de módem contigo.', stat: '1 → 1M', statLabel: 'dispositivos con soporte dedicado' } },
  hyperSIM: { eyebrow: 'HyperSIM', headline: 'La SIM que mantiene tu flota en línea — en todas partes.', sub: 'HyperSIM es una SIM eUICC que se conecta inteligentemente a más de 550 operadores en más de 200 países.' },
  useCases: { eyebrow: 'Casos de uso', headline: 'Diseñado para los dispositivos de los que depende tu negocio.', sub: 'Desde cámaras hasta estaciones de carga — Hologram mantiene cada dispositivo conectado.' },
  stats: { labels: ['Menores costos de conectividad', 'SLA de disponibilidad garantizado', 'Socios operadores en más de 190 países', 'Equipos IoT confían en Hologram'] },
  cta: { eyebrow: 'Conéctate', headline: '¿Listo para dejar de luchar con tu proveedor?', sub: 'Empieza con una cuenta gratuita y 1 SIM. Escala a 1.000.000.', cta1: 'Empieza gratis', cta2: 'Habla con un experto', checks: ['Disponibilidad multi-operador con SLA 99,95%', 'Precios transparentes y predecibles', 'Soporte de ingeniería dedicado'] },
  contact: { eyebrow: 'Contactar ventas', headline: 'Habla con un experto en IoT.', sub: 'Cuéntanos sobre tu despliegue.', trustPoints: ['Reserva inmediata con un especialista', 'Sin contratos a largo plazo', 'SIMs de prueba gratuitas'], form: { firstName: 'Nombre', lastName: 'Apellido', email: 'Email laboral', company: 'Empresa', jobTitle: 'Cargo', phone: 'Teléfono', deviceCount: 'Cantidad estimada de dispositivos', source: '¿Cómo nos conociste?', message: 'Cuéntanos tu caso de uso', submit: 'Habla con un experto', privacy: 'Al enviar, aceptas la', privacyLink: 'Política de Privacidad', successTitle: '¡Gracias!', successBody: 'Un especialista te contactará en 1 día hábil.', successCta: 'Enviar otra consulta' } },
  sticky: { text: 'Deja de perder ingresos por caídas de conectividad.', cta: 'Regístrate gratis →' },
  footer: { tagline: 'Conectividad IoT con redundancia multi-operador, precios transparentes y soporte de ingeniería.', copyright: 'Todos los derechos reservados.', privacy: 'Política de Privacidad', terms: 'Términos de Uso', security: 'Seguridad', product: 'Producto', useCases: 'Casos de uso', resources: 'Recursos', company: 'Empresa' },
  customerSuccess: { eyebrow: 'Éxito del cliente', headline: 'Equipos que cambiaron a Hologram — y nunca miraron atrás.' },
  testimonials: { eyebrow: 'Lo que dicen los clientes', headline: 'De confianza para equipos que no pueden quedarse sin conexión.' },
};

const fr: Translations = {
  nav: { products: "Produits", pricing: "Tarifs", customers: "Clients", docs: "Documentation", cta: "Parler à un expert IoT" },
  hero: { eyebrow: "Connectivité IoT — Conçue pour évoluer", h1a: "Chaque appareil.", h1b: "Toujours en ligne.", sub: "Vos appareils méritent mieux qu'un seul opérateur. Une SIM couvre plus de 550 opérateurs dans plus de 190 pays, avec basculement automatique et un SLA de 99,95%.", cta1: "Parler à un expert IoT", cta2: "Commencer gratuitement" },
  socialProof: { headline: "Au service de l'IoT critique pour plus de 6 000 entreprises" },
  problem: { eyebrow: "Le problème", headline: "Votre fournisseur de connectivité vous coûte plus que vous ne le pensez.", sub: "Tarifs imprévisibles. Tickets de support interminables. Zones mortes. Ça vous parle ?", cards: [{ number: "01", title: "Tarifs imprévisibles", body: "Votre opérateur a augmenté ses tarifs en cours de contrat. Vous méritez des prix transparents et prévisibles." }, { number: "02", title: "Support non réactif", body: "Vous avez besoin d'un ajustement maintenant, pas d'un ticket qui attend des jours." }, { number: "03", title: "Dépendance mono-opérateur", body: "Un seul opérateur signifie des zones blanches dans la moitié de vos sites. Le multi-opérateur devrait être la norme." }] },
  pillars: { eyebrow: "Ce qui rend Hologram différent", headline: "Connectivité opérateur sans les tracas.", reliability: { label: "Fiabilité", headline: "Redondance multi-opérateur, pas de risque mono-opérateur.", body: "HyperSIM se connecte à plus de 550 opérateurs. Si un réseau faiblit, vos appareils basculent automatiquement.", features: ["Basculement automatique multi-opérateur", "Détection des pannes en temps réel", "Remédiation automatique", "SLA de 99,95% (historique 99,99%)"], stat: "99,95%", statLabel: "SLA garanti contractuellement" }, pricing: { label: "Tarifs", headline: "Des tarifs transparents pour votre entreprise.", body: "Tarifs prévisibles, plans flexibles, pas de frais cachés.", stat: "Jusqu'à 50%", statLabel: "d'économies vs. opérateur direct" }, partnership: { label: "Partenariat", headline: "Un partenaire technique, pas une file de tickets.", body: "Nos ingénieurs analysent les logs modem avec vous. Passez de 1 à 1 million d'appareils.", stat: "1 → 1M", statLabel: "appareils avec support dédié" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "La SIM qui garde votre flotte en ligne — partout.", sub: "HyperSIM est une SIM eUICC qui se connecte intelligemment à plus de 550 opérateurs dans plus de 200 pays." },
  useCases: { eyebrow: "Cas d'usage", headline: "Conçu pour les appareils dont votre entreprise dépend.", sub: "Des caméras aux bornes de recharge — Hologram maintient chaque appareil connecté." },
  stats: { labels: ["Coûts de connectivité réduits", "SLA de disponibilité garanti", "Opérateurs partenaires dans 190+ pays", "Équipes IoT font confiance à Hologram"] },
  cta: { eyebrow: "Se connecter", headline: "Prêt à arrêter de vous battre avec votre fournisseur ?", sub: "Commencez avec un compte développeur gratuit et 1 SIM. Évoluez jusqu'à 1 000 000.", cta1: "Commencer gratuitement", cta2: "Parler à un expert", checks: ["Disponibilité multi-opérateur SLA 99,95%", "Tarifs transparents et prévisibles", "Support technique dédié"] },
  contact: { eyebrow: "Contacter les ventes", headline: "Parlez à un expert IoT.", sub: "Décrivez votre déploiement. Nous vous orienterons vers le bon plan.", trustPoints: ["Réservez immédiatement avec un spécialiste", "Pas de contrat long terme", "SIMs de test gratuites"], form: { firstName: "Prénom", lastName: "Nom", email: "Email professionnel", company: "Entreprise", jobTitle: "Poste", phone: "Téléphone", deviceCount: "Nombre estimé d'appareils", source: "Comment nous avez-vous connu ?", message: "Décrivez votre cas d'usage", submit: "Parler à un expert", privacy: "En soumettant, vous acceptez la", privacyLink: "Politique de Confidentialité", successTitle: "Merci !", successBody: "Un spécialiste vous contactera sous 1 jour ouvré.", successCta: "Soumettre une autre demande" } },
  sticky: { text: "Arrêtez de perdre des revenus à cause des pannes.", cta: "S'inscrire gratuitement →" },
  footer: { tagline: "Connectivité IoT avec redondance multi-opérateur, tarifs transparents et support technique.", copyright: "Tous droits réservés.", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation", security: "Sécurité", product: "Produit", useCases: "Cas d'usage", resources: "Ressources", company: "Entreprise" },
  customerSuccess: { eyebrow: "Succès client", headline: "Des équipes qui ont adopté Hologram — et ne sont jamais revenues en arrière." },
  testimonials: { eyebrow: "Avis clients", headline: "Adopté par les équipes qui ne peuvent pas se permettre d'être hors ligne." },
};

const de: Translations = {
  nav: { products: "Produkte", pricing: "Preise", customers: "Kunden", docs: "Dokumentation", cta: "IoT-Experten kontaktieren" },
  hero: { eyebrow: "IoT-Konnektivität — Skalierbar gebaut", h1a: "Jedes Gerät.", h1b: "Immer online.", sub: "Ihre Geräte verdienen mehr als Ein-Netzbetreiber-Zuverlässigkeit. Eine SIM verbindet über 550 Netzbetreiber in über 190 Ländern mit automatischem Failover und 99,95% Uptime-SLA.", cta1: "IoT-Experten kontaktieren", cta2: "Kostenlos starten" },
  socialProof: { headline: "Betreibt geschäftskritisches IoT für über 6.000 Unternehmen" },
  problem: { eyebrow: "Das Problem", headline: "Ihr Konnektivitätsanbieter kostet Sie mehr als Sie denken.", sub: "Unvorhersehbare Preise. Wochenlange Support-Tickets. Funklöcher. Kommt Ihnen das bekannt vor?", cards: [{ number: "01", title: "Unvorhersehbare Preise", body: "Ihr Anbieter hat die Tarife mitten im Vertrag erhöht. Sie verdienen transparente, planbare Preise." }, { number: "02", title: "Nicht erreichbarer Support", body: "Sie brauchen jetzt eine Anpassung — kein Ticket, das tagelang liegen bleibt." }, { number: "03", title: "Ein-Anbieter-Abhängigkeit", body: "Ein Netzbetreiber bedeutet Funklöcher an vielen Standorten. Multi-Carrier sollte Standard sein." }] },
  pillars: { eyebrow: "Was Hologram anders macht", headline: "Carrier-grade Konnektivität ohne Kopfschmerzen.", reliability: { label: "Zuverlässigkeit", headline: "Multi-Carrier-Redundanz statt Ein-Anbieter-Risiko.", body: "HyperSIM verbindet über 550 Netzbetreiber. Wenn ein Netz schwächelt, wechseln Ihre Geräte automatisch.", features: ["Automatisches Multi-Carrier-Failover", "Echtzeit-Ausfallserkennung", "Automatische Behebung", "99,95% Uptime-SLA (historisch 99,99%)"], stat: "99,95%", statLabel: "Vertraglich garantiertes Uptime-SLA" }, pricing: { label: "Preise", headline: "Transparente Preise für Ihr Geschäft.", body: "Planbare Tarife, flexible Pläne, keine versteckten Kosten.", stat: "Bis zu 50%", statLabel: "Einsparung vs. Direktanbieter" }, partnership: { label: "Partnerschaft", headline: "Ein Engineering-Partner, keine Ticket-Warteschlange.", body: "Unsere Ingenieure analysieren Modem-Logs mit Ihnen. Skalieren Sie von 1 bis 1 Million Geräte.", stat: "1 → 1M", statLabel: "Geräte mit persönlichem Support" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "Die SIM, die Ihre Flotte online hält — überall.", sub: "HyperSIM ist eine eUICC-SIM, die intelligent über 550 Netzbetreiber in über 200 Ländern verbindet." },
  useCases: { eyebrow: "Anwendungsfälle", headline: "Für die Geräte gebaut, auf die Ihr Geschäft ankommt.", sub: "Von Kameras bis Ladestationen — Hologram hält jedes verbundene Gerät online." },
  stats: { labels: ["Niedrigere Konnektivitätskosten", "Vertraglich garantiertes Uptime-SLA", "Carrier-Partner in über 190 Ländern", "IoT-Teams vertrauen Hologram"] },
  cta: { eyebrow: "Verbinden", headline: "Bereit, mit Ihrem Anbieter Schluss zu machen?", sub: "Starten Sie mit einem kostenlosen Entwicklerkonto. Skalieren Sie auf 1.000.000. Keine Mindestmengen, keine Verträge.", cta1: "Kostenlos starten", cta2: "Experten kontaktieren", checks: ["Multi-Carrier-Uptime mit 99,95% SLA", "Transparente, planbare Preise", "Persönlicher Engineering-Support"] },
  contact: { eyebrow: "Vertrieb kontaktieren", headline: "Sprechen Sie mit einem IoT-Experten.", sub: "Erzählen Sie uns von Ihrem Einsatz. Wir finden den richtigen Plan.", trustPoints: ["Sofort einen Termin buchen", "Keine Langzeitverträge", "Kostenlose Test-SIMs"], form: { firstName: "Vorname", lastName: "Nachname", email: "Geschäfts-E-Mail", company: "Unternehmen", jobTitle: "Position", phone: "Telefon", deviceCount: "Geschätzte Geräteanzahl", source: "Wie haben Sie von uns erfahren?", message: "Beschreiben Sie Ihren Anwendungsfall", submit: "Experten kontaktieren", privacy: "Mit dem Absenden akzeptieren Sie die", privacyLink: "Datenschutzrichtlinie", successTitle: "Vielen Dank!", successBody: "Ein Spezialist wird sich innerhalb eines Werktags melden.", successCta: "Weitere Anfrage senden" } },
  sticky: { text: "Hören Sie auf, Umsatz durch Ausfälle zu verlieren.", cta: "Kostenlos registrieren →" },
  footer: { tagline: "IoT-Konnektivität mit Multi-Carrier-Redundanz, transparenten Preisen und Engineering-Support.", copyright: "Alle Rechte vorbehalten.", privacy: "Datenschutz", terms: "Nutzungsbedingungen", security: "Sicherheit", product: "Produkt", useCases: "Anwendungsfälle", resources: "Ressourcen", company: "Unternehmen" },
  customerSuccess: { eyebrow: "Kundenerfolg", headline: "Teams, die zu Hologram gewechselt haben — und nie zurückgeschaut haben." },
  testimonials: { eyebrow: "Kundenstimmen", headline: "Vertraut von Teams, die sich Ausfälle nicht leisten können." },
};

const pt: Translations = {
  nav: { products: "Produtos", pricing: "Preços", customers: "Clientes", docs: "Documentação", cta: "Fale com um especialista IoT" },
  hero: { eyebrow: "Conectividade IoT — Feita para escalar", h1a: "Cada dispositivo.", h1b: "Sempre online.", sub: "Seus dispositivos merecem mais que a confiabilidade de uma única operadora. Um SIM cobre mais de 550 operadoras em mais de 190 países, com failover automático e SLA de 99,95%.", cta1: "Fale com um especialista IoT", cta2: "Comece gratuitamente" },
  socialProof: { headline: "Alimentando IoT de missão crítica para mais de 6.000 empresas" },
  problem: { eyebrow: "O problema", headline: "Seu provedor de conectividade está custando mais do que você imagina.", sub: "Preços imprevisíveis. Tickets de semanas. Zonas mortas. Soa familiar?", cards: [{ number: "01", title: "Preços imprevisíveis", body: "Sua operadora aumentou as tarifas no meio do contrato. Você merece preços transparentes e previsíveis." }, { number: "02", title: "Suporte sem resposta", body: "Você precisa de um ajuste agora — não de um ticket que fica dias parado." }, { number: "03", title: "Dependência de operadora única", body: "Uma operadora significa zonas sem cobertura. Multi-operadora deveria ser o básico." }] },
  pillars: { eyebrow: "Como a Hologram é diferente", headline: "Conectividade de nível operadora sem dores de cabeça.", reliability: { label: "Confiabilidade", headline: "Redundância multi-operadora, não risco de operadora única.", body: "HyperSIM conecta a mais de 550 operadoras. Se uma rede falha, seus dispositivos mudam automaticamente.", features: ["Failover automático multi-operadora", "Detecção de falhas em tempo real", "Remediação automática", "SLA de 99,95% (histórico 99,99%)"], stat: "99,95%", statLabel: "SLA garantido contratualmente" }, pricing: { label: "Preços", headline: "Preços transparentes para seu negócio.", body: "Tarifas previsíveis, planos flexíveis, sem taxas ocultas.", stat: "Até 50%", statLabel: "economia vs. operadora direta" }, partnership: { label: "Parceria", headline: "Um parceiro de engenharia, não uma fila de tickets.", body: "Nossos engenheiros analisam logs de modem com você. Escale de 1 a 1 milhão de dispositivos.", stat: "1 → 1M", statLabel: "dispositivos com suporte dedicado" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "O SIM que mantém sua frota online — em todo lugar.", sub: "HyperSIM é um SIM eUICC que se conecta inteligentemente a mais de 550 operadoras em mais de 200 países." },
  useCases: { eyebrow: "Casos de uso", headline: "Feito para os dispositivos dos quais seu negócio depende.", sub: "De câmeras a estações de carregamento — Hologram mantém cada dispositivo conectado." },
  stats: { labels: ["Custos de conectividade menores", "SLA de disponibilidade garantido", "Parceiros operadores em 190+ países", "Equipes IoT confiam na Hologram"] },
  cta: { eyebrow: "Conecte-se", headline: "Pronto para parar de lutar com seu provedor?", sub: "Comece com uma conta gratuita e 1 SIM. Escale para 1.000.000. Sem mínimos, sem contratos.", cta1: "Comece gratuitamente", cta2: "Fale com um especialista", checks: ["Disponibilidade multi-operadora com SLA 99,95%", "Preços transparentes e previsíveis", "Suporte de engenharia dedicado"] },
  contact: { eyebrow: "Falar com vendas", headline: "Fale com um especialista em IoT.", sub: "Conte-nos sobre seu projeto. Encontraremos o plano certo.", trustPoints: ["Agende imediatamente com um especialista", "Sem contratos de longo prazo", "SIMs de teste gratuitos"], form: { firstName: "Nome", lastName: "Sobrenome", email: "Email corporativo", company: "Empresa", jobTitle: "Cargo", phone: "Telefone", deviceCount: "Quantidade estimada de dispositivos", source: "Como nos conheceu?", message: "Conte-nos seu caso de uso", submit: "Fale com um especialista", privacy: "Ao enviar, você concorda com a", privacyLink: "Política de Privacidade", successTitle: "Obrigado!", successBody: "Um especialista entrará em contato em 1 dia útil.", successCta: "Enviar outra consulta" } },
  sticky: { text: "Pare de perder receita com quedas de conectividade.", cta: "Cadastre-se grátis →" },
  footer: { tagline: "Conectividade IoT com redundância multi-operadora, preços transparentes e suporte de engenharia.", copyright: "Todos os direitos reservados.", privacy: "Política de Privacidade", terms: "Termos de Uso", security: "Segurança", product: "Produto", useCases: "Casos de uso", resources: "Recursos", company: "Empresa" },
  customerSuccess: { eyebrow: "Sucesso do cliente", headline: "Equipes que migraram para Hologram — e nunca olharam para trás." },
  testimonials: { eyebrow: "O que dizem os clientes", headline: "Confiável para equipes que não podem ficar offline." },
};

const ja: Translations = {
  nav: { products: "製品", pricing: "料金", customers: "お客様", docs: "ドキュメント", cta: "IoTエキスパートに相談" },
  hero: { eyebrow: "IoTコネクティビティ — スケールのために構築", h1a: "すべてのデバイスを。", h1b: "常時オンラインに。", sub: "デバイスは、単一キャリアの信頼性以上のものに値します。1枚のSIMで550以上のキャリア、190以上の国をカバー。自動フェイルオーバーと99.95%の稼働率SLA。", cta1: "IoTエキスパートに相談", cta2: "無料で始める" },
  socialProof: { headline: "6,000社以上のミッションクリティカルなIoTを支援" },
  problem: { eyebrow: "課題", headline: "接続プロバイダーのコストは想像以上です。", sub: "予測不能な価格。数週間のサポートチケット。単一キャリアの死角。心当たりはありませんか？", cards: [{ number: "01", title: "予測不能な価格", body: "キャリアが契約途中で料金を引き上げ、ユニットエコノミクスが崩壊。透明で予測可能な価格設定が必要です。" }, { number: "02", title: "対応の遅いサポート", body: "データプールの調整が今すぐ必要なのに、チケットは何日も放置されます。" }, { number: "03", title: "単一キャリアへの依存", body: "1つのキャリアでは展開先の半分でカバレッジ不足。マルチキャリアは当然のことです。" }] },
  pillars: { eyebrow: "Hologramが選ばれる理由", headline: "キャリア品質の接続を、煩わしさなく。", reliability: { label: "信頼性", headline: "マルチキャリア冗長性で、単一キャリアリスクを排除。", body: "HyperSIMは550以上のキャリアに接続。ネットワーク障害時はデバイスが自動的に切り替わります。", features: ["マルチキャリア自動フェイルオーバー", "リアルタイム障害検知", "ゼロタッチ復旧", "99.95%稼働率SLA（実績99.99%）"], stat: "99.95%", statLabel: "契約で保証された稼働率SLA" }, pricing: { label: "料金", headline: "ビジネスの基盤となる透明な料金。", body: "予測可能な料金、柔軟なプラン、隠れた費用なし。", stat: "最大50%", statLabel: "キャリア直接契約比の削減" }, partnership: { label: "パートナーシップ", headline: "チケット待ちではなく、エンジニアリングパートナー。", body: "ソリューションエンジニアがモデムログを一緒に分析。1台から100万台まで拡張可能。", stat: "1 → 1M", statLabel: "ハンズオンサポートでデバイスを拡張" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "どこでもフリートをオンラインに保つSIM。", sub: "HyperSIMは、200以上の国の550以上のキャリアにインテリジェントに接続するeUICC SIMです。" },
  useCases: { eyebrow: "ユースケース", headline: "ビジネスが依存するデバイスのために構築。", sub: "カメラから充電ステーション、ロボットまで — Hologramがすべての接続デバイスをオンラインに。" },
  stats: { labels: ["接続コストの削減", "契約保証の稼働率SLA", "190以上の国のキャリアパートナー", "IoTチームがHologramを信頼"] },
  cta: { eyebrow: "接続する", headline: "接続プロバイダーとの戦いを終わらせませんか？", sub: "無料開発者アカウントと1枚のSIMから始めましょう。100万台まで拡張可能。最低数量なし、契約なし。", cta1: "無料で始める", cta2: "エキスパートに相談", checks: ["99.95% SLAのマルチキャリア稼働率", "透明で予測可能な料金", "専任エンジニアリングサポート"] },
  contact: { eyebrow: "営業に問い合わせ", headline: "IoTエキスパートに相談。", sub: "導入計画をお聞かせください。最適なプランをご提案します。", trustPoints: ["すぐに専門家と面談予約", "長期契約不要", "テスト用SIMを無料提供"], form: { firstName: "名", lastName: "姓", email: "ビジネスメール", company: "会社名", jobTitle: "役職", phone: "電話番号", deviceCount: "推定デバイス数", source: "当社を知ったきっかけ", message: "ユースケースをお聞かせください", submit: "エキスパートに相談", privacy: "送信することで、以下に同意します：", privacyLink: "プライバシーポリシー", successTitle: "ありがとうございます！", successBody: "1営業日以内に専門家がご連絡いたします。", successCta: "別の問い合わせを送信" } },
  sticky: { text: "接続ダウンタイムによる収益損失を止めましょう。", cta: "無料登録 →" },
  footer: { tagline: "マルチキャリア冗長性、透明な料金、エンジニアリングサポートによるIoT接続。", copyright: "全著作権所有。", privacy: "プライバシーポリシー", terms: "利用規約", security: "セキュリティ", product: "製品", useCases: "ユースケース", resources: "リソース", company: "会社情報" },
  customerSuccess: { eyebrow: "カスタマーサクセス", headline: "Hologramに乗り換えたチーム — そして振り返らなかった。" },
  testimonials: { eyebrow: "お客様の声", headline: "オフラインを許容できないチームから信頼されています。" },
};

const ko: Translations = {
  nav: { products: "제품", pricing: "요금", customers: "고객", docs: "문서", cta: "IoT 전문가와 상담" },
  hero: { eyebrow: "IoT 연결 — 확장을 위해 설계", h1a: "모든 디바이스를.", h1b: "항상 온라인으로.", sub: "디바이스는 단일 통신사 신뢰성 이상을 받을 자격이 있습니다. 하나의 SIM으로 190개국 이상 550개 이상의 통신사에 연결. 자동 장애 조치 및 99.95% 가동시간 SLA.", cta1: "IoT 전문가와 상담", cta2: "무료로 시작하기" },
  socialProof: { headline: "6,000개 이상의 기업의 미션 크리티컬 IoT를 지원" },
  problem: { eyebrow: "문제", headline: "연결 제공업체가 생각보다 더 많은 비용을 들이고 있습니다.", sub: "예측 불가능한 가격. 몇 주씩 걸리는 지원 티켓. 단일 통신사 사각지대. 익숙하지 않으신가요?", cards: [{ number: "01", title: "예측 불가능한 가격", body: "통신사가 계약 중 요금을 인상했습니다. 투명하고 예측 가능한 가격이 필요합니다." }, { number: "02", title: "응답 없는 지원", body: "지금 당장 데이터 풀 조정이 필요하지만, 티켓은 며칠째 방치됩니다." }, { number: "03", title: "단일 통신사 종속", body: "하나의 통신사는 배포 위치의 절반에 사각지대를 의미합니다. 멀티 통신사는 기본이어야 합니다." }] },
  pillars: { eyebrow: "Hologram이 다른 이유", headline: "통신사급 연결, 통신사의 골칫거리 없이.", reliability: { label: "신뢰성", headline: "멀티 통신사 이중화, 단일 통신사 위험 제거.", body: "HyperSIM은 550개 이상의 통신사에 연결됩니다. 네트워크 장애 시 디바이스가 자동으로 전환됩니다.", features: ["멀티 통신사 자동 장애 조치", "실시간 장애 감지", "무접촉 복구", "99.95% 가동시간 SLA (실적 99.99%)"], stat: "99.95%", statLabel: "계약으로 보장된 가동시간 SLA" }, pricing: { label: "요금", headline: "비즈니스를 위한 투명한 가격.", body: "예측 가능한 요금, 유연한 플랜, 숨겨진 비용 없음.", stat: "최대 50%", statLabel: "직접 통신사 대비 절감" }, partnership: { label: "파트너십", headline: "티켓 대기열이 아닌, 엔지니어링 파트너.", body: "솔루션 엔지니어가 함께 모뎀 로그를 분석합니다. 1대에서 100만 대까지 확장하세요.", stat: "1 → 1M", statLabel: "전담 지원으로 디바이스 확장" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "어디서나 플릿을 온라인으로 유지하는 SIM.", sub: "HyperSIM은 200개국 이상 550개 이상의 통신사에 지능적으로 연결하는 eUICC SIM입니다." },
  useCases: { eyebrow: "사용 사례", headline: "비즈니스가 의존하는 디바이스를 위해 구축.", sub: "카메라에서 충전 스테이션, 로봇까지 — Hologram이 모든 연결 디바이스를 온라인으로 유지합니다." },
  stats: { labels: ["연결 비용 절감", "계약 보장 가동시간 SLA", "190개국 이상의 통신사 파트너", "IoT 팀이 Hologram을 신뢰"] },
  cta: { eyebrow: "연결하기", headline: "연결 제공업체와의 싸움을 끝낼 준비가 되셨나요?", sub: "무료 개발자 계정과 SIM 1장으로 시작하세요. 100만 대까지 확장 가능. 최소 수량 없음, 계약 없음.", cta1: "무료로 시작하기", cta2: "전문가와 상담", checks: ["99.95% SLA 멀티 통신사 가동시간", "투명하고 예측 가능한 가격", "전담 엔지니어링 지원"] },
  contact: { eyebrow: "영업팀 문의", headline: "IoT 전문가와 상담하세요.", sub: "배포 계획을 알려주세요. 적합한 플랜을 안내해 드립니다.", trustPoints: ["즉시 전문가와 미팅 예약", "장기 계약 불필요", "무료 테스트 SIM 제공"], form: { firstName: "이름", lastName: "성", email: "업무 이메일", company: "회사", jobTitle: "직책", phone: "전화번호", deviceCount: "예상 디바이스 수", source: "어떻게 알게 되셨나요?", message: "사용 사례를 알려주세요", submit: "전문가와 상담", privacy: "제출 시 다음에 동의합니다:", privacyLink: "개인정보 보호정책", successTitle: "감사합니다!", successBody: "1영업일 이내에 전문가가 연락드립니다.", successCta: "다른 문의 보내기" } },
  sticky: { text: "연결 다운타임으로 인한 수익 손실을 멈추세요.", cta: "무료 가입 →" },
  footer: { tagline: "멀티 통신사 이중화, 투명한 가격, 엔지니어링 지원의 IoT 연결.", copyright: "모든 권리 보유.", privacy: "개인정보 보호정책", terms: "이용약관", security: "보안", product: "제품", useCases: "사용 사례", resources: "리소스", company: "회사" },
  customerSuccess: { eyebrow: "고객 성공", headline: "Hologram으로 전환한 팀들 — 그리고 돌아보지 않았습니다." },
  testimonials: { eyebrow: "고객 후기", headline: "오프라인이 허용되지 않는 팀들이 신뢰합니다." },
};

const zh: Translations = {
  nav: { products: "产品", pricing: "价格", customers: "客户", docs: "文档", cta: "联系IoT专家" },
  hero: { eyebrow: "物联网连接 — 为规模化而构建", h1a: "每一台设备。", h1b: "始终在线。", sub: "您的设备值得比单一运营商更可靠的连接。一张SIM覆盖190多个国家的550多家运营商，自动故障转移，99.95%正常运行时间SLA。", cta1: "联系IoT专家", cta2: "免费开始" },
  socialProof: { headline: "为6,000多家企业提供关键任务IoT支持" },
  problem: { eyebrow: "问题所在", headline: "您的连接提供商比您想象的花费更多。", sub: "不可预测的价格。数周的支持工单。单一运营商盲区。听起来熟悉吗？", cards: [{ number: "01", title: "不可预测的价格", body: "运营商在合同期内提高了费率，您的单位经济模型突然崩溃。您值得拥有透明、可预测的定价。" }, { number: "02", title: "无响应的支持", body: "您现在需要数据池调整——而不是一个等待数天的工单。" }, { number: "03", title: "单一运营商锁定", body: "一个运营商意味着一半部署位置存在盲区。多运营商应该是基本要求。" }] },
  pillars: { eyebrow: "Hologram的不同之处", headline: "运营商级连接，没有运营商的麻烦。", reliability: { label: "可靠性", headline: "多运营商冗余，而非单一运营商风险。", body: "HyperSIM连接550多家运营商。当某个网络出现故障时，您的设备会自动切换。", features: ["多运营商自动故障转移", "实时故障检测", "零接触修复", "99.95%正常运行时间SLA（历史99.99%）"], stat: "99.95%", statLabel: "合同保证的正常运行时间SLA" }, pricing: { label: "价格", headline: "为您的业务提供透明定价。", body: "可预测的费率，灵活的计划，无隐藏费用。", stat: "最高50%", statLabel: "相比直接运营商节省" }, partnership: { label: "合作", headline: "工程合作伙伴，而非工单队列。", body: "我们的解决方案工程师与您一起分析调制解调器日志。从1台扩展到100万台设备。", stat: "1 → 1M", statLabel: "设备的专属支持" } },
  hyperSIM: { eyebrow: "HyperSIM", headline: "让您的设备在任何地方保持在线的SIM卡。", sub: "HyperSIM是一款eUICC SIM卡，智能连接200多个国家的550多家运营商。" },
  useCases: { eyebrow: "应用场景", headline: "为您业务所依赖的设备而构建。", sub: "从摄像头到充电站再到机器人——Hologram让每台联网设备保持在线。" },
  stats: { labels: ["更低的连接成本", "合同保证的正常运行时间SLA", "覆盖190多个国家的运营商合作伙伴", "IoT团队信赖Hologram"] },
  cta: { eyebrow: "开始连接", headline: "准备好停止与您的连接提供商作斗争了吗？", sub: "从免费开发者账户和1张SIM开始。扩展到1,000,000台。无最低数量，无合同。", cta1: "免费开始", cta2: "联系专家", checks: ["99.95% SLA多运营商正常运行时间", "透明、可预测的定价", "专属工程支持"] },
  contact: { eyebrow: "联系销售", headline: "与IoT专家交谈。", sub: "告诉我们您的部署计划，我们将为您匹配合适的方案。", trustPoints: ["立即预约专家会议", "无需长期合同", "免费测试SIM卡"], form: { firstName: "名", lastName: "姓", email: "工作邮箱", company: "公司", jobTitle: "职位", phone: "电话", deviceCount: "预计设备数量", source: "您如何了解到我们？", message: "告诉我们您的使用场景", submit: "联系专家", privacy: "提交即表示您同意Hologram的", privacyLink: "隐私政策", successTitle: "谢谢！", successBody: "专家将在1个工作日内与您联系。", successCta: "提交另一个咨询" } },
  sticky: { text: "停止因连接中断而损失收入。", cta: "免费注册 →" },
  footer: { tagline: "多运营商冗余、透明定价和工程支持的IoT连接。", copyright: "保留所有权利。", privacy: "隐私政策", terms: "使用条款", security: "安全", product: "产品", useCases: "应用场景", resources: "资源", company: "公司" },
  customerSuccess: { eyebrow: "客户成功", headline: "转向Hologram的团队 — 从未回头。" },
  testimonials: { eyebrow: "客户评价", headline: "被那些不能承受离线的团队所信赖。" },
};

export const translations: Record<Locale, Translations> = { en, es, fr, de, pt, ja, ko, zh };
