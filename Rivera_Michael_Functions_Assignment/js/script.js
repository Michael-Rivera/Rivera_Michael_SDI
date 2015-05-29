/*
Michael Rivera
5/26/2015
section 01
Functions Assignment*/

//alert ("test");  I tested my html with an alert and it worked

/*• Final	output	should	use	string	concatenation.
 • Comment	every	line	of	code	(describe	what	each	line	is	doing	in	English).	Do	NOT	just
 label	sections	of	your	code.
 • Your	code	must	contain	at	least	2	functions	– 1	Normal	and	1	Anonymous
 • Each	function	must	use	arguments	and	parameters.
 • 1	of	your	functions must	contain	3	parameters
 • A	value	must	be	returned	for	each	function.
 • You	must	not	use	“main	code”	variable	inside	of	a	function,	you	must	pass	them	in	as
 arguments.*/

alert("There is a 3 digit lock. Can\nyou figure out the combination?");

var first = 9;// The first digit in the set combination.
var second = 4;//The second digit in the set combination
var third = 7;//The third digit in the set combination
var one = firstDigit();// This is the function call for the first function.
var two = secDigit();// The second function call.
var three = thrDigit();// the third function call.
var a;// intended to catch the variables from the final  function but had trouble defining them.
var b;// same as above
var c;// same as above

function firstDigit(){// this function is supposed to take the first number in the combination from the user and return it to var one
    var one = prompt("What is the first number\nin the combination? ");// the string the user sees
    while (one===""||isNaN(one)||Number(one)>9){// if any are true run the if statement.
        if (one===""){// If the user leaves the prompt blank this will run. Tested and worked
            prompt ("Please do not leave blank.")
        }else if(isNaN(one)){// if the user enter something other than a number this will run. I tested with random letters and punctuation
            prompt("Please only enter numbers.")
        }else{// if the user enters a double digit number such as 12 as I tested. This will run.
            prompt("Only enter single digit numbers.")
        }
    }
    console.log(one);// this prints what the user entered to the console
    return one;// this returns the users input to the main code
}
function secDigit(){// this function is identicle to the previous. I probably could have called the same functiion multiple times but I wasn't sure if it would change the value of the same variable repeatedly.
    var two = prompt("What is the second number\nin the combination? ");
    while (two===""||isNaN(two)||Number(two)>9){
        if (two===""){
            prompt ("Please do not leave blank.")
        }else if(isNaN(two)){
            prompt("Please only enter numbers.")
        }else{
            prompt("Only enter single digit numbers.")
        }
    }
    console.log(two);// this prints the second number
    return two;// this returns the result to the main code
}

function thrDigit(){// another repeat of the same function
    var three = prompt("What is the third number\nin the combination? ");
    while (three===""||isNaN(three)||Number(three)>9){
        if (three===""){
            prompt ("Please do not leave blank.")
        }else if(isNaN(three)){
            prompt("Please only enter numbers.")
        }else{
            prompt("Only enter single digit numbers.")
        }
    }
    console.log(three);
    return three;
}

var result = function(a,b,c){// this is supposed to be my annonymous function.
    while (a&&b&&c===9&&4&&7){// I'm trying to compare the users three inputs exactly to the combination 947.
        if (a&&b&&c==9&&4&&7){// If the users input matches the combination then it should alert
            alert ("You unlocked the lock");// the alert should only pop up if the users inputs match the combo
        }else{// if the inputs do not match I want it to take you back to the first function.
            firstDigit();
        }
    }

};


/*
    I had many problems with this assignment. The biggest was me not being able to decide on what I wanted to do. I want to
make things that are difficult but different than what I expect the other students to be doing. My initial idea was to
make a game where you have to pick between three cups to find a ball but I thought it was to complex for my time frame.
I chose to make a combination lock because I new I needed a function with 3 perameters. I was mostly put off by knowing
what I needed to use but not knowing what those peices would fit.
    I had trouble immediately when I found that my initial attempt at determining if the first variable was a number. I
    crashed my browser and had trouble resolving it. I looked over your code several times from the week 4 GoTo Training
    and even though it matched I still kept crashing. After I stopped the crash session I made some progress. I was able to determine
    whether or not a user input was a number, blank, or larger than 9. I worked great unless I refreshed and tried again.
    The problem is still there actually. I can't fix it. For some reason it locks the initial input and will continue
    to tell you that you are making the same error regardless of what you enter. It moves on fine if the first input is a number
    lower than 10. The combination is 9,4,7 if you want to be able to make it to the end but alert doesn't trigger. I am assuming that
    I am not storing the variables properly. Either that or I am not using my arguements properly.
    */
