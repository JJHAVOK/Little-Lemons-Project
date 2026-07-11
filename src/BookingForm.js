import React, { useState } from 'react';

export default function BookingForm() {
    // 1. Define separate local state variables for each form input field
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    // 2. Local state array to hold mock available times as requested by Step 3
    const [availableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, time, guests, occasion });
        alert(`Reservation requested for ${date} at ${time}!`);
    };

    return (
        <form 
            style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '20px auto' }} 
            onSubmit={handleSubmit}
            aria-label="Table Reservation Form"
        >
            {/* Date Picker Input */}
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                required
                onChange={(e) => setDate(e.target.value)} 
            />

            {/* Time Picker Dropdown */}
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>

            {/* Guest Count Input */}
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
            />

            {/* Occasion Selection Dropdown */}
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            {/* Submit CTA Button */}
            <input 
                type="submit" 
                value="Make Your Reservation" 
                style={{ backgroundColor: '#495E57', color: 'white', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
            />
        </form>
    );
}