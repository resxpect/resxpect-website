import React from "react";

/**
 * RESXPECT logo — hexagon with green X (LogoV7). Used as-is.
 */
const Logo = ({
    markHeight = 30,
    wordmarkSize = 20,
    gap = 10,
    className = "",
    withWordmark = true,
    tone = "ink",
}) => {
    const wordColor = tone === "light" ? "#ffffff" : "var(--ink)";
    return (
        <div
            className={`inline-flex items-center ${className}`}
            style={{ gap }}
            data-testid="resxpect-logo"
        >
            <img
                src="/assets/logo-x.webp"
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
                        color: wordColor,
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
