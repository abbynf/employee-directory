import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import TableContainer from '../components/TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Directory extends React.Component {

    state = {
        sortby: "",
        searchfor: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        console.log(name)
        console.log(value);

        this.setState({
            [name]: value
        })
    }  

    render() {


        return (
            <>
                <Container>
                    <Jumbotron>
                        <h1>Employee Directory</h1>
                    </Jumbotron>
                    <form>
                        <label for="sortby">Sort by:</label>
                        <select name="sortby"
                        onChange={this.handleInputChange}>
                            <option>{this.state.sortby}</option>
                            <option value="first">First Name</option>
                            <option value="last">Last Name</option>
                            <option value="employeeNumber">Employee Number</option>
                        </select>
                    </form>
                    <TableContainer />
                </Container>
            </>
        )
    }

}

export default Directory;