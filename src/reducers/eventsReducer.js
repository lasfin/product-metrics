import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function eventsReducer(state = initialState.events, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            var newList = action.list.map(extendByTrendAndWarning);
            return Object.assign(state, {
                list: newList,
                filtered: newList
            });
        case types.SEARCH_EVENTS:
            return {
                filtered: state.list.filter((event) => {
                    return event.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1 ||
                           event.label.toLowerCase().indexOf(action.query.toLowerCase())!== -1
                }),
                query: action.query,
                list: state.list
            };
        default:
            return state;
    }
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
            event.trend = 'default';
    }

    event.warning = change < assumptionWarning;

    return event;
}