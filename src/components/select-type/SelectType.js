import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './selectType.css';

const items = [
    <MenuItem key={1} value={'all'} primaryText="All" />,
    <MenuItem key={2} value={'up'} primaryText="Trending Up" />,
    <MenuItem key={3} value={'down'} primaryText="Trending Down" />,
    <MenuItem key={4} value={'neutral'} primaryText="Trending Neutral" />
];

export default class SelectFieldExampleFloatingLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value});
        this.props.onChange(value);
    }

    render() {
        return (
            <div className="wrapper">
            <SelectField
                className="select-field"
                value={this.state.value}
                onChange={this.handleChange}
                hintText='Event trend'
                autoWidth={false}
            >
                {items}
            </SelectField>
            </div>
        );
    }
}

