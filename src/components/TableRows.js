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
            <tr>hello</tr>
        )
    }

}



export default TableRows;