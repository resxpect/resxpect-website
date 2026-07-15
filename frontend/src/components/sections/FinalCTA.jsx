import React from "react";
import Logo from "../Logo";

const FinalCTA = () => {
    return (
        <section
            id="request"
            data-testid="final-cta-section"
            className="section-ink relative overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(60% 60% at 50% 100%, rgba(255,91,31,0.20) 0%, rgba(255,91,31,0) 60%)",
                }}
            />
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="hero-grid" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12 py-32 lg:py-48">
                <div className="max-w-[1000px]">
                    <div className="label-mono text-white/55 mb-10 flex items-center gap-3">
                        <span className="marker pulse-dot" />
                        Enter the protocol
                    </div>
                    <h2
                        className="font-display text-white mb-10"
                        style={{
                            fontSize: "clamp(56px, 9vw, 148px)",
                            lineHeight: 0.88,
                            letterSpacing: "-0.04em",
                        }}
                    >
                        Independent
                        <br />
                        work,{" "}
                        <span
                            style={{
                                fontStyle: "italic",
                                color: "#FF5B1F",
                                fontWeight: 300,
                            }}
                        >
                            respected
                        </span>
                        <br />
                        by default.
                    </h2>
                    <p
                        className="text-white/60 max-w-[560px] mb-14"
                        style={{
                            fontSize: 18,
                            lineHeight: 1.55,
                            fontWeight: 300,
                        }}
                    >
                        RESXPECT is opening access in cohorts. Studios,
                        collectives and independent operators can request
                        early access to the protocol below.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            data-testid="final-cta-primary"
                            href="#request"
                            className="btn-primary"
                        >
                            Request early access
                            <span aria-hidden>→</span>
                        </a>
                        <a
                            data-testid="final-cta-secondary"
                            href="#spec"
                            className="btn-ghost"
                        >
                            Read the whitepaper
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/8">
                <div className="max-w-[1440px] mx-auto px-8 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <Logo size={22} />
                    <div className="flex flex-wrap items-center gap-8 label-mono text-white/45">
                        <a href="#spec" className="hover:text-white transition">
                            Specification
                        </a>
                        <a href="#security" className="hover:text-white transition">
                            Security
                        </a>
                        <a href="#legal" className="hover:text-white transition">
                            Legal
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>
                    <div className="label-mono text-white/35">
                        © 2026 · Protocol v1.4
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default FinalCTA;
