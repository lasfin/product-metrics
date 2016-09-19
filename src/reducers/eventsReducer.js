import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function eventsReducer(state = initialState.events, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            var newList = action.list.map(extendByTrendAndWarning);
            return {
                ...state,
                list: newList,
                filtered: newList,
                isFetching: false
            };
        case types.SEARCH_EVENTS:
            return {
                ...state,
                filtered: state.list.filter((event) => {
                    return filterByText(event, action.query);
                }).filter((event) => {
                    return filterByTrend(event, state.trend);
                }),
                query: action.query
            };
        case types.FILTER_BY_TREND:
            return {
                ...state,
                filtered: state.list.filter((event) => {
                    return filterByTrend(event, action.trend);
                }).filter((event) => {
                    return filterByText(event, state.query);
                }),
                trend: action.trend
            };
        default:
            return state;
    }
}


function filterByText(event, query) {
    return event.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
           event.label.toLowerCase().indexOf(query.toLowerCase())!== -1
}


function filterByTrend(event, trend) {
    if (trend === 'all' || !trend) return 1;
    return event.trend === trend;
}


function extendByTrendAndWarning(event) {
    const assumption = 1.15;
    const assumptionWarning = 0.5;
    let len = event.count.length;
    let averageCountBegin = (event.count[0] + event.count[1] + event.count[2]) / 3;
    let averageCountEnd = (event.count[len - 2] + event.count[len - 3] + event.count[len - 4]) / 3;
    let change = averageCountEnd / averageCountBegin;

    switch (true) {
        case change > assumption:
            event.trend = 'up';
            break;
        case change < 1 / assumption:
            event.trend = 'down';
            break;
        default:
            event.trend = 'neutral';
    }

    event.warning = change < assumptionWarning;

    return event;
}