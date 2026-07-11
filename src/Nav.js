import React from 'react';

export default function Nav() {
    const triggerOrderPlaceholder = (e) => {
        e.preventDefault();
        alert(' Little Lemon E-Commerce: Digital Point-of-Sale module initializing for active checkout!');
    };

    return (
        <nav className="navbar" aria-label="Primary Navigation">
            <a href="/" className="logo-placeholder">Little Lemon</a>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order" onClick={triggerOrderPlaceholder}>Order Online</a></li>
            </ul>
        </nav>
    );
}