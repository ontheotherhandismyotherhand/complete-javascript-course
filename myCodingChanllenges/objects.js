const densum = {
    firstName: 'Dennis',
    lastName: 'Sumlin',
    birthYear: 1988,
    job: 'Cloud Engineer',
    friends: ['Alice', 'Bob', 'John', 'Jane'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // calcAge: function () {
    //     //console.log(this);
    //     return 2024 - this.birthYear;
    // }


    calcAge: function () {
        //console.log(this);
        return 2024 - this.birthYear;
    }

};
console.log(densum);
console.log(densum.lastName);
console.log(densum['birthYear']);

const nameKey = 'Name';

console.log(densum['first' + nameKey]);
console.log(densum['last' + nameKey]);

// const what = prompt('What?')

// console.log(densum[what]);

console.log(`${densum.firstName} has ${densum.friends.length} friends and his best friend is ${densum.friends[1]}.`)

console.log(densum.calcAge());
// console.log(densum['calcAge'](densum.birthYear));
console.log(densum['calcAge']());


console.log(densum.calcAge());
