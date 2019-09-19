function calculateTip() {
//Get the values the user inputs(bill amount, service quality, number of pp; splitting bill)
var billAmount = document.getElementById("billAmt").value;
console.log(billAmount);

var serviceQuality = document.getElementById("serviceQual").value;
console.log(serviceQuality);

var numOfPeople = document.getElementById("peopleAmt").value;
console.log(numOfPeople);

//Validate their input (to make sure what they inpout is usable)
//Bill amount - words, negative values, empty strings

var amount = Number(billAmount); //Try to turn the value of billAmount into a number
if (isNaN(amount) || amount <=0) {
    //If amount can't be converted into a number or is less than or equal to 0, show and error
    alert("Invalid input for bill amount.");
    return; //return to exit the function if the bill amount is invalid
}

//If we make it here, the amount is good

//Service selector - Not choosing an option

var service = Number(serviceQuality); //Convert serviceQuality into a number

//Service selector - Not choose an option

if (service === 0) {
    alert("You must pick an option for service quality.");
    return;
}

//Number of people - words, negative value, empty strings,  decimal values

var people = Number(numOfPeople);

if (isNaN(people) || people < 1) {
    alert("Enter a valid number of people splittimg the bill.")
    return;
}

//Calculate the amount of tio each person needs to pay

var tipPerPerson = (billAmount * service) / people;

tipPerPerson =tipPerPerson.toFixed(2); //round the tip per person to 2 decimal points

//Display that info to the user

document.getElementById("tipAmount").style.display = "block"; //Display the hidden tipAmount when we're ready to show the calculated tip
document.getElementById("tip").innerText = tipPerPerson;

}
//Function that is executed when the button is clicked
//We are pasasing an anonymous function(function without a name to the button's onclick handler when it's clicked)
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}