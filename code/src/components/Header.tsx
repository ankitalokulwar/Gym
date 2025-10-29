import "./Header.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleLinkClick = () => {
        if (menuOpen) setMenuOpen(false);
    };

    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section[id]");

        const handleScroll = () => {
            const scrollY = window.scrollY + 150;
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "About us", id: "about" },
        { label: "Classes", id: "classes" },
        { label: "Trainers", id: "trainers" },
        { label: "Facilities", id: "facilities" },
        { label: "Gallery", id: "gallery" },
        { label: "Membership", id: "membership" },
        { label: "Testimonials", id: "testimonials" },
    ];

    return (
        <header className="custom-header">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <div className="container-fluid px-3 d-flex align-items-center justify-content-between">
                    {/* Logo */}
                    <a className="navbar-brand" href="#home" onClick={handleLinkClick}>
                        <img
                            src="/logo.svg"
                            alt="Titan Strength"
                            className="logo-img"
                        />
                        <span className="brand-text">Titan Strength</span>
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className={`bi bi-list ${menuOpen ? "d-none" : ""}`} />
                        <i className={`bi bi-x ${menuOpen ? "" : "d-none"}`} />
                    </button>

                    {/* Navigation */}
                    <div
                        className={`collapse navbar-collapse justify-content-end ${menuOpen ? "show" : ""
                            }`}
                    >
                        <ul className="navbar-nav align-items-center">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.id}>
                                    <a
                                        className={`nav-link ${activeSection === item.id ? "active" : ""
                                            }`}
                                        href={`#${item.id}`}
                                        onClick={handleLinkClick}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}

                            {/* Contact Button (visible only on mobile) */}
                            <li className="nav-item d-lg-none mt-2">
                                <a
                                    href="#contact"
                                    className={`btn btn-contact w-100 ${activeSection === "contact" ? "active" : ""
                                        }`}
                                    onClick={handleLinkClick}
                                >
                                    Contact us
                                </a>
                            </li>
                        </ul>

                        {/* Desktop Contact Button */}
                        <div className="d-none d-lg-block ms-3">
                            <a href="#contact" className="btn btn-contact">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
