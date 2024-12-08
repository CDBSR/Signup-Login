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

// function for feature/login

function login(userName, password) {
    const correctPassword = "Emp@123";
    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== correctPassword) {
        return "Wrong Password...";
    } else {
        return "Login Successful...";
    }
}

console.log(signup("john_doe")); 
console.log(signup("user")); 
console.log(signup("user"));
console.log(login("john_doe", "Emp@123"));
console.log(login("user2","Emp@123"))
console.log(login("user", "emp"))
