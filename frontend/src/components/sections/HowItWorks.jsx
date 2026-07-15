import React from "react";

const steps = [
    { n: "01", title: "Create an Agreement", body: "Both sides agree on scope, deadlines and evidence up front." },
    { n: "02", title: "Protect Payment", body: "Funds are held safely and only released against defined outcomes." },
    { n: "03", title: "Complete the Work", body: "Progress and deliverables are recorded against the agreement." },
    { n: "04", title: "Verify the Outcome", body: "The other party confirms the work meets the agreed terms." },
    { n: "05", title: "Build Reputation", body: "Successful completion contributes to a portable trust record." },
];

const HowItWorks = () => {
    return (
        <section id="how" data-testid="how-section" className="section-warm py-24 lg:py-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-16">
                    <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--ink)" }}>
                        How <span style={{ color: "var(--orange)" }}>RESXPECT</span> works.
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 18 }}>
                        Five clear steps that turn a handshake into a protected outcome.
                    </p>
                </div>

                {/* Desktop horizontal */}
                <div className="hidden lg:block relative">
                    <div className="absolute top-[26px] left-[6%] right-[6%] h-px" style={{ background: "var(--line-strong)" }} />
                    <div className="grid grid-cols-5 gap-6">
                        {steps.map((s) => (
                            <div key={s.n} className="relative text-center" data-testid={`how-step-${s.n}`}>
                                <div className="mx-auto flex items-center justify-center relative z-10"
                                    style={{
                                        width: 52, height: 52, borderRadius: 26,
                                        background: "#fff", border: "1.5px solid var(--orange)",
                                        color: "var(--orange)", fontWeight: 800, fontSize: 15,
                                        marginBottom: 20,
                                    }}>
                                    {s.n}
                                </div>
                                <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 8, letterSpacing: "-0.01em" }}>
                                    {s.title}
                                </h3>
                                <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)", padding: "0 6px" }}>
                                    {s.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile vertical */}
                <div className="lg:hidden space-y-5">
                    {steps.map((s) => (
                        <div key={s.n} className="card p-6 flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center"
                                style={{
                                    width: 44, height: 44, borderRadius: 22,
                                    background: "#fff", border: "1.5px solid var(--orange)",
                                    color: "var(--orange)", fontWeight: 800,
                                }}>
                                {s.n}
                            </div>
                            <div>
                                <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", marginBottom: 4 }}>{s.title}</h3>
                                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{s.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
