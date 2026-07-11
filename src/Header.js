import React from 'react';

export default function Header() {
    const scrollToReservations = () => {
        const target = document.getElementById('reservations');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="hero-banner">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button 
                    className="hero-cta-btn" 
                    aria-label="Reserve a Table at Little Lemon"
                    onClick={scrollToReservations}
                >
                    Reserve a Table
                </button>
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