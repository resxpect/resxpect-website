import React from "react";

const skills = [
    { name: "Brand identity", trust: 94, jobs: 42 },
    { name: "Motion design", trust: 88, jobs: 31 },
    { name: "Editorial art direction", trust: 82, jobs: 17 },
    { name: "Type systems", trust: 71, jobs: 9 },
];

const RespectPoints = () => {
    return (
        <section
            id="reputation"
            data-testid="reputation-section"
            className="section-ink relative py-32 lg:py-40 overflow-hidden"
        >
            {/* faint diagonal grid */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="hero-grid" />
            </div>
            <div
                className="absolute -right-40 top-20 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(255,91,31,0.18), rgba(255,91,31,0) 60%)",
                }}
            />

            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left content */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="label-mono text-white/55 mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-white/50" />
                            Chapter 04 — Reputation
                        </div>
                        <h2
                            className="font-display text-white mb-8"
                            style={{
                                fontSize: "clamp(36px, 4.8vw, 68px)",
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Respect Points.
                            <br />
                            <span style={{ fontStyle: "italic" }}>
                                Skill Trust.
                            </span>
                            <br />
                            Yours to carry.
                        </h2>
                        <p
                            className="text-white/60 mb-10 max-w-[520px]"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 300,
                            }}
                        >
                            Trust is measured in two dimensions. Respect Points
                            capture how you conduct engagements. Skill Trust
                            quantifies verified competence per discipline.
                            Both live on your RESXPECT identity — portable
                            across studios, platforms and eras.
                        </p>

                        <div className="grid grid-cols-2 gap-6 max-w-[520px]">
                            <div className="edge p-6">
                                <div className="label-mono text-white/50 mb-3">
                                    Respect Points
                                </div>
                                <div
                                    className="font-display text-white"
                                    style={{
                                        fontSize: 56,
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                    }}
                                >
                                    1,247
                                </div>
                                <div className="label-mono text-[#FF5B1F] mt-4">
                                    +42 this quarter
                                </div>
                            </div>
                            <div className="edge p-6">
                                <div className="label-mono text-white/50 mb-3">
                                    Verified skills
                                </div>
                                <div
                                    className="font-display text-white"
                                    style={{
                                        fontSize: 56,
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                    }}
                                >
                                    07
                                </div>
                                <div className="label-mono text-white/50 mt-4">
                                    Across 4 domains
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: identity card */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="edge relative bg-[#0d0d0f]/70 backdrop-blur-sm">
                            {/* Card top */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
                                <div className="flex items-center gap-3 label-mono text-white/55">
                                    <span className="w-1.5 h-1.5 bg-[#FF5B1F]" />
                                    Identity · Zara K.
                                </div>
                                <div className="label-mono text-white/40">
                                    RX·0xA107·C9E
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div
                                            className="font-display text-white"
                                            style={{
                                                fontSize: 40,
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1,
                                            }}
                                        >
                                            Zara Kellerman
                                        </div>
                                        <div className="label-mono text-white/50 mt-3">
                                            Independent · Berlin · Since 2022
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="label-mono text-white/50">
                                            Tier
                                        </div>
                                        <div
                                            className="font-display text-[#FF5B1F]"
                                            style={{
                                                fontSize: 26,
                                                letterSpacing: "-0.02em",
                                                fontStyle: "italic",
                                            }}
                                        >
                                            Sovereign
                                        </div>
                                    </div>
                                </div>

                                {/* Skill Trust bars */}
                                <div className="border-t border-white/8 pt-6">
                                    <div className="label-mono text-white/45 mb-4">
                                        Skill Trust
                                    </div>
                                    <div className="space-y-5">
                                        {skills.map((s) => (
                                            <div key={s.name}>
                                                <div className="flex items-baseline justify-between mb-2">
                                                    <div className="text-white/85 text-sm">
                                                        {s.name}
                                                    </div>
                                                    <div className="flex items-center gap-4 label-mono text-white/50">
                                                        <span>
                                                            {s.jobs} verified
                                                        </span>
                                                        <span className="text-[#FF5B1F]">
                                                            {s.trust}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="relative h-[3px] bg-white/8">
                                                    <div
                                                        className="absolute top-0 left-0 h-full bg-[#FF5B1F]"
                                                        style={{
                                                            width: `${s.trust}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer meta */}
                                <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-3 gap-6">
                                    {[
                                        ["99", "On-time rate"],
                                        ["4.98", "Client sentiment"],
                                        ["0", "Escalated disputes"],
                                    ].map(([n, l]) => (
                                        <div key={l}>
                                            <div
                                                className="font-display text-white"
                                                style={{
                                                    fontSize: 24,
                                                    letterSpacing: "-0.02em",
                                                }}
                                            >
                                                {n}
                                            </div>
                                            <div className="label-mono text-white/40 mt-1">
                                                {l}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RespectPoints;
