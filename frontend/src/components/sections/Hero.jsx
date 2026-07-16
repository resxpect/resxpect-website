import React from "react";

const Hero = () => {
    return (
        <section id="top" data-testid="hero-section" className="section-white relative pt-[128px] pb-20 lg:pb-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left */}
                    <div className="col-span-12 lg:col-span-6 fade-up">
                        <div className="label-pill mb-8" data-testid="hero-label">
                            Protected Agreements · Payment Security · Reputation You Own
                        </div>
                        <h1 className="font-display mb-8" style={{
                            fontSize: "clamp(40px, 4.8vw, 68px)",
                            lineHeight: 1.04, color: "var(--ink)",
                        }}>
                            The trust layer for<br />
                            <span style={{ color: "var(--orange)" }}>independent&nbsp;work.</span>
                        </h1>
                        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 520, marginBottom: 40 }}>
                            Work with anyone, anywhere — without having to trust them first.
                            RESXPECT protects the agreement, the payment and the proof, while
                            every successful outcome builds reputation.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            <a data-testid="hero-cta-primary" href="#request" className="btn-primary">
                                Explore RESXPECT
                                <span aria-hidden>→</span>
                            </a>
                            <a data-testid="hero-cta-secondary" href="#how" className="btn-outline">
                                How It Works
                            </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                            {["Protected agreements", "Fair outcomes", "Reputation earned"].map((b) => (
                                <div key={b} className="flex items-center gap-2.5">
                                    <span style={{
                                        width: 20, height: 20, borderRadius: 10, background: "var(--orange-soft)",
                                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </span>
                                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — single mock image */}
                    <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
                        <img
                            src="/assets/hero-mock.png"
                            alt="RESXPECT product preview"
                            data-testid="hero-mock-image"
                            className="w-full h-auto"
                            style={{
                                maxWidth: 700,
                                objectFit: "contain",
                                background: "transparent",
                                border: "none",
                                boxShadow: "none",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
