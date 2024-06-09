// const sumOfTwoNumber = function (num1, num2) {
//   return num1 + num2;
// };

// module.exports = sumOfTwoNumber;

const myFunction = function(invalidInput) {
    if (typeof invalidInput !== "number") {
      throw new Error("Invalid input");
    }
}
module.exports = myFunction;
// Basic summary of what is written 1. Created a very basic function called sum which basically add two numbers and then line 5 basically allow us to export this created method anywhere. So it can be exported and be used by test file.