import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';


export function requestFeatures() {
    return {
        type: types.REQUEST_FEATURES
    }
}

export function fetchFeatures() {
    return function (dispatch) {
        dispatch(requestFeatures());
        return fetch(`http://localhost:5000/features/`)
            .then(response => response.json())
            .then(response => dispatch(loadFeaturesSuccess(response)))
    };
}

export function loadFeaturesSuccess(data) {
    return {
        type: types.LOAD_FEATURES_SUCCESS,
        data
    };
}