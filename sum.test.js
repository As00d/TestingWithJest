// const sumOfTwoNumber = require('./sum');
const myFunction = require("./sum");

// test('Add 2 + 2 equals 4', ()=>{
//     expect(sumOfTwoNumber(2,2)).toBe(4);
// })

// toBe -> when its primitive data type
test("Learn about to be", () => {
  expect(4 + 2).toBe(6);
});

// toEqual -> when its not primitive datatype
test("learn about equalTo", () => {
  const data = {
    one: 1,
  };
  data.two = 2;
  expect(data).toEqual({ two: 2, one: 1 });
});

// toBeFalsy
test("Learn about toBeFalsy", () => {
  const name = "";
  expect(name).toBeFalsy();
});
// toBeTruthy
test("Learn about Truthy", () => {
  const name = "anki";
  expect(name).toBeTruthy();
});

// toThrow
test("Check if method throws an error", () => {
  expect(() => {
    myFunction('test');
  }).toThrow();
});
// As we saw where actual method is written we wrote an export statement which allowed us to export the sum method. Now in order to use that method here we have to import it first which we do by using require.
// In test we have two parameter test('description', function - mostly arrow function is used)
// There is something called as matchers for eg toBe, equal truthy falsy etc
// 1. toBe is generally used for primitive data types like numbers, strings, boolean
// 2. toEqual is used when we are comparing the values of two objects or arrays
// 3. toBeFalsy : this is used when we expect the value to be null, undefined, '', false, 0, NAN
// 4. toBeTruthy : Any thing except what is falsy is truthy.
// One more thing we have is error handling in matchers for that we have toThrow
// Additional points : to test coverage we have npm test -- --coverage