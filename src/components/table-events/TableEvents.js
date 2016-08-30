import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableRowCustom from './TableRowCustom';

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
                    <TableRowCustom event={event} key={event.id}/>
                )}
            </TableBody>
        </Table>
    )
};

TableEvents.propTypes = {
    events: PropTypes.array.isRequired
};

export default TableEvents;