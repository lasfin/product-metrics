import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './components/pages/EventsPage';
import EventPage  from './components/pages/EventPage';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsPage} />
        <Route path="details/:id" component={EventPage}/>
    </Route>
);