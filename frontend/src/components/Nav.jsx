import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
    { label: "Protocol", href: "#how" },
    { label: "Trust", href: "#trust" },
    { label: "Agreements", href: "#agreements" },
    { label: "Reputation", href: "#reputation" },
    { label: "Disputes", href: "#disputes" },
];

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            data-testid="site-nav"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
            style={{
                backgroundColor: scrolled
                    ? "rgba(10,10,11,0.72)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "1px solid transparent",
            }}
        >
            <div className="max-w-[1440px] mx-auto px-8 lg:px-12 flex items-center justify-between h-[72px]">
                <a
                    href="#top"
                    className="text-white"
                    data-testid="nav-brand"
                >
                    <Logo size={22} />
                </a>

                <ul className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="nav-link"
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <a
                        href="#signin"
                        className="hidden md:inline-block nav-link"
                        data-testid="nav-signin"
                    >
                        Sign in
                    </a>
                    <a
                        href="#request"
                        data-testid="nav-request-access"
                        className="btn-primary"
                        style={{ padding: "10px 16px", fontSize: 13 }}
                    >
                        Request access
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
