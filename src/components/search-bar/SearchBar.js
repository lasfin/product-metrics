import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({onChange}) => {
    return (
        <div>
            <TextField
                hintText="Start typing"
                floatingLabelText="Type event name or label"
                onChange={onChange}
            />
        </div>
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
