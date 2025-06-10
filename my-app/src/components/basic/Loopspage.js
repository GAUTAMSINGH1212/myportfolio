import React from "react";

const loopsTopic = {
  title: "Loops in JavaScript",
  description:
    "JavaScript mein loops ka use kisi block of code ko baar-baar repeat karne ke liye hota hai jab tak ek certain condition true rahe.",

  syntax: `// 🔁 For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 🟢 i = 0 se start hota hai
// 🟢 i < 5 condition check hoti hai
// 🟢 Har iteration ke baad i++ (increment) hota hai

// 🔁 While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// 🔁 Do...While Loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);`,

  example: `// For loop ka example
for (let i = 1; i <= 3; i++) {
  console.log("Hello", i);
}
// Output:
// Hello 1
// Hello 2
// Hello 3

// While loop ka example
let count = 1;
while (count <= 3) {
  console.log("Count is:", count);
  count++;
}`,

  explanation: `JavaScript mein 3 main loop types hote hain:
<ul class="list-disc ml-6 mt-2 text-base">
  <li><span class='text-red-600 font-semibold'>For Loop</span>: Jab iterations ka count pata ho.</li>
  <li><span class='text-red-600 font-semibold'>While Loop</span>: Jab pehle condition check karna ho.</li>
  <li><span class='text-red-600 font-semibold'>Do...While Loop</span>: Jab kam se kam ek baar code chalana ho, chahe condition false ho.</li>
</ul>`
};

const loopsInterviewQuestions = [
  {
    question: "`for` loop aur `while` loop mein kya difference hai?",
    answer:
      "`for` loop ka use tab hota hai jab iterations fixed ho. `while` loop ka use tab hota hai jab iterations unknown ho aur pehle condition check karni ho.",
    example: `// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}`
  },
  {
    question: "`do...while` loop ka use kab karte hain?",
    answer:
      "Jab hume kam se kam ek baar loop body execute karni ho, chahe condition false ho.",
    example: `let i = 10;
do {
  console.log(i); // runs once
  i++;
} while (i < 5);`
  },
  {
    question: "Loop infinite kab ho sakta hai?",
    answer:
      "Jab loop ke andar exit condition satisfy nahi hoti ya increment/update missing ho.",
    example: `// Infinite loop - avoid!
while (true) {
  console.log("This will run forever!");
}`
  }
];

const LoopsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-[#003366] mb-10">
        {loopsTopic.title}
      </h1>

      <div className="bg-gray-50 border p-6 rounded-lg shadow mb-10">
        <p className="mb-4 text-base">{loopsTopic.description}</p>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Syntax:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {loopsTopic.syntax}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Example:</h3>
        <pre className="bg-white border p-4 rounded text-sm text-black whitespace-pre-wrap">
          {loopsTopic.example}
        </pre>

        <h3 className="font-semibold text-lg text-[#003366] mt-4">Explanation:</h3>
        <div
          className="mt-2 text-base"
          dangerouslySetInnerHTML={{ __html: loopsTopic.explanation }}
        />
      </div>

      <h2 className="text-2xl font-bold text-center text-[#003366] mb-6">
        Interview Questions
      </h2>
      <div className="space-y-6">
        {loopsInterviewQuestions.map((item, index) => (
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

export default LoopsPage;
