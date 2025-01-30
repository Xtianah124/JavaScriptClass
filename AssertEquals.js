//nested function

// function assertEquals(){
//     fuction
//
//     function getMen() {
//         let numberOfMen = "23";
//         return numberOfMen;
//     };
//
//     //function as an arrow
//     const getLadies = () => {
//         let numberOfLadies = 23;
//         return numberOfLadies;
//     };
//
//     return getMen() == getLadies()
//
// };
// console.log(assertEquals());

//=== (compares the datatype of both vn
// == (check if it's the
//
// function as return object
// function count() {
//     let value = 0;
//
//     return {
//         increment: function () {
//             return value++;
//         },
//         decrement: () => {
//             return value--;
//         },
//         getValue: function () {
//             return value;
//         }
//     }
// }
//
// count().increment();
// count().increment();
// count().increment();
// count().increment();
// console.log(count().getValue());

//function as argument
// let firstName = "Tomiwa";
//
// function greet(name){
//     return `Hello ${name}`;
// };
// function executeFunction(callBack, userName){
//     return callBack(userName);
// };
//
// let result = executeFunction(greet, firstName)
// console.log(result);


function count(){
    let value = 0;

    function increaseValueByTwo(){
        let result = value + 2;
        console.log(result);
        console.log(value);
    }
    increaseValueByTwo();
}
count()