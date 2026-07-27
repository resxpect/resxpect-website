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
            className="relative overflow-hidden hero-root"
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
            <div className="hero-vignette" />

            {/* Wordmark mask + static wordmark.
                Sized using max(vw, vh) so the mask always fully covers the
                animated wordmark baked into the video regardless of how the
                video is scaled by object-fit: cover (which fills the larger
                of the viewport dimensions). Feathered radial gradient makes
                the edges blend into the black background so no rectangle is
                visible. Static wordmark on top never animates. */}
            <div
                data-testid="hero-wordmark"
                className="hero-wordmark-wrap absolute pointer-events-none"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "min(760px, max(48vw, 62vh))",
                    height: "min(130px, max(8.5vh, 6.4vw))",
                    background:
                        "radial-gradient(ellipse 55% 50% at 50% 50%, #000 45%, rgba(0,0,0,0.95) 60%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0) 100%)",
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
                        width: "min(460px, max(31vw, 40vh))",
                        height: "auto",
                        display: "block",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* Content — supporting line + CTAs anchored below the wordmark */}
            <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-10 h-full flex flex-col">
                <div className="h-[100px] lg:h-[120px] hero-top-spacer" />
                <div className="hero-content flex-1 flex flex-col items-center justify-end pb-16 lg:pb-24 text-center">
                    <p
                        className="fade-up"
                        data-testid="hero-supporting-line"
                        style={{
                            color: "#ffffff",
                            fontWeight: 500,
                            fontSize: "clamp(15px, 1.35vw, 19px)",
                            letterSpacing: "-0.005em",
                            marginBottom: 22,
                            textShadow: "0 2px 14px rgba(0,0,0,0.5)",
                        }}
                    >
                        Different people. One protected agreement.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 fade-up">
                        <a data-testid="hero-cta-primary" href="#create" className="btn-primary hero-cta-primary">
                            Create an Agreement
                            <span aria-hidden>→</span>
                        </a>
                        <a data-testid="hero-cta-secondary" href="#how" className="btn-ghost-light hero-cta-secondary">
                            How RESXPECT Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
