function createGreeting(name, age) {
  return `hello my name is ${name} and I am ${age} years old`;
}
let greeting = createGreeting("Daniel", 30);
console.log(greeting);





var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function mentorGreeting(name) {
  let getUpperCase = name.toUpperCase();
  return `Hello ${getUpperCase}`;
}

console.log(mentorGreeting(mentor1));
console.log(mentorGreeting(mentor2));
console.log(mentorGreeting(mentor3));
console.log(mentorGreeting(mentor4));
console.log(mentorGreeting(mentor5));