# Task: HTML, CSS, JavaScript

---

# 📅 Day 1

## 01: Basics of HTML
**Topic**: Introduction to HTML, Basic Tags, Structure of an HTML Document.

**Exercise**:  
1. Create an HTML file with the following basic structure: `<!DOCTYPE html>, <html>, <head>,` and `<body>`.  
2. Add a title to the page using the `<title>` tag.  
3. In the body, include:
   - A heading (`<h1>`)
   - A paragraph (`<p>`)
   - An unordered list (`<ul>`) and an ordered list (`<ol>`)

**Quick Links**:  
[View Task 01 file](01-Basic-of-HTML/index.html)



## 2: Basics of CSS

**Topic**: Introduction to CSS, Inline, Internal, and External CSS.<br>
**Exercise**:
- Style your HTML file from  1 using inline CSS for a heading.
- Create a separate CSS file and link it to your HTML file.
- Add styles to change the background color, font color, and font size of the paragraph.

**Quick Links**:  
- [View Task 02 HTML file](02-Basic-of-css/index.html)
- [View Task 02 CSS file](02-Basic-of-css/style.css)


## 3: Handling Forms using JavaScript
**Topic**: Creating Forms, Handling Form Submission, Validating Form Data.<br>
**Exercise**:
- Create a form with fields for name, email, and password.
- Use JavaScript to validate that all fields are filled out before submission.
- Display an alert if any fields are missing or invalid.

**Quick Links**:  
- [View Task 03 HTML file](03-Handling-forms-using-javascript/index.html)
- [View Task 03 CSS file](03-Handling-forms-using-javascript/style.css)
- [View Task 03 Java Script file](03-Handling-forms-using-javascript/script.js)

# 📅 Day 2

## 4: DOM Events
**Topic**: Understanding and Handling DOM Events.<br>
**Exercise**:
- Create a button that changes its text when clicked.
- Add a mouseover event to change the background color of a div when hovered.
- Implement a form that displays an alert when the form is submitted.

**Quick Links**:  
- [View Task 04 HTML file](04-DOM_Event/index.html)
- [View Task 04 CSS file](04-DOM_Event/style.css)



## 5: DOM Manipulation
**Topic**: Manipulating the DOM with JavaScript.<br>
**Exercise**:
- Create a button that, when clicked, adds a new item to an unordered list.
- Change the content of a paragraph dynamically using innerHTML.
- Experiment with changing styles of elements using JavaScript (e.g., changing color, font size).

**Quick Links**:  
- [View Task 05 HTML file](05-dom-manipulation/index.html)
- [View Task 05 CSS file](05-dom-manipulation/style.css)


## 6: Variables and Constants
**Topic**: Declaring and Using Variables and Constants.<br>
**Exercise**:
- Create a JavaScript file and declare variables using `let`, `var`, and `const`.
- Assign different values to the variables and log them to the console.
- Experiment with reassigning variables and observe how const behaves.

``` java script 
var var1 = null;
let var2 = null ;
const var3 = null;

var1 = "variable 1";
var2 = "let variable 2";
var3 = "const variable 3";


var1 = "variable is changed";
var2 = "variable 2 is also changed";
var3 = "getting error";


// const is not reinitialize or re-declare
// let is reinitialize but no re-declare
// var is reinitialize and re-declare
```

Error
```bash 
var3 = "getting error";
     ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/brilworks/Desktop/Task/Task-HTML-CSS-JavaScript/06-Variables-Constants/script.js:7:6)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1426:10)
    at Module.load (node:internal/modules/cjs/loader:1205:32)
    at Module._load (node:internal/modules/cjs/loader:1021:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
    at node:internal/main/run_main_module:28:49
```

**Quick Links**:  
- [View Task 06 Java Script file](06-Variables-Constants/script.js)

# 7: Primitive Types and Dynamic Typing
**Topic**: Understanding Primitive Data Types and Dynamic Typing in JavaScript.<br>
**Exercise**:
- Declare variables of different types: `string`, `number`, `boolean`, `null`, `undefined`.
- Use `typeof` to check the type of each variable.
- Experiment with changing the type of a variable (e.g., from a number to a string).



**Quick Links**:  
- [View Task 07 Java Script file](07-Primitive-dynamic/script.js)


# 8: Objects
**Topic**: Creating and Using Objects in JavaScript.<br>
**Exercise**:
- Create an object to represent a person with properties like name, age, and email.
- Access and log the properties using both dot notation and bracket notation.
- Add a method to the object that returns a string with the person’s details.


**Quick Links**:  
- [View Task 08 Java Script file](08-objects/script.js)


# 9: Arrays
**Topic**: Creating and Using Arrays in JavaScript.<br>
**Exercise**:
- Create an array of numbers and log its length.
- Access individual elements of the array and modify them.
- Add and remove elements using push, pop, shift, and unshift.


**Quick Links**:  
- [View Task 09 Java Script file](09-Array/script.js)



# 10: Functions
**Topic**: Defining and Calling Functions.<br>
**Exercise**:
- Create a function that takes two numbers as parameters and returns their sum.
- Write a function that checks if a number is even or odd.
- Experiment with function expressions and arrow functions.

**Quick Links**:  
- [View Task 10 Java Script file](10-function/script.js)


# 11: Operators and Control Flow
**Topic**: Understanding Operators and Control Flow (if, else, switch, loops).<br>
**Exercise**:
- Create a program that takes a user’s age and displays whether they are a child, teenager, or adult.
- Write a program that uses a for loop to display numbers from 1 to 10.
- Implement a switch statement to handle different cases for a variable.

**Quick Links**:  
- [View Task 11 Java Script file](11-oprator-control-flow/script.js)