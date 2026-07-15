import React from "react";

const stages = [
    {
        n: "01",
        title: "Structured agreement",
        body: "Scope, deliverables, milestones and terms are captured in a single shared record that both parties sign.",
    },
    {
        n: "02",
        title: "Payment protection",
        body: "Funds move into neutral escrow at signing. Release is defined by the agreement, not by either party alone.",
    },
    {
        n: "03",
        title: "Continuous evidence",
        body: "Every artifact, message and hand-off is time-stamped against the agreement so the timeline is never in doubt.",
    },
    {
        n: "04",
        title: "Deterministic release",
        body: "Milestones verify against evidence and payment releases automatically. Disputes follow a structured path.",
    },
    {
        n: "05",
        title: "Portable reputation",
        body: "Both sides earn a verifiable record of trust that lives on your identity, not inside any single platform.",
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how"
            data-testid="how-section"
            className="section-white relative py-28 lg:py-36"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-10 mb-16">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="label-mono mb-6 flex items-center gap-3">
                            <span
                                className="w-6 h-px"
                                style={{ background: "var(--ink)" }}
                            />
                            Chapter 02 — How it works
                        </div>
                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(36px, 4.8vw, 68px)",
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                color: "var(--ink)",
                            }}
                        >
                            One protocol.{" "}
                            <span style={{ fontStyle: "italic" }}>
                                Five clear stages.
                            </span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end">
                        <p
                            style={{
                                fontSize: 17,
                                lineHeight: 1.55,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                                maxWidth: 480,
                            }}
                        >
                            RESXPECT replaces contracts, invoices, evidence
                            logs, dispute forms and review pages with a single
                            continuous instrument that moves through five
                            well-defined stages.
                        </p>
                    </div>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
                    style={{ borderTop: "1px solid var(--line)" }}
                >
                    {stages.map((s, i) => (
                        <div
                            key={s.n}
                            data-testid={`stage-${s.n}`}
                            className="p-8 lg:p-10 relative"
                            style={{
                                borderRight:
                                    i < stages.length - 1
                                        ? "1px solid var(--line)"
                                        : "none",
                                borderBottom: "1px solid var(--line)",
                            }}
                        >
                            <div className="label-mono mb-6">{s.n}</div>
                            <h3
                                className="font-display mb-4"
                                style={{
                                    fontSize: 22,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.02em",
                                    color: "var(--ink)",
                                }}
                            >
                                {s.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14.5,
                                    lineHeight: 1.6,
                                    fontWeight: 400,
                                    color: "var(--ink-2)",
                                }}
                            >
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
