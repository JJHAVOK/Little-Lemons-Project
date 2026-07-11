import React from 'react';

export default function ConfirmedBooking() {
    return (
        <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#EDEFEE', borderRadius: '8px', maxWidth: '500px', margin: '40px auto' }}>
            <h1 style={{ fontFamily: 'serif', color: '#495E57', fontSize: '40px' }}>Reservation Confirmed!</h1>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
                Thank you for choosing Little Lemon. Your table has been successfully secured. 
                A confirmation detail summary has been sent to your email.
            </p>
            <div style={{ fontSize: '50px', color: '#F4CE14' }}>
                <i className="fa-solid fa-circle-check"></i>
            </div>
        </div>
    );
}