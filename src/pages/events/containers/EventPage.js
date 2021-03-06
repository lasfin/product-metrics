import React, { Component, PropTypes } from 'react';
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
            text: event.name
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
            data: event.count
        }]
    };
}

class EventPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            event: props.list.find(event => event._id === props.params.id)
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


EventPage.propTypes = {
    list: PropTypes.array.isRequired
};


function mapStateToProps(state) {
    return {
        list: state.events.list
    };
}


export default connect(mapStateToProps)(EventPage);
