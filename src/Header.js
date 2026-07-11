import React from 'react';

export default function Header() {
    return (
        <header className="hero-banner">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="hero-cta-btn" aria-label="Reserve a Table at Little Lemon">Reserve a Table</button>
            </div>
            <div className="hero-image-placeholder" aria-hidden="true">
                Little Lemon Culinary Featured
            </div>
        </header>
    );
}