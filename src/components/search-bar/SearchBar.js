import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [], // todo
        };
    }

    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value
            ],
        });
    };


    render() {
        return (
            <div>
                <AutoComplete
                    hintText="Type event name, category or label"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                    maxSearchResults={5}
                    style={{
                        marginTop: '5px'
                    }}
                />
            </div>
    );
    }
}

export default SearchBar;
