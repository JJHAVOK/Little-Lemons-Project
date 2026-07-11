import React from 'react';

export default function Nav() {
    return (
        <nav className="navbar" aria-label="Primary Navigation">
            <a href="/" className="logo-placeholder">Little Lemon</a>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#reservations">Reservations</a></li>
            </ul>
        </nav>
    );
}