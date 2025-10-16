import './Footer.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className='container'>
                {/* Left section */}
                <div className="left">
                    <img src="/src/assets/logo.svg" alt="Titan Strength Logo" className="logo" />
                    <span className="brand">Titan Strength</span>
                </div>

                {/* Middle section */}
                <div className="center">
                    © {currentYear} Titan Strength. All rights reserved.
                </div>

                {/* Right section */}
                <div className="right">
                    Delivered by{" "}
                    <a href="https://www.engraftsolutions.com" target="_blank" rel="noopener noreferrer"
                        className="animated-gradient-text copy-right">
                        Engraft Solutions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
