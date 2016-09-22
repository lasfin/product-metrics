import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const tabItemContainerStyle = {
    background: '#fff'
};

const inkBarStyle = {
    background: '#61dafb'
};

class FeaturesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'list',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Tabs value={this.state.value}
                  onChange={this.handleChange}
                  tabItemContainerStyle={tabItemContainerStyle}
                  inkBarStyle={inkBarStyle}
            >
                <Tab label="Features list" value="list" style={{color: '#000'}}>
                    <div>
                        <h2>Features list</h2>
                        <p>F list</p>
                    </div>
                </Tab>
                <Tab label="Add feature" value="add" style={{color: '#000'}}>
                    <div>
                        <h2>Add feature</h2>
                        <p>add</p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default FeaturesPage;



