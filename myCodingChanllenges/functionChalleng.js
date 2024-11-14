// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).

// A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!


// Your tasks:

//     Create an arrow function calcAverage to calculate the average of 3 scores.This function should have three parameters and return a single number(the average score).

//     Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them(you will need to call this function, and pass scores as arguments).

//     Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).

//     Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

//     Ignore draws this time.Instead, log No team wins... to the console if there is no winner

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {

    const averageScore = (scoreOne + scoreTwo + scoreThree) / 3;

    return averageScore;
}

const scoreDolphins = calcAverage(33, 33, 33);
const scoreKoalas = calcAverage(44, 33, 22);
// console.log(scoreDolphins);
// console.log(scoreKoalas);

function checkWinner(resultsOne, resultsTwo) {
    // const playerOne = prompt(`Enter Player One's handle please: `);
    // const playerTwo = prompt(`Enter Player Two's handle please: `);
    const playerOne = `Dolphins`;
    const playerTwo = 'Koalas';

    let winner;
    winner = resultsOne > resultsTwo ? winner = playerOne : resultsTwo > resultsOne ? winner = playerTwo : winner = `tie`;
    //console.log(winner);
    return winner;
}

function getMessage(winner, playerOne, playerTwo) {
    let message;

    if (winner !== 'tie') {
        message = `The winner is The ${checkWinner(scoreDolphins, scoreKoalas)} with a score of ${scoreKoalas} to ${scoreDolphins}!`;
    } else {
        message = `It was a tie between the ${playerOne} and ${playerTwo} with a score of ${scoreKoalas} to ${scoreDolphins}!`;
    }
    return message;
}

console.log(getMessage(checkWinner(scoreDolphins, scoreKoalas), 'Dolphins', 'Koalas'));

// console.log(`The winner is The ${checkWinner(scoreDolphins, scoreKoalas)} with a score of ${scoreKoalas} to ${scoreDolphins}!`);



// console.log(calcAverage(55, 3, 3))