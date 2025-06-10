import React from "react";
import { Link } from "react-router-dom";
// import topics from "../dataobject.js"

const Topics = () => {
  const topics = [
    // 🟢 Basic JavaScript Topics
    {
      id: 1,
      title: "Introduction to JavaScript 🟢",
      description: "Understand the fundamentals of JavaScript.",
      link: "/javascript_intro",
    },
    {
      id: 2,
      title: "Variables (var, let, const) 🟢",
      description: "Learn how to declare variables in JavaScript.",
      link: "/javascript_variables",
    },
    {
      id: 3,
      title: "Data Types 🟢",
      description:
        "Explore JavaScript data types like String, Number, Boolean, etc.",
      link: "/javascript_data-types",
    },
    {
      id: 4,
      title: "Operators 🟢",
      description:
        "Understand arithmetic, assignment, comparison, and logical operators.",
      link: "/javascript_operators",
    },
    {
      id: 5,
      title: "Conditionals 🟢",
      description:
        "Control the flow of your code with if, else, switch statements.",
      link: "/javascript_conditionals",
    },
    {
      id: 6,
      title: "Loops 🟢",
      description:
        "Repeat actions using for, while, do...while, for...of, for...in.",
      link: "/javascript_loops",
    },
    {
      id: 7,
      title: "Functions 🟢",
      description:
        "Learn about function declaration, expression, and arrow functions.",
      link: "/javascript_functions",
    },
    {
      id: 8,
      title: "Arrays and Methods 🟢",
      description: "Work with arrays and methods like push, pop, splice, etc.",
      link: "/javascript_arrays-methods",
    },
    {
      id: 9,
      title: "Objects and Properties 🟢",
      description: "Create and manipulate objects and their properties.",
      link: "/javascript_objects-properties",
    },
    {
      id: 10,
      title: "String Methods 🟢",
      description: "Manipulate strings using built-in methods.",
      link: "/javascript_string-methods",
    },
    {
      id: 11,
      title: "Template Literals 🟢",
      description: "Embed expressions inside strings using backticks.",
      link: "/javascript_template-literals",
    },
    {
      id: 12,
      title: "Type Conversion and Coercion 🟢",
      description: "Convert data types explicitly and implicitly.",
      link: "/javascript_type-conversion",
    },
    {
      id: 13,
      title: "Date and Time 🟢",
      description: "Work with dates and time using Date object.",
      link: "/javascript_date-time",
    },
    {
      id: 14,
      title: "Math Object 🟢",
      description: "Use the Math object for calculations and constants.",
      link: "/javascript_math-object",
    },
  
    // 🟡 Intermediate JavaScript Topics
    {
      id: 15,
      title: "DOM Manipulation 🟡",
      description: "Access and modify HTML using JavaScript.",
      link: "/javascript_dom-manipulation",
    },
    {
      id: 16,
      title: "Event Handling 🟡",
      description: "Handle browser events with onclick and addEventListener.",
      link: "/javascript_event-handling",
    },
    {
      id: 17,
      title: "Hoisting 🟡",
      description:
        "Understand how variable and function declarations are hoisted.",
      link: "/javascript_hoisting",
    },
    {
      id: 18,
      title: "Scope 🟡",
      description: "Learn about global, local, and block scope.",
      link: "/javascript_scope",
    },
    {
      id: 19,
      title: "Closures 🟡",
      description: "Understand how closures work in JavaScript.",
      link: "/javascript_closures",
    },
    {
      id: 20,
      title: "Callbacks 🟡",
      description: "Pass functions as arguments and manage asynchronous code.",
      link: "/javascript_callbacks",
    },
    {
      id: 21,
      title: "Array Higher Order Functions 🟡",
      description: "Use map, filter, reduce, find, some, every, etc.",
      link: "/javascript_array-higher-order-functions",
    },
    {
      id: 22,
      title: "Error Handling 🟡",
      description: "Use try...catch to handle runtime errors.",
      link: "/javascript_error-handling",
    },
    {
      id: 23,
      title: "Set and Map 🟡",
      description: "Work with unique values and key-value pairs.",
      link: "/javascript_set-map",
    },
    {
      id: 24,
      title: "Spread and Rest Operators 🟡",
      description: "Simplify function arguments and array operations.",
      link: "/javascript_spread-rest-operators",
    },
    {
      id: 25,
      title: "Destructuring 🟡",
      description: "Extract values from arrays or objects easily.",
      link: "/javascript_destructuring",
    },
    {
      id: 26,
      title: "Ternary Operator 🟡",
      description: "Short form conditional expression.",
      link: "/javascript_ternary-operator",
    },
    {
      id: 27,
      title: "JSON 🟡",
      description: "Parse and stringify JSON data.",
      link: "/javascript_json",
    },
    {
      id: 28,
      title: "Timer Functions 🟡",
      description: "Use setTimeout, setInterval, clearInterval.",
      link: "/javascript_timer-functions",
    },
    {
      id: 29,
      title: "Form Validation 🟡",
      description: "Validate user input in forms using JS.",
      link: "/javascript_form-validation",
    },
    {
      id: 30,
      title: "Local Storage, Session Storage, Cookies 🟡",
      description: "Store data in the browser.",
      link: "/javascript_storage",
    },
  
    // 🔵 Advanced JavaScript Topics
    {
      id: 31,
      title: "this keyword 🔵",
      description: "Understand the behavior of 'this' in different contexts.",
      link: "/javascript_this-keyword",
    },
    {
      id: 32,
      title: "Object-Oriented Programming (OOP) 🔵",
      description: "Implement OOP concepts in JavaScript.",
      link: "/javascript_oop",
    },
    {
      id: 33,
      title: "Classes 🔵",
      description: "Use class syntax for OOP.",
      link: "/javascript_classes",
    },
    {
      id: 34,
      title: "Inheritance 🔵",
      description: "Extend class properties and methods.",
      link: "/javascript_inheritance",
    },
    {
      id: 35,
      title: "Constructor 🔵",
      description: "Create objects with constructors.",
      link: "/javascript_constructor",
    },
    {
      id: 36,
      title: "Static Methods 🔵",
      description: "Define methods on classes, not instances.",
      link: "/javascript_static-methods",
    },
    {
      id: 37,
      title: "Prototypes and Inheritance 🔵",
      description: "Understand prototype chain and inheritance.",
      link: "/javascript_prototypes-inheritance",
    },
    {
      id: 38,
      title: "Function Context (call, apply, bind) 🔵",
      description: "Change the context of functions.",
      link: "/javascript_function-context",
    },
    {
      id: 39,
      title: "Closures in-depth 🔵",
      description: "Deep dive into closures and lexical environments.",
      link: "/javascript_closures-in-depth",
    },
    {
      id: 40,
      title: "IIFE 🔵",
      description: "Immediately Invoked Function Expression.",
      link: "/javascript_iife",
    },
    {
      id: 41,
      title: "Modules (ES6 import/export) 🔵",
      description: "Use ES6 modules to split code.",
      link: "/javascript_modules",
    },
    {
      id: 42,
      title: "Asynchronous JavaScript 🔵",
      description: "Learn about async workflows in JS.",
      link: "/javascript_async-javascript",
    },
    {
      id: 43,
      title: "Callback Hell 🔵",
      description: "Understand nested callbacks and how to avoid them.",
      link: "/javascript_callback-hell",
    },
    {
      id: 44,
      title: "Promises 🔵",
      description: "Handle async code with promises.",
      link: "/javascript_promises",
    },
    {
      id: 45,
      title: "async/await 🔵",
      description: "Simplify async operations.",
      link: "/javascript_async-await",
    },
    {
      id: 46,
      title: "Fetch API / Axios 🔵",
      description: "Make HTTP requests in JavaScript.",
      link: "/javascript_fetch-axios",
    },
    {
      id: 47,
      title: "Event Loop & Call Stack 🔵",
      description: "Understand JS execution model.",
      link: "/javascript_event-loop-call-stack",
    },
    {
      id: 48,
      title: "JavaScript Engines 🔵",
      description: "Learn about V8 and how JavaScript runs.",
      link: "/javascript_javascript-engines",
    },
    {
      id: 49,
      title: "Memory Management 🔵",
      description: "Understand how memory is handled in JS.",
      link: "/javascript_memory-management",
    },
  
    // 🟣 Expert-Level JavaScript Topics
    {
      id: 50,
      title: "Functional Programming 🟣",
      description: "Learn functional concepts in JavaScript.",
      link: "/javascript_functional-programming",
    },
    {
      id: 51,
      title: "Pure Functions 🟣",
      description: "Functions with no side effects.",
      link: "/javascript_pure-functions",
    },
    {
      id: 52,
      title: "Currying 🟣",
      description: "Transform functions with multiple arguments.",
      link: "/javascript_currying",
    },
    {
      id: 53,
      title: "Composition 🟣",
      description: "Combine multiple functions.",
      link: "/javascript_composition",
    },
    {
      id: 54,
      title: "Custom Events 🟣",
      description: "Create and dispatch custom events.",
      link: "/javascript_custom-events",
    },
    {
      id: 55,
      title: "Web Workers 🟣",
      description: "Run scripts in background threads.",
      link: "/javascript_web-workers",
    },
    {
      id: 56,
      title: "Service Workers 🟣",
      description: "Build Progressive Web Apps.",
      link: "/javascript_service-workers",
    },
    {
      id: 57,
      title: "Performance Optimization 🟣",
      description: "Improve JavaScript performance.",
      link: "/javascript_performance-optimization",
    },
    {
      id: 58,
      title: "Debounce & Throttle 🟣",
      description: "Control function execution frequency.",
      link: "/javascript_debounce-throttle",
    },
    {
      id: 59,
      title: "Proxy & Reflect 🟣",
      description: "Intercept and customize object behavior.",
      link: "/javascript_proxy-reflect",
    },
    {
      id: 60,
      title: "Generators & Iterators 🟣",
      description: "Lazy evaluation and iterable control.",
      link: "/javascript_generators-iterators",
    },
    {
      id: 61,
      title: "Observables (RxJS) 🟣",
      description: "Work with asynchronous streams.",
      link: "/javascript_observables",
    },
    {
      id: 62,
      title: "Meta Programming 🟣",
      description: "Write programs that manipulate programs.",
      link: "/javascript_meta-programming",
    },
    {
      id: 63,
      title: "Design Patterns 🟣",
      description: "Common solutions to recurring problems in JS.",
      link: "/javascript_design-patterns",
    },
    {
      id: 64,
      title: "Module Bundlers 🟣",
      description: "Use Webpack or Rollup for bundling code.",
      link: "/javascript_module-bundlers",
    },
    {
      id: 65,
      title: "AST (Abstract Syntax Tree) 🟣",
      description: "Understand how JS code is parsed.",
      link: "/javascript_ast",
    },
    {
      id: 66,
      title: "Security in JS 🟣",
      description: "Prevent XSS and CSRF attacks.",
      link: "/javascript_security",
    },
    {
      id: 67,
      title: "Memory Leaks 🟣",
      description: "Debug and prevent memory leaks.",
      link: "/javascript_memory-leaks",
    },
    {
      id: 68,
      title: "Event Delegation 🟣",
      description: "Efficient event handling on parent elements.",
      link: "/javascript_event-delegation",
    },
    {
      id: 69,
      title: "Custom bind, call, apply 🟣",
      description: "Recreate these core methods.",
      link: "/javascript_custom-bind-call-apply",
    },
    {
      id: 70,
      title: "Polyfills 🟣",
      description: "Support older browsers with polyfills.",
      link: "/javascript_polyfills",
    },
    {
      id: 71,
      title: "Advanced Browser APIs 🟣",
      description: "Clipboard, Geolocation, Notifications, etc.",
      link: "/javascript_advanced-browser-apis",
    },
  ];


  return (
    <div className="p-6 text-white bg-gradient-to-r from-[#003366] to-[#ffa500]">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-400">
        JavaScript Topics
      </h1>

      {/* Topics Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-10">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="rounded-2xl bg-white shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#003366] to-[#ffa500]" />

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#ffa500] transition-colors duration-300">
                {topic.title} 📝
              </h2>
              <p className="text-gray-600 mb-4 group-hover:text-[#003366] transition-colors duration-300">
                {topic.description}
              </p>
              <Link
                to={`/topic${topic.link}`}
                className="mt-auto inline-block bg-[#003366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#ffa500] hover:text-[#003366] transition-colors duration-300"
              >
                👉 Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
