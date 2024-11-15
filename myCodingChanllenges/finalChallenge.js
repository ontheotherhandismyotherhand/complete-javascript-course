// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals(tips and totals)

// Use the calcTip function we wrote before(included in the starter code) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!



// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



// BONUS:

// Write a function calcAverage which takes an array called arr as an argument.This function calculates the average of all numbers in the given array.This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array.To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop.In each iteration, add the current value to the sum variable.This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements).

// Call the function with the totals array.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totalBill = [];


let tip;

function calcTip(bill) {
    bill >= 50 && bill <= 300 ? tip = .15 : tip = .2;
    return tip;
}

// console.log(calcTip(200));


const getTip = (bill) => bill >= 50 && bill <= 300 ? tip = .15 : tip = .2;

// Tone funtion to get total bill

const getTotalBill = (bill) => {

    const tip = bill >= 50 && bill <= 300 ? tip = .15 : .2;

    return ((tip * bill) + bill);
}

let sum = 0;
let avg;

for (i = 0; i < bills.length; i++) {

    // console.log(bills[i], calcTip(bills[i]));

    // tips.push[((calcTip(bills[i] * bills[i]) + bills[i]))]

    // console.log(bills[i], calcTip(bills[i]), (calcTip(bills[i]) * bills[i]) + bills[i]);

    //(calcTip(bills[i]) * bills[i]) + bills[i];
    tips.push((calcTip(bills[i]) * bills[i]));
    totalBill.push((calcTip(bills[i]) * bills[i]) + bills[i]);
    console.log(`The bill is $${bills[i]}, and tip is $${tips[i]}, with a total of $${totalBill[i]}`);

    sum += totalBill[i];
    avg = sum / totalBill.length


    console.log(`The total is $${Math.trunc(sum)} and the average is ${Math.trunc(avg)}`);
}

console.log(totalBill)

// const numbers = [1, 2, 3, 4, 5];

// for (i = 0; i < numbers.length; i++) {
// let sum = 0;

//     sum += numbers[i];

//     console.log(sum);

// }


