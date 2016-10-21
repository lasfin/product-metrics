import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function featuresReducer(state = initialState.features, action) {
    switch (action.type) {
        case types.REQUEST_FEATURES:
            return {
                list: [],
                isFetching: true
            };
        case types.LOAD_FEATURES_SUCCESS:
            return {
                list: action.data,
                isFetching: false
            };
        default:
            return state;
    }
}



