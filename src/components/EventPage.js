import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
// eslint-disable-next-line
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import './eventPage.css';

const highchartsConfig = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Event name'
    },
    subtitle: {
        text: 'Category: category, label: label'
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Events count'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Events: <b>{point.y}</b>'
    },
    series: [{
        name: 'Events',
        data: [
            ['Shanghai', 23],
            ['Lagos', 16],
            ['Istanbul', 14],
            ['Karachi', 14],
            ['Mumbai', 12],
            ['Moscow', 12],
            ['São Paulo', 11],
            ['Beijing', 11],
            ['Guangzhou', 11],
            ['Delhi', 11],
            ['Shenzhen', 10],
            ['Seoul', 10],
            ['Jakarta', 10],
            ['Kinshasa', 9]
        ]
    }]
};


class EventPage extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="charts-container">
                    <ReactHighcharts config={highchartsConfig}></ReactHighcharts>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default EventPage;
