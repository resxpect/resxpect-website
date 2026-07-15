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
            className="section-warm relative py-28 lg:py-36"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-10 items-end mb-16">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="label-mono mb-6 flex items-center gap-3">
                            <span
                                className="w-6 h-px"
                                style={{ background: "var(--ink)" }}
                            />
                            Chapter 01 — The problem
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
                            Independent work is built on{" "}
                            <span style={{ fontStyle: "italic" }}>
                                brittle&nbsp;trust.
                            </span>
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                        <p
                            style={{
                                fontSize: 17,
                                lineHeight: 1.55,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                                maxWidth: 480,
                            }}
                        >
                            Freelancers, studios and their clients operate
                            without shared instruments. Every project rebuilds
                            trust from scratch — and every dispute is settled
                            by whoever has the loudest voice.
                        </p>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid var(--line)" }}>
                    {rows.map((r) => (
                        <div
                            key={r.id}
                            data-testid={`trust-row-${r.id}`}
                            className="grid grid-cols-12 gap-8 py-8 lg:py-10 group"
                            style={{ borderBottom: "1px solid var(--line)" }}
                        >
                            <div
                                className="col-span-2 lg:col-span-1 label-mono pt-2"
                            >
                                {r.id}
                            </div>
                            <div className="col-span-10 lg:col-span-5">
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: "clamp(22px, 2.4vw, 32px)",
                                        letterSpacing: "-0.02em",
                                        color: "var(--ink)",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {r.title}
                                </h3>
                            </div>
                            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                                <p
                                    style={{
                                        fontSize: 15.5,
                                        lineHeight: 1.6,
                                        fontWeight: 400,
                                        color: "var(--ink-2)",
                                    }}
                                >
                                    {r.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustProblem;
