import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import featuresReducer from './featuresReducer';

const rootReducer = combineReducers({
    events: eventsReducer,
    features: featuresReducer
});

export default rootReducer;