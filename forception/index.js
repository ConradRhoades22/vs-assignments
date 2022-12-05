var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception (people, alphabet){
let exAlphabet = alphabet.split('').map(function(x){ return x.toUpperCase(); })
let aJon = people[0].concat(" ", exAlphabet)
let aJacob = people[1].concat(" ", exAlphabet)
let aJingle = people[2].concat(" ", exAlphabet)
let aHeimer = people[3].concat(" ", exAlphabet)
let aSchmidt = people[4].concat(" ", exAlphabet)
let combArr = ("[" + aJon + " " + aJacob + " " + aJingle + " " + aHeimer + " " + aSchmidt + "]")
}
