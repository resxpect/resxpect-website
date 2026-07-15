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
            className="section-warm relative py-28 lg:py-36"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12">
                    <div className="col-span-12 lg:col-span-5">
                        <div className="label-mono mb-6 flex items-center gap-3">
                            <span
                                className="w-6 h-px"
                                style={{ background: "var(--ink)" }}
                            />
                            Chapter 05 — Dispute resolution
                        </div>
                        <h2
                            className="font-display mb-8"
                            style={{
                                fontSize: "clamp(32px, 4.2vw, 56px)",
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                color: "var(--ink)",
                            }}
                        >
                            Evidence over{" "}
                            <span style={{ fontStyle: "italic" }}>
                                escalation.
                            </span>
                        </h2>
                        <p
                            className="mb-8"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                                maxWidth: 480,
                            }}
                        >
                            When something breaks, RESXPECT compiles the
                            timeline in seconds. A panel of verified
                            arbitrators reviews the record and issues a
                            binding resolution — typically within hours, not
                            months.
                        </p>

                        <div
                            className="grid grid-cols-3 gap-6 pt-6"
                            style={{ borderTop: "1px solid var(--line)" }}
                        >
                            {[
                                ["4.2h", "Median resolution"],
                                ["Verified", "Timeline record"],
                                ["Binding", "Panel decision"],
                            ].map(([n, l]) => (
                                <div key={l}>
                                    <div
                                        className="font-display"
                                        style={{
                                            fontSize: 26,
                                            letterSpacing: "-0.02em",
                                            color: "var(--ink)",
                                        }}
                                    >
                                        {n}
                                    </div>
                                    <div className="label-mono mt-1">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                        <div className="edge p-8 relative">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3 label-mono">
                                    <span className="marker" />
                                    Dispute · #A1207
                                </div>
                                <div
                                    className="label-mono"
                                    style={{ color: "var(--orange)" }}
                                >
                                    Resolved · 4h 12m
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="absolute top-3 bottom-3 left-[80px] w-px"
                                    style={{ background: "var(--line)" }}
                                />
                                <ul className="space-y-6">
                                    {timeline.map(([t, title, meta], i) => (
                                        <li
                                            key={i}
                                            className="grid grid-cols-[76px_14px_1fr] gap-4 items-start"
                                        >
                                            <span className="label-mono pt-1">
                                                {t}
                                            </span>
                                            <span
                                                className="mt-1.5 w-3 h-3 relative z-10"
                                                style={{
                                                    background:
                                                        i ===
                                                        timeline.length - 1
                                                            ? "var(--orange)"
                                                            : "white",
                                                    border: `1px solid ${i === timeline.length - 1 ? "var(--orange)" : "var(--ink)"}`,
                                                }}
                                            />
                                            <div>
                                                <div
                                                    style={{ color: "var(--ink)" }}
                                                >
                                                    {title}
                                                </div>
                                                <div className="label-mono mt-1">
                                                    {meta}
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Disputes;
