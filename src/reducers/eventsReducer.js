import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return Object.assign(state, {
                events: action.events
            });
        case types.SEARCH_EVENTS:
            return {
                events: state.events.filter((event) => {
                    return event.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1 ||
                           event.label.toLowerCase().indexOf(action.query.toLowerCase())!== -1
                }),
                query: action.query
            };
        default:
            return state;
    }
}
