// var officeSupplies = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let count = 0;
// for(var i = 0; i < officeSupplies.length; i++){
//     if (officeSupplies[i] === "computer") {
//         count++
//     }
// }
// console.log("computer appears in the array " + count + " times")


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
]

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    }
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    }
}