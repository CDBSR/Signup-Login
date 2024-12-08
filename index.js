// function for signup 

let users = ["john_doe", "jane_doe", "test_user", "John_Wick","User_One"];
function signup(userName) { 
    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

console.log(signup("john_doe")); 
console.log(signup("user")); 
console.log(signup("user"));
