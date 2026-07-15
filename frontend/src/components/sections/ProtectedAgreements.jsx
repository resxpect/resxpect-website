import React from "react";

const ProtectedAgreements = () => {
    return (
        <section
            id="agreements"
            data-testid="agreements-section"
            className="section-paper relative py-32 lg:py-40"
        >
            <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-12">
                <div className="grid grid-cols-12 gap-12 items-center">
                    {/* Left: agreement mock */}
                    <div className="col-span-12 lg:col-span-6">
                        <div
                            className="edge-paper bg-white relative"
                            style={{
                                boxShadow:
                                    "0 40px 60px -30px rgba(20,15,10,0.18)",
                            }}
                        >
                            {/* Document header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-[color:var(--paper-line-strong)]">
                                <div className="flex items-center gap-3 label-mono text-[color:var(--ink-warm-2)]">
                                    <span className="w-1.5 h-1.5 bg-[#FF5B1F]" />
                                    Agreement · 0x4c9a
                                </div>
                                <div className="label-mono text-[color:var(--ink-warm-2)]">
                                    Sealed
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="label-mono text-[color:var(--ink-warm-2)] mb-2">
                                    Between
                                </div>
                                <div
                                    className="font-display text-[color:var(--ink-warm)] mb-6"
                                    style={{
                                        fontSize: 22,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    Northwave Studio &nbsp;⟷&nbsp; Zara K.
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-1">
                                            Scope
                                        </div>
                                        <div className="text-[color:var(--ink-warm)]">
                                            Brand identity system · v2
                                        </div>
                                    </div>
                                    <div>
                                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-1">
                                            Value
                                        </div>
                                        <div className="text-[color:var(--ink-warm)]">
                                            $12,400.00 USD
                                        </div>
                                    </div>
                                    <div>
                                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-1">
                                            Signed
                                        </div>
                                        <div className="text-[color:var(--ink-warm)]">
                                            14 Jan 2026 · 09:24 UTC
                                        </div>
                                    </div>
                                    <div>
                                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-1">
                                            Term
                                        </div>
                                        <div className="text-[color:var(--ink-warm)]">
                                            42 days · 4 milestones
                                        </div>
                                    </div>
                                </div>

                                {/* Milestones */}
                                <div className="border-t border-[color:var(--paper-line-strong)] pt-6">
                                    <div className="label-mono text-[color:var(--ink-warm-2)] mb-3">
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
                                            className="flex items-center justify-between py-3 border-t border-[color:var(--paper-line)]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-2.5 h-2.5"
                                                    style={{
                                                        background: done
                                                            ? "#FF5B1F"
                                                            : "transparent",
                                                        border: `1px solid ${done ? "#FF5B1F" : "var(--ink-warm-2)"}`,
                                                    }}
                                                />
                                                <span className="text-[color:var(--ink-warm)]">
                                                    {m}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <span className="text-[color:var(--ink-warm-2)] font-mono text-sm">
                                                    {v}
                                                </span>
                                                <span className="label-mono text-[color:var(--ink-warm-2)]">
                                                    {s}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Signatures */}
                                <div className="mt-8 pt-6 border-t border-[color:var(--paper-line-strong)] grid grid-cols-2 gap-6">
                                    {["Northwave", "Zara K."].map((n) => (
                                        <div key={n}>
                                            <div
                                                className="font-display italic text-[color:var(--ink-warm)]"
                                                style={{ fontSize: 22 }}
                                            >
                                                {n}
                                            </div>
                                            <div className="label-mono text-[color:var(--ink-warm-2)] mt-1 pt-2 border-t border-[color:var(--paper-line)]">
                                                Signed · 0x{n === "Northwave" ? "8f21…44b" : "a107…c9e"}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: description */}
                    <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                        <div className="label-mono text-[color:var(--ink-warm-2)] mb-8 flex items-center gap-3">
                            <span className="w-6 h-px bg-[color:var(--ink-warm)]" />
                            Chapter 03 — Protected agreements
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
                            Contracts that
                            <br />
                            <span style={{ fontStyle: "italic" }}>
                                enforce themselves.
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
                            Every RESXPECT engagement is codified into a
                            machine-readable agreement. Scope, milestones,
                            terms and payment logic are cryptographically
                            sealed at signing — and every subsequent action
                            resolves against it.
                        </p>

                        <ul className="space-y-4">
                            {[
                                ["Neutral escrow", "Funds locked at signing, released by protocol."],
                                ["Milestone logic", "Value flows only against verified deliverables."],
                                ["Immutable terms", "No silent edits, no revisionist history."],
                                ["Portable audit", "Every event exports as a signed ledger."],
                            ].map(([t, b]) => (
                                <li
                                    key={t}
                                    className="flex gap-5 border-t border-[color:var(--paper-line-strong)] pt-4"
                                >
                                    <span className="w-1.5 h-1.5 mt-2 bg-[#FF5B1F] shrink-0" />
                                    <div>
                                        <div className="text-[color:var(--ink-warm)] font-medium mb-1">
                                            {t}
                                        </div>
                                        <div className="text-[color:var(--ink-warm-2)] text-sm">
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
