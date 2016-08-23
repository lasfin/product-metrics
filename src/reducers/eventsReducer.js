import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return {
                events: action.events,
                query: state.events.query
            };
        case types.SEARCH_EVENTS:
            return {
                events: state.events.filter((event) => {
                    return event.event_name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1
                }),
                query: action.query
            };
            break;
        default:
            return state;
    }
}
