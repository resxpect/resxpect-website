import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
    { label: "How It Works", href: "#how" },
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
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled
                    ? "rgba(255,255,255,0.85)"
                    : "rgba(255,255,255,0.55)",
                backdropFilter: "blur(14px) saturate(140%)",
                WebkitBackdropFilter: "blur(14px) saturate(140%)",
                borderBottom: scrolled
                    ? "1px solid var(--line)"
                    : "1px solid transparent",
            }}
        >
            <div className="max-w-[1360px] mx-auto px-8 lg:px-12 flex items-center justify-between h-[72px]">
                <a href="#top" data-testid="nav-brand">
                    <Logo size={28} />
                </a>

                <ul className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="nav-link"
                                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-5">
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
                        style={{ padding: "10px 18px", fontSize: 13 }}
                    >
                        Request access
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
