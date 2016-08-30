import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import {Link} from 'react-router';

const TableRowCustom = ({event}) => {
    return (
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
    )
};

TableRowCustom.propTypes = {
    event: PropTypes.object.isRequired
};

export default TableRowCustom;