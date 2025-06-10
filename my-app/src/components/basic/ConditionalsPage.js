import React from "react";

const conditionalsTopic = {
  title: "Conditionals in JavaScript",
  description:
    "Conditionals JavaScript mein decision lene ke liye use hote hain. Inke through hum program ko alag-alag direction mein chala sakte hain based on conditions.",
  syntax: `// if statement
if (condition) {
  // code
}

// if...else
if (condition) {
  // code
} else {
  // alternate code
}

// if...else if...else
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default
}

// ternary operator 🔴 (short form)
condition ? value_if_true : value_if_false;

// switch 🔴 (multiple cases)
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}`,
  example: `const age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible.");
}

// Ternary operator
const result = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(result);

// Switch
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apples are red.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  default:
    console.log("Unknown fruit");
}`,
  explanation: `🔴 if-else statements conditional logic apply karte hain.

🔴 Ternary operator ek short form hai if-else ka. Ek line mein condition check kar ke result assign karta hai.

🔴 switch multiple specific values ke against check karta hai. Jab value match karti hai, wahi case ka code execute hota hai.`
};

const conditionalsInterviewQuestions = [
  {
    question: "JavaScript mein if-else aur switch mein kya difference hai?",
    answer:
      "`if-else` conditions ko expressions ke through evaluate karta hai, jabki `switch` specific values compare karta hai."
  },
  {
    question: "Ternary operator kya hota hai aur kab use karna chahiye?",
    answer:
      "Ternary operator ek short form hota hai `if-else` ka, jab ek hi line mein decision lena ho to use karein. e.g. `a > b ? 'A' : 'B'`"
  },
  {
    question: "Kya switch statement mein default hona zaroori hai?",
    answer:
      "Default optional hota hai, lekin agar koi case match na ho to fallback dena important hota hai."
  },
  {
    question: "Nested if-else aur else-if ka use kab karte hain?",
    answer:
      "Jab multiple levels ki conditions check karni ho, tab nested ya else-if ladder ka use hota hai."
  }
];

const ConditionalsPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 text-black bg-white">
      <h1 className="text-2xl font-bold text-center text-red-600 mb-6">{conditionalsTopic.title}</h1>

      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <p className="mb-4">{conditionalsTopic.description}</p>

        <h2 className="font-semibold text-red-600 mb-1">Syntax:</h2>
        <pre className="bg-white border p-3 rounded text-sm whitespace-pre-wrap">{conditionalsTopic.syntax}</pre>

        <h2 className="font-semibold text-red-600 mt-4 mb-1">Example:</h2>
        <pre className="bg-white border p-3 rounded text-sm whitespace-pre-wrap">{conditionalsTopic.example}</pre>

        <h2 className="font-semibold text-red-600 mt-4 mb-1">Explanation:</h2>
        <p className="whitespace-pre-wrap text-sm">{conditionalsTopic.explanation}</p>
      </div>

      <h2 className="text-xl font-bold text-center text-red-600 mb-4">Interview Questions</h2>
      <div className="space-y-4">
        {conditionalsInterviewQuestions.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-md border">
            <h3 className="font-semibold text-red-700">Q: {item.question}</h3>
            <pre className="mt-1 text-sm whitespace-pre-wrap">A: {item.answer}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionalsPage;
