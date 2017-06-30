functionOne(); // outputs error

var functionOne = function() {
  console.log("Hello!");
};

// Outputs: "Hello!"
functionTwo();

function functionTwo() {
  console.log("Hello!");
}

functionTwo.toString()
/* outputs 
"function functionTwo() {
  console.log("Hello!");
}"
***/

functionOne.toString()
/* outputs 
VM2018:1 Uncaught TypeError: Cannot read property 'toString' of undefined
    at <anonymous>:1:12
    
*/

var functionOne = function() {
  console.log("Hello!");
};
functionThree(); // works

// CONCLUSION - 
// (1) DON'T DECLARE FUNCTIONS IN BLOCKS, EXCEPT IN OBJECTS TREES AND CLOSURES
// (2) USE EXPRESSION - WITH VAR, FOR THE TIME BEEN

