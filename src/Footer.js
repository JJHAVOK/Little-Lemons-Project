import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-container" aria-label="Site Footer Information">
            <div className="footer-column">
                <h4>Little Lemon</h4>
                <p style={{ fontSize: '15px', maxWidth: '240px', opacity: 0.8, lineHeight: '1.5' }}>
                    Traditional Mediterranean recipes served with modern design elegance.
                </p>
            </div>
            <div className="footer-column">
                <h4>Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contact Us</h4>
                <ul style={{ fontSize: '15px', opacity: 0.8, lineHeight: '1.6' }}>
                    <li>123 Lemon Way, Chicago</li>
                    <li>(312) 555-0199</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
        </footer>
    );
}