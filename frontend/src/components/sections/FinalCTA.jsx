import React from "react";
import Logo from "../Logo";

const FinalCTA = () => {
    return (
        <section id="request" data-testid="final-cta-section" className="section-white">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
                <div className="card px-8 lg:px-16 py-16 lg:py-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{
                        background: "radial-gradient(60% 60% at 50% 100%, rgba(247,147,26,0.10), rgba(247,147,26,0) 70%)",
                    }} />
                    <div className="relative z-10 max-w-[820px] mx-auto">
                        <h2 className="font-display mb-6" style={{
                            fontSize: "clamp(36px, 5vw, 66px)", lineHeight: 1.04, color: "var(--ink)",
                        }}>
                            People can meet anywhere.<br />
                            Trust is built on <span style={{ color: "var(--orange)" }}>RESXPECT.</span>
                        </h2>
                        <p style={{ fontSize: 17.5, lineHeight: 1.55, color: "var(--ink-2)", marginBottom: 34, maxWidth: 620, marginLeft: "auto", marginRight: "auto" }}>
                            Join the early-access community helping shape a safer way to work with
                            people online and in the real world.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a data-testid="final-cta-primary" href="#request" className="btn-primary">
                                Request Access <span aria-hidden>→</span>
                            </a>
                            <a data-testid="final-cta-secondary" href="#about" className="btn-outline">
                                Read the Overview
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer id="about" style={{ borderTop: "1px solid var(--line)" }}>
                <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <Logo markHeight={26} wordmarkSize={18} />
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                        {[
                            ["How It Works", "#how"],
                            ["Protected Agreements", "#principles"],
                            ["Reputation", "#reputation"],
                            ["Disputes", "#disputes"],
                            ["Privacy", "#privacy"],
                            ["Terms", "#terms"],
                            ["Contact", "#contact"],
                        ].map(([label, href]) => (
                            <a key={label} href={href} className="nav-link" style={{ fontSize: 13.5 }}>
                                {label}
                            </a>
                        ))}
                    </div>
                    <div style={{ fontSize: 12.5, color: "var(--ink-3)" }}>© 2026 RESXPECT</div>
                </div>
            </footer>
        </section>
    );
};

export default FinalCTA;
