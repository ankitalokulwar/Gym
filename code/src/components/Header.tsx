import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    const handleNavClick = () => setExpanded(false);

    // Detect active section while scrolling
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>('section[id]');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id') || '';
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // call once on load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header-section">
            <Navbar
                expand="lg"
                className="navbar-dark"
                fixed="top"
                expanded={expanded}
            >
                <Container>
                    {/* Logo */}
                    <Navbar.Brand href="#" className="d-flex align-items-center" onClick={handleNavClick}>
                        <img
                            src="./src/assets/logo.svg"
                            alt="Titan Strength"
                            className="logo-img"
                        />
                        <span className="brand-text">Titan Strength</span>
                    </Navbar.Brand>

                    {/* Mobile toggle */}
                    <Navbar.Toggle
                        aria-controls="main-navbar"
                        onClick={() => setExpanded(expanded ? false : true)}
                    />

                    {/* Nav Links */}
                    <Navbar.Collapse id="main-navbar" className="justify-content-end">
                        <Nav className="align-items-center">
                            <Nav.Link
                                href="#about"
                                onClick={handleNavClick}
                                className={activeSection === 'about' ? 'active' : ''}
                            >
                                About us
                            </Nav.Link>
                            <Nav.Link
                                href="#classes"
                                onClick={handleNavClick}
                                className={activeSection === 'classes' ? 'active' : ''}
                            >
                                Classes
                            </Nav.Link>
                            <Nav.Link
                                href="#trainers"
                                onClick={handleNavClick}
                                className={activeSection === 'trainers' ? 'active' : ''}
                            >
                                Trainers
                            </Nav.Link>
                            <Nav.Link
                                href="#facilities"
                                onClick={handleNavClick}
                                className={activeSection === 'facilities' ? 'active' : ''}
                            >
                                Facilities
                            </Nav.Link>
                            <Nav.Link
                                href="#gallery"
                                onClick={handleNavClick}
                                className={activeSection === 'gallery' ? 'active' : ''}
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                href="#membership"
                                onClick={handleNavClick}
                                className={activeSection === 'membership' ? 'active' : ''}
                            >
                                Membership
                            </Nav.Link>
                            <Nav.Link
                                href="#testimonials"
                                onClick={handleNavClick}
                                className={activeSection === 'testimonials' ? 'active' : ''}
                            >
                                Testimonials
                            </Nav.Link>

                            <Button
                                variant="danger"
                                className={`contact-btn ${activeSection === 'contact' ? 'active' : ''
                                    }`}
                                href="#contact"
                                onClick={handleNavClick}
                            >
                                Contact us
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
