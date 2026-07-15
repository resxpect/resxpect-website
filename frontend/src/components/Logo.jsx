import React from "react";

/**
 * RESXPECT — uses the official uploaded logomark (webp) as-is.
 * No recreation or modification.
 */
const Logo = ({ size = 32, className = "", withWordmark = true }) => {
    return (
        <div
            className={`inline-flex items-center gap-2.5 ${className}`}
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
                        fontSize: 20,
                        letterSpacing: "-0.01em",
                        color: "var(--ink)",
                    }}
                >
                    RESXPECT
                </span>
            )}
        </div>
    );
};

export default Logo;
