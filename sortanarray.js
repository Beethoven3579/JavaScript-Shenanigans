/* Functional Programming: Return a Sorted Array Without Changing
/ the Original Array

A side effect of the sort method is that it changes the 
order of the elements in the original array. 
In other words, it mutates the array in place. 
One way to avoid this is to first concatenate an empty array 
to the one being sorted (remember that slice and concat return 
    a new array), then run the sort method.

Use the sort method in the nonMutatingSort function 
to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate 
the globalArray variable. */

// Solution 1

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
return [...arr].sort();

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);

// Solution 2

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
return arr.slice().sort();

  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(globalArray);
