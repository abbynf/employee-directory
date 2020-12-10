import React from 'react';
import API from './../api/index';

class TableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        }
    }

    componentDidMount() {
        var usersInit = API()
        this.setState({
            isLoaded: true,
            users: usersInit
        })
    }

    render() {
        return (
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                {this.state.users.map(user => (

                    <tr key={user.id}>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.location}</td>
                        <td>{user.department}</td>
                        <td>{user.employeeNumber}</td>
                    </tr>
                ))}
            </table>
        )
    }

}



export default TableRows;