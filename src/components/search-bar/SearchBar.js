import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = ({onChange}) => {
    return (
        <div>
            <TextField
                hintText="Start typing"
                floatingLabelText="Type event name, category or label"
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
