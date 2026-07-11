import React, { useReducer } from 'react';
import BookingPage from './BookingPage';
import { fetchAPI } from './api';

// Function to handle updating available times dynamically based on the date action payload
export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // Convert the text input string into a valid Date object for the API call
            const dateObj = new Date(action.payload);
            return fetchAPI(dateObj);
        default:
            return state;
    }
}

// Function to initialize the default available times state using the current system date
export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

export default function Main() {
    // Reducer initialization hook managing live time arrays
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    );
}