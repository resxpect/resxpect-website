import React from "react";

const flow = [
    { title: "Evidence is submitted", body: "The person raising the concern shares the relevant files, messages and context." },
    { title: "The other party responds", body: "The counterparty adds their perspective and any supporting evidence of their own." },
    { title: "Independent validators review", body: "A panel of neutral reviewers examines the case against the original agreement." },
    { title: "Protected payment follows the outcome", body: "The escrowed amount is released according to the verified decision." },
];

const Disputes = () => {
    return (
        <section id="disputes" data-testid="disputes-section" className="section-warm py-24 lg:py-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-pill mb-6">Dispute Resolution</div>
                        <h2 className="font-display" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.05, color: "var(--ink)" }}>
                            Fair outcomes when the two sides <span style={{ color: "var(--orange)" }}>disagree.</span>
                        </h2>
                        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 20 }}>
                            When something isn't going to plan, RESXPECT gives both people a clear,
                            evidence-based way to resolve it — without lawyers, chargebacks or
                            long email threads.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <div className="card p-6 lg:p-8">
                            <ol className="space-y-6">
                                {flow.map((step, i) => (
                                    <li key={step.title} className="grid grid-cols-[48px_1fr] gap-4"
                                        data-testid={`dispute-step-${i + 1}`}>
                                        <div className="flex items-start justify-center">
                                            <span style={{
                                                width: 36, height: 36, borderRadius: 10,
                                                background: "var(--orange-soft)", color: "var(--orange)",
                                                display: "inline-flex", alignItems: "center", justifyContent: "center",
                                                fontWeight: 800, fontSize: 14,
                                            }}>
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>
                                                {step.title}
                                            </div>
                                            <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{step.body}</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disputes;
