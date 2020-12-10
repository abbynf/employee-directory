var users = require("./users.json");

function API(qualifier) {

    console.log(qualifier)

    let result;

    switch(qualifier) {
        case "all": 
            result = users;
            break;
        case "first":
            users.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            result = users;
            break;

        case "last":
            users.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
            result = users
            break;
        case "employeeNumber":
            users.sort((a, b) => (a.employeeNumber > b.employeeNumber) ? 1 : -1 )
            result = users
            break;
        default:
            result = users;
    }

    
    return (result)
}

export default API