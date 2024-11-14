// Steven wants you to improve his tip calculator, using the same rules as before — tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// Your tasks:

//     Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above(you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most.Test the function using a bill value of 100.

//     And now let's use arrays! So, create an array called bills containing the test data below.

//     Create an array called tips containing the tip value for each bill, calculated from the function you created before.

//     BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.
let tip;

function calcTip(bill) {
    bill >= 50 && bill <= 300 ? tip = .15 : .2;
    return tip;
}

console.log(calcTip(200));

const getTip = (bill) => bill >= 50 && bill <= 300 ? tip = .15 : .2;

// Tone funtion to get total bill

const getTotalBill = (bill) => {

    const tip = bill >= 50 && bill <= 300 ? tip = .15 : .2;

    return ((tip * bill) + bill);
}

console.log(`Total Bill is, $${getTotalBill(44)}`)

console.log(getTip(40));

const bills = [125, 559, 44]
const tips = [getTip(bills[0]), getTip(bills[1]), getTip(bills[2])]
const totalvalue = [((getTip(bills[0]) * bills[0]) + bills[0]), ((getTip(bills[1]) * bills[1]) + bills[1]), ((getTip(bills[2]) * bills[2]) + bills[2])]
const message = `The total value is $${totalvalue[0]}, $${totalvalue[1]}, and $${totalvalue[2]}`;

console.log(bills);
console.log(tips);
console.log(totalvalue);
console.log(message);
console.log(message);


