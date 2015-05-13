// Michael Rivera Expressions Worksheet  5/12/15
// How old is Sparky in Dog Years based on his actual age?

var sparkysAge =4;  // Sparkys age in human years
var dogYears =7;  // Sparkys age in dog years
var result = sparkysAge * 7 ; // The result is Sparkys age in human years times dog years

console.log ("Sparky is "+ sparkysAge + " human years old which is " + result + " in dog years.");
// To get the console to print the desired result I had to add strings around the variables in the console log.



// Slice of Pie part 1

// How many slices can each person have?

var slices = 8; // Number of slices per pizza.

var people = 19; // Number of people at the party.

var pizzas = 7; // number of pizzas ordered.

var numSlices = slices * pizzas; // Total number of slices between all pizzas.

var slicesPer = numSlices / people; // Amount of slices each person can have.

console.log ("Each person ate " + slicesPer + " slices at the party.");
// This prints out "Each person ate x slices at the party."

// Slices of Pie part 2

var slices = 8; // Number of slices per pizza.

var people = 19; // Number of people at the party.

var pizzas = 7; // number of pizzas ordered.

var numSlices = slices * pizzas; // Total number of slices between all pizzas.

var slicesPer = numSlices / people; // Amount of slices each person can have.

var sparkysSlices = slices % people; // Slices Sparky gets to eat. % is the remainder after everyone eats.

console.log ("Sparky got " + sparkysSlices + " slices of pizza"); // Print in console

// Average Shopping Bill

var spent = [32,42,24,51,35]; // an array showing how much was spent each week
var totalSpent = spent[0]+spent[1]+spent[2]+spent[4]; // This adds what was spent each week for a total
var weeks = 5; // the number of weeks that groceries have been bought.
var avgSpent = totalSpent / weeks;  // the average spent per week on groceries over 5 weeks
console.log("You spent a total of $"+totalSpent + " on groceries over 5 weeks. This is an average of $ "+ avgSpent+ " per week.");
// This is what prints to the console

//Discounts
// items are tacos
var orgPrice = 1.50; // tacos originally cost $1.50
var tax = .074;// the local tax bracket is .074%
var discount = 20;// 20% discount
var item = "taco";// one taco
var dscAmnt = orgPrice * (discount/100);// what 20% of $1.50 is
var dscPrice = orgPrice - dscAmnt;// original price minus the discount without tax
var dscPricewithTax = dscPrice*tax+dscPrice;// discount price with tax
console.log ("Your "+ item+" was originally $"+orgPrice +", but after a "+discount+"%, it is now $"+dscPrice+" without tax, and $"+dscPricewithTax+" with tax.");