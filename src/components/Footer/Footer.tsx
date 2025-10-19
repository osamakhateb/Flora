import React from 'react';
import "./Footer.css";

interface FooterProps {
    logo: string;
    logoText: string;
    services: string[];
    about: string[];
    location: string;
    copyright: string;
    rightText: string;
    socialIcons?: string[];
}

const Footer: React.FC<FooterProps> = ({
    logo,
    logoText,
    services,
    about,
    location,
    copyright,
    socialIcons = []
}) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={logo} alt="Flora Logo" className="footer-logo" />
                    <p className="logo-text">{logoText}</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                        {services.map((service, index) => (
                            <li key={index}>
                                <a href="#">{service}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">About</h3>
                    <ul className="footer-links">
                        {about.map((item, index) => (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section location-section">
                    <h3 className="footer-title">Our Location</h3>
                    <p className="location-text">{location}</p>

                    {socialIcons.length > 0 && (
                        <div className="social-icons">
                            {socialIcons.map((icon, index) => (
                                <img
                                    key={index}
                                    src={icon}
                                    alt={`Social icon ${index + 1}`}
                                    className="social-icon"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <div className="copyright">
                        {copyright}
                    </div>
                    <div className="right-text">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
