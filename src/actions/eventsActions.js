import * as types from './actionTypes';

export function loadEventsSuccess(events = []) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        events
    };
}

export function searchEvents(query) {
    return {
        type: types.SEARCH_EVENTS,
        query
    }
}