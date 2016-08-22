import React from 'react';
import TextField from 'material-ui/TextField';

const SearchBar = () => {
    return (
        <div>
            <TextField
                hintText="Start typing"
                floatingLabelText="Type event name, category or label"
            />
        </div>
    );
};

export default SearchBar;
