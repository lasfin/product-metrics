import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const TableFeatures = () => {
    return (
        <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn tooltip="Date when it was deployed on production">Date</TableHeaderColumn>
                    <TableHeaderColumn>Feature</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                <TableRow>
                    <TableRowColumn className="default_row">10.01.2014</TableRowColumn>
                    <TableRowColumn className="default_row">Feature name</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    )
};

TableFeatures.propTypes = {
    // features: PropTypes.array.isRequired
};

export default TableFeatures;