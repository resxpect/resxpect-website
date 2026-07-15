import React from "react";

/**
 * RESXPECT — Shield with handshake (matches uploaded reference).
 * Orange shield outline enclosing a white handshake.
 */
const Logo = ({ size = 32, className = "", withWordmark = true }) => {
    return (
        <div
            className={`inline-flex items-center gap-2.5 ${className}`}
            data-testid="resxpect-logo"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="RESXPECT logo"
            >
                {/* Shield */}
                <path
                    d="M32 3 L57 12 V32 C57 46, 46 56, 32 61 C18 56, 7 46, 7 32 V12 Z"
                    fill="#F7931A"
                />
                {/* Handshake inside — white */}
                <g fill="#ffffff">
                    <path d="M14 30 L22 30 L27 34 L27 40 L22 44 L14 44 Z" />
                    <path d="M50 30 L42 30 L37 34 L37 40 L42 44 L50 44 Z" />
                    <rect x="27" y="34" width="10" height="6" fill="#F7931A" />
                    <path d="M27 34 L32 37 L37 34 Z" fill="#ffffff" />
                    <path d="M27 40 L32 43 L37 40 Z" fill="#ffffff" />
                </g>
            </svg>
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
