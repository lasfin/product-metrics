import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const TableFeatures = ({features}) => {
    return (
        <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn tooltip="Date when it was deployed on production">Date</TableHeaderColumn>
                    <TableHeaderColumn>Feature</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                {features.map(feature =>
                    <TableRow key={feature.timestamp}>
                        <TableRowColumn className="default_row">
                            {new Date(feature.timestamp).getDate()}&nbsp;
                            {monthNames[new Date(feature.timestamp).getMonth()]}&nbsp;
                            {new Date(feature.timestamp).getFullYear()}
                        </TableRowColumn>
                        <TableRowColumn className="default_row">
                            {feature.name}
                        </TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
};

TableFeatures.propTypes = {
    features: PropTypes.array.isRequired
};

export default TableFeatures;