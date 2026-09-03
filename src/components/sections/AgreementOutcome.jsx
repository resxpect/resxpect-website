import React from "react";

const AgreementOutcome = () => {
    return (
        <section
            id="agreement-outcome"
            data-testid="agreement-outcome-section"
            className="section-white py-24 lg:py-32"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: 980,
                        margin: "0 auto",
                    }}
                >
                    <div
                        className="label-pill on-paper agreement-outcome-label mb-6"
                        style={{
                            display: "inline-flex",
                        }}
                    >
                        What The Agreement Leaves Behind
                    </div>

                    <h2
                        className="font-display agreement-outcome-heading"
                        style={{
                            fontSize: "clamp(30px, 3.8vw, 52px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.025em",
                            color: "var(--ink)",
                            maxWidth: 920,
                            margin: "0 auto",
                        }}
                    >
                        A portable reputation built from{" "}
                        <span style={{ color: "var(--validator)" }}>
                            real outcomes
                        </span>
                        .
                    </h2>

                    <p
                        className="agreement-outcome-copy"
                        style={{
                            fontSize: 17.5,
                            lineHeight: 1.7,
                            color: "var(--ink-2)",
                            maxWidth: 820,
                            margin: "28px auto 0",
                        }}
                    >
                        Each completed agreement adds to a verifiable
                        record of commitments made and work delivered.
                    </p>
                </div>

                <div
                    className="agreement-outcome-list"
                    style={{
                        marginTop: 64,
                        paddingTop: 34,
                        borderTop: "1px solid rgba(20,20,20,0.10)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "14px 28px",
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                    }}
                >
                    <span style={{ color: "var(--creator)" }}>
                        Protected funds
                    </span>

                    <span
                        className="agreement-outcome-dot"
                        aria-hidden="true"
                        style={{
                            color: "var(--ink-2)",
                            opacity: 0.4,
                        }}
                    >
                        •
                    </span>

                    <span style={{ color: "var(--runner)" }}>
                        Connected evidence
                    </span>

                    <span
                        className="agreement-outcome-dot"
                        aria-hidden="true"
                        style={{
                            color: "var(--ink-2)",
                            opacity: 0.4,
                        }}
                    >
                        •
                    </span>

                    <span style={{ color: "var(--validator)" }}>
                        Clear outcomes
                    </span>

                    <span
                        className="agreement-outcome-dot"
                        aria-hidden="true"
                        style={{
                            color: "var(--ink-2)",
                            opacity: 0.4,
                        }}
                    >
                        •
                    </span>

                    <span style={{ color: "var(--ink)" }}>
                        Portable reputation
                    </span>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    #agreement-outcome {
                        padding-top: 56px !important;
                        padding-bottom: 64px !important;
                    }

                    .agreement-outcome-label {
                        margin-bottom: 18px !important;
                        font-size: 10px !important;
                    }

                    .agreement-outcome-heading {
                        font-size: clamp(26px, 8.2vw, 35px) !important;
                        line-height: 1.1 !important;
                        max-width: 340px !important;
                    }

                    .agreement-outcome-copy {
                        font-size: 15.5px !important;
                        line-height: 1.65 !important;
                        max-width: 330px !important;
                        margin-top: 20px !important;
                    }

                    .agreement-outcome-list {
                        margin-top: 40px !important;
                        padding-top: 28px !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 14px !important;
                        font-size: 13px !important;
                        line-height: 1.3 !important;
                    }

                    .agreement-outcome-dot {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AgreementOutcome;