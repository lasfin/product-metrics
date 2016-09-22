import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './containers/EventsPage';
import EventPage  from './containers/EventPage';
import FeaturesPage from './containers/FeaturesPage';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsPage} />
        <Route path="events" component={EventsPage}/>
        <Route path="events/:id" component={EventPage}/>
        <Route path="features" component={FeaturesPage}/>
    </Route>
);