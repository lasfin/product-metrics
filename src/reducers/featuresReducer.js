import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function featuresReducer(state = initialState.features, action) {
    switch (action.type) {
        case types.REQUEST_FEATURES:
            return {
                ...state,
                filtered: [],
                list: [],
                isFetching: true
            };
        case types.LOAD_FEATURES_SUCCESS:
            return {
                ...state,
                list: action.data,
                filtered: action.data,
                isFetching: false
            };
        case types.SEARCH_FEATURES:
            return {
                ...state,
                query: action.query,
                filtered: state.list.filter((feature) => {
                    return feature.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1
                })
            };
        default:
            return state;
    }
}



