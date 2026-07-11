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
            <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" 
                alt="Little Lemon culinary featured dish" 
                className="hero-image-placeholder"
                style={{ objectFit: 'cover' }}
            />
        </header>
    );
}