import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {loadEventsSuccess, searchEvents} from './actions/eventsActions';
import mockData from './mock-data';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin(); // temporary. will go away once the official React version is released
const store = configureStore();
store.dispatch(loadEventsSuccess(mockData));


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
