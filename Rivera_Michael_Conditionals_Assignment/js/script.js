/*
Michael Rivera
Section01
5/20/2015
Conditionals Assignment
 */
//I tried creating a directory within WebStorm with a js file and an html file
// It didn't work so I copied files and pasted them within the assignment folder in Finder
//alert ("This is just a test.");  The test was successful

/*
You are fishing on Gold Metal Waters. You want to bring your wife home fish for dinner but there are certain regulations
to follow. For trout the maximum length you can keep is 22 inches and the minimum is 15 inches. There is a limit of two trout.
 There is also Smallmouth Bass in that stretch of the river. The max and min lengths are 18 and 15 respectively with a take home limit of
 four. You are fishing with inline spinners. Trout will bite if it is cloudy and bass will bite if it is sunny. What
is the weather like and what fish will your wife be having for Dinner? She would prefer trout.
 */


var trout=[0];
var bass=[0];
var minLengthTrout=15;// These are the minimum and maximum values that you can take
var minLengthBass=18;
var bassLength;
var troutLength;

alert ("No capitol letters please.\nIt breaks my code lol.");// I couldn't get my if statement to check for "Yes"||"YES"
var sunny=prompt ("Is it sunny out?");// Bass are more likely to bite than trout when sunny
console.log (sunny);
if(sunny==="yes"){
    bass[0]++;// Add a bass to your bag
    console.log (bass[0] + " bass");
    alert("You caught a bass!");

}else {
    trout[0]++;
    console.log (trout[0] + " trout");
    alert ("You caught a trout!");
    console.log ("You caught a trout!");
}

(bass[0] > 0) ? bassLength=prompt ("How long is it in inches?") && console.log (bassLength + " inches") : troutLength=prompt ("How long is it in inches?") && console.log(troutLength + " inches")

