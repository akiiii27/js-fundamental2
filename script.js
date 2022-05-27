'use strict';

// let hasDriversLincense = false;
// const passTest = true;

// if (passTest) hasDriversLincense = true;
// if (hasDriversLincense) console.log(`i can drive 😃`)

// function logger() {
//   console.log('abcxyz');
// }


// //goi function
// logger();


// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);

// console.log(appleJuice)

// function calcAge1(birthyear) {
//   return 2037 - birthyear;
// }

// const age1 = calcAge1(1991)


// const calcAge2 = function (birthyear) {
//   return 2037 - birthyear;
// }
// const age2 = calcAge2(1991)
// console.log(age1, age2)

//arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   // return retirement;

//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearUntilRetirement(1991, 'Hoang'));
// console.log(yearUntilRetirement(1997, 'Hoa'));

// function cutFruit(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3))


// const calcAge = function (birthyear) {
//   return 2037 - birthyear;
// }
// const yearUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`)
//     return retirement;

//   } else {
//     console.log(`${firstName} has already retired 🥳`)
//     return -1;

//   }

// }

// console.log(yearUntilRetirement(1997, 'Hoang'))
// console.log(yearUntilRetirement(1950, 'Hoa'))


// const calcAvarage = (s1, s2, s3) => (s1 + s2 + s3) / 3;


// const dolphinScore = calcAvarage(44, 23, 71);
// const koalaScore = calcAvarage(65, 54, 1000);
// const winner = '';

// function checkWinner(dolphinScore, koalaScore) {


//   const winner = (dolphinScore / koalaScore) >= 2 || (koalaScore / dolphinScore) >= 2 ? `${dolphinScore > koalaScore ? "Dolphins" : "Koalas"} win (${dolphinScore > koalaScore ? dolphinScore : koalaScore} vs ${dolphinScore > koalaScore ? koalaScore : dolphinScore})` : `No one wins`

//   return winner;
// }

// console.log(checkWinner(dolphinScore, koalaScore))


// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// const dolphinScore = calcAverage(23, 34, 27);
// const koalaScore = calcAverage(85, 54, 41);

// function checkWinner(koalaScore, dolphinScore) {
//   if (koalaScore >= dolphinScore * 2) {
//     return `Koalas win (${koalaScore} vs ${dolphinScore})`;
//   }
//   else if (dolphinScore >= koalaScore * 2) {
//     return `Dolphins win (${dolphinScore} vs ${koalaScore})`;
//   }
//   else {
//     return `no one win`;
//   }

// }

// const winner = checkWinner(dolphinScore, koalaScore);
// console.log(winner)


// const friends = ['Hoang', 'Hoa', 'Ho'];

// console.log(friends)



// console.log(friends[0]);

// console.log(friends.length)

// friends[2] = 'Anh';
// console.log(friends)

// const firstName = 'Hoang';
// const hoang = [firstName, 'Nguyen', 2037 - 1997, 'a dev', friends];

// console.log(hoang)

// //bai tap

// const calcAge = function (birthyear) {
//   return 2037 - birthyear
// }

// const years = [1990, 1996, 2002, 2010, 2019]


const friends = ['Hoang', 'Hoa', 'Ho'];

friends.push('Dung');
console.log(friends)
