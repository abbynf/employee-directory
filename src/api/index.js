var users = require("./users.json");

function API(qualifier) {

    console.log(qualifier)

    if (qualifier === "all"){
        var result = users;
    }
    
    if (qualifier === "first"){
        console.log("hello first")
        result = users;
    }
    return (result)
}

export default API