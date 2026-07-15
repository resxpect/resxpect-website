import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
    { label: "How It Works", href: "#how" },
    { label: "Protected Agreements", href: "#principles" },
    { label: "Reputation", href: "#reputation" },
    { label: "Disputes", href: "#disputes" },
    { label: "About", href: "#about" },
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
                backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.70)",
                backdropFilter: "blur(16px) saturate(140%)",
                WebkitBackdropFilter: "blur(16px) saturate(140%)",
                borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
            }}
        >
            <div className="max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
                <a href="#top" data-testid="nav-brand"><Logo size={30} /></a>
                <ul className="hidden lg:flex items-center gap-9">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="nav-link"
                                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g,"-")}`}>
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#request" data-testid="nav-request-access" className="btn-primary" style={{ padding: "11px 20px", fontSize: 13.5 }}>
                    Request Access
                </a>
            </div>
        </nav>
    );
};

export default Nav;
