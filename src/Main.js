import React, { useReducer, useState } from 'react';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const dateObj = new Date(action.payload);
            return fetchAPI(dateObj);
        default:
            return state;
    }
}

export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

export default function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Dynamic submission handler wrapper verifying API feedback
    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            setIsSubmitted(true);
        }
    };

    return (
        <main>
            {isSubmitted ? (
                <ConfirmedBooking />
            ) : (
                <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
            )}
        </main>
    );
}