// CHALLENGE #1
// Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / (height * height)(mass in kg and height in meters).

// Your task is to write some code to help them:

const johnMass = 133;
const markMass = 166;

const johnHeight = 1.9;
const markHeight = 2.3;

johnBMI = (johnMass / (johnHeight * johnHeight));

markBMI = (markMass / (markHeight * markHeight));

console.log(`John's BMI:${johnBMI} and Mark's BMI is ${markBMI}`);

console.log(johnBMI > markBMI);