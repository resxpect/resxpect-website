import React from "react";

const rows = [
    {
        id: "01",
        title: "Unwritten agreements",
        body: "Most independent work still runs on a Slack thread and a good handshake. When context evaporates, so does accountability.",
    },
    {
        id: "02",
        title: "Payment without protection",
        body: "Invoices float unpaid. Refunds happen off-platform. Neither side has a neutral instrument holding the value in place.",
    },
    {
        id: "03",
        title: "Evidence lives everywhere",
        body: "Figma, Drive, GitHub, DMs. When a disagreement surfaces, nobody can assemble a truthful timeline in under a week.",
    },
    {
        id: "04",
        title: "Reputation is trapped",
        body: "Five-star reviews sit inside marketplaces that own you. Move platforms and the years of trust you built are erased.",
    },
];

const TrustProblem = () => {
    return (
        <section
            id="trust"
            data-testid="trust-problem-section"
            className="section-paper relative py-32 lg:py-40"
        >
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                {/* Section header */}
                <div className="grid grid-cols-12 gap-8 items-end mb-20">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-[color:var(--ink-warm)]" />
                            Chapter 01 — The problem
                        </div>
                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(40px, 5.4vw, 80px)",
                                lineHeight: 0.98,
                                letterSpacing: "-0.03em",
                                color: "var(--ink-warm)",
                            }}
                        >
                            Independent work
                            <br />
                            is built on{" "}
                            <span style={{ fontStyle: "italic" }}>
                                brittle&nbsp;trust.
                            </span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <p
                            className="text-[color:var(--ink-warm-2)]"
                            style={{
                                fontSize: 18,
                                lineHeight: 1.55,
                                fontWeight: 300,
                                maxWidth: 520,
                            }}
                        >
                            Freelancers, studios and their clients operate
                            without shared instruments. Every project rebuilds
                            trust from scratch — and every dispute is settled
                            by whoever has the loudest voice.
                        </p>
                    </div>
                </div>

                {/* Rows */}
                <div className="border-t border-[color:var(--paper-line-strong)]">
                    {rows.map((r) => (
                        <div
                            key={r.id}
                            data-testid={`trust-row-${r.id}`}
                            className="grid grid-cols-12 gap-8 py-10 border-b border-[color:var(--paper-line-strong)] group hover:bg-black/[0.02] transition-colors"
                        >
                            <div className="col-span-2 lg:col-span-1 label-mono text-[color:var(--ink-warm-2)] pt-2">
                                {r.id}
                            </div>
                            <div className="col-span-10 lg:col-span-5">
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: "clamp(24px, 2.6vw, 36px)",
                                        letterSpacing: "-0.02em",
                                        color: "var(--ink-warm)",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {r.title}
                                </h3>
                            </div>
                            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                                <p
                                    className="text-[color:var(--ink-warm-2)]"
                                    style={{
                                        fontSize: 16,
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                    }}
                                >
                                    {r.body}
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-1 lg:col-start-13 justify-self-end self-center text-[color:var(--ink-warm)] opacity-30 group-hover:opacity-100 group-hover:text-[#FF5B1F] transition-all">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustProblem;
