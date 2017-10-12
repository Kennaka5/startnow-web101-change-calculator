// Write your JavaScript here
//cd ~/oca/startnow-web101-change-calculator


function getChange(given, total) {
    return given - total;
    }

function calculateButton() { 

//Value of amount recived, tuened into a variable
    var given = document.getElementById('amount-received').value;
//Value of amouunt due into a varible
    var total = document.getElementById('amount-due').value;
//Value of change due minus given and total
     var dollarsDue = getChange(given, total).toFixed(2)
//printed out dollar amount using 

  
var change = dollarsDue *= 100;
var dollars = change / 100;
var dollarsShown = Math.floor(dollars)
document.getElementById('dollars-output').innerHTML = dollarsShown;

const remainingChange = (dollars % dollarsShown).toFixed(2); //remaining Change
var quarters = Math.floor(remainingChange / .25)
var tquarters = quarters * .25
document.getElementById('quarters-output').innerHTML =  Math.floor(quarters); 

var rdimes =  (remainingChange - tquarters).toFixed(2); //changeleff
var dimes = Math.floor(rdimes / .10)
var tdimes = dimes * .10
document.getElementById('dimes-output').innerHTML = dimes;

var rnickels = (rdimes - tdimes).toFixed(2);
var nickels = Math.floor(rnickels / .05);
var tnickels = nickels * .05;
document.getElementById('nickels-output').innerHTML = nickels;
   
var rpennies = (rnickels - tnickels).toFixed(2);
var pennies = Math.floor(rpennies / .01);
document.getElementById('pennies-output').innerHTML = pennies;   
}     


document.getElementById('calculate-change').onclick=calculateButton;
    


