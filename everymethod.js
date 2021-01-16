/*Functional Programming: Use the every Method to Check that Every Element
 in an Array Meets a Criteria

The every method works with arrays to check if every element passes 
a particular test. It returns a Boolean value - true if all values 
meet the criteria, false if not.

For example, the following code would check if every element
 in the numbers array is less than 10:

var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
// Returns false
Use the every method inside the checkPositive function to check 
if every element in arr is positive. The function should return a 
Boolean value. */

// Solution 1 


function checkPositive(arr) {
    // Only change code below this line
  let result = arr.every(function(value) {
    console.log(value);
    return value > 0;
  });
  
  return result;
    // Only change code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);

  // Refactored

  function checkPositive(arr) {
    // Only change code below this line
  let result = arr.every(value => { return value > 0;
  });
  
  return result;
    // Only change code above this line
  }
  console.log(checkPositive([1, 2, 3, -4, 5]));
