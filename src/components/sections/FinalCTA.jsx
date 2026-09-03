import React from "react";
import Logo from "../Logo";

const FinalCTA = () => {
    return (
        <section
            id="create"
            data-testid="final-cta-section"
            className="section-white"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-14 lg:py-20">
                <div className="card px-8 lg:px-16 pt-10 pb-16 lg:pt-13 lg:pb-20 text-center relative overflow-hidden">
                    {/* Multi-colour soft glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(50% 60% at 15% 100%, rgba(247,147,26,0.10), transparent 70%)," +
                                "radial-gradient(50% 60% at 85% 100%, rgba(42,109,234,0.10), transparent 70%)," +
                                "radial-gradient(60% 60% at 50% 0%, rgba(46,139,71,0.08), transparent 70%)",
                        }}
                    />

                    <div
                        className="relative z-10 max-w-[820px] mx-auto"
                        style={{
                            transform: "translateY(-18px)",
                        }}
                    >
                        <h2
                            className="font-display mb-6"
                            style={{
                                fontSize: "clamp(30px, 4.2vw, 56px)",
                                lineHeight: 1.04,
                                letterSpacing: "-0.025em",
                                color: "var(--ink)",
                                marginTop: 0,
                            }}
                        >
                            Make the agreement
                            <span
                                style={{
                                    color: "var(--validator)",
                                    display: "inline-block",
                                    marginLeft: "0.14em",
                                    marginRight: "0.14em",
                                }}
                            >
                                stronger
                            </span>
                            than the promise.
                        </h2>

                        <p
                            style={{
                                fontSize: 17.5,
                                lineHeight: 1.55,
                                color: "var(--ink-2)",
                                marginBottom: 34,
                                maxWidth: 620,
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        >
                            Start with one small agreement. See how the
                            protection, evidence and reputation come together around real work.
                        </p>

                        <a
                            data-testid="final-cta-primary"
                            href="#create"
                            className="btn-primary"
                        >
                            Join Early Access
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <footer
                id="about"
                style={{
                    borderTop: "1px solid var(--line)",
                }}
            >
                <div className="max-w-[1360px] mx-auto px-6 lg:px-10 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                        <div>
                            <Logo markHeight={28} wordmarkSize={18} />

                            <p
                                style={{
                                    fontSize: 14,
                                    color: "var(--ink-3)",
                                    marginTop: 14,
                                    maxWidth: 260,
                                    lineHeight: 1.55,
                                }}
                            >
                                Protected digital agreements for anyone,
                                anywhere.
                            </p>
                        </div>

                        <FooterCol
                            title="Product"
                            links={[
                                ["How It Works", "#how"],
                                ["Roles", "#roles"],
                                ["Agreement Outcomes", "#agreement-outcome"],
                                ["Create Agreement", "#create"],
                            ]}
                        />

                        <FooterCol
                            title="Company"
                            links={[
                                ["Trust and Safety", "#safety"],
                                ["Terms", "#terms"],
                                ["Privacy", "#privacy"],
                                ["Contact", "#contact"],
                            ]}
                        />

                        <FooterCol
                            title="Follow"
                            links={[
                                ["Twitter / X", "#"],
                                ["LinkedIn", "#"],
                                ["Instagram", "#"],
                                ["YouTube", "#"],
                            ]}
                        />
                    </div>

                    <div
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6"
                        style={{
                            borderTop: "1px solid var(--line)",
                        }}
                    >
                        <div
                            style={{
                                fontSize: 12.5,
                                color: "var(--ink-3)",
                            }}
                        >
                            © 2026 RESXPECT — All rights reserved.
                        </div>

                        <div
                            className="flex items-center gap-2 label-pill on-paper"
                            style={{
                                padding: "6px 12px",
                                fontSize: 10,
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "var(--creator)",
                                }}
                            />

                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "var(--validator)",
                                }}
                            />

                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "var(--runner)",
                                }}
                            />

                            <span style={{ marginLeft: 6 }}>
                                Protected by design
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

const FooterCol = ({ title, links }) => (
    <div>
        <div
            style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--ink-3)",
                marginBottom: 14,
            }}
        >
            {title}
        </div>

        <ul className="space-y-2.5">
            {links.map(([label, href]) => (
                <li key={label}>
                    <a
                        href={href}
                        className="nav-link"
                        style={{ fontSize: 14 }}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default FinalCTA;