import React from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '', // todo
        };
    }

    handleUpdateInput = (value) => {};


    render() {
        return (
            <div>
                <TextField
                    hintText="Start typing"
                    floatingLabelText="Type event name, category or label"
                />
            </div>
    );
    }
}

export default SearchBar;
