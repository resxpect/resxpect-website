import React from "react";
import Logo from "../Logo";

const FinalCTA = () => {
    return (
        <section
            id="request"
            data-testid="final-cta-section"
            className="section-white relative"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12 py-28 lg:py-40">
                <div className="max-w-[900px]">
                    <div className="label-mono mb-8 flex items-center gap-3">
                        <span className="marker" />
                        Enter the protocol
                    </div>
                    <h2
                        className="font-display mb-10"
                        style={{
                            fontSize: "clamp(48px, 8vw, 128px)",
                            lineHeight: 0.9,
                            letterSpacing: "-0.04em",
                            color: "var(--ink)",
                        }}
                    >
                        Independent work,{" "}
                        <span
                            style={{
                                fontStyle: "italic",
                                color: "var(--orange)",
                            }}
                        >
                            respected
                        </span>{" "}
                        by default.
                    </h2>
                    <p
                        style={{
                            fontSize: 18,
                            lineHeight: 1.55,
                            fontWeight: 400,
                            color: "var(--ink-2)",
                            maxWidth: 540,
                            marginBottom: 44,
                        }}
                    >
                        RESXPECT is opening access in cohorts. Studios,
                        collectives and independent operators can request
                        early access below.
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            data-testid="final-cta-primary"
                            href="#request"
                            className="btn-primary is-orange"
                        >
                            Request early access
                            <span aria-hidden>→</span>
                        </a>
                        <a
                            data-testid="final-cta-secondary"
                            href="#how"
                            className="btn-ghost"
                        >
                            Read how it works
                        </a>
                    </div>
                </div>
            </div>

            <footer style={{ borderTop: "1px solid var(--line)" }}>
                <div className="max-w-[1360px] mx-auto px-8 lg:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <Logo size={26} />
                    <div className="flex flex-wrap items-center gap-8 label-mono">
                        <a href="#how" className="hover:text-black transition">
                            How it works
                        </a>
                        <a
                            href="#agreements"
                            className="hover:text-black transition"
                        >
                            Agreements
                        </a>
                        <a
                            href="#reputation"
                            className="hover:text-black transition"
                        >
                            Reputation
                        </a>
                        <a
                            href="#disputes"
                            className="hover:text-black transition"
                        >
                            Disputes
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-black transition"
                        >
                            Contact
                        </a>
                    </div>
                    <div
                        className="label-mono"
                        style={{ color: "var(--ink-3)" }}
                    >
                        © 2026 RESXPECT
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default FinalCTA;
