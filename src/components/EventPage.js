import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

class EventPage extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default EventPage;

