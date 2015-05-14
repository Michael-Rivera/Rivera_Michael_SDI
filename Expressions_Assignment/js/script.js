/* Michael Rivera
5/13/15
 section 01
Expressions Assignment
 need to use more than 1 expression --, ++, +=, -=, *=, /=
 needs to be relevant to me
 needs concantative scripts
 needs user input and output to the user

 What is your average lap time?
*/
alert ("Hi, I would like to know \nyour average lap time.");
alert ("Please follow the prompts and only provide \nminutes or seconds when asked.");
var lapMin = [0,0,0];// I placed zeros in the array as not to affect the outcome but still make it function
var lapSec = [0,0,0];
var ttlMin = (lapMin[3]+lapMin[4]+lapMin[5]);//boxes 0,1,and 2 are zeros. 3,4,and 5 are user generated.
var ttlSec = (lapSec [3]+lapSec[4]+lapSec[5]);// Identicle to previous array
var avgMin = Number (ttlMin/3); // I think this is my problem but the console only tells me NaN. I can't explain.
var avgSec = Number (ttlSec/3);// Same problem as before
lapMin [3] = Number (prompt  ("How many minutes did it take to complete your first lap?"));
lapSec [3] = Number (prompt  ("and how many seconds?"));
alert                 ("Thank you");
lapMin [4] = Number (prompt  ("Now how many minutes did it take you to \ncomplete your second lap?"));
lapSec [4] = Number (prompt  ("and how many seconds"));
lapMin [5] = Number (prompt  ("and finally. How many minutes did it take you to finish the third lap?"));
lapSec [5] = Number (prompt  ("and how many seconds?"));
// All prompts work as intended
alert           ("Your average lap time is"+ avgMin + "and" + avgSec+ " seconds.");
// the alert works except the two variables within are not numbers and I don't know why.
// In my testing I used 9 min 9 sec, 8 min 8 sec, and 7 min 7sec. The average is 8 and easy to troubleshoot.
// Ran out of time. I haven't slept but 3 hours in 3 days and my brain is fried.
console.log (ttlMin);
/*console.log (lapSec);
console.log (ttlMin);
console.log (avgMin);
console.log (avgSec);*/