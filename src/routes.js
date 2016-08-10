import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './components/EventsPage';

export default (
    <Route path="/">
        <IndexRoute component={EventsPage} />
    </Route>
);