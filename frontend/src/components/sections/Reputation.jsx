import React from "react";

const Reputation = () => {
    return (
        <section id="reputation" data-testid="reputation-section" className="section-white py-24 lg:py-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-14">
                    <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--ink)" }}>
                        Reputation you <span style={{ color: "var(--orange)" }}>truly own.</span>
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 18 }}>
                        Two clear measures that travel with the person, not the platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Respect Points */}
                    <div className="card p-8 lg:p-10" data-testid="panel-respect-points">
                        <div className="flex items-center justify-between mb-6">
                            <div style={{
                                width: 46, height: 46, borderRadius: 14, background: "var(--orange-soft)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="6" /><path d="M15.5 13l1.5 8-5-3-5 3 1.5-8" />
                                </svg>
                            </div>
                            <span style={{
                                padding: "5px 10px", fontSize: 11, borderRadius: 999,
                                background: "var(--orange-soft)", color: "var(--orange)", fontWeight: 700,
                                textTransform: "uppercase", letterSpacing: "0.08em",
                            }}>Level 3</span>
                        </div>
                        <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 10 }}>
                            Respect Points
                        </h3>
                        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 24 }}>
                            Respect Points reflect overall reliability and conduct across every
                            agreement — how consistently a person shows up, communicates and
                            follows through.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "Earned only on successfully completed agreements",
                                "Grows across every trusted engagement",
                                "Travels with the person across platforms",
                            ].map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span style={{
                                        width: 18, height: 18, borderRadius: 9, background: "var(--orange-soft)",
                                        display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: 2,
                                        flexShrink: 0,
                                    }}>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                                    </span>
                                    <span style={{ fontSize: 14.5, color: "var(--ink)" }}>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skill Trust */}
                    <div className="card p-8 lg:p-10" data-testid="panel-skill-trust">
                        <div className="flex items-center justify-between mb-6">
                            <div style={{
                                width: 46, height: 46, borderRadius: 14, background: "var(--orange-soft)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                            }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <span style={{
                                padding: "5px 10px", fontSize: 11, borderRadius: 999,
                                background: "var(--orange-soft)", color: "var(--orange)", fontWeight: 700,
                                textTransform: "uppercase", letterSpacing: "0.08em",
                            }}>Per skill</span>
                        </div>
                        <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 10 }}>
                            Skill Trust
                        </h3>
                        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 24 }}>
                            Skill Trust reflects demonstrated ability within a specific declared
                            skill. Each discipline is tracked independently so competence is
                            visible where it matters.
                        </p>
                        <div className="space-y-3.5">
                            {[
                                ["Product design", 88],
                                ["Brand identity", 76],
                                ["Frontend engineering", 64],
                            ].map(([name, val]) => (
                                <div key={name}>
                                    <div className="flex justify-between mb-1.5">
                                        <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)" }}>{name}</span>
                                        <span style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "IBM Plex Mono, monospace" }}>{val}</span>
                                    </div>
                                    <div style={{ height: 6, background: "#f4f0ea", borderRadius: 4, overflow: "hidden" }}>
                                        <div style={{ width: `${val}%`, height: "100%", background: "var(--orange)", borderRadius: 4 }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reputation;
