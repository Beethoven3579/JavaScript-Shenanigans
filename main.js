const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45];

//forLoop example:

//for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
//};

//forEach()..................................................

//This example returns the same output as the for loop.

//companies.forEach(function(company) {
  // console.log(company);
//});

//This example uses dot notation to get the company name.

//companies.forEach(function(company) {
//  console.log(company.name);
//});

//filter().......................................................

//This example uses filter to notate the 21 and older ages into a new array

//for Loop examople. Get 21 and older

//let canDrink = [];

//for (let i = 0; i < ages.length; i++){
//  if(ages[i] >= 21){
//    canDrink.push(ages[i]);
//  }
//}
//console.log(canDrink);

//filter exaple with regular function notation: Get 21 and Older

//const canDrink = ages.filter(function(age){
//  if (age >= 21) { 
//    return true;
//  }
//});
//console.log(canDrink);


//ES6 arrow notation example: Get 21 and older


//const canDrink = ages.filter(age => age >= 21);

//  console.log(canDrink);

//Filter Retail Companies

//For some reason this example returns an empty array
//I Dont really understand.........

//const retailCompanies = companies.filter(function(company) {
 //if (company.catagory === 'Retail') {
 //   return true;
 // }
//});
//console.log(retailCompanies);

//Arrow function examlple....

//For some reason this example returns an empty array
//I Dont really understand.........


//const retailCompanies = companies.filter(company => company.catagory === 'Retail');
//console.log(retailCompanies);

//Get 80s companies

//const eightiesCompanies = companies.filter(company => (company.start <= 1980 && company.start> 1990));
//console.log(eightiesCompanies);

//map().........................................................

//Create array of company names

//const companyNames = companies.map(function(company) {
//  return company.name;
//});
//console.log(companyNames)

//Tests

// returns an array of 1's 1 fopr each object

//const testMap = companies.map(function(company) {
//  return 1;
//});
//console.log(testMap)

// Start to End !!!!!Template String Example!!!!!!

//const testMap = companies.map(function(company) {
//  return `${company.name} [${company.start} - ${company.end}]`;
//});
//console.log(testMap);

//Short Hand Example  Arrow Fuctions

//const testMap = companies.map(company =>
//  `${company.name} [${company.start} - ${company.end}]`
//);
//console.log(testMap);


//Math with Map

//const agesSquared = ages.map(age => Math.sqrt(age));
//const agesTimesTwo= ages.map(age => age * 2);

//First takes the Square root then Multiplies by 2

//const agesSquaredTimesTwo = ages
//  .map(age => Math.sqrt(age))
//  .map(age => age * 2);


//console.log(agesSquaredTimesTwo);

//sort().............................................................

//Sorting companies by start year long hand version

//const sortedCompanies = companies.sort(function(c1, c2) {
//  if (c1.start > c2.start) {
//    return 1;
//  } else {
//   return - 1;
// }
//});
//console.log(sortedCompanies);

//const sortedCompanies = companies.sort((a, b) => (a.start > b.start ?  1 : -1));

//console.log(sortedCompanies);

//Sort ages : a - b puts the numbers in ascending order you need this 
//because sort will on ly look at the first number otherwise 

//const sortAges = ages.sort((a, b) => a - b);
//console.log(sortAges);

//reduce()............................................................

//Sum of the Ages

//forLoop example

//let ageSum = 0;

//for (let i = 0; i < ages.length; i++) {
// ageSum += ages[i];
//};
//console.log(ageSum);

//const ageSum = ages.reduce(function(total, age) {
//  return total + age;
//}, 0);

//console.log(ageSum);

//Using arrow Fuctions

//const ageSum = ages.reduce((total, age) => total + age, 0);

//console.log(ageSum);

//Get total years a company was in business

//const totalYears = companies.reduce(function(total, company) {
//  return total + (company.end - company.start);
//}, 0);
//console.log(totalYears);

//Same with arrow function

//const totalYears = companies. reduce((total, company) => total + (company.end - company.start), 0);
//console.log(totalYears);

//Combining methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

    console.log(combined);