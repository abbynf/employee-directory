var users = require("./users.json");

function API(qualifier) {

    console.log(qualifier)

    let result =[];

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
        case "london":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].location === "London"){
                    result.push(users[i])
                }
            }
            return (result);
        case "berlin":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].location === "Berlin"){
                    result.push(users[i])
                }
            }
            return (result);
        case "paris":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].location === "Paris"){
                    result.push(users[i])
                }
            }
            return (result);
        case "sales":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].department === "Sales"){
                    result.push(users[i])
                }
            }
            return (result);
        case "production":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].department === "Production"){
                    result.push(users[i])
                }
            }
            return (result);
        case "marketing":
            result = [];
            for (let i=0; i<users.length; i++){
                if (users[i].department === "Marketing"){
                    result.push(users[i])
                }
            }
            return (result);
        default:
            result = users;
    }

    
    return (result)
}

export default API