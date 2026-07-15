import React from "react";

const timeline = [
    ["00:00", "Dispute filed", "Client · Northwave Studio"],
    ["00:04", "Agreement retrieved", "0x4c9a — Sealed 14 Jan"],
    ["00:12", "Evidence assembled", "14 artifacts · 3 messages"],
    ["01:20", "Positions submitted", "Both parties · 400 words"],
    ["03:40", "Panel reviewed", "3 verified arbitrators"],
    ["04:12", "Resolution issued", "Escrow split 70 / 30"],
];

const Disputes = () => {
    return (
        <section
            id="disputes"
            data-testid="disputes-section"
            className="section-paper relative py-32 lg:py-40"
        >
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left: description */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-[color:var(--ink-warm)]" />
                            Chapter 05 — Dispute resolution
                        </div>
                        <h2
                            className="font-display mb-8"
                            style={{
                                fontSize: "clamp(36px, 4.6vw, 64px)",
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                color: "var(--ink-warm)",
                            }}
                        >
                            Evidence over
                            <br />
                            <span style={{ fontStyle: "italic" }}>
                                escalation.
                            </span>
                        </h2>
                        <p
                            className="text-[color:var(--ink-warm-2)] mb-8"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 300,
                            }}
                        >
                            When something breaks, RESXPECT compiles the
                            truthful timeline in seconds. A panel of verified
                            arbitrators reviews the sealed record and issues a
                            binding resolution — typically within an
                            afternoon, not a lawsuit.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[color:var(--paper-line-strong)]">
                            {[
                                ["4.2h", "Median resolution"],
                                ["99.7%", "Timeline integrity"],
                                ["0.8%", "Escalation rate"],
                            ].map(([n, l]) => (
                                <div key={l}>
                                    <div
                                        className="font-display"
                                        style={{
                                            fontSize: 32,
                                            letterSpacing: "-0.02em",
                                            color: "var(--ink-warm)",
                                        }}
                                    >
                                        {n}
                                    </div>
                                    <div className="label-mono text-[color:var(--ink-warm-2)] mt-1">
                                        {l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: timeline */}
                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <div className="edge-paper bg-white p-8 relative">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3 label-mono text-[color:var(--ink-warm-2)]">
                                    <span className="w-1.5 h-1.5 bg-[#FF5B1F]" />
                                    Dispute · #A1207
                                </div>
                                <div className="label-mono text-[#FF5B1F]">
                                    Resolved · 4h 12m
                                </div>
                            </div>

                            <div className="relative">
                                {/* vertical rail */}
                                <div className="absolute top-3 bottom-3 left-[86px] w-px bg-[color:var(--paper-line-strong)]" />

                                <ul className="space-y-6">
                                    {timeline.map(([t, title, meta], i) => (
                                        <li
                                            key={i}
                                            className="grid grid-cols-[80px_16px_1fr] gap-4 items-start"
                                        >
                                            <span className="label-mono text-[color:var(--ink-warm-2)] pt-1">
                                                {t}
                                            </span>
                                            <span className="mt-1.5 w-3 h-3 border border-[color:var(--ink-warm)] bg-white relative z-10">
                                                {i === timeline.length - 1 && (
                                                    <span className="block absolute inset-0.5 bg-[#FF5B1F]" />
                                                )}
                                            </span>
                                            <div>
                                                <div className="text-[color:var(--ink-warm)]">
                                                    {title}
                                                </div>
                                                <div className="label-mono text-[color:var(--ink-warm-2)] mt-1">
                                                    {meta}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[color:var(--paper-line-strong)] flex items-center justify-between">
                                <div className="label-mono text-[color:var(--ink-warm-2)]">
                                    Signed by panel · 3 arbitrators
                                </div>
                                <div className="label-mono text-[color:var(--ink-warm)]">
                                    Ledger 0x9f…12c
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disputes;
