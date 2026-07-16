import React from "react";

/**
 * RESXPECT logo lockup — uses the tight-cropped handshake mark.
 * `markHeight` controls the visible handshake height in px; width scales
 * proportionally from the source aspect ratio.
 */
const Logo = ({
    markHeight = 24,
    wordmarkSize = 20,
    gap = 10,
    className = "",
    withWordmark = true,
}) => {
    return (
        <div
            className={`inline-flex items-center ${className}`}
            style={{ gap }}
            data-testid="resxpect-logo"
        >
            <img
                src="/assets/resxpect-mark.webp"
                alt="RESXPECT"
                style={{
                    height: markHeight,
                    width: "auto",
                    display: "block",
                    objectFit: "contain",
                }}
            />
            {withWordmark && (
                <span
                    style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 800,
                        fontSize: wordmarkSize,
                        letterSpacing: "-0.01em",
                        color: "var(--ink)",
                        lineHeight: 1,
                    }}
                >
                    RESXPECT
                </span>
            )}
        </div>
    );
};

export default Logo;
