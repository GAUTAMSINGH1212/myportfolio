import React from "react";

const dataTypeTopic = {
  title: "Data Types in JavaScript",
  description:
    "JavaScript mein 8 basic data types hote hain, jinmein se commonly used hain: " +
    "<span class='text-red-600 font-semibold'>String, Number, Boolean, Undefined, Null, Symbol, BigInt</span> aur <span class='text-red-600 font-semibold'>Object</span> (non-primitive).",
  syntax: `// String
let name = "John";

// Number
let age = 25;

// Boolean
let isStudent = true;

// Undefined
let x;

// Null
let y = null;

// Symbol
let sym = Symbol("id");`,
  example: `console.log(typeof "Hello"); // string
console.log(typeof 123);     // number
console.log(typeof true);    // boolean
console.log(typeof x);       // undefined
console.log(typeof y);       // object (special case)
console.log(typeof sym);     // symbol`,
  explanation:
    "Primitive data types directly value hold karte hain. " +
    "`null` ka typeof <span class='text-red-600 font-semibold'>object</span> hota hai (ye ek bug hai JavaScript mein). " +
    "`Symbol` unique identifiers ke liye use hota hai. " +
    "`Undefined` ka matlab variable declared hai lekin value assign nahi hui."
};

const dataTypeInterviewQuestions = [
  {
    question: "`var`, `let`, aur `const` mein kya difference hai?",
    answer:
      "`var` function scoped hota hai aur hoisting allow karta hai. `let` aur `const` block scoped hote hain. `const` ka value reassign nahi ho sakta.",
    example: `let name = "Alice"; // let can be reassigned
name = "Bob"; // reassigning
const age = 30; // cannot be reassigned
// age = 35; // Error: Assignment to constant variable`
  },
  {
    question: "`null` ka typeof `object` kyun hota hai?",
    answer:
      "Ye JavaScript ka ek <span class='text-red-600 font-semibold'>historical bug</span> hai. `null` ka actual type null hai, lekin typeof check `object` deta hai.",
    example: `let a = null;
console.log(typeof a); // object (bug in JS)`
  },
  {
    question: "`undefined` aur `null` mein kya difference hai?",
    answer:
      "`undefined` tab hota hai jab variable declare ho par value assign nahi hui ho. `null` intentionally empty value hota hai.",
    example: `let x;
console.log(x); // undefined

let y = null;
console.log(y); // null`
  },
  {
    question: "`Symbol` ka use kya hai?",
    answer:
      "`Symbol` ek primitive data type hota hai jo unique aur immutable identifiers banane ke liye use hota hai. Yeh specially object properties ke liye use kiya jata hai.",
    example: `const uniqueSymbol = Symbol('id');
const user = {
  [uniqueSymbol]: 'abc123'
};
console.log(user[uniqueSymbol]); // 'abc123'`
  }
];

const DataTypesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        {dataTypeTopic.title}
      </h1>

      <div className="bg-gray-50 border p-6 rounded-lg shadow mb-10">
        <p
          className="mb-4 text-base"
          dangerouslySetInnerHTML={{ __html: dataTypeTopic.description }}
        />

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Syntax:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {dataTypeTopic.syntax}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Example:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {dataTypeTopic.example}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Explanation:</h3>
        <p
          className="mt-2 text-base"
          dangerouslySetInnerHTML={{ __html: dataTypeTopic.explanation }}
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">
        Interview Questions
      </h2>
      <div className="space-y-6">
        {dataTypeInterviewQuestions.map((item, index) => (
          <div key={index} className="bg-white border p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-[#003366]">
              Q: {item.question}
            </h3>
            <p
              className="mt-2 text-base"
              dangerouslySetInnerHTML={{ __html: `A: ${item.answer}` }}
            />
            <h4 className="mt-2 font-semibold text-orange-600">Example:</h4>
            <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
              {item.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTypesPage;
