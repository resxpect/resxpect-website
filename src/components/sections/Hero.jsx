import React, { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 767;

const Hero = () => {
    const desktopVideoRef = useRef(null);
    const mobileVideoRef = useRef(null);

    const [reduced, setReduced] = useState(false);

    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined"
            ? window.innerWidth <= MOBILE_BREAKPOINT
            : false
    );

    const [mobileRole, setMobileRole] = useState("creator");
    const [roleChanging, setRoleChanging] = useState(false);

    useEffect(() => {
        const motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const mobileQuery = window.matchMedia(
            `(max-width: ${MOBILE_BREAKPOINT}px)`
        );

        const updateMotion = () => {
            setReduced(motionQuery.matches);
        };

        const updateMobile = () => {
            setIsMobile(mobileQuery.matches);
        };

        updateMotion();
        updateMobile();

        motionQuery.addEventListener?.("change", updateMotion);
        mobileQuery.addEventListener?.("change", updateMobile);

        return () => {
            motionQuery.removeEventListener?.("change", updateMotion);
            mobileQuery.removeEventListener?.("change", updateMobile);
        };
    }, []);

    /*
     * Start the desktop video whenever desktop mode becomes active.
     */
    useEffect(() => {
        const video = desktopVideoRef.current;

        if (!video || reduced || isMobile) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.currentTime = 0;

        const playVideo = async () => {
            try {
                await video.play();
            } catch (error) {
                console.warn("Desktop hero video could not autoplay:", error);
            }
        };

        playVideo();
    }, [reduced, isMobile]);

    useEffect(() => {
        const video = mobileVideoRef.current;

        if (!video || reduced || !isMobile) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");

        const playVideo = () => {
            const playPromise = video.play();

            if (playPromise?.catch) {
                playPromise.catch(() => {
                    // iOS may reject until the video is ready.
                });
            }
        };

        playVideo();
        video.addEventListener("canplay", playVideo, { once: true });

        return () => video.removeEventListener("canplay", playVideo);
    }, [reduced, isMobile]);

    /*
     * Manually loop Hero 9 shortly before it reaches the final frame.
     * This avoids the video stopping or displaying a black end frame.
     */
    const handleDesktopTimeUpdate = () => {
        const video = desktopVideoRef.current;

        if (!video || !Number.isFinite(video.duration)) return;

        const restartPoint = video.duration - 0.08;

        if (video.currentTime >= restartPoint) {
            video.currentTime = 0;

            const playPromise = video.play();

            if (playPromise?.catch) {
                playPromise.catch(() => {
                    // Autoplay may briefly be blocked by the browser.
                });
            }
        }
    };

    /*
     * Backup loop handler in case the browser reaches the true end.
     */
    const handleDesktopVideoEnd = () => {
        const video = desktopVideoRef.current;

        if (!video) return;

        video.currentTime = 0;

        const playPromise = video.play();

        if (playPromise?.catch) {
            playPromise.catch(() => {
                // Backup restart failed temporarily.
            });
        }
    };

    const handleDesktopVideoError = () => {
        const video = desktopVideoRef.current;

        console.error(
            "Hero 9 failed to load.",
            video?.error,
            "Check that the file exists at public/assets/hero9.mp4"
        );
    };

    const handleMobileVideoEnd = () => {
        const video = mobileVideoRef.current;

        if (!video) return;

        setRoleChanging(true);

        window.setTimeout(() => {
            setMobileRole((currentRole) =>
                currentRole === "creator" ? "runner" : "creator"
            );

            video.currentTime = 0;

            const playPromise = video.play();

            if (playPromise?.catch) {
                playPromise.catch(() => {
                    // Some mobile browsers may briefly block playback.
                });
            }

            window.setTimeout(() => {
                setRoleChanging(false);
            }, 80);
        }, 450);
    };

    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative overflow-hidden hero-root"
            style={{
                minHeight: "min(100vh, 900px)",
                height: "100vh",
                maxHeight: 940,
                background: "#000",
            }}
        >
            <div className="hero-media-wrap">
                {/* Desktop video: Hero 9 */}
                {!reduced && !isMobile && (
                    <video
                        key="desktop-hero9"
                        ref={desktopVideoRef}
                        className="hero-video hero-video-desktop"
                        src="/assets/hero9.mp4"
                        poster="/assets/hero-poster.jpg"
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                        onTimeUpdate={handleDesktopTimeUpdate}
                        onEnded={handleDesktopVideoEnd}
                        onError={handleDesktopVideoError}
                        aria-hidden="true"
                    />
                )}

                {/* Mobile Creator / Runner crop: original video */}
                {!reduced && isMobile && (
                    <div
                        className={`hero-mobile-video-stage hero-mobile-${mobileRole} ${
                            roleChanging ? "is-changing-role" : ""
                        }`}
                    >
                        <video
                            ref={mobileVideoRef}
                            className="hero-video hero-video-mobile"
                            src="/assets/hero.mp4"
                            poster="/assets/hero-poster.jpg"
                            autoPlay
                            muted
                            defaultMuted
                            playsInline
                            preload="auto"
                            onEnded={handleMobileVideoEnd}
                            aria-hidden="true"
                        />
                    </div>
                )}

                {/* Reduced-motion fallback */}
                <img
                    src="/assets/hero-poster.jpg"
                    alt=""
                    className="hero-video-fallback"
                    style={{
                        display: reduced ? "block" : "none",
                    }}
                    aria-hidden="true"
                />

                <div className="hero-vignette" />

                {/* Desktop-only wordmark */}
                {!isMobile && (
                    <div
                        data-testid="hero-wordmark"
                        className="hero-wordmark-wrap hero-wordmark-desktop pointer-events-none"
                        style={{
                            position: "absolute",
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
                )}
            </div>

            <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-10 h-full flex flex-col hero-content-wrap">
                <div className="h-[100px] lg:h-[120px] hero-top-spacer" />

                <div className="hero-content flex-1 flex flex-col items-center justify-end pb-16 lg:pb-24 text-center">
                    {/* Mobile-only wordmark */}
                    {isMobile && (
                        <div className="hero-wordmark-mobile pointer-events-none">
                            <img
                                src="/assets/wordmark.webp"
                                alt="RESXPECT"
                            />
                        </div>
                    )}

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

                    <div className="flex justify-center fade-up">
                        <a
                            data-testid="hero-cta-secondary"
                            href="#how"
                            className="btn-ghost-light hero-cta-secondary"
                        >
                            How It Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
