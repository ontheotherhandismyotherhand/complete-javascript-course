
const calcAge = function (birthYear) {

    return 2024 - birthYear;
}

const years = [2002, 2017, 2019, 1990, 1954];

console.log(years);

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);

//add to end wiht push

const newLength = ages.push(calcAge(years[years.length - 2]));

console.log(ages);

console.log(newLength);

// add to beginning with unshift

ages.unshift(calcAge(1980));


console.log(ages);

// remove with pop - returns removed element

const popped = ages.pop();
console.log(` Just removed ${popped}`)

console.log(ages);

// remove first elemet

const poppedFirstElement = ages.shift();

console.log(` Just removed first element ${poppedFirstElement}`)


console.log(ages);

if (ages.includes(7)) {
    console.log(`hey there its ${ages.includes(7)}`);


};



