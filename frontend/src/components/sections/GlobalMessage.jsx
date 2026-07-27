import React from "react";

const GlobalMessage = () => {
    return (
        <section id="global" data-testid="global-section" className="section-warm py-24 lg:py-32 relative overflow-hidden">
            {/* Faint hexagon watermark */}
            <img
                src="/assets/logo-x.webp"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none select-none hidden lg:block"
                style={{
                    right: -80, top: "50%", transform: "translateY(-50%)",
                    width: 520, opacity: 0.06, zIndex: 0,
                }}
            />
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10 relative" style={{ zIndex: 1 }}>
                <div className="max-w-[900px]">
                    <div className="label-pill on-paper mb-6">A universal structure</div>
                    <h2
                        className="font-display mb-8"
                        style={{ fontSize: "clamp(30px, 4.4vw, 62px)", lineHeight: 1.06, color: "var(--ink)" }}
                    >
                        The <span style={{ color: "var(--creator)" }}>people</span> change.
                        The <span style={{ color: "var(--runner)" }}>roles</span> change.
                        The <span style={{ color: "var(--validator)" }}>agreement</span> remains protected.
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 620 }}>
                        RESXPECT provides the same accountable agreement structure across
                        different people, professions, cultures and locations. The
                        instrument does not change — only the two hands using it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GlobalMessage;
