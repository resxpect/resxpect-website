import React from "react";

const benefits = [
    {
        title: "Protected funds",
        body: "Committed funds are held safely and released only against agreed terms.",
        color: "creator",
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <path d="M3 10h18M7 14h4" />
            </svg>
        ),
    },
    {
        title: "Connected evidence",
        body: "Files, messages and hand-offs stay linked to the agreement, not lost across tools.",
        color: "runner",
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
        ),
    },
    {
        title: "Clear outcomes",
        body: "Both sides know what completion looks like before, during and after the work.",
        color: "validator",
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="9" />
                <polyline points="8 12 11 15 16 9" />
            </svg>
        ),
    },
    {
        title: "Verifiable reputation",
        body: "Every completed agreement adds to a portable, verifiable record of work.",
        color: "creator",
        icon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.8 5.5 21 7 14.1 2 9.3 9 8.5 12 2" />
            </svg>
        ),
    },
];

const WhyResxpect = () => {
    return (
        <section
            id="why"
            data-testid="why-section"
            className="section-warm py-24 lg:py-32"
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-16">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="label-pill on-paper mb-6">
                            One Connected Agreement
                        </div>

                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(30px, 4vw, 56px)",
                                lineHeight: 1.08,
                                color: "var(--ink)",
                            }}
                        >
                            Protection that stays with the {" "}
                            <span style={{ color: "var(--creator)" }}>
                                agreement
                            </span>
                            .
                        </h2>
                    </div>

                    <div className="col-span-12 lg:col-span-5 flex items-end">
                        <p
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                color: "var(--ink-2)",
                                maxWidth: 480,
                            }}
                        >
                            RESXPECT keeps the terms, funds, evidence and
                            outcome connected from the first commitment to
                            final completion.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.title}
                            className="card p-6 lg:p-7"
                            data-testid={`benefit-${benefit.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                        >
                            <div
                                style={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 12,
                                    background: `var(--${benefit.color}-soft)`,
                                    color: `var(--${benefit.color})`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 18,
                                }}
                            >
                                {benefit.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: 19,
                                    fontWeight: 800,
                                    letterSpacing: "-0.01em",
                                    color: "var(--ink)",
                                    marginBottom: 8,
                                }}
                            >
                                {benefit.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: 14.5,
                                    lineHeight: 1.6,
                                    color: "var(--ink-2)",
                                }}
                            >
                                {benefit.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyResxpect;