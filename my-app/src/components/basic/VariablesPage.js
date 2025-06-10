import React from "react";

const variableTopic = {
  title: "Variables in JavaScript (var, let, const)",
  description:
    "JavaScript mein variables data ko temporarily store karne ke liye use hote hain. " +
    "👉 `var`, `let`, aur `const` teen tarike hain variable declare karne ke.",
  syntax: `// var - function scoped
var a = 10;

// let - block scoped
let b = 20;

// const - block scoped and cannot be reassigned
const c = 30;`,
  example: `function testScope() {
  if (true) {
    var x = 5;
    let y = 10;
    const z = 15;
    console.log(x, y, z); // 5 10 15
  }
  console.log(x); // 5 (var is function-scoped)
  // console.log(y); // Error
  // console.log(z); // Error
}`,
  explanation:
    "`var` <span class='text-red-600 font-semibold'>function-scoped</span> hota hai, " +
    "jabki `let` aur `const` <span class='text-red-600 font-semibold'>block-scoped</span> hote hain. " +
    "`const` se declare variable ko <span class='text-red-600 font-semibold'>reassign nahi</span> kiya ja sakta."
};

const variableInterviewQuestions = [
  {
    question: "`var`, `let` aur `const` mein kya difference hai?",
    answer:
      "`var` <span class='text-red-600 font-semibold'>function scoped</span> hota hai aur hoisting allow karta hai. " +
      "`let` aur `const` <span class='text-red-600 font-semibold'>block scoped</span> hote hain. " +
      "`const` ka value <span class='text-red-600 font-semibold'>reassign nahi</span> ho sakta."
  },
  {
    question: "Kya `const` ka matlab hai value change nahi hogi?",
    answer:
      "Primitive value ke liye haan. Lekin agar `const` <span class='text-red-600 font-semibold'>object ya array</span> ho, to uske properties <span class='text-red-600 font-semibold'>change ho sakte</span> hain."
  },
  {
    question: "Hoisting `var` aur `let` mein kaise kaam karti hai?",
    answer:
      "`var` <span class='text-red-600 font-semibold'>hoist</span> hota hai aur `undefined` assign hota hai. " +
      "`let` bhi hoist hota hai lekin <span class='text-red-600 font-semibold'>temporal dead zone</span> ki wajah se error aata hai agar pehle access karein."
  },
  {
    question: "`let` aur `const` kab use karna chahiye?",
    answer:
      "`const` use karein jab value change <span class='text-red-600 font-semibold'>expected na ho</span>. Agar value change hone ki sambhavana ho to `let` use karein."
  }
];

const VariablesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        {variableTopic.title}
      </h1>

      <div className="bg-gray-50 border p-6 rounded-lg shadow mb-10">
        <p className="mb-4 text-base">{variableTopic.description}</p>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Syntax:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {variableTopic.syntax}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Example:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {variableTopic.example}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Explanation:</h3>
        <p
          className="mt-2 text-base"
          dangerouslySetInnerHTML={{ __html: variableTopic.explanation }}
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">
        Interview Questions
      </h2>
      <div className="space-y-6">
        {variableInterviewQuestions.map((item, index) => (
          <div key={index} className="bg-white border p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-[#003366]">
              Q: {item.question}
            </h3>
            <p
              className="mt-2 text-base"
              dangerouslySetInnerHTML={{ __html: `A: ${item.answer}` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariablesPage;
