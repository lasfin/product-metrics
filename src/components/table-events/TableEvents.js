import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import {Link} from 'react-router';

const TableEvents = ({events}) => {
    return (
        <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn style={{width: '80px'}} tooltip="Event name">Event name</TableHeaderColumn>
                    <TableHeaderColumn style={{width: '80px'}} tooltip="Label">Label</TableHeaderColumn>
                    {new Array(14).fill(0).map(function(counter, index) {
                        return <TableRowColumn key={index}></TableRowColumn>
                    })}
                    <TableHeaderColumn>Trend</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                {events.map(event =>
                    <TableRow key={event.id}>
                        <TableRowColumn style={{width: '80px'}}>{event.name}</TableRowColumn>
                        <TableRowColumn style={{width: '80px'}}>{event.label}</TableRowColumn>
                        {event.count.map((counter, index) => {
                            return <TableRowColumn key={index}>{counter}</TableRowColumn>
                        })}
                        <TableRowColumn>
                            <Link to={'/details/' + event.id}><TrendingDown/></Link>
                        </TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
};

TableEvents.propTypes = {
    events: PropTypes.array.isRequired
};

export default TableEvents;