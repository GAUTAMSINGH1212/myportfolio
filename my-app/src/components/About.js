import React, { useState } from 'react';

const About = () => {
  const [isBasicOpen, setBasicOpen] = useState(false);
  const [isIntermediateOpen, setIntermediateOpen] = useState(false);
  const [isAdvancedOpen, setAdvancedOpen] = useState(false);
  const [isExpertOpen, setExpertOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 'basic':
        setBasicOpen(!isBasicOpen);
        break;
      case 'intermediate':
        setIntermediateOpen(!isIntermediateOpen);
        break;
      case 'advanced':
        setAdvancedOpen(!isAdvancedOpen);
        break;
      case 'expert':
        setExpertOpen(!isExpertOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#003366] to-[#ffa500] min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-8">About JavaScript</h1>

      {/* Main Container with Effect */}
      <div className="effect-box  bg-opacity-15 p-8 rounded-lg shadow-xl space-y-6 backdrop-blur-md border border-opacity-30">
        <h2 className="text-3xl font-semibold ">What is JavaScript?</h2>
        <p className="text-lg  mb-6">
          JavaScript is a high-level, dynamic programming language that is widely used to create interactive and dynamic content on the web. It is one of the core technologies of web development alongside HTML and CSS.
        </p>

        {/* Basic Topics Section */}
        <div className="bg-black bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white">Basic JavaScript Topics</h2>
          <button
            onClick={() => toggleSection('basic')}
            className="text-lg text-white font-semibold hover:text-gray-300 mb-4 transition-all duration-300"
          >
            {isBasicOpen ? 'Hide' : 'Show'} Basic Topics
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isBasicOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <ul className="list-disc list-inside text-gray-200 space-y-2 pl-4">
              <li>Introduction to JavaScript</li>
              <li>Variables (var, let, const)</li>
              <li>Data Types (String, Number, Boolean, Undefined, Null, Symbol)</li>
              <li>Operators (Arithmetic, Assignment, Comparison, Logical)</li>
              <li>Conditionals (if, else, else if, switch)</li>
              <li>Loops (for, while, do...while, for...of, for...in)</li>
              <li>Functions (Declaration, Expression, Arrow Functions)</li>
              <li>Arrays and Methods (push, pop, shift, unshift, slice, splice)</li>
              <li>Objects and Properties</li>
              <li>String Methods</li>
              <li>Template Literals</li>
              <li>Type Conversion and Coercion</li>
              <li>Date and Time</li>
              <li>Math Object</li>
            </ul>
          </div>
        </div>

        {/* Intermediate Topics Section */}
        <div className="bg-black bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-6">
          <h2 className="text-2xl font-semibold text-white">Intermediate JavaScript Topics</h2>
          <button
            onClick={() => toggleSection('intermediate')}
            className="text-lg text-white font-semibold hover:text-gray-300 mb-4 transition-all duration-300"
          >
            {isIntermediateOpen ? 'Hide' : 'Show'} Intermediate Topics
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isIntermediateOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <ul className="list-disc list-inside text-gray-200 space-y-2 pl-4">
              <li>DOM Manipulation (Document Object Model)</li>
              <li>Event Handling (onclick, addEventListener)</li>
              <li>Hoisting</li>
              <li>Scope (Global, Local, Block)</li>
              <li>Closures</li>
              <li>Callbacks</li>
              <li>Array Higher Order Functions (map, filter, reduce, find, some, every)</li>
              <li>Error Handling (try...catch)</li>
              <li>Set and Map</li>
              <li>Spread and Rest Operators</li>
              <li>Destructuring (Array/Object)</li>
              <li>Ternary Operator</li>
              <li>JSON (parse, stringify)</li>
              <li>Timer Functions (setTimeout, setInterval, clearInterval)</li>
              <li>Form Validation</li>
              <li>Local Storage, Session Storage, Cookies</li>
            </ul>
          </div>
        </div>

        {/* Advanced Topics Section */}
        <div className="bg-black bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-6">
          <h2 className="text-2xl font-semibold text-white">Advanced JavaScript Topics</h2>
          <button
            onClick={() => toggleSection('advanced')}
            className="text-lg text-white font-semibold hover:text-gray-300 mb-4 transition-all duration-300"
          >
            {isAdvancedOpen ? 'Hide' : 'Show'} Advanced Topics
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isAdvancedOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <ul className="list-disc list-inside text-gray-200 space-y-2 pl-4">
              <li>this keyword</li>
              <li>Object-Oriented Programming (OOP) in JS</li>
              <li>Classes</li>
              <li>Inheritance</li>
              <li>Constructor</li>
              <li>Static Methods</li>
              <li>Prototypes and Prototypal Inheritance</li>
              <li>Function Context (call, apply, bind)</li>
              <li>Closures in-depth</li>
              <li>IIFE (Immediately Invoked Function Expression)</li>
              <li>Modules (ES6 import/export)</li>
              <li>Asynchronous JavaScript</li>
              <li>Callback Hell</li>
              <li>Promises</li>
              <li>async/await</li>
              <li>Fetch API / Axios</li>
              <li>Event Loop & Call Stack</li>
              <li>JavaScript Engines (like V8)</li>
              <li>Memory Management & Garbage Collection</li>
            </ul>
          </div>
        </div>

        {/* Expert Topics Section */}
        <div className="bg-black bg-opacity-10 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mt-6">
          <h2 className="text-2xl font-semibold text-white">Super Advanced / Expert-Level JavaScript Topics</h2>
          <button
            onClick={() => toggleSection('expert')}
            className="text-lg text-white font-semibold hover:text-gray-300 mb-4 transition-all duration-300"
          >
            {isExpertOpen ? 'Hide' : 'Show'} Expert Topics
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpertOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            <ul className="list-disc list-inside text-gray-200 space-y-2 pl-4">
              <li>Functional Programming Concepts</li>
              <li>Pure Functions</li>
              <li>Currying</li>
              <li>Composition</li>
              <li>Custom Events</li>
              <li>Web Workers</li>
              <li>Service Workers (PWA)</li>
              <li>Performance Optimization</li>
              <li>Debounce & Throttle</li>
              <li>Proxy & Reflect</li>
              <li>Generators & Iterators</li>
              <li>Observables (RxJS)</li>
              <li>Meta Programming</li>
              <li>Design Patterns in JS (Factory, Singleton, Observer, etc.)</li>
              <li>JavaScript Modules Bundlers (Webpack, Rollup)</li>
              <li>Abstract Syntax Tree (AST)</li>
              <li>Security in JavaScript (XSS, CSRF prevention)</li>
              <li>Memory Leaks Debugging</li>
              <li>JavaScript Garbage Collection Techniques</li>
              <li>Event Delegation</li>
              <li>Custom bind, call, apply Implementations</li>
              <li>Polyfills</li>
              <li>Advanced Browser APIs (Geolocation, Notifications, Clipboard, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
