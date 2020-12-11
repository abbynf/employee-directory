import React from 'react';

function TableRows(props) {
    console.log(props)

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Department</th>
                    <th scope="col">Employee Number</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (

                    <tr key={user.id}>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.location}</td>
                        <td>{user.department}</td>
                        <td>{user.employeeNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )


}



export default TableRows;