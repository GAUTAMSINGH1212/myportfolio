import React from "react";

const JavascriptTopics = [
  {
    title: "Introduction to JavaScript",
    description:
      "JavaScript ek programming language hai jo web pages ko dynamic banane ke liye use hoti hai.",
    syntax: `// Basic Syntax
let name = 'John';
console.log(name);`,
    example: `function greet(name) {
  return "Hello, " + name;
}
console.log(greet("John"));`,
    explanation:
      "JavaScript se web pages interactive bante hain. Yeh example ek variable declare karta hai aur function se greeting return karta hai.",
  },
  {
    title: "Variables and Data Types",
    description:
      "Variables data ko store karte hain. JavaScript mein strings, numbers, booleans jaise data types hote hain.",
    syntax: `let name = 'John'; // String
let age = 30; // Number
let isStudent = true; // Boolean`,
    example: `let name = 'John';
let age = 30;
let isStudent = true;
console.log(name, age, isStudent);`,
    explanation:
      "`let` se variable declare kiya jata hai. Yahan string, number aur boolean use hua hai.",
  },
  {
    title: "Functions in JavaScript",
    description:
      "Functions code ke reusable blocks hote hain jo ek specific task karte hain.",
    syntax: `function greet(name) {
  return "Hello, " + name;
}`,
    example: `function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));`,
    explanation:
      "Function ko parameter ke sath call kiya gaya hai aur yeh greeting return karta hai.",
  },
  {
    title: "Loops in JavaScript",
    description:
      "Loops kisi code ko baar-baar repeat karne ke liye use hote hain.",
    syntax: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`,
    example: `for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}`,
    explanation:
      "`for` loop 5 baar chalta hai aur 0 se 4 tak numbers print karta hai.",
  },
  {
    title: "Objects in JavaScript",
    description: "Objects key-value pairs ka collection hote hain.",
    syntax: `const person = {
  name: 'John',
  age: 30,
  greet: function() { return 'Hello ' + this.name; }
};`,
    example: `const person = {
  name: 'John',
  age: 30,
  greet: function() { return 'Hello ' + this.name; }
};
console.log(person.greet());`,
    explanation:
      "Object mein data aur methods dono hote hain. `person.greet()` greeting return karta hai.",
  },
];
const InterviewQuestions = [
  {
    question: "JavaScript kya hai?",
    answer: `JavaScript ek lightweight, interpreted programming language hai jo mainly browser mein run hoti hai. Iska use web page ko interactive banane ke liye hota hai. Yeh HTML aur CSS ke sath milke ek complete front-end experience banata hai.`,
    example: `// Example: Button click se alert message
<button onclick="alert('Hello from JavaScript!')">Click Me</button>`,
  },
  {
    question: "`var`, `let` aur `const` mein kya difference hai?",
    answer: `- 'var' function scoped hota hai. 
- 'let' aur 'const' block scoped hote hain. 
- 'const' se declared variable ko reassign nahi kar sakte.
- 'let' ko reassign kar sakte hain.`,
    example: `function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // Works
  // console.log(b); // Error: b is not defined
  // console.log(c); // Error: c is not defined
}`,
  },
  {
    question: "JavaScript mein hoisting kya hoti hai?",
    answer: `Hoisting ka matlab hai variables ya functions ka declaration memory mein top pe move ho jana execution se pehle. 'var' hoist hota hai lekin 'let' aur 'const' bhi hoist hote hain par unka temporal dead zone hota hai.`,
    example: `console.log(a); // undefined
var a = 5;

// But this gives error:
// console.log(b); // ReferenceError
let b = 10;`,
  },
  {
    question: "Arrow functions kya hote hain?",
    answer: `Arrow functions ek chhoti aur concise syntax provide karte hain. Yeh traditional function ke mukable mein 'this' ko lexical scope se inherit karte hain.`,
    example: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5`,
  },
  {
    question: "JavaScript synchronous ya asynchronous hoti hai?",
    answer: `JavaScript synchronous hoti hai par async features (callback, promises, async/await) ke zariye non-blocking kaam bhi kar sakti hai.`,
    example: `console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 1000);

console.log("End");

// Output:
// Start
// End
// Async Task Done`,
  },
  {
    question: "Promises kya hote hain JavaScript mein?",
    answer: `Promise asynchronous operation ka result represent karta hai. Promise ke 3 states hote hain: pending, fulfilled, rejected.`,
    example: `const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

promise.then(data => console.log(data));
// Output after 1 sec: Data fetched`,
  },
  {
    question: "Event loop kya hota hai?",
    answer: `Event loop JavaScript ka mechanism hai jo asynchronous callbacks ko execute karta hai jab call stack empty hota hai.`,
    example: `console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

// Output: 1 3 2 (because '2' goes to callback queue)`,
  },
  {
    question: "Difference between == and === in JavaScript?",
    answer: `'==' values compare karta hai (type conversion ke sath), jabki '===' type aur value dono compare karta hai.`,
    example: `console.log(5 == '5');   // true (type converted)
console.log(5 === '5');  // false (type different)`,
  },
  {
    question: "Callback function kya hoti hai?",
    answer: `Callback ek function hota hai jo kisi doosre function ko argument ke roop mein pass hota hai aur execution ke baad call hota hai.`,
    example: `function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Gautam", sayBye);
// Output: Hello Gautam
//         Bye!`,
  },
  {
    question: "What is closure in JavaScript?",
    answer: `Closure tab banta hai jab ek inner function outer function ke variables ko access karta hai, even after outer function execution.`,
    example: `function outer() {
  let name = "JavaScript";
  return function inner() {
    console.log(name); // inner function remembers outer scope
  }
}

const myFunc = outer();
myFunc(); // Output: JavaScript`,
  },
];

const TopicsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8  bg-gradient-to-r from-[#003366] to-[#ffa500] ">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
        JavaScript Topics
      </h1>
      {JavascriptTopics.map((topic, index) => (
        <div key={index} className="bg-white p-6 mb-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-orange-600">
            {topic.title}
          </h2>
          <p className="mt-2">{topic.description}</p>

          <h3 className="mt-4 font-semibold text-lg">Syntax:</h3>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto whitespace-pre-wrap">
            {topic.syntax}
          </pre>

          <h3 className="mt-4 font-semibold text-lg">Example:</h3>
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto whitespace-pre-wrap">
            {topic.example}
          </pre>

          <h3 className="mt-4 font-semibold text-lg">Explanation:</h3>
          <p className="text-gray-700">{topic.explanation}</p>
        </div>
      ))}

      <hr className="my-10 border-t-2" />

      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        JavaScript Interview Questions
      </h1>
      <div className="space-y-6">
        {InterviewQuestions.map((item, index) => (
          <div key={index} className="bg-gray-50 p-5 rounded-lg border shadow">
            <h3 className="text-xl font-semibold text-orange-700">
              Q: {item.question}
            </h3>
            <p className="mt-2 text-gray-800">A: {item.answer}</p>
            {item.example && (
              <>
                <h4 className="mt-2 font-medium text-gray-700">Example:</h4>
                <pre className="bg-gray-900 text-white p-3 rounded text-sm whitespace-pre-wrap">
                  {item.example}
                </pre>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsPage;
