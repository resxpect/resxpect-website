import React from "react";

/**
 * RESXPECT — warm orange handshake mark (matches provided reference).
 * Two hands meeting with a clasped grip, orange fill, white gaps between
 * fingers. Optimised for small sizes; scales cleanly.
 */
const Logo = ({ size = 30, className = "", withWordmark = true, tone = "ink" }) => {
    const wordColor = tone === "light" ? "#ffffff" : "#0a0a0a";
    return (
        <div
            className={`inline-flex items-center gap-3 ${className}`}
            data-testid="resxpect-logo"
        >
            <svg
                width={size}
                height={(size * 22) / 30}
                viewBox="0 0 300 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="RESXPECT logomark"
            >
                {/* Left hand — forearm + palm + thumb wrap */}
                <path
                    d="M8 96
                       C 8 84, 20 76, 34 76
                       L 92 76
                       C 108 76, 120 84, 128 96
                       L 152 122
                       C 158 128, 160 134, 158 142
                       C 156 150, 148 154, 140 152
                       L 118 148
                       L 130 172
                       C 134 180, 130 190, 122 192
                       L 96 198
                       C 88 200, 80 196, 76 190
                       L 36 132
                       L 16 132
                       C 10 132, 8 128, 8 122 Z"
                    fill="#FF9A2E"
                />
                {/* Right hand — mirror, coming over the top */}
                <path
                    d="M292 96
                       C 292 84, 280 76, 266 76
                       L 208 76
                       C 192 76, 180 82, 172 92
                       L 148 118
                       C 142 124, 140 132, 144 140
                       L 168 148
                       L 180 128
                       L 210 128
                       C 220 128, 226 134, 226 144
                       L 226 176
                       C 226 186, 218 194, 208 194
                       L 156 194
                       C 148 194, 142 190, 138 184
                       L 122 160
                       L 148 122
                       L 180 92
                       L 208 82
                       L 240 82
                       L 268 88
                       L 288 96 Z"
                    fill="#FF9A2E"
                />
                {/* Overlap plate (clean seam) */}
                <path
                    d="M130 108
                       C 138 118, 146 128, 156 138
                       C 166 128, 176 118, 186 108
                       C 176 100, 166 96, 156 96
                       C 146 96, 138 100, 130 108 Z"
                    fill="#FF9A2E"
                />
                {/* Finger separations (white gaps) */}
                <path
                    d="M182 132 C 188 138, 196 142, 204 144
                       L 226 148 L 226 154 L 200 152 C 190 150, 182 144, 178 138 Z"
                    fill="#ffffff"
                />
                <path
                    d="M172 148 C 180 156, 190 160, 202 162
                       L 226 164 L 226 170 L 198 168 C 186 166, 176 160, 168 154 Z"
                    fill="#ffffff"
                />
                <path
                    d="M162 166 C 172 174, 184 178, 196 180
                       L 224 182 L 224 188 L 190 186 C 178 184, 168 178, 158 172 Z"
                    fill="#ffffff"
                />
                <path
                    d="M92 96 C 96 100, 100 104, 104 106
                       L 118 108 L 116 114 L 100 112 C 96 110, 92 106, 88 102 Z"
                    fill="#ffffff"
                />
            </svg>
            {withWordmark && (
                <span
                    className="font-mono"
                    style={{
                        fontSize: 14,
                        letterSpacing: "0.22em",
                        fontWeight: 600,
                        color: wordColor,
                    }}
                >
                    RESXPECT
                </span>
            )}
        </div>
    );
};

export default Logo;
