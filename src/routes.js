import React from 'react';
import { Route, IndexRoute } from 'react-router';
import EventsPage from './pages/events/containers/EventsPage';
import EventPage  from './pages/events/containers/EventPage';
import FeaturesPage from './pages/features/containers/FeaturesPage';
import App from './pages/common/components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={EventsPage} />
        <Route path="events" component={EventsPage}/>
        <Route path="events/:id" component={EventPage}/>
        <Route path="features" component={FeaturesPage}/>
    </Route>
);