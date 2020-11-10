console.log("=====No.1=====");
//Soal No.1 Mengubah fungsi menjadi arrow key
const golden = () =>{
  console.log("this is golden!!");
}
golden();
console.log();

console.log("=====No.2=====");
//ES5
// const newFunction = (firstName, lastName) =>{
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName(){
//       console.log(firstName + " " + lastName)
//       return 
//     }
//   }
// }
// //Driver Code 
// newFunction("William", "Imoh").fullName() 

//ES6
function newFunction(firstName, lastName){
  return{
    firstName,
    lastName,
    fullName(){
      return console.log(firstName + " " + lastName);
    }
  };
}
newFunction("William", "Imoh").fullName()
console.log();


console.log("=====No.3=====");
//Soal No.3 Destructuring
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName, lastName, destination, occupation);
console.log();

console.log("=====No.4=====");
//Soal No.4 Array Spreading
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);
console.log();


console.log("=====No.5=====");
//Soal No.5 Template Literals
const planet = "earth"
const view = "glass"
var before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
// Driver Code
console.log(before) 