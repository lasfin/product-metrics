import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import {Link} from 'react-router';

class TableEvents extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showRowHover: true,
            selectable: false,
            showCheckboxes: false
        };
    }

    render() {
        return (
            <Table
                selectable={this.state.selectable}
            >
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="Category">Category</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Event name">Event name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Label">Label</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Label">20.08</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Label">21.08</TableHeaderColumn>
                        <TableHeaderColumn>Trend</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    showRowHover={this.state.showRowHover}
                >
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>85</TableRowColumn>
                        <TableRowColumn><Link to={'/details/1'}><TrendingDown/></Link></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn>58</TableRowColumn>
                        <TableRowColumn><TrendingFlat/></TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                        <TableRowColumn>56</TableRowColumn>
                        <TableRowColumn>100</TableRowColumn>
                        <TableRowColumn><TrendingUp/></TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }

}

export default TableEvents;