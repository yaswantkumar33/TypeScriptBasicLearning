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
//////////////////////////////////////////////
// object-types-explained.ts

// ✅ 1. Inline Typed Object
// const profileDetails: { name: string; age: number } = {
//   name: "Artic",
//   age: 26,
// };
// console.log("1️⃣ Inline Object:", profileDetails);

// // ✅ 2. Reusable Type Alias
// type Developer = {
//   username: string;
//   experience: number;
// };

// const frontendDev: Developer = {
//   username: "artic_stark",
//   experience: 5,
// };
// console.log("2️⃣ Developer Type:", frontendDev);

// // ✅ 3. Interface Example
// interface BackendDev {
//   username: string;
//   language: string;
// }

// const apiEngineer: BackendDev = {
//   username: "ironman_js",
//   language: "Node.js",
// };
// console.log("3️⃣ BackendDev Interface:", apiEngineer);

// // ✅ 4. Optional Property
// type Contributor = {
//   id: number;
//   nickname?: string;
// };

// const guestUser: Contributor = {
//   id: 1001,
// };
// console.log("4️⃣ Contributor (Optional):", guestUser);

// // ✅ 5. Readonly Field
// type AppConfig = {
//   readonly version: string;
//   debug: boolean;
// };

// const config: AppConfig = {
//   version: "1.0.3",
//   debug: true,
// };
// console.log("5️⃣ Readonly Field:", config);

// // ✅ 6. Nested Object
// type Product = {
//   title: string;
//   price: number;
//   manufacturer: {
//     brand: string;
//     country: string;
//   };
// };

// const laptop: Product = {
//   title: "UltraSlim Pro",
//   price: 84999,
//   manufacturer: {
//     brand: "TechWare",
//     country: "India",
//   },
// };
// console.log("6️⃣ Nested Object:", laptop);

// // ✅ 7. Index Signature
// type ErrorMessages = {
//   [field: string]: string;
// };

// const formErrors: ErrorMessages = {
//   email: "Invalid email address",
//   password: "Password too short",
// };
// console.log("7️⃣ Index Signature:", formErrors);

// // ✅ 8. Record Utility Type
// const subjectMarks: Record<string, number> = {
//   math: 88,
//   physics: 91,
//   chemistry: 86,
// };
// console.log("8️⃣ Record Type:", subjectMarks);

// // ✅ 9. Function with Object Parameter
// type Task = {
//   id: number;
//   title: string;
// };

// function logTaskDetails(task: Task): void {
//   console.log("9️⃣ Function Param:", `Task #${task.id}: ${task.title}`);
// }

// logTaskDetails({ id: 1, title: "Fix login bug" });

// // ✅ 10. Union Types
// type AdminUser = { role: "admin"; permissions: string[] };
// type RegularUser = { role: "user"; email: string };

// type AppUser = AdminUser | RegularUser;

// const userOne: AppUser = { role: "admin", permissions: ["read", "write"] };
// const userTwo: AppUser = { role: "user", email: "user@example.com" };

// console.log("🔟 Union Type Admin:", userOne);
// console.log("🔟 Union Type User:", userTwo);

// // ✅ 11. Intersection Types
// type Timestamped = { createdAt: Date };
// type Comment = { message: string };

// type LogEntry = Comment & Timestamped;

// const activityLog: LogEntry = {
//   message: "User signed out",
//   createdAt: new Date(),
// };
// console.log("1️⃣1️⃣ Intersection Type:", activityLog);

// // ✅ 12. Utility Types: Pick, Omit, Partial
// type FullProfile = {
//   name: string;
//   email: string;
//   phone: string;
// };

// type ContactInfo = Pick<FullProfile, "email" | "phone">;
// type ProfileWithoutPhone = Omit<FullProfile, "phone">;
// type EditableProfile = Partial<FullProfile>;

// const contact: ContactInfo = {
//   email: "dev@openai.com",
//   phone: "123-456-7890",
// };

// const safeProfile: EditableProfile = {
//   name: "Artic",
// };

// console.log("1️⃣2️⃣ Pick:", contact);
// console.log("1️⃣2️⃣ Partial:", safeProfile);

// // ✅ 13. React-like Component Props
// type ButtonProps = {
//   label: string;
//   onClick: () => void;
//   disabled?: boolean;
// };

// const CustomButton = ({ label, onClick, disabled = false }: ButtonProps) => {
//   console.log("1️⃣3️⃣ Button Label:", label);
//   if (!disabled) {
//     onClick();
//   } else {
//     console.log("1️⃣3️⃣ Button is disabled");
//   }
// };

// CustomButton({
//   label: "Click Me",
//   onClick: () => console.log("1️⃣3️⃣ Button clicked"),
//   disabled: false,
// });

//////////////////////////
// handling function type inside the object 
// interface objinterface{
//   name:string,
//   age :number,
//   greet?:(message:string)=> void,
  
// }


// const usertestfun: objinterface = {
//   name:"stark",
//   age:26,
//   greet:(message)=>{
//     console.log(message)
//   }
// }
// console.log(usertestfun.name);
// usertestfun.greet?.("this is the message")

// handling multipile type of inputs in function input
// union 
const idprint = (id:number|string|boolean|number[])=>{
  console.log(id);
}
// the aboe code can also be written like this 
type Idtype = string|number|boolean
const idprint2 = (id:Idtype)=>{
  console.log(id)
}
idprint2("23456");
idprint([1,2,3,4,5,6,7,8,9]);


// other ways we can use this is 
// intersection
interface UserPersonaldetails{
  name:string,
  age?:number,
}
interface userIdentity{
  id:number,
  email:string,
}

type usertypever = UserPersonaldetails&userIdentity
const userverfun =(user: usertypever): void=>{
console.log("Name" + user.name+ "and his ID: " + user.id);
}

userverfun({name:"stark",id:2345,email:"user@email.com"})