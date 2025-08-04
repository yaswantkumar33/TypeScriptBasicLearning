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
//////////////////////////////////////////////
// object-types-explained.ts
// ✅ 1. Inline Typed Object
const profileDetails = {
    name: "Artic",
    age: 26,
};
console.log("1️⃣ Inline Object:", profileDetails);
const frontendDev = {
    username: "artic_stark",
    experience: 5,
};
console.log("2️⃣ Developer Type:", frontendDev);
const apiEngineer = {
    username: "ironman_js",
    language: "Node.js",
};
console.log("3️⃣ BackendDev Interface:", apiEngineer);
const guestUser = {
    id: 1001,
};
console.log("4️⃣ Contributor (Optional):", guestUser);
const config = {
    version: "1.0.3",
    debug: true,
};
console.log("5️⃣ Readonly Field:", config);
const laptop = {
    title: "UltraSlim Pro",
    price: 84999,
    manufacturer: {
        brand: "TechWare",
        country: "India",
    },
};
console.log("6️⃣ Nested Object:", laptop);
const formErrors = {
    email: "Invalid email address",
    password: "Password too short",
};
console.log("7️⃣ Index Signature:", formErrors);
// ✅ 8. Record Utility Type
const subjectMarks = {
    math: 88,
    physics: 91,
    chemistry: 86,
};
console.log("8️⃣ Record Type:", subjectMarks);
function logTaskDetails(task) {
    console.log("9️⃣ Function Param:", `Task #${task.id}: ${task.title}`);
}
logTaskDetails({ id: 1, title: "Fix login bug" });
const userOne = { role: "admin", permissions: ["read", "write"] };
const userTwo = { role: "user", email: "user@example.com" };
console.log("🔟 Union Type Admin:", userOne);
console.log("🔟 Union Type User:", userTwo);
const activityLog = {
    message: "User signed out",
    createdAt: new Date(),
};
console.log("1️⃣1️⃣ Intersection Type:", activityLog);
const contact = {
    email: "dev@openai.com",
    phone: "123-456-7890",
};
const safeProfile = {
    name: "Artic",
};
console.log("1️⃣2️⃣ Pick:", contact);
console.log("1️⃣2️⃣ Partial:", safeProfile);
const CustomButton = ({ label, onClick, disabled = false }) => {
    console.log("1️⃣3️⃣ Button Label:", label);
    if (!disabled) {
        onClick();
    }
    else {
        console.log("1️⃣3️⃣ Button is disabled");
    }
};
CustomButton({
    label: "Click Me",
    onClick: () => console.log("1️⃣3️⃣ Button clicked"),
    disabled: false,
});
//# sourceMappingURL=FileOneTs.js.map