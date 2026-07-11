import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    
    // Global simulated e-commerce handler for portfolio interactivity
    const handleMockAction = (featureName) => {
        alert(` Little Lemon E-Commerce: "${featureName}" checkout flow is currently processing your demo request!`);
    };

    return (
        <>
            {/* 1. MAIN DYNAMIC RESERVATION PORTAL */}
            <div className="booking-container" id="reservations">
                <h1>Reserve a Table</h1>
                <p>Please fill out the details below to secure your dining arrangement at Little Lemon.</p>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            </div>

            {/* 2. THE HIGHLIGHTED SPECIALS GRID (MENU SECTION) */}
            <section className="specials-section" id="menu">
                <div className="specials-header">
                    <h3>This Weeks Specials!</h3>
                    <button className="hero-cta-btn" onClick={() => handleMockAction("Full Online Menu View")}>Online Menu</button>
                </div>
                <div className="specials-grid">
                    <article className="menu-card">
                        <img 
                            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80" 
                            alt="Fresh Greek Salad" 
                            className="card-image-placeholder"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <div className="card-title-row">
                                <span>Greek Salad</span>
                                <span className="card-price">$12.99</span>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic croutons.</p>
                            <button className="card-delivery-btn" onClick={() => handleMockAction("Greek Salad Delivery Order")}>Order a delivery</button>
                        </div>
                    </article>

                    <article className="menu-card">
                        <img 
                            src="https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=300&q=80" 
                            alt="Traditional Italian Tomato Bruschetta" 
                            className="card-image-placeholder"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <div className="card-title-row">
                                <span>Bruschetta</span>
                                <span className="card-price">$5.99</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="card-delivery-btn" onClick={() => handleMockAction("Bruschetta Delivery Order")}>Order a delivery</button>
                        </div>
                    </article>

                    <article className="menu-card">
                        <img 
                            src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80" 
                            alt="Creamy gourmet lemon dessert" 
                            className="card-image-placeholder"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="card-body">
                            <div className="card-title-row">
                                <span>Lemon Dessert</span>
                                <span className="card-price">$5.00</span>
                            </div>
                            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className="card-delivery-btn" onClick={() => handleMockAction("Lemon Dessert Delivery Order")}>Order a delivery</button>
                        </div>
                    </article>
                </div>
            </section>

            {/* 3. BRAND NEW PORTFOLIO ABOUT SECTION */}
            <section className="hero-banner" id="about" style={{ backgroundColor: '#EDEFEE', color: '#333333', margin: '40px 0 0 0' }}>
                <div className="hero-content">
                    <h1 style={{ color: '#495E57' }}>Little Lemon</h1>
                    <h2 style={{ color: '#F4CE14', fontWeight: 'bold' }}>Our Chicago Story</h2>
                    <p style={{ color: '#555555' }}>
                        Founded by brothers Adrian and Mario, Little Lemon brings the rich, sun-kissed flavors of the Mediterranean straight to the heart of Chicago. Utilizing heirloom family recipes alongside locally sourced ingredients, our kitchen crafts experiences rooted in tradition and elevated with modern design elegance.
                    </p>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80" 
                    alt="Little Lemon Head Chefs Preparing Dinner" 
                    className="hero-image-placeholder"
                    style={{ objectFit: 'cover' }}
                />
            </section>
        </>
    );
}