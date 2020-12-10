import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'
import TableRows from '../components/TableRows'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from './../api/index';

class Directory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qualifier: "all", 
            users: [],
        }
    }

    handleSort = event => {
        event.preventDefault();
        console.log(this.state.qualifier)

        var sortbyVar = this.state.qualifier

        var newUsers = API(sortbyVar);

        this.setState({users: newUsers})

        console.log(newUsers)
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        console.log(name)
        console.log(value);

        this.setState({
            qualifier: value
        })

        console.log(this.state)
    }

    componentDidMount() {
        let newUsers = API("all");
        this.setState({
            users: newUsers
        });
    }

    render() {


        return (
            <>
                <Container>
                    <Jumbotron>
                        <h1>Employee Directory</h1>
                    </Jumbotron>
                    <form>
                        <label htmlFor="sortby">Sort by:</label>
                        <select name="sortby"
                            onChange={this.handleInputChange}>
                            <option>{this.state.sortby}</option>
                            <option value="all">All</option>
                            <option value="first">First Name</option>
                            <option value="last">Last Name</option>
                            <option value="employeeNumber">Employee Number</option>
                        </select>
                        <button onClick={this.handleSort}>Sort!</button>
                    </form>
                    <TableRows users={this.state.users}/>
                </Container>
            </>
        )
    }

}

export default Directory;