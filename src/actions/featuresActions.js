import * as types from './actionTypes';
import fetch from 'isomorphic-fetch';
import config from '../config';

export function requestFeatures() {
    return {
        type: types.REQUEST_FEATURES
    }
}

export function fetchFeatures() {
    return function (dispatch) {
        dispatch(requestFeatures());
        return fetch(config.apiLocal.features)
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