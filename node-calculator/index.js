var readline =require("readline-sync")

const firstNumber = readline.question("What is the first number you would like to calculate? ")

console.log(firstNumber)

const secondNumber = readline.question("What is the second number you would like to calculate? ")
console.log("First number:" + firstNumber + "  " + "Second number:" + secondNumber)

const mathFunction = readline.question("What function would you like to use? Add, Subtract, Multiply, or Divide? ")
console.log(mathFunction)
if (mathFunction == ("Add", "Addition", "add", "+")) {
        let sum = Number(firstNumber) + Number(secondNumber);
        console.log("Your total is: " + sum)
} else if (mathFunction == ("subtract")) {
    let sum = Number(firstNumber) - Number(secondNumber);
    console.log("Your total is: " + sum)
} else if (mathFunction == ("multiply")) {
    let sum = Number(firstNumber) * Number(secondNumber);
    console.log("Your total is: " + sum)
} else if (mathFunction == ("divide")) {
    let sum = Number(firstNumber) / Number(secondNumber);
    console.log("Your total is: " + sum)
}

console.log (mathFunction)
