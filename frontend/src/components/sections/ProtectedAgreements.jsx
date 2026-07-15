import React from "react";

const ProtectedAgreements = () => {
    return (
        <section
            id="agreements"
            data-testid="agreements-section"
            className="section-warm relative py-28 lg:py-36"
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12 items-center">
                    {/* Left: agreement mock */}
                    <div className="col-span-12 lg:col-span-6">
                        <div
                            className="edge"
                            style={{
                                boxShadow:
                                    "0 30px 60px -30px rgba(10,10,10,0.10)",
                            }}
                        >
                            <div
                                className="flex items-center justify-between px-6 py-4"
                                style={{ borderBottom: "1px solid var(--line)" }}
                            >
                                <div className="flex items-center gap-3 label-mono">
                                    <span className="marker" />
                                    Agreement · 0x4c9a
                                </div>
                                <div className="label-mono">Signed</div>
                            </div>

                            <div className="p-8">
                                <div className="label-mono mb-2">Between</div>
                                <div
                                    className="font-display mb-6"
                                    style={{
                                        fontSize: 22,
                                        letterSpacing: "-0.01em",
                                        color: "var(--ink)",
                                    }}
                                >
                                    Northwave Studio &nbsp;⟷&nbsp; Zara K.
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    {[
                                        ["Scope", "Brand identity system · v2"],
                                        ["Value", "$12,400.00 USD"],
                                        ["Signed", "14 Jan 2026"],
                                        ["Term", "42 days · 4 milestones"],
                                    ].map(([k, v]) => (
                                        <div key={k}>
                                            <div className="label-mono mb-1">
                                                {k}
                                            </div>
                                            <div style={{ color: "var(--ink)" }}>
                                                {v}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className="pt-6"
                                    style={{
                                        borderTop: "1px solid var(--line)",
                                    }}
                                >
                                    <div className="label-mono mb-3">
                                        Milestones
                                    </div>
                                    {[
                                        ["M1 · Discovery", "$2,000", "Released", true],
                                        ["M2 · Logo system", "$3,400", "Released", true],
                                        ["M3 · Typography", "$3,000", "Escrowed", false],
                                        ["M4 · Delivery", "$4,000", "Pending", false],
                                    ].map(([m, v, s, done], i) => (
                                        <div
                                            key={i}
                                            className="flex items-center justify-between py-3"
                                            style={{
                                                borderTop:
                                                    "1px solid var(--line)",
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-2.5 h-2.5"
                                                    style={{
                                                        background: done
                                                            ? "var(--orange)"
                                                            : "transparent",
                                                        border: `1px solid ${done ? "var(--orange)" : "var(--ink-3)"}`,
                                                    }}
                                                />
                                                <span
                                                    style={{ color: "var(--ink)" }}
                                                >
                                                    {m}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span
                                                    className="font-mono"
                                                    style={{
                                                        color: "var(--ink-2)",
                                                        fontSize: 13,
                                                    }}
                                                >
                                                    {v}
                                                </span>
                                                <span className="label-mono">
                                                    {s}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: description */}
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                        <div className="label-mono mb-6 flex items-center gap-3">
                            <span
                                className="w-6 h-px"
                                style={{ background: "var(--ink)" }}
                            />
                            Chapter 03 — Protected agreements
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
                            Contracts that{" "}
                            <span style={{ fontStyle: "italic" }}>
                                enforce themselves.
                            </span>
                        </h2>
                        <p
                            className="mb-8"
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                fontWeight: 400,
                                color: "var(--ink-2)",
                            }}
                        >
                            Every RESXPECT engagement becomes a shared,
                            signed record. Scope, milestones, terms and
                            payment logic are locked at signing — and every
                            subsequent action resolves against it.
                        </p>

                        <ul className="space-y-4">
                            {[
                                ["Neutral escrow", "Funds locked at signing, released against the agreement."],
                                ["Milestone logic", "Value flows only against verified deliverables."],
                                ["Immutable terms", "No silent edits, no revisionist history."],
                                ["Portable audit", "Every event exports as a signed record."],
                            ].map(([t, b]) => (
                                <li
                                    key={t}
                                    className="flex gap-5 pt-4"
                                    style={{ borderTop: "1px solid var(--line)" }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 mt-2 shrink-0"
                                        style={{ background: "var(--orange)" }}
                                    />
                                    <div>
                                        <div
                                            style={{
                                                color: "var(--ink)",
                                                fontWeight: 500,
                                                marginBottom: 4,
                                            }}
                                        >
                                            {t}
                                        </div>
                                        <div
                                            style={{
                                                color: "var(--ink-2)",
                                                fontSize: 14,
                                            }}
                                        >
                                            {b}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProtectedAgreements;
