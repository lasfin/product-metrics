import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({onChange}) => {
    return (
        <TextField
            hintText="Start typing"
            floatingLabelText="Type event name or label"
            onChange={onChange}/>
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
