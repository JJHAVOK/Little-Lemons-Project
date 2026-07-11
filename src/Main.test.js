import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of available booking time slots from the API', () => {
    const initialTimes = initializeTimes();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes.length).toBeGreaterThan(0);
});

test('updateTimes returns a dynamic array of times matching the pre-selected date payload dispatch', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2026-07-15' };
    const updatedState = updateTimes(initialState, action);
    expect(Array.isArray(updatedState)).toBe(true);
    expect(updatedState.length).toBeGreaterThan(0);
});