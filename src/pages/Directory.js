import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
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

        var sortbyVar = this.state.qualifier
        var newUsers = API(sortbyVar);

        this.setState({ users: newUsers })

    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            qualifier: value
        })
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
                <div className="container">
                    <Jumbotron>
                        <h1>Employee Directory</h1>
                    </Jumbotron>

                    <form>
                        <div className="row mb-3">
                            <div className="col-4">
                                <label htmlFor="sortby">Sort by:</label>
                                <select name="sortby"
                                    onChange={this.handleInputChange}>
                                    <option></option>
                                    <option value="first">First Name</option>
                                    <option value="last">Last Name</option>
                                    <option value="employeeNumber">Employee Number</option>
                                </select>
                                <button onClick={this.handleSort}
                                    className="btn btn-info">Sort!</button>
                            </div>
                            <div className="col-4">
                                <label htmlFor="filterby">Filter by:</label>
                                <select name="filterby"
                                    onChange={this.handleInputChange}>
                                    <option></option>
                                    <option value="london">Location: London</option>
                                    <option value="berlin">Location: Berlin</option>
                                    <option value="paris">Location: Paris</option>
                                    <option value="sales">Department: Sales</option>
                                    <option value="production">Department: Production</option>
                                    <option value="marketing">Department: Marketing</option>
                                </select>
                                <button className="btn btn-info" onClick={this.handleSort}>Filter!</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={() => { this.setState({ qualifier: "all" }); this.handleSort() }}>RESET</button>
                            </div>
                        </div>
                    </form>
                    <TableRows users={this.state.users} />
                </div>
            </>
        )
    }

}

export default Directory;