import initialState from './initialState';

export default function eventsReducer(state = initialState.events, action) {
    switch (action.type) {
        default:
            return state;
    }
}
