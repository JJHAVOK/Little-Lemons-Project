import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <>
            {/* The Main Dynamic Table Booking System Area */}
            <div className="booking-container">
                <h1>Reserve a Table</h1>
                <p>Please fill out the details below to secure your dining arrangement at Little Lemon.</p>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            </div>

            {/* The Figma Specials Grid */}
            <section className="specials-section" id="menu">
                <div className="specials-header">
                    <h3>This Weeks Specials!</h3>
                    <button className="hero-cta-btn">Online Menu</button>
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
                            <button className="card-delivery-btn">Order a delivery</button>
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
                            <button className="card-delivery-btn">Order a delivery</button>
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
                            <button className="card-delivery-btn">Order a delivery</button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}