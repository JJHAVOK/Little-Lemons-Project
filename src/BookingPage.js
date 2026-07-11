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

            {/* The Figma Specials Grid to eliminate empty blank canvas layouts */}
            <section className="specials-section" id="menu">
                <div className="specials-header">
                    <h3>This Weeks Specials!</h3>
                    <button className="hero-cta-btn">Online Menu</button>
                </div>
                <div className="specials-grid">
                    <article className="menu-card">
                        <div className="card-image-placeholder">Greek Salad Image</div>
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
                        <div className="card-image-placeholder">Bruchetta Image</div>
                        <div className="card-body">
                            <div className="card-title-row">
                                <span>Bruchetta</span>
                                <span className="card-price">$5.99</span>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className="card-delivery-btn">Order a delivery</button>
                        </div>
                    </article>

                    <article className="menu-card">
                        <div className="card-image-placeholder">Lemon Dessert Image</div>
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