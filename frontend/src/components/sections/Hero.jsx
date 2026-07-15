import React from "react";
import ProtocolVisual from "../ProtocolVisual";

const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="section-white relative pt-[132px] pb-28 lg:pb-32"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Left — editorial content */}
                    <div className="col-span-12 lg:col-span-7 fade-up">
                        <div className="label-mono mb-8 flex items-center gap-3">
                            <span className="marker" />
                            The trust layer for independent work
                        </div>

                        <h1
                            className="font-display mb-10"
                            style={{
                                fontSize: "clamp(48px, 6.6vw, 100px)",
                                lineHeight: 0.94,
                                letterSpacing: "-0.035em",
                                color: "var(--ink)",
                                maxWidth: 780,
                            }}
                        >
                            The trust layer
                            <br />
                            for{" "}
                            <span
                                style={{
                                    fontStyle: "italic",
                                    color: "var(--orange)",
                                    fontWeight: 400,
                                }}
                            >
                                independent
                            </span>
                            <br />
                            work.
                        </h1>

                        <p
                            style={{
                                fontSize: 18,
                                lineHeight: 1.55,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                                maxWidth: 520,
                                marginBottom: 44,
                            }}
                        >
                            RESXPECT enables people to enter digital or
                            real-world agreements safely, without needing to
                            trust each other first.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                data-testid="hero-cta-primary"
                                href="#request"
                                className="btn-primary is-orange"
                            >
                                Request access
                                <span aria-hidden>→</span>
                            </a>
                            <a
                                data-testid="hero-cta-secondary"
                                href="#how"
                                className="btn-ghost"
                            >
                                How it works
                            </a>
                        </div>
                    </div>

                    {/* Right — protocol visual */}
                    <div className="col-span-12 lg:col-span-5">
                        <ProtocolVisual />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
