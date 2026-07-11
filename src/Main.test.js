import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct initial booking time slots', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided in the state', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2026-07-15' };
    const updatedState = updateTimes(initialState, action);
    expect(updatedState).toEqual(initialState);
});