import React from "react";

/**
 * ProtocolVisual — Abstract diagram of an agreement moving through
 * Payment Protection → Evidence → Verification → Reputation.
 * Thin lines, geometric nodes, restrained orange light.
 */
const ProtocolVisual = () => {
    return (
        <div
            className="relative w-full h-full min-h-[560px]"
            data-testid="protocol-visual"
        >
            {/* Bounding brackets */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
            </div>

            {/* Header label */}
            <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
                <span className="marker pulse-dot" />
                <span className="label-mono text-white/70">
                    Protocol.state
                </span>
            </div>
            <div className="absolute top-6 right-6 z-20 label-mono text-white/40">
                Live &nbsp;·&nbsp; 00.04.21
            </div>

            <svg
                viewBox="0 0 520 620"
                className="absolute inset-0 w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient
                        id="orange-glow"
                        cx="50%"
                        cy="50%"
                        r="50%"
                    >
                        <stop offset="0%" stopColor="#FF5B1F" stopOpacity="0.55" />
                        <stop offset="60%" stopColor="#FF5B1F" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#FF5B1F" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="line-fade" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                {/* Soft glow behind central node */}
                <circle cx="260" cy="310" r="180" fill="url(#orange-glow)" />

                {/* Vertical guide line */}
                <line
                    x1="260"
                    y1="70"
                    x2="260"
                    y2="560"
                    stroke="url(#line-fade)"
                    strokeWidth="1"
                />

                {/* Concentric rings around center */}
                <circle
                    cx="260"
                    cy="310"
                    r="70"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="1"
                />
                <circle
                    cx="260"
                    cy="310"
                    r="120"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                />
                <circle
                    cx="260"
                    cy="310"
                    r="180"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                />

                {/* Connecting flow lines (dashed animated) */}
                <path
                    className="protocol-line"
                    d="M 100 140 Q 180 190 260 240"
                    stroke="#FF5B1F"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                />
                <path
                    className="protocol-line"
                    d="M 420 140 Q 340 190 260 240"
                    stroke="#FF5B1F"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                />
                <path
                    className="protocol-line"
                    d="M 260 380 Q 260 460 100 500"
                    stroke="#FF5B1F"
                    strokeWidth="1.2"
                    strokeOpacity="0.5"
                />
                <path
                    className="protocol-line"
                    d="M 260 380 Q 260 460 420 500"
                    stroke="#FF5B1F"
                    strokeWidth="1.2"
                    strokeOpacity="0.9"
                />

                {/* Node: Agreement (top-left) */}
                <g>
                    <rect
                        x="40"
                        y="100"
                        width="120"
                        height="72"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.02)"
                    />
                    <text
                        x="52"
                        y="122"
                        fill="rgba(255,255,255,0.5)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                    >
                        01 · AGREEMENT
                    </text>
                    <text
                        x="52"
                        y="146"
                        fill="#fff"
                        fontFamily="Fraunces, serif"
                        fontSize="18"
                    >
                        Signed
                    </text>
                    <circle cx="150" cy="110" r="3" fill="#FF5B1F" />
                </g>

                {/* Node: Payment (top-right) */}
                <g>
                    <rect
                        x="360"
                        y="100"
                        width="120"
                        height="72"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.02)"
                    />
                    <text
                        x="372"
                        y="122"
                        fill="rgba(255,255,255,0.5)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                    >
                        02 · PAYMENT
                    </text>
                    <text
                        x="372"
                        y="146"
                        fill="#fff"
                        fontFamily="Fraunces, serif"
                        fontSize="18"
                    >
                        Escrow · $4,200
                    </text>
                    <circle cx="470" cy="110" r="3" fill="#FF5B1F" />
                </g>

                {/* Central verification core */}
                <g>
                    <rect
                        x="200"
                        y="270"
                        width="120"
                        height="120"
                        stroke="#FF5B1F"
                        strokeWidth="1"
                        fill="rgba(255,91,31,0.06)"
                    />
                    <rect
                        x="212"
                        y="282"
                        width="96"
                        height="96"
                        stroke="rgba(255,91,31,0.35)"
                        strokeWidth="1"
                        fill="none"
                    />
                    <text
                        x="260"
                        y="316"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.6)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                    >
                        VERIFY
                    </text>
                    <text
                        x="260"
                        y="346"
                        textAnchor="middle"
                        fill="#fff"
                        fontFamily="Fraunces, serif"
                        fontSize="26"
                    >
                        99.7%
                    </text>
                    <text
                        x="260"
                        y="366"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.5)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="8"
                        letterSpacing="2"
                    >
                        INTEGRITY
                    </text>
                </g>

                {/* Node: Evidence (bottom-left) */}
                <g>
                    <rect
                        x="40"
                        y="470"
                        width="120"
                        height="72"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.02)"
                    />
                    <text
                        x="52"
                        y="492"
                        fill="rgba(255,255,255,0.5)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                    >
                        03 · EVIDENCE
                    </text>
                    <text
                        x="52"
                        y="516"
                        fill="#fff"
                        fontFamily="Fraunces, serif"
                        fontSize="18"
                    >
                        14 artifacts
                    </text>
                    <circle cx="52" cy="482" r="3" fill="#FF5B1F" />
                </g>

                {/* Node: Reputation (bottom-right) */}
                <g>
                    <rect
                        x="360"
                        y="470"
                        width="120"
                        height="72"
                        stroke="rgba(255,255,255,0.25)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.02)"
                    />
                    <text
                        x="372"
                        y="492"
                        fill="rgba(255,255,255,0.5)"
                        fontFamily="IBM Plex Mono, monospace"
                        fontSize="9"
                        letterSpacing="2"
                    >
                        04 · REPUTATION
                    </text>
                    <text
                        x="372"
                        y="516"
                        fill="#fff"
                        fontFamily="Fraunces, serif"
                        fontSize="18"
                    >
                        + 42 RP
                    </text>
                    <circle cx="372" cy="482" r="3" fill="#FF5B1F" />
                </g>

                {/* Traveling dots along paths */}
                <circle r="2.5" fill="#FF5B1F">
                    <animateMotion
                        dur="4.5s"
                        repeatCount="indefinite"
                        path="M 100 140 Q 180 190 260 240"
                    />
                </circle>
                <circle r="2.5" fill="#FF5B1F">
                    <animateMotion
                        dur="5s"
                        repeatCount="indefinite"
                        begin="1.2s"
                        path="M 260 380 Q 260 460 420 500"
                    />
                </circle>

                {/* Corner ticks */}
                {[
                    [20, 20],
                    [500, 20],
                    [20, 600],
                    [500, 600],
                ].map(([x, y], i) => (
                    <g key={i}>
                        <line
                            x1={x}
                            y1={y - 4}
                            x2={x}
                            y2={y + 4}
                            stroke="rgba(255,255,255,0.3)"
                        />
                        <line
                            x1={x - 4}
                            y1={y}
                            x2={x + 4}
                            y2={y}
                            stroke="rgba(255,255,255,0.3)"
                        />
                    </g>
                ))}
            </svg>

            {/* Bottom-right readout */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 label-mono text-white/50">
                <span>Ledger</span>
                <span className="text-white/25">·</span>
                <span>0x4c…9a1f</span>
            </div>
        </div>
    );
};

export default ProtocolVisual;
