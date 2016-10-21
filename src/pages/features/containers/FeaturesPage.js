import React, { Component, PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TableFeatures from '../components/table-features/TableFeatures';
import AddEvent from '../components/add-event/AddEvent';
import {fetchFeatures} from '../../../actions/featuresActions';
import {connect} from 'react-redux';

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

    fetchFeatures() {
        this.props.fetch();
    }

    componentDidMount() {
        this.fetchFeatures();
    }

    render() {
        return (
            <Tabs value={this.state.value}
                  onChange={this.handleChange}
                  tabItemContainerStyle={tabItemContainerStyle}
                  inkBarStyle={inkBarStyle}
            >
                <Tab label="Features list" value="list" style={{color: '#000'}}>
                    <TableFeatures
                        features={this.props.features}
                        isFetching={this.props.isFetching}
                    />
                </Tab>
                <Tab label="Add feature" value="add" style={{color: '#000'}}>
                    <AddEvent/>
                </Tab>
            </Tabs>
        );
    }
}

FeaturesPage.propTypes = {
    features: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    features: state.features.list,
    isFetching: state.features.isFetching
});

const mapDispatchToProps = (dispatch) => ({
    fetch: () => { dispatch(fetchFeatures()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesPage);



