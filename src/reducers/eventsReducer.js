import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function eventsReducer(state = initialState.events, action) {
    switch (action.type) {
        case types.LOAD_EVENTS_SUCCESS:
            return Object.assign(state, {
                list: action.list,
                filtered: action.list
            });
        case types.SEARCH_EVENTS:
            // todo: why it does not work?
            // return Object.assign(state, {
            //     filtered: state.list.filter((event) => {
            //         return event.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1 ||
            //                event.label.toLowerCase().indexOf(action.query.toLowerCase())!== -1
            //     }),
            //     query: action.query
            // });
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
