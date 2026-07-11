import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

// Function to handle changing the available times based on the selected date action
export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For this milestone, the instructions state it can return the same times regardless of date
            return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        default:
            return state;
    }
}

// Function to initialize the default available times state
export function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export default function Main() {
    // Changing availableTimes from a useState to a useReducer as required by Step 2
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <main>
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
        </main>
    );
}