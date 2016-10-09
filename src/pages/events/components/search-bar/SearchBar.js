import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({onChange, query}) => {
    return (
        <TextField
            hintText="Start typing"
            floatingLabelText="Type event name or label"
            onChange={onChange}
            value={query}
        />
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
