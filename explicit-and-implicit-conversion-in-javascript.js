/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;  //  This is an example of an implicit type conversion because the string "5" is automatically converted to the number 5 since this is arithmetic involving subtraction.  Since the result is correct, I did not change the code.
console.log("The result is: " + result);

let isValid = Boolean(false);  // Here I made an explicit type conversion by removing the quotation marks around the value false to prevent the Boolean function from being evaluated as true do to the string "false" being evaluated as truthy and the rest of the code from running.  However, a string being automatically converted to true during evaluation is an implicit type conversion.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";  
let num = Number(age);  //  Here I am performing an explicit type conversion by converting the string of "25" to a number 25 using the Number() method.
let totalAge = num + 5;  //  Here I am using the variable num so the addition can be performed correctly and avoid concatenation of a string and a number.
console.log("Total Age: " + totalAge);

// My examples for Part 2:

//  Example 1 is an example of explicit type conversion designed to illustrate why zero should be used to represent the absence of a value rather than undefined when calculating an average.

let a = undefined;  // Here undefined is being used to represent the absence of a quantity that will be used to calculate an average.
let b = 2;

let average = ((a + b)/2);

console.log(average);  //  The result of the average is NaN because undefined results in the variable "a" not being assigned a value rather than representing the absence of a quantity.

let x = 0; // Here I have explicitly changed the value of undefined to zero so the absence of a quantity is correctly represented, and the average will be calculated correctly.
let y =2;

let average1 =((x + y)/2);

console.log(average1);

//  Example 2 is an example of implicit type conversion.

console.log(3 == "3"); /*  This is evaluted as true because the string "3" is automaticlly converted to the number 3 before the equality comparison is performed. 
This is an implicit type conversion because one data type is converted to another automatically.
*/
