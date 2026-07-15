import React from "react";

/**
 * RESXPECT — refined handshake mark
 * Two abstract forearms meeting in a locked grip; single continuous
 * geometric line drawing. No cartoon, no gradient — solid orange.
 */
const Logo = ({ size = 28, className = "", withWordmark = true }) => {
    return (
        <div
            className={`inline-flex items-center gap-3 ${className}`}
            data-testid="resxpect-logo"
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="RESXPECT logomark"
            >
                {/* Left forearm block */}
                <path
                    d="M4 22 L20 22 L28 30 L28 40 L20 48 L4 48 Z"
                    fill="#FF5B1F"
                />
                {/* Right forearm block */}
                <path
                    d="M60 22 L44 22 L36 30 L36 40 L44 48 L60 48 Z"
                    fill="#FF5B1F"
                />
                {/* Locking grip — negative slit */}
                <rect x="28" y="30" width="8" height="10" fill="#0A0A0B" />
                {/* Thumb notch highlights */}
                <path
                    d="M24 26 L28 30 L24 34 Z"
                    fill="#0A0A0B"
                    opacity="0.9"
                />
                <path
                    d="M40 26 L36 30 L40 34 Z"
                    fill="#0A0A0B"
                    opacity="0.9"
                />
                <path
                    d="M24 36 L28 40 L24 44 Z"
                    fill="#0A0A0B"
                    opacity="0.9"
                />
                <path
                    d="M40 36 L36 40 L40 44 Z"
                    fill="#0A0A0B"
                    opacity="0.9"
                />
            </svg>
            {withWordmark && (
                <span
                    className="font-mono"
                    style={{
                        fontSize: 14,
                        letterSpacing: "0.22em",
                        fontWeight: 600,
                        color: "currentColor",
                    }}
                >
                    RESXPECT
                </span>
            )}
        </div>
    );
};

export default Logo;
