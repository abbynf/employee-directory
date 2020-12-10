import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import TableContainer from '../components/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Directory() {

    return (
        <>
            <Container>
                <Jumbotron>
                    <h1>Employee Directory</h1>
                </Jumbotron>
            <TableContainer/>
            </Container>
        </>
    )

}

export default Directory;