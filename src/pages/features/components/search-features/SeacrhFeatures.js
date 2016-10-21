import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const SearchFeatures = ({onChange, query}) => {
    return (
        <TextField
            hintText="Start typing"
            floatingLabelText="Type feature name"
            style={{margin: '0 0 0 25px'}}
            onChange={onChange}
            value={query}
        />
    );
};

SearchFeatures.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default SearchFeatures;

