import React from "react";

const functionTopic = {
  title: "Functions in JavaScript",
  description:
    "Functions JavaScript mein code blocks hote hain jo kisi specific task ko perform karte hain. Unhe baar-baar reuse kiya ja sakta hai.",

  syntax: `// Function Declaration
function greet(name) {
  return "Hello, " + name;
}

// Function Expression
const greet = function(name) {
  return "Hello, " + name;
};

// Arrow Function
const greet = (name) => {
  return "Hello, " + name;
};`,

  example: `function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8`,

  explanation: `JavaScript mein functions declare karne ke 3 popular tarike hain:

- 🔴 Function Declaration: hoisting support karta hai
- 🔴 Function Expression: variable ke through define hota hai, hoist nahi hota
- 🔴 Arrow Function: concise syntax hota hai aur lexical 'this' use karta hai`
};

const functionInterviewQuestions = [
  {
    question: "Function declaration aur function expression mein kya fark hai?",
    answer:
      "Function declaration hoist hoti hai, lekin expression nahi hoti. Declaration ko pehle use kiya ja sakta hai, expression ko nahi."
  },
  {
    question: "Arrow function aur normal function mein kya antar hai?",
    answer:
      "Arrow function ka apna `this` nahi hota, ye surrounding context ka `this` use karta hai. Normal function ka apna `this` hota hai."
  },
  {
    question: "Function ko parameter aur return value kaise di jaati hai?",
    answer: `function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // Output: 6`
  },
  {
    question: "JavaScript mein anonymous function kya hota hai?",
    answer:
      "Anonymous function wo hota hai jiska koi naam nahi hota. Ye aksar expressions ya callbacks ke roop mein use hota hai."
  }
];

const FunctionsPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-black bg-white">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">{functionTopic.title}</h1>

      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <p className="mb-4">{functionTopic.description}</p>

        <h2 className="font-semibold text-red-600 mb-1">Syntax:</h2>
        <pre className="bg-white border p-3 rounded text-sm whitespace-pre-wrap">{functionTopic.syntax}</pre>

        <h2 className="font-semibold text-red-600 mt-4 mb-1">Example:</h2>
        <pre className="bg-white border p-3 rounded text-sm whitespace-pre-wrap">{functionTopic.example}</pre>

        <h2 className="font-semibold text-red-600 mt-4 mb-1">Explanation:</h2>
        <p className="whitespace-pre-wrap text-sm">{functionTopic.explanation}</p>
      </div>

      <h2 className="text-xl font-bold text-center text-red-600 mb-4">Interview Questions</h2>
      <div className="space-y-4">
        {functionInterviewQuestions.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-md border">
            <h3 className="font-semibold text-red-700">Q: {item.question}</h3>
            <pre className="mt-1 text-sm whitespace-pre-wrap">A: {item.answer}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionsPage;
