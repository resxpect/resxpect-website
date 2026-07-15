import React from "react";

/* Shared phone chrome */
const PhoneShell = ({ children, width = 240, height = 500, testid }) => (
    <div
        className="phone-frame"
        style={{ width, height }}
        data-testid={testid}
    >
        <div className="phone-notch" />
        <div className="phone-screen" style={{ width: "100%", height: "100%" }}>
            {children}
        </div>
    </div>
);

const BottomNav = ({ active = "home" }) => {
    const items = [
        { k: "home", label: "Home", icon: HomeIcon },
        { k: "agreements", label: "Agreements", icon: DocIcon },
        { k: "inbox", label: "Inbox", icon: InboxIcon },
        { k: "profile", label: "Profile", icon: UserIcon },
    ];
    return (
        <div className="absolute left-0 right-0 bottom-0 bg-white flex justify-around items-center py-3 border-t"
            style={{ borderColor: "var(--line)" }}>
            {items.map(({ k, label, icon: Icon }) => (
                <div key={k} className="flex flex-col items-center gap-1">
                    <Icon color={active === k ? "#F7931A" : "#9a9aa0"} />
                    <span style={{ fontSize: 9, fontWeight: 600, color: active === k ? "#F7931A" : "#9a9aa0" }}>
                        {label}
                    </span>
                </div>
            ))}
        </div>
    );
};

/* Tiny icons */
const HomeIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l9-7 9 7v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />
    </svg>
);
const DocIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
);
const InboxIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-6l-2 3h-4l-2-3H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
);
const UserIcon = ({ color }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);
const StatusBar = ({ dark = false }) => (
    <div className="flex items-center justify-between px-6 pt-4 pb-1"
         style={{ color: dark ? "#fff" : "#0e0e10", fontSize: 11, fontWeight: 700 }}>
        <span>9:41</span>
        <span className="flex items-center gap-1">
            <span style={{ fontSize: 9 }}>●●●●</span>
            <span style={{ fontSize: 9 }}>▲</span>
            <span style={{ fontSize: 9 }}>■</span>
        </span>
    </div>
);

