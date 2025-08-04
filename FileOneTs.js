"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// How we declare the type of the variables in typescript
let letone = 15;
let lettwo = "Hello World";
let letthree = true;
let letfour = "shgjdfvhgv";
let letfive = ['sdfsdf', 45, true];
let letsix = ["one", "throw", "three"];
// using variable type set in functions 
const concadinationValues = (a, b) => {
    return a + b;
};
console.log(concadinationValues("hii", "Everyone!"));
// handling objects in typescript
// inline object typing 
const user = {
    age: 23,
    name: "yaswant",
};
console.log(user);
user.age = 25;
console.log("after reassingin", user);
//# sourceMappingURL=FileOneTs.js.map