import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
    const videoRef = useRef(null);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(mq.matches);
        const onChange = () => setReduced(mq.matches);
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden"
            style={{ minHeight: "min(100vh, 900px)", height: "100vh", maxHeight: 940 }}
        >
            {/* Video background */}
            {!reduced && (
                <video
                    ref={videoRef}
                    className="hero-video"
                    src="/assets/hero.mp4"
                    poster="/assets/hero-poster.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                />
            )}
            <img
                src="/assets/hero-poster.jpg"
                alt=""
                className="hero-video-fallback absolute inset-0 w-full h-full"
                style={{ objectFit: "cover", zIndex: 0, display: reduced ? "block" : "none" }}
                aria-hidden="true"
            />
            {/* Subtle overlay for text readability */}
            <div className="hero-vignette" />

            {/* Content */}
            <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-10 h-full flex flex-col">
                {/* Top spacer for nav */}
                <div className="h-[100px] lg:h-[120px]" />

                <div className="flex-1 flex flex-col items-center justify-end pb-14 lg:pb-20 text-center">
                    <h1
                        className="font-display fade-up"
                        style={{
                            color: "#fff",
                            fontSize: "clamp(32px, 4.6vw, 68px)",
                            lineHeight: 1.05,
                            maxWidth: 900,
                            textShadow: "0 2px 30px rgba(0,0,0,0.35)",
                            marginBottom: 16,
                        }}
                    >
                        Different people. One{" "}
                        <span style={{ color: "var(--validator)" }}>protected</span> agreement.
                    </h1>

                    <p
                        className="fade-up"
                        style={{
                            color: "rgba(255,255,255,0.86)",
                            fontSize: 16.5,
                            lineHeight: 1.55,
                            maxWidth: 560,
                            marginBottom: 26,
                            textShadow: "0 1px 12px rgba(0,0,0,0.35)",
                        }}
                    >
                        Create clear agreements, protect committed funds and build a
                        verifiable record of work completed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 fade-up">
                        <a data-testid="hero-cta-primary" href="#create" className="btn-primary">
                            Create an Agreement
                            <span aria-hidden>→</span>
                        </a>
                        <a data-testid="hero-cta-secondary" href="#how" className="btn-ghost-light">
                            How RESXPECT Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
