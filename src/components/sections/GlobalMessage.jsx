import React from "react";

const GlobalMessage = () => {
    const colouredWordStyle = (color) => ({
        color: `var(--${color})`,
        display: "inline-block",
        marginLeft: "0.14em",
        marginRight: "0.14em",
    });

    return (
        <section
            id="global"
            data-testid="global-section"
            className="section-white pt-14 pb-24 lg:pt-16 lg:pb-32 relative overflow-hidden"
        >
            {/* Faint hexagon watermark */}
            <img
                src="/assets/logo-x.webp"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none select-none hidden lg:block"
                style={{
                    right: -70,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 480,
                    opacity: 0.045,
                    zIndex: 0,
                }}
            />

            <div
                className="max-w-[1360px] mx-auto px-6 lg:px-10 relative"
                style={{ zIndex: 1 }}
            >
                <div className="max-w-[1100px]">
                    <div
                        className="label-pill on-paper mb-7"
                        style={{
                            transform: "translateY(-6px)",
                        }}
                    >
                        A Universal Structure
                    </div>

                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(26px, 3.4vw, 48px)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.025em",
                            color: "var(--ink)",
                            margin: 0,
                        }}
                    >
                        <span style={{ display: "block" }}>
                            The
                            <span style={colouredWordStyle("creator")}>
                                people
                            </span>
                            change.
                        </span>

                        <span style={{ display: "block" }}>
                            The
                            <span style={colouredWordStyle("runner")}>
                                roles
                            </span>
                            change.
                        </span>

                        <span style={{ display: "block" }}>
                            The
                            <span style={colouredWordStyle("validator")}>
                                agreement
                            </span>
                            remains protected.
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: 17,
                            lineHeight: 1.65,
                            color: "var(--ink-2)",
                            maxWidth: 720,
                            margin: "42px 0 0",
                        }}
                    >
                        RESXPECT provides the same accountable agreement
                        structure across different people, professions,
                        cultures and locations. The structure does not change
                        only the people and roles within it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GlobalMessage;