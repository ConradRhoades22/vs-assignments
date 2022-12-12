
// console.log(largest([6, 13, 250, 3]))
// console.log(largest([3, 5, 2, 8, 1]))
// console.log(largest([-13, 40, 3, 0, 19, 22])) 
// let biggestNum = largestOfFour([[6, 13, 250, 3], [3, 5, 2, 8, 1], [-13, 40, 3, 0, 19, 22]]);
// function largestOfFour(mainArray) {
//     return mainArray.map(function (subArray){
//     return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
//         return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
//     }, 0);
//     });
// }

// console.log(biggestNum)

// test data
// console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!") // => ["$hello!", "test!"]
// console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
// console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// const a = ["$hello!", "%%^%%", "test!"]
// const b = ["#3", "$$$", "C%4!", "Hey!"]
// let arr1 = [...new Set([...a, ...b])]
// // console.log(arr1)
// const array = arr1;
// const substring = '!';

// const match = array.find(element => {
// if (element.includes(substring)) {
//     console.log(element, true);
// }});
// if (match !== undefined) {
// }
// console.log(match)

// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false
