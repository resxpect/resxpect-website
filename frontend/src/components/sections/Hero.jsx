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
            className="relative overflow-hidden hero-desktop-2x1"
            style={{ minHeight: "min(100vh, 900px)", height: "100vh", maxHeight: 940, background: "#000" }}
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

            {/* Wordmark: small feathered black patch masks the animated
                wordmark baked into the video, and the static coloured
                wordmark image sits on top at the exact same position and
                scale as the original. The gradient edges fade to
                transparent so the patch reads as part of the dark
                background, not a rectangle. */}
            <div
                data-testid="hero-wordmark"
                className="absolute pointer-events-none"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(620px, 44vw)",
                    height: "clamp(70px, 7.4vw, 110px)",
                    background:
                        "radial-gradient(ellipse 60% 55% at 50% 50%, #000 45%, rgba(0,0,0,0.9) 62%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                }}
            >
                <img
                    src="/assets/wordmark.webp"
                    alt="RESXPECT"
                    style={{
                        width: "min(450px, 30vw)",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* Content — supporting line + CTAs anchored below the wordmark */}
            <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-10 h-full flex flex-col">
                <div className="h-[100px] lg:h-[120px]" />
                <div className="flex-1 flex flex-col items-center justify-end pb-16 lg:pb-24 text-center">
                    <p
                        className="fade-up"
                        data-testid="hero-supporting-line"
                        style={{
                            color: "#ffffff",
                            fontWeight: 500,
                            fontSize: "clamp(15px, 1.35vw, 19px)",
                            letterSpacing: "-0.005em",
                            marginBottom: 28,
                            textShadow: "0 2px 14px rgba(0,0,0,0.5)",
                        }}
                    >
                        Different people. One protected agreement.
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
