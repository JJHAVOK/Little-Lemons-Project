import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of available time slots', () => {
    const initialTimes = initializeTimes();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns an array of times based on the dispatched date', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2026-07-15' };
    const updatedState = updateTimes(initialState, action);
    expect(Array.isArray(updatedState)).toBe(true);
});