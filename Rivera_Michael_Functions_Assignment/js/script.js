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

var first = 9;
var second = 4;
var third = 7;



 var fstDigit = function(){
     prompt("What is the first number in\n the combination? ");

 };
var scdDigit = function(){
    prompt ("What is the second digit\nin the combination?")
};
var thdDigit = function(){
    prompt ("What is the third digit\nin the combination?")
};

function numCheck(first){
    while(first===""||Number(first)>9){
        if(first===""){
            prompt ("Please do not leave blank.")
        }else if(Number(first)>9){
            prompt("Please enter a number between 0 and 9.")

        }else{
            prompt ("Please enter a single digit number.")
        }
    }


}
numCheck (fstDigit);





