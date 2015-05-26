/*Michael_Rivera
5/26/2015
section 01
Functions Worksheet
console.log ("test");
alert ("test");*/

//circumference

var total = circle();
function circle(){
    var radius =5;// radius is equal to half of the diameter
    var pi = 3.14;// the circumference is equal to the diameter * pi (3.14)
    var diam = radius*2;// I find this by multiplying the radius * 2. I can also add radius + radius
    var circ = diam*pi;// this finds the circumference
    return circ

}
console.log ("The circumference of the circle is "+total); // test states that the circumference is 31.4

// Stung!
var stingsPerLb =8.666666667;
var weight = 24;
beeStings (weight,stingsPerLb);// th first parameter is weight and the second is the how many stings per pound it takes to kill
function beeStings (w,s){// this takes the parameters from when we called the function and applies them to the function

    var totalStings = w*s;
;
    console.log ("It takes "+totalStings+" to kill this animal." );
}// The result of my test was (It takes 208.00000000799997 to kill this animal.)

