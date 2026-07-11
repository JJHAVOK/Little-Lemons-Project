import React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage() {
    return (
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'serif', color: '#495E57' }}>Reserve a Table</h1>
            <p>Please fill out the details below to secure your dining arrangement at Little Lemon.</p>
            <BookingForm />
        </div>
    );
}