import React from 'react';
import { Table } from 'react-bootstrap'
import TableRows from './TableRows'

function TableContainer() {
    return (
        <Table striped bordered>
            <tr>
                <th>Hellow there</th>
                <th>Meow</th>
            </tr>
            <TableRows/>

        </Table>
    )
}

export default TableContainer;