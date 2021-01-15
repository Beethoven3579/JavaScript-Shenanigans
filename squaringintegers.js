


const squareList = arr => {
    // Only change code below this line
  
    let positiveIntegersSquared = arr.filter(num => {
      if (Number.isInteger(num) && num > 0) {return num;}
    }).map(num => {return num*num;});
  
  
    return positiveIntegersSquared;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  console.log(Number.isInteger(10))