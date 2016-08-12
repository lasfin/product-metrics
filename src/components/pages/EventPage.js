import React, { Component } from 'react';
// eslint-disable-next-line
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import {connect} from 'react-redux';
import './eventPage.css';



function createChartConfig(event) {
    return {
        chart: {
            type: 'column'
        },
        title: {
            text: event.event_name
        },
        subtitle: {
            text: `Category: ${event.category} Label: ${event.label}`
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
            data: event.events_count
        }]
    };
}

class EventPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            event: props.events[parseInt(props.params.id, 10)]
        };

        this.highchartsConfig = createChartConfig(this.state.event);
    }

    render() {
        return (
            <div className="charts-container">
                <ReactHighcharts config={this.highchartsConfig}></ReactHighcharts>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}


export default connect(mapStateToProps)(EventPage);