/* ----------------- LEFT PHONE — My Agreements ------------------ */
export const PhoneAgreements = () => {
    const items = [
        { title: "Website redesign", status: "In progress", due: "Due in 2 days", amt: "$250" },
        { title: "Brand identity design", status: "In progress", due: "Due in 5 days", amt: "$450" },
        { title: "Content writing", status: "Under review", due: "Due in 1 day", amt: "$150" },
        { title: "App development", status: "Completed", due: "Completed 3 days ago", amt: "$1,200" },
    ];
    return (
        <PhoneShell testid="phone-agreements" width={270} height={500}>
            <StatusBar />
            <div className="px-5 pt-3 pb-3 flex items-center gap-3">
                <div style={{ width: 24, height: 24, borderRadius: 12, background: "#f4f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#0e0e10" }}>‹</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>My agreements</div>
            </div>
            <div className="px-5 pb-3 flex items-center gap-2">
                {["All", "Active", "Completed", "Drafts"].map((t, i) => (
                    <span key={t} style={{
                        padding: "4px 10px", fontSize: 10, borderRadius: 999,
                        background: i === 0 ? "#0e0e10" : "#f4f4f6",
                        color: i === 0 ? "#fff" : "#3a3a3d",
                        fontWeight: 600,
                    }}>{t}</span>
                ))}
            </div>
            <div className="px-4 space-y-2.5 overflow-hidden" style={{ maxHeight: 320 }}>
                {items.map((it, i) => (
                    <div key={i} className="flex gap-2.5" style={{ padding: 10, background: "#fafafa", borderRadius: 12 }}>
                        <div style={{ width: 26, height: 26, borderRadius: 8, background: "#fff2df", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7931A" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="flex justify-between items-start gap-1">
                                <div style={{ fontSize: 11.5, fontWeight: 700, color: "#0e0e10" }}>{it.title}</div>
                                <div style={{ fontSize: 9.5, color: "#9a9aa0", whiteSpace: "nowrap" }}>{it.due}</div>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <span style={{
                                    padding: "2px 7px", fontSize: 9, borderRadius: 999,
                                    background: it.status === "Completed" ? "#e6f7ec" : it.status === "Under review" ? "#fff4d6" : "#fff2df",
                                    color: it.status === "Completed" ? "#1a8a3d" : it.status === "Under review" ? "#a37500" : "#F7931A",
                                    fontWeight: 600,
                                }}>{it.status}</span>
                                <span style={{ fontSize: 11, fontWeight: 700, color: "#0e0e10" }}>{it.amt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <BottomNav active="agreements" />
        </PhoneShell>
    );
};

/* ----------------- CENTER PHONE — Home / Reputation ------------------ */
export const PhoneHome = () => {
    return (
        <PhoneShell testid="phone-home" width={275} height={548}>
            {/* Orange header */}
            <div style={{ background: "#F7931A", padding: "44px 20px 22px", color: "#fff", position: "relative" }}>
                <div className="flex items-center justify-between text-white" style={{ fontSize: 11, fontWeight: 700, position: "absolute", top: 14, left: 20, right: 20 }}>
                    <span>9:41</span>
                    <span style={{ fontSize: 9 }}>●●●●  ▲  ■</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div style={{ width: 34, height: 34, borderRadius: 17, background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div>
                            <div style={{ fontSize: 15, fontWeight: 800 }}>Hello, Alex</div>
                            <div style={{ fontSize: 11, opacity: 0.85 }}>Welcome back</div>
                        </div>
                    </div>
                    <div style={{ width: 32, height: 32, borderRadius: 16, background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                    </div>
                </div>
            </div>
            {/* Content */}
            <div className="px-4 pt-4 space-y-3" style={{ maxHeight: 400, overflow: "hidden" }}>
                {/* RP card */}
                <div style={{ padding: 12, border: "1px solid #f0f0f2", borderRadius: 14 }}>
                    <div style={{ fontSize: 10.5, color: "#6b6b70", fontWeight: 600 }}>Respect Points</div>
                    <div style={{ fontSize: 30, fontWeight: 800, color: "#0e0e10", letterSpacing: "-0.02em", marginTop: 2 }}>56 RP</div>
                    <div className="flex items-center mt-2">
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#F7931A" }}>Level 3</span>
                    </div>
                </div>
                {/* Active agreement */}
                <div style={{ padding: 12, background: "#fdf7ef", borderRadius: 14 }}>
                    <div style={{ fontSize: 10, color: "#6b6b70", fontWeight: 600 }}>Active agreement</div>
                    <div style={{ fontSize: 13.5, fontWeight: 800, color: "#0e0e10", marginTop: 2 }}>Website redesign</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#F7931A", marginTop: 1 }}>$250</div>
                    <div className="flex items-center justify-between mt-2">
                        <span style={{
                            padding: "3px 8px", fontSize: 9.5, borderRadius: 999,
                            background: "#fff2df", color: "#F7931A", fontWeight: 700,
                        }}>In progress</span>
                        <span style={{ fontSize: 9.5, color: "#9a9aa0" }}>Due in 2 days</span>
                    </div>
                </div>
                {/* Quick actions */}
                <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#0e0e10", marginBottom: 8 }}>Quick actions</div>
                    <div className="grid grid-cols-4 gap-2">
                        {[
                            { label: "New agreement", icon: PlusIcon },
                            { label: "My agreements", icon: DocIcon },
                            { label: "Wallet", icon: WalletIcon },
                            { label: "Profile", icon: UserIcon },
                        ].map(({ label, icon: Icon }) => (
                            <div key={label} className="flex flex-col items-center gap-1.5" style={{ padding: "8px 4px", border: "1px solid #f0f0f2", borderRadius: 10 }}>
                                <Icon color="#F7931A" />
                                <span style={{ fontSize: 8.5, color: "#3a3a3d", fontWeight: 600, textAlign: "center", lineHeight: 1.15 }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <BottomNav active="home" />
        </PhoneShell>
    );
};

const PlusIcon = ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
);
const WalletIcon = ({ color }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v6M17 15h.01"/></svg>
);

/* ----------------- RIGHT PHONE — Lifecycle ------------------ */
export const PhoneLifecycle = () => {
    const steps = [
        ["Agreement created", true],
        ["Payment protected", true],
        ["Work in progress", true],
        ["Work submitted", true],
        ["Under review", true],
        ["Completed", false],
    ];
    return (
        <PhoneShell testid="phone-lifecycle" width={270} height={500}>
            <StatusBar />
            <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                <div style={{ fontSize: 13, fontWeight: 700 }}>Agreement</div>
                <div style={{ fontSize: 14, color: "#9a9aa0" }}>⋯</div>
            </div>
            <div className="px-5">
                <div style={{ fontSize: 15, fontWeight: 800, color: "#0e0e10" }}>Website redesign</div>
            </div>
            <div className="px-5 pt-4 space-y-3" style={{ maxHeight: 300, overflow: "hidden" }}>
                {steps.map(([label, done], i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div style={{
                            width: 20, height: 20, borderRadius: 10,
                            background: done ? "#F7931A" : "#fff",
                            border: done ? "1px solid #F7931A" : "1.5px solid #d8d8dc",
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            {done && (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                            )}
                        </div>
                        <div style={{ fontSize: 12, fontWeight: done ? 700 : 500, color: done ? "#0e0e10" : "#9a9aa0" }}>{label}</div>
                    </div>
                ))}
            </div>
            <div className="px-5 pt-4">
                <div style={{ fontSize: 10, color: "#6b6b70", fontWeight: 600 }}>Protected amount</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#0e0e10", letterSpacing: "-0.02em", marginTop: 2 }}>$250</div>
                <button style={{
                    marginTop: 10, width: "100%", padding: "10px",
                    background: "#F7931A", color: "#fff", border: "none",
                    borderRadius: 12, fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}>
                    View details
                </button>
            </div>
        </PhoneShell>
    );
};
