import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        // Dispatch the state change when the date form field is changed (Step 2 Tip)
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion });
    };

    return (
        <form 
            style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '20px auto' }} 
            onSubmit={handleSubmit}
            aria-label="Table Reservation Form"
        >
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                required
                onChange={handleDateChange} 
            />

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

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input 
                type="submit" 
                value="Make Your Reservation" 
                style={{ backgroundColor: '#495E57', color: 'white', padding: '10px', cursor: 'pointer', border: 'none', borderRadius: '4px' }}
            />
        </form>
    );
}