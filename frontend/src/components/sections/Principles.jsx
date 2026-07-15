import React from "react";

const principles = [
    {
        title: "Protected Agreements",
        body: "Clear deliverables, deadlines, evidence requirements and payment terms are agreed before work begins.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Portable Reputation",
        body: "Every successfully completed agreement contributes to reputation that the user owns and can carry forward.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.8 5.5 21 7 14.1 2 9.3 9 8.5 12 2" />
            </svg>
        ),
    },
    {
        title: "Fair Resolution",
        body: "Evidence and independent validation support fair outcomes when the two sides disagree.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M5 8l7-5 7 5M3 20h18" />
                <circle cx="6" cy="13" r="3" /><circle cx="18" cy="13" r="3" />
            </svg>
        ),
    },
];

const Principles = () => {
    return (
        <section id="principles" data-testid="principles-section" className="section-white pt-14 pb-24 lg:pb-32">
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="text-center max-w-[820px] mx-auto mb-14">
                    <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", lineHeight: 1.05, color: "var(--ink)" }}>
                        Built on principles that <span style={{ color: "var(--orange)" }}>protect everyone.</span>
                    </h2>
                    <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 18 }}>
                        RESXPECT creates a clearer, fairer and more trustworthy experience
                        for both sides of every agreement.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {principles.map((p) => (
                        <div key={p.title} className="card p-8" data-testid={`principle-${p.title.toLowerCase().replace(/\s+/g,"-")}`}>
                            <div style={{
                                width: 52, height: 52, borderRadius: 14, background: "var(--orange-soft)",
                                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22,
                            }}>{p.icon}</div>
                            <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: 10 }}>
                                {p.title}
                            </h3>
                            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
