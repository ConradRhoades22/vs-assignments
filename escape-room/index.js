const readline = require("readline-sync");
let escaped = false
console.log("The room you are in is locked. Get out.")
let obtainedKey = false
const actionsArr = ['put hand in the hole', 'open the door', 'find the key']

while (!escaped) {
    let actions = readline.keyInSelect(actionsArr, "what do you want to do")
    if (actions === 0) {
        console.log('you have perished')
        escaped = false
    } else if (actions === 1 && !obtainedKey) {
        console.log("the door is locked. Find the key.")
    } else if (actions === 1 && obtainedKey) {
        console.log("you have escaped. For now.")
        escaped = true
    } else if (actions === 2 && !obtainedKey) {
        console.log("you have found the key. now get out.")
        obtainedKey = true
    } else if (actions === 2 && obtainedKey) {
        console.log('there is only one keyy and you have it, now Escape')
    } else if (actionArr === -1) {
        
    }
}