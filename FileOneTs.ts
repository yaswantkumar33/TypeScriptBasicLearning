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