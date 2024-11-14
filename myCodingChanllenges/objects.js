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
        this.age = 2024 - this.birthYear;

        return this.age;
    },

    getSummary: function () {

        // const dl = this.hasDriversLicense ? 'does' : 'does not';

        this.message = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he ${this.hasDriversLicense ? 'does' : 'does not'} have driver's license.`

        return this.message;
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

console.log(densum.age);
//console.log(densum['calcAge'](densum.birthYear));
console.log(densum['calcAge']());


console.log(densum.age);

console.log(densum.getSummary());
console.log(densum.message);


// const getDL = (this.hasDriversLicense) => hasDriversLicense === true ? getDL = `does  have a driver's license` : getDL = `does not have a driver's license`;