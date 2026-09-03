import React from "react";

const steps = [
    {
        n: "01",
        title: "Commit",
        body: "Both parties accept clear terms, and the funds are protected.",
        color: "creator",
        icon: (
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M9 13l2 2 4-4" />
            </svg>
        ),
    },
    {
        n: "02",
        title: "Deliver",
        body: "The work is delivered, and supporting evidence remains connected to the agreement.",
        color: "runner",
        icon: (
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 4h12l4 5v11H4z" />
                <path d="M16 4v5h4M8 13h8M8 17h5" />
            </svg>
        ),
    },
    {
        n: "03",
        title: "Verify",
        body: "The outcome is reviewed and becomes part of a verifiable work history.",
        color: "validator",
        icon: (
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
];

const HowItWorks = () => {
    return (
        <section
            id="how"
            data-testid="how-section"
            className="section-warm py-24 lg:py-32"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-16">
                    <div className="label-pill on-paper mb-6">
                        How It Works
                    </div>

                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(30px, 3.8vw, 52px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.025em",
                            color: "var(--ink)",
                            margin: 0,
                        }}
                    >
                        Three steps. One{" "}
                        <span style={{ color: "var(--validator)" }}>
                            protected
                        </span>{" "}
                        outcome.
                    </h2>

                    <p
                        style={{
                            fontSize: 17.5,
                            lineHeight: 1.6,
                            color: "var(--ink-2)",
                            marginTop: 20,
                            marginBottom: 0,
                            maxWidth: 680,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Create clear agreements, protect the funds and
                        build a verifiable record of the outcome.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting rail — desktop */}
                    <div
                        className="hidden lg:block absolute top-[34px] left-[8%] right-[8%] h-px"
                        style={{
                            background: "var(--line-strong)",
                        }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-14">
                        {steps.map((step) => (
                            <div
                                key={step.n}
                                data-testid={`step-${step.n}`}
                                className="relative text-center"
                            >
                                <div
                                    className="mx-auto flex items-center justify-center relative z-10"
                                    style={{
                                        width: 68,
                                        height: 68,
                                        borderRadius: "50%",
                                        border: `1.5px solid var(--${step.color})`,
                                        color: `var(--${step.color})`,
                                        background: "var(--paper)",
                                        marginBottom: 22,
                                    }}
                                >
                                    {step.icon}
                                </div>

                                <div
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: `var(--${step.color})`,
                                        marginBottom: 8,
                                    }}
                                >
                                    Step {step.n}
                                </div>

                                <h3
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 800,
                                        letterSpacing: "-0.02em",
                                        color: "var(--ink)",
                                        margin: "0 0 10px",
                                    }}
                                >
                                    {step.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: 15.5,
                                        lineHeight: 1.6,
                                        color: "var(--ink-2)",
                                        maxWidth: 320,
                                        margin: "0 auto",
                                    }}
                                >
                                    {step.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;