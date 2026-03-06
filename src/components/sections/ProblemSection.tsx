import { FadeIn } from "@/components/ui/FadeIn";

const PROBLEMS = [
  {
    number: "01",
    title: "Unpredictable Pricing",
    body: "Your carrier raised rates mid-contract and your unit economics are suddenly upside down. You deserve transparent, predictable pricing you can actually plan a business around — not costs that change without warning.",
  },
  {
    number: "02",
    title: "Unresponsive Support",
    body: "You need a data pool adjustment now — not a support ticket that sits for days. When devices go offline in the field, every hour of silence from your provider costs you customers and credibility.",
  },
  {
    number: "03",
    title: "Single-Carrier Lock-In",
    body: "One carrier means dead zones in half your deployment locations. Your engineering team wastes weeks building coverage workarounds instead of shipping product. Multi-carrier should be table stakes.",
  },
];

export function ProblemSection() {
  return (
    <section id="solutions" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-sm text-brand-lime tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: "var(--font-messina-var)" }}
          >
            The problem
          </p>
          <h2
            className="font-medium text-4xl md:text-5xl text-white mb-6 max-w-2xl leading-[1.1]"
            style={{ fontFamily: "var(--font-roobert-var)" }}
          >
            Your connectivity provider is costing you more than you think.
          </h2>
          <p
            className="text-white/80 text-xl mb-16 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter-var)" }}
          >
            Unpredictable pricing. Weeks-long support tickets. Single-carrier dead zones. Sound familiar?
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.09}>
              <div className="group h-full p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-brand-lime/30 hover:bg-white/[0.04] transition-all duration-300 cursor-default">
                <span
                  className="block text-sm text-white/65 mb-5 tracking-widest"
                  style={{ fontFamily: "var(--font-messina-var)" }}
                >
                  {p.number}
                </span>
                <h3
                  className="font-medium text-lg text-white mb-3"
                  style={{ fontFamily: "var(--font-roobert-var)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-base text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter-var)" }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
