// How we declare the type of the variables in typescript
let letone: number = 15
let lettwo: string ="Hello World"
let letthree: boolean =true
let letfour: any ="shgjdfvhgv"
let letfive: any[]=['sdfsdf',45,true]
let letsix: string[]=["one","throw","three"]

// using variable type set in functions 
const concadinationValues = (a: string,b: string): string=>{
    return a+b;
}
console.log(concadinationValues("hii","Everyone!"));

// handling objects in typescript

// inline object typing 
// Use this for quick functions or small scopes.
const user :{name:string,age:number}={
    age:23,
    name:"yaswant",
}
console.log(user);
user.age=25
console.log("after reassingin",user)

// Reusable objects shapes with interface
// using type 
type usertwo ={
    name:string,
    age:number,
    city:string,
}
// using interface 
interface objrule{
    name:string,
    age:number,
    city:string,
}
const userthree :objrule={
    name:"strak",
    age:26,
    city:"new york"
}
//  Real-world tip:
// Use interface when building component props or classes.
// Use type for function signatures, unions, and intersection-heavy logic.