import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import TrendingDown from 'material-ui/svg-icons/action/trending-down';
import TrendingUp from 'material-ui/svg-icons/action/trending-up';
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import {Link} from 'react-router';
import './tableRowCusrom.css';

const TableRowCustom = ({event}) => {
    let trend = '';
    switch (event.trend) {
        case 'up':
            trend = <TrendingUp/>;
            break;
        case 'down':
            trend = <TrendingDown/>;
            break;
        default:
            trend = <TrendingFlat/>;
            break;
    }

    return (
        <TableRow key={event.id} className={event.warning ? 'warning': ''}>
            <TableRowColumn className="default_row">{event.name}</TableRowColumn>
            <TableRowColumn className="default_row">{event.label}</TableRowColumn>
            {event.count.map((counter, index) => { return <TableRowColumn key={index}>{counter}</TableRowColumn>})}
            <TableRowColumn><Link to={'/events/' + event.id}>{trend}</Link></TableRowColumn>
        </TableRow>
    )
};

TableRowCustom.propTypes = {
    event: PropTypes.object.isRequired
};

export default TableRowCustom;