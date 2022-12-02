var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

1.
vegetables.pop()


2.
fruits.shift()


3. & 4.
let fruitIndex = fruits.indexOf("orange")
console.log(fruitIndex)
let result = fruits.concat(fruitIndex)


5. & 6.
let vLength = vegetables.length
let vResult = vegetables.concat(vLength)


7. & 8. 
let food = fruits.concat(vegetables)
let litefoods = food.splice(4, 4)
console.log(food)



