import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './containers/EventsPage';
import EventPage  from './containers/EventPage';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsPage} />
        <Route path="details/:id" component={EventPage}/>
    </Route>
);