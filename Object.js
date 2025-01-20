let user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    greet(){
        return("Hello")
    }
}

// user.firstName = "love";
// user.sex = "male";
let keys = Object.keys(user);
console.log(keys);
let values = Object.values(user);
console.log(values);
let entries = Object.entries(user);
console.log(entries);
