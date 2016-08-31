import * as types from './actionTypes';

export function loadEventsSuccess(list = []) {
    return {
        type: types.LOAD_EVENTS_SUCCESS,
        list
    };
}

export function searchEvents(query) {
    return {
        type: types.SEARCH_EVENTS,
        query: query.trim()
    }
}

export function filterByTrend(trend) {
    return {
        type: types.FILTER_BY_TREND,
        trend
    }
}