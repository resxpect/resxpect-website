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
        <section
            id="roles"
            data-testid="roles-section"
            className="section-warm pt-16 pb-24 lg:pt-20 lg:pb-32"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                {/* Section heading */}
                <div className="text-center max-w-[820px] mx-auto mb-12 lg:mb-14">
                    <div className="label-pill on-paper mb-5">
                        Roles
                    </div>

                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(29px, 3.8vw, 50px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.025em",
                            color: "var(--ink)",
                            margin: 0,
                        }}
                    >
                        One identity. Different{" "}
                        <span style={{ color: "var(--runner)" }}>
                            roles
                        </span>
                        .
                    </h2>

                    <p
                        style={{
                            fontSize: 17,
                            lineHeight: 1.55,
                            color: "var(--ink-2)",
                            marginTop: 18,
                            marginBottom: 0,
                        }}
                    >
                        Roles describe what a person does inside an agreement
                        not who they are.
                    </p>
                </div>

                {/* Role cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {roles.map((role) => (
                        <div
                            key={role.name}
                            data-testid={`role-${role.name.toLowerCase()}`}
                            className="card p-8 relative overflow-hidden"
                        >
                            {/* Accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 4,
                                    background: `var(--${role.color})`,
                                }}
                            />

                            {/* Role initial */}
                            <div
                                style={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: "50%",
                                    background: `var(--${role.color}-soft)`,
                                    color: `var(--${role.color})`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 800,
                                    fontSize: 18,
                                    marginTop: 6,
                                    marginBottom: 20,
                                }}
                            >
                                {role.name[0]}
                            </div>

                            <h3
                                style={{
                                    fontSize: 26,
                                    fontWeight: 800,
                                    letterSpacing: "-0.02em",
                                    color: "var(--ink)",
                                    marginBottom: 10,
                                }}
                            >
                                {role.name}
                            </h3>

                            <p
                                style={{
                                    fontSize: 15.5,
                                    lineHeight: 1.6,
                                    color: "var(--ink-2)",
                                    marginBottom: 22,
                                }}
                            >
                                {role.body}
                            </p>

                            <ul
                                className="space-y-3"
                                style={{
                                    borderTop: "1px solid var(--line)",
                                    paddingTop: 18,
                                }}
                            >
                                {role.verbs.map((verb) => (
                                    <li
                                        key={verb}
                                        className="flex items-center gap-3"
                                    >
                                        <span
                                            style={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: "50%",
                                                background: `var(--${role.color})`,
                                                flexShrink: 0,
                                            }}
                                        />

                                        <span
                                            style={{
                                                fontSize: 14,
                                                color: "var(--ink)",
                                            }}
                                        >
                                            {verb}
                                        </span>
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