import React from "react";

const roles = [
    {
        name: "Creator",
        color: "creator",
        body: "Creates agreements, commits funds and reviews delivery.",
        verbs: ["Defines terms", "Commits funds", "Reviews evidence"],
    },
    {
        name: "Runner",
        color: "runner",
        body: "Accepts clear terms, completes the work and submits evidence.",
        verbs: ["Accepts terms", "Completes work", "Submits evidence"],
    },
    {
        name: "Validator",
        color: "validator",
        body: "Reviews disputed evidence and helps determine fair outcomes.",
        verbs: ["Reviews cases", "Weighs evidence", "Issues fair outcomes"],
    },
];

const Roles = () => {
    return (
        <section id="roles" data-testid="roles-section" className="section-white py-24 lg:py-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-14">
                    <div className="label-pill on-paper mb-6">Roles</div>
                    <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--ink)" }}>
                        Three roles. One shared agreement.
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 18 }}>
                        Roles describe what a person does inside an agreement — not who they are.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((r) => (
                        <div
                            key={r.name}
                            data-testid={`role-${r.name.toLowerCase()}`}
                            className="card p-8 relative overflow-hidden"
                        >
                            {/* Accent bar */}
                            <div style={{
                                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                                background: `var(--${r.color})`,
                            }} />
                            <div
                                style={{
                                    width: 54, height: 54, borderRadius: 999,
                                    background: `var(--${r.color}-soft)`,
                                    color: `var(--${r.color})`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontWeight: 800, fontSize: 18,
                                    marginBottom: 20, marginTop: 6,
                                }}
                            >
                                {r.name[0]}
                            </div>
                            <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 10 }}>
                                {r.name}
                            </h3>
                            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 22 }}>
                                {r.body}
                            </p>
                            <ul style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }} className="space-y-3">
                                {r.verbs.map((v) => (
                                    <li key={v} className="flex items-center gap-3">
                                        <span style={{
                                            width: 8, height: 8, borderRadius: 4,
                                            background: `var(--${r.color})`, flexShrink: 0,
                                        }} />
                                        <span style={{ fontSize: 14, color: "var(--ink)" }}>{v}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roles;
