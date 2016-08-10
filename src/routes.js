import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './components/EventsPage';
import EventPage  from './components/EventPage';

export default (
    <Route path="/">
        <IndexRoute component={EventsPage} />
        <Route path="details/:id" component={EventPage}/>
    </Route>
);