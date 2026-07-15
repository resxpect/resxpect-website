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
            className="section-white relative py-28 lg:py-36"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-mono mb-6 flex items-center gap-3">
                            <span
                                className="w-6 h-px"
                                style={{ background: "var(--ink)" }}
                            />
                            Chapter 04 — Reputation
                        </div>
                        <h2
                            className="font-display mb-8"
                            style={{
                                fontSize: "clamp(32px, 4.2vw, 56px)",
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                color: "var(--ink)",
                            }}
                        >
                            Respect Points.{" "}
                            <span style={{ fontStyle: "italic" }}>
                                Skill Trust.
                            </span>{" "}
                            Yours to carry.
                        </h2>
                        <p
                            className="mb-10"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                                maxWidth: 480,
                            }}
                        >
                            Trust is measured in two dimensions. Respect
                            Points capture how you conduct engagements; Skill
                            Trust quantifies verified competence per
                            discipline. Both live on your RESXPECT identity
                            and travel with you.
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-[480px]">
                            <div className="edge-warm p-6">
                                <div className="label-mono mb-3">
                                    Respect Points
                                </div>
                                <div
                                    className="font-display"
                                    style={{
                                        fontSize: 44,
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                        color: "var(--ink)",
                                    }}
                                >
                                    1,247
                                </div>
                                <div
                                    className="label-mono mt-3"
                                    style={{ color: "var(--orange)" }}
                                >
                                    +42 this quarter
                                </div>
                            </div>
                            <div className="edge-warm p-6">
                                <div className="label-mono mb-3">
                                    Verified skills
                                </div>
                                <div
                                    className="font-display"
                                    style={{
                                        fontSize: 44,
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                        color: "var(--ink)",
                                    }}
                                >
                                    07
                                </div>
                                <div className="label-mono mt-3">
                                    Across 4 domains
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <div className="edge">
                            <div
                                className="flex items-center justify-between px-6 py-4"
                                style={{ borderBottom: "1px solid var(--line)" }}
                            >
                                <div className="flex items-center gap-3 label-mono">
                                    <span className="marker" />
                                    Identity · Zara K.
                                </div>
                                <div className="label-mono">
                                    RX·0xA107·C9E
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <div
                                            className="font-display"
                                            style={{
                                                fontSize: 32,
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1,
                                                color: "var(--ink)",
                                            }}
                                        >
                                            Zara Kellerman
                                        </div>
                                        <div className="label-mono mt-3">
                                            Independent · Berlin · Since 2022
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="label-mono">Tier</div>
                                        <div
                                            className="font-display"
                                            style={{
                                                fontSize: 22,
                                                letterSpacing: "-0.02em",
                                                fontStyle: "italic",
                                                color: "var(--orange)",
                                            }}
                                        >
                                            Sovereign
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="pt-6"
                                    style={{
                                        borderTop: "1px solid var(--line)",
                                    }}
                                >
                                    <div className="label-mono mb-4">
                                        Skill Trust
                                    </div>
                                    <div className="space-y-5">
                                        {skills.map((s) => (
                                            <div key={s.name}>
                                                <div className="flex items-baseline justify-between mb-2">
                                                    <div
                                                        style={{
                                                            color: "var(--ink)",
                                                            fontSize: 14,
                                                        }}
                                                    >
                                                        {s.name}
                                                    </div>
                                                    <div className="flex items-center gap-4 label-mono">
                                                        <span>
                                                            {s.jobs} verified
                                                        </span>
                                                        <span
                                                            style={{
                                                                color: "var(--ink)",
                                                            }}
                                                        >
                                                            {s.trust}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="relative h-[3px]"
                                                    style={{
                                                        background:
                                                            "var(--paper-3)",
                                                    }}
                                                >
                                                    <div
                                                        className="absolute top-0 left-0 h-full"
                                                        style={{
                                                            width: `${s.trust}%`,
                                                            background:
                                                                "var(--orange)",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
