import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
    { label: "Why RESXPECT", href: "#problem" },
    { label: "How It Works", href: "#how" },
    { label: "Roles", href: "#roles" },
];

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const dark = !scrolled; // transparent over hero video → white text

    return (
        <nav
            data-testid="site-nav"
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled
                    ? "rgba(255,255,255,0.94)"
                    : "transparent",
                backdropFilter: scrolled
                    ? "blur(16px) saturate(140%)"
                    : "none",
                WebkitBackdropFilter: scrolled
                    ? "blur(16px) saturate(140%)"
                    : "none",
                borderBottom: scrolled
                    ? "1px solid var(--line)"
                    : "1px solid transparent",
            }}
        >
            <div className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between h-[60px] md:h-[76px]">
                <a
                    href="#top"
                    data-testid="nav-brand"
                    className="nav-brand"
                >
                    <Logo
                        markHeight={30}
                        wordmarkSize={18}
                        gap={12}
                        tone={dark ? "light" : "ink"}
                    />
                </a>

                <ul className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${
                                    dark ? "on-dark" : ""
                                }`}
                                data-testid={`nav-link-${link.label
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3 md:gap-4">
                    <a
                        href="#signin"
                        className={`hidden md:inline-block nav-link ${
                            dark ? "on-dark" : ""
                        }`}
                        data-testid="nav-signin"
                    >
                        Sign in
                    </a>

                    <a
                        href="#create"
                        data-testid="nav-create-agreement"
                        className="btn-primary nav-cta"
                        style={{
                            padding: "11px 18px",
                            fontSize: 13.5,
                        }}
                    >
                        Join Early Access
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;