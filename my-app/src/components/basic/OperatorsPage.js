import React from "react";

const operatorsTopic = {
  title: "Operators in JavaScript",
  description:
    "JavaScript mein operators ka use variables aur values ke saath operations perform karne ke liye kiya jata hai. JavaScript mein kai tarah ke operators hote hain, jaise: Arithmetic, Assignment, Comparison, Logical, etc.",
  syntax: `// Arithmetic Operators
let sum = 10 + 5; // Addition
let diff = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 5; // Division

// Assignment Operators
let x = 10;
x += 5; // x = x + 5

// Comparison Operators
let isEqual = 5 == 5; // Equal to
let isNotEqual = 5 != 3; // Not equal to

// Logical Operators
let isTrue = true && false; // Logical AND
let isEitherTrue = true || false; // Logical OR`,

  example: `// Arithmetic Example
let sum = 10 + 5;
console.log(sum); // Output: 15

// Comparison Example
let isEqual = 5 == 5;
console.log(isEqual); // Output: true

// Logical Example
let isTrue = true && false;
console.log(isTrue); // Output: false`,

  explanation:
    "Operators ko hum generally 4 main types mein classify karte hain: " +
    "<span class='text-red-600 font-semibold'>Arithmetic</span>, <span class='text-red-600 font-semibold'>Assignment</span>, <span class='text-red-600 font-semibold'>Comparison</span>, aur <span class='text-red-600 font-semibold'>Logical</span> operators. Arithmetic operators numbers par operations perform karte hain, comparison operators values ko compare karte hain, assignment operators values ko variables mein assign karte hain, aur logical operators logical conditions check karte hain."
};

const operatorsInterviewQuestions = [
  {
    question: "Arithmetic operators ka use kaise hota hai?",
    answer:
      "Arithmetic operators basic mathematical operations ko perform karte hain, jaise addition, subtraction, multiplication, aur division.",
    example: `let result = 10 + 5; // Addition
console.log(result); // Output: 15`
  },
  {
    question: "`==` aur `===` mein kya difference hai?",
    answer:
      "`==` values ko compare karta hai, jabki `===` values ke saath-saath unke data types ko bhi compare karta hai.",
    example: `console.log(5 == "5");  // true (type conversion)
console.log(5 === "5"); // false (strict comparison)`
  },
  {
    question: "`&&` aur `||` logical operators ka use kaise hota hai?",
    answer:
      "`&&` (AND) tab true hota hai jab dono operands true hon. `||` (OR) tab true hota hai jab koi bhi operand true ho.",
    example: `let andResult = true && false; // false
let orResult = true || false;   // true`
  },
  {
    question: "Assignment operator `=` ka use kaise hota hai?",
    answer:
      "Assignment operator ka use values ko variables mein assign karne ke liye hota hai. Hum `=` operator ka use karte hain.",
    example: `let a = 10; // Assigning 10 to variable 'a'
console.log(a); // Output: 10`
  }
];

const OperatorsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        {operatorsTopic.title}
      </h1>

      <div className="bg-gray-50 border p-6 rounded-lg shadow mb-10">
        <p
          className="mb-4 text-base"
          dangerouslySetInnerHTML={{ __html: operatorsTopic.description }}
        />

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Syntax:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {operatorsTopic.syntax}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Example:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {operatorsTopic.example}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Explanation:</h3>
        <p
          className="mt-2 text-base"
          dangerouslySetInnerHTML={{ __html: operatorsTopic.explanation }}
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">
        Interview Questions
      </h2>
      <div className="space-y-6">
        {operatorsInterviewQuestions.map((item, index) => (
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

export default OperatorsPage;
