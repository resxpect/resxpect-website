import React from "react";
import ProtocolVisual from "../ProtocolVisual";

const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="hero-wrap grain relative pt-[120px] pb-28"
        >
            <div className="hero-grid" />

            {/* Top status bar */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                <div className="flex items-center justify-between mb-16 lg:mb-24">
                    <div className="flex items-center gap-4 label-mono text-white/55">
                        <span className="marker" />
                        <span>Protocol v1.4 · Live</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-6 label-mono text-white/40">
                        <span>Ledger sync 04:12 UTC</span>
                        <span className="text-white/20">/</span>
                        <span>17,204 agreements protected</span>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left: editorial content */}
                    <div className="col-span-12 lg:col-span-7 fade-up">
                        <div className="label-mono text-white/55 mb-8">
                            <span className="mr-3 text-[#FF5B1F]">◆</span>
                            The trust protocol for independent work
                        </div>

                        <h1
                            className="font-display text-white leading-[0.92] mb-10"
                            style={{
                                fontSize: "clamp(52px, 7.4vw, 112px)",
                                fontWeight: 400,
                                letterSpacing: "-0.035em",
                            }}
                        >
                            The trust layer
                            <br />
                            for{" "}
                            <span
                                style={{
                                    fontStyle: "italic",
                                    color: "#FF5B1F",
                                    fontWeight: 300,
                                }}
                            >
                                independent
                            </span>
                            <br />
                            work.
                        </h1>

                        <p
                            className="text-white/60 max-w-[560px] mb-12"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 300,
                            }}
                        >
                            RESXPECT is a settlement protocol for independent
                            work. Protected agreements, escrowed payment,
                            verifiable evidence, and portable reputation —
                            operated as one continuous system, not five
                            disconnected tools.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-14">
                            <a
                                data-testid="hero-cta-primary"
                                href="#request"
                                className="btn-primary"
                            >
                                Enter the protocol
                                <span aria-hidden>→</span>
                            </a>
                            <a
                                data-testid="hero-cta-secondary"
                                href="#how"
                                className="btn-ghost"
                            >
                                Read the specification
                            </a>
                        </div>

                        {/* Signal strip */}
                        <div className="border-t border-white/10 pt-6 max-w-[560px] grid grid-cols-3 gap-8">
                            {[
                                ["$28.4M", "Value protected"],
                                ["99.7%", "Dispute integrity"],
                                ["4.2 hrs", "Median resolution"],
                            ].map(([n, l]) => (
                                <div key={l}>
                                    <div
                                        className="font-display text-white"
                                        style={{
                                            fontSize: 30,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        {n}
                                    </div>
                                    <div className="label-mono text-white/45 mt-1">
                                        {l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: protocol visual */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="edge relative bg-[#0d0d0f]/70 backdrop-blur-sm">
                            <ProtocolVisual />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom ticker */}
            <div className="relative z-10 mt-24 border-t border-white/8 overflow-hidden">
                <div className="flex whitespace-nowrap ticker-track py-5">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center label-mono text-white/40"
                        >
                            {[
                                "Agreement · 0x4c9a — Signed",
                                "Escrow · $4,200 — Locked",
                                "Evidence · 14 artifacts — Sealed",
                                "Dispute · #A1207 — Resolved 3h 14m",
                                "Reputation · Zara K. — +42 RP",
                                "Agreement · 0x81ee — Signed",
                                "Skill Trust · Motion Design — Verified",
                                "Escrow · $12,750 — Released",
                            ].map((t, j) => (
                                <span
                                    key={`${i}-${j}`}
                                    className="mx-10 flex items-center gap-3"
                                >
                                    <span className="w-1 h-1 bg-[#FF5B1F]" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
