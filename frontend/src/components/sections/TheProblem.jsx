import React from "react";

const TheProblem = () => {
    return (
        <section
            id="problem"
            data-testid="problem-section"
            className="section-white pt-16 pb-20 lg:pt-24 lg:pb-32"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                {/* Main layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left: main problem */}
                    <div className="lg:col-span-7 min-w-0">
                        <div className="label-pill on-paper mb-6">
                            The Problem
                        </div>

                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(31px, 8.7vw, 46px)",
                                lineHeight: 1.08,
                                letterSpacing: "-0.03em",
                                color: "var(--ink)",
                                maxWidth: 760,
                                margin: 0,
                                overflowWrap: "break-word",
                                wordBreak: "normal",
                            }}
                        >
                            A promise should not be the only thing protecting{" "}
                            <span
                                style={{
                                    color: "var(--creator)",
                                    display: "inline",
                                }}
                            >
                                payment
                            </span>
                            ,{" "}
                            <span
                                style={{
                                    color: "var(--runner)",
                                    display: "inline",
                                }}
                            >
                                work
                            </span>{" "}
                            or{" "}
                            <span
                                style={{
                                    color: "var(--validator)",
                                    display: "inline",
                                }}
                            >
                                reputation
                            </span>
                            .
                        </h2>
                    </div>

                    {/* Right: risks */}
                    <div className="lg:col-span-5 min-w-0">
                        <div
                            style={{
                                display: "grid",
                                width: "100%",
                                maxWidth: 560,
                            }}
                        >
                            <div
                                style={{
                                    paddingBottom: 22,
                                    borderBottom:
                                        "1px solid rgba(20,20,20,0.10)",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--ink)",
                                        margin: "0 0 10px",
                                    }}
                                >
                                    The person paying
                                </p>

                                <p
                                    style={{
                                        fontSize: "clamp(16px, 4.5vw, 17px)",
                                        lineHeight: 1.6,
                                        color: "var(--ink-2)",
                                        margin: 0,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Risks losing money or receiving poor work.
                                </p>
                            </div>

                            <div
                                style={{
                                    padding: "22px 0",
                                    borderBottom:
                                        "1px solid rgba(20,20,20,0.10)",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--ink)",
                                        margin: "0 0 10px",
                                    }}
                                >
                                    The person doing the work
                                </p>

                                <p
                                    style={{
                                        fontSize: "clamp(16px, 4.5vw, 17px)",
                                        lineHeight: 1.6,
                                        color: "var(--ink-2)",
                                        margin: 0,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Risks completing it and not being paid.
                                </p>
                            </div>

                            <div
                                style={{
                                    paddingTop: 22,
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 800,
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "var(--ink)",
                                        margin: "0 0 10px",
                                    }}
                                >
                                    Shared risk
                                </p>

                                <p
                                    style={{
                                        fontSize: "clamp(16px, 4.5vw, 17px)",
                                        lineHeight: 1.6,
                                        color: "var(--ink-2)",
                                        margin: 0,
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    Either person’s reputation can be damaged
                                    by an unfair or unverifiable claim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing principle */}
                <div
                    className="problem-closing"
                    style={{
                        marginTop: 64,
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <p
                        style={{
                            fontSize: "clamp(17px, 4.8vw, 22px)",
                            lineHeight: 1.55,
                            fontWeight: 550,
                            letterSpacing: "-0.01em",
                            color: "var(--ink-2)",
                            maxWidth: 860,
                            margin: 0,
                            overflowWrap: "break-word",
                        }}
                    >
                        Neither side should have to take all the risk simply
                        because they chose to trust the other.
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    #problem {
                        overflow-x: hidden;
                    }

                    #problem h2 {
                        max-width: 100% !important;
                    }

                    .problem-closing {
                        margin-top: 52px !important;
                        padding-left: 4px;
                        padding-right: 4px;
                    }
                }
            `}</style>
        </section>
    );
};

export default TheProblem;