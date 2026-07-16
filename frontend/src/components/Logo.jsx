import React from "react";

/**
 * RESXPECT — uses the official uploaded logomark (webp) as-is.
 * Icon and wordmark sizes are prop-driven so the header lockup can
 * be enlarged without affecting other usages (e.g. footer).
 */
const Logo = ({
    size = 32,
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
                src="/assets/resxpect-logo.webp"
                alt="RESXPECT"
                width={size}
                height={size}
                style={{ display: "block", objectFit: "contain" }}
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
