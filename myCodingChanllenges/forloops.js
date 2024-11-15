// for (let rep = 1; rep <= 10; rep++) {

//     console.log(`hey there! ${rep}`)
// }

const densumArray = [

    'Dennis',
    'Sumlin',
    2024 - 1988,
    'teacher'
    ['caroline', 'jonas', 'jonathan'],
    true,
    'Cloud Engineer'


];

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

const types = [];

for (let i = 0; i < densum.friends.length; i++) {

    console.log(densum.friends[i]);

    // types[i] = typeof densum.friends[i];
    // types[i] = typeof densum.friends[i];


    types.push(typeof densum.friends[i]);

    types.push(densum.friends[i]);



}

console.log(types);

const years = [1954, 1980, 1990, 2002, 2017, 2019]

const ages = [];

for (let i = 0; i < years.length; i++) {

    ages.push(2024 - years[i]);


}
console.log(ages);

for (let i = 0; i < densumArray.length; i++) {

    // console.log(densum.friends[i]);

    // // types[i] = typeof densum.friends[i];
    // // types[i] = typeof densum.friends[i];
    console.log('------ONLY Strings-------');
    if (typeof densumArray[i] !== 'string') continue;

    // types.push(typeof densum.friends[i]);

    // types.push(densum.friends[i]);

    console.log(densumArray[i], typeof densumArray[i]);




}

for (let i = 0; i < densumArray.length; i++) {

    // console.log(densum.friends[i]);

    // // types[i] = typeof densum.friends[i];
    // // types[i] = typeof densum.friends[i];
    console.log('------Break WITH NUMBER-------');
    if (typeof densumArray[i] === 'number') break;

    // types.push(typeof densum.friends[i]);

    // types.push(densum.friends[i]);

    console.log(densumArray[i], typeof densumArray[i]);


}

for (let i = densumArray.length - 1; i >= 0; i--) {

    console.log(i, densumArray[i]);

}

for (let exercise = 1; exercise < 4; exercise++) {

    console.log(`------ Starting exercise ${exercise}`)
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`lifting weight ${rep}`);
    }

}


