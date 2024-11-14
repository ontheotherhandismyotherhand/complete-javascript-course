// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI.The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

//     Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

let message;

const johnMass = 133;
const markMass = 166;

const johnHeight = 1.9;
const markHeight = 2.3;

johnBMI = (johnMass / (johnHeight * johnHeight));

markBMI = (markMass / (markHeight * 2));

console.log(johnBMI > markBMI);

if (johnBMI > markBMI) {

    message = `John's BMI is greater than Marks!`

} else if (markBMI > johnBMI) {
    message = `Mark's BMI is greater than Johns!`

} else {
    message = `Both BMI's are equal!`
}

console.log(message);

