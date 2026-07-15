import React from "react";

/**
 * ProtocolVisual — four connected stages, minimal and institutional.
 * Thin neutral lines, black type, small controlled orange dots.
 * No rings, no glow, no corner brackets.
 */
const stages = [
    {
        id: "01",
        title: "Agreement",
        body: "Scope, terms and milestones are captured in a shared, signed record.",
    },
    {
        id: "02",
        title: "Protected Payment",
        body: "Funds are held in neutral escrow and released against defined milestones.",
    },
    {
        id: "03",
        title: "Evidence",
        body: "Deliverables and communication are time-stamped against the agreement.",
    },
    {
        id: "04",
        title: "Reputation",
        body: "Completed work builds a portable, verifiable record of trust.",
    },
];

const ProtocolVisual = () => {
    return (
        <div
            className="w-full"
            data-testid="protocol-visual"
        >
            <div className="edge p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="label-mono">The RESXPECT flow</div>
                    <div className="label-mono" style={{ color: "var(--ink-3)" }}>
                        Four stages
                    </div>
                </div>

                <ol className="relative">
                    {/* connecting vertical rail */}
                    <div
                        className="absolute left-[11px] top-2 bottom-2 w-px"
                        style={{ background: "var(--line-strong)" }}
                        aria-hidden
                    />
                    {stages.map((s, i) => (
                        <li
                            key={s.id}
                            className="relative pl-10 pb-8 last:pb-0"
                            data-testid={`stage-${s.id}`}
                        >
                            {/* node */}
                            <div
                                className="absolute left-0 top-1 w-[22px] h-[22px] flex items-center justify-center bg-white"
                                style={{ border: "1px solid var(--ink)" }}
                            >
                                <span
                                    className="w-2 h-2"
                                    style={{
                                        background:
                                            i === 0 || i === stages.length - 1
                                                ? "var(--orange)"
                                                : "var(--ink)",
                                    }}
                                />
                            </div>

                            <div className="flex items-baseline justify-between gap-4 mb-2">
                                <h4
                                    className="font-display"
                                    style={{
                                        fontSize: 22,
                                        letterSpacing: "-0.015em",
                                        color: "var(--ink)",
                                    }}
                                >
                                    {s.title}
                                </h4>
                                <span
                                    className="label-mono"
                                    style={{ color: "var(--ink-3)" }}
                                >
                                    {s.id}
                                </span>
                            </div>
                            <p
                                style={{
                                    color: "var(--ink-2)",
                                    fontSize: 14.5,
                                    lineHeight: 1.55,
                                    fontWeight: 300,
                                    maxWidth: 380,
                                }}
                            >
                                {s.body}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default ProtocolVisual;
