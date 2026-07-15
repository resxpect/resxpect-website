import React from "react";

const stages = [
    {
        n: "01",
        k: "Draft",
        title: "Structured agreement",
        body: "Scope, deliverables, milestones and terms are codified into a single machine-readable contract both parties can sign.",
    },
    {
        n: "02",
        k: "Lock",
        title: "Payment protection",
        body: "Funds move into neutral escrow at signing. Nobody can withdraw unilaterally — release is defined by the agreement itself.",
    },
    {
        n: "03",
        k: "Prove",
        title: "Continuous evidence",
        body: "Every artifact, message and hand-off is time-sealed against the agreement. The truthful timeline builds itself.",
    },
    {
        n: "04",
        k: "Settle",
        title: "Deterministic release",
        body: "Milestones verify against evidence. Payment releases automatically. Disputes trigger a structured resolution path.",
    },
    {
        n: "05",
        k: "Carry",
        title: "Portable reputation",
        body: "Both sides earn Respect Points and Skill Trust that live on your identity — not the platform's marketplace.",
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how"
            data-testid="how-section"
            className="section-ink relative py-32 lg:py-40 overflow-hidden"
        >
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-40">
                <div className="hero-grid" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-8 mb-24">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-mono text-white/55 mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-white/50" />
                            Chapter 02 — How it works
                        </div>
                        <h2
                            className="font-display text-white"
                            style={{
                                fontSize: "clamp(40px, 5.4vw, 80px)",
                                lineHeight: 0.98,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            One protocol.
                            <br />
                            <span style={{ fontStyle: "italic" }}>
                                Five states.
                            </span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
                        <p
                            className="text-white/60"
                            style={{
                                fontSize: 18,
                                lineHeight: 1.55,
                                fontWeight: 300,
                                maxWidth: 520,
                            }}
                        >
                            RESXPECT replaces contracts, invoices, evidence
                            logs, dispute forms and review pages with a single
                            continuous instrument — moving deterministically
                            through five well-defined states.
                        </p>
                    </div>
                </div>

                {/* Stage rail */}
                <div className="relative">
                    {/* horizontal rail line */}
                    <div className="hidden lg:block absolute top-[60px] left-8 right-8 h-px bg-white/12" />
                    <div className="hidden lg:block absolute top-[60px] left-8 h-px bg-[#FF5B1F] shimmer" style={{ width: "38%" }} />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-4">
                        {stages.map((s, i) => (
                            <div
                                key={s.n}
                                data-testid={`stage-${s.n}`}
                                className="relative"
                            >
                                {/* Node dot */}
                                <div className="hidden lg:flex absolute -top-[6px] left-8 items-center justify-center">
                                    <div
                                        className="w-3 h-3 border border-white/30 bg-[#0a0a0b]"
                                        style={{
                                            outline:
                                                i < 2
                                                    ? "1px solid #FF5B1F"
                                                    : "none",
                                        }}
                                    />
                                </div>

                                <div className="pt-[92px] lg:pt-[92px] px-6">
                                    <div className="label-mono text-white/45 mb-3">
                                        {s.n} · {s.k}
                                    </div>
                                    <h3
                                        className="font-display text-white mb-4"
                                        style={{
                                            fontSize: 24,
                                            lineHeight: 1.1,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {s.title}
                                    </h3>
                                    <p
                                        className="text-white/55"
                                        style={{
                                            fontSize: 14.5,
                                            lineHeight: 1.6,
                                            fontWeight: 300,
                                        }}
                                    >
                                        {s.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
