// var i = Array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// for(var i = 0; i <= 9; i++){
//     console.log(i)
// }
// const fruit = ["banana", "orange", "apple", "kiwi"]
//     for(var i = 0; i < fruit.length; i++){
//         console.log(fruit[i])
//     }

// let p = []
// for (let i = 0; i <= 9; i++) {
//     p.push(i)
//     console.log(p)
// }
// let k = []
// for(let i = 0; i <= 100; i++){
//     k.push(i)
//     let kfil = k.filter((a, i) => i%2-1);
//     console.log(kfil)
// }

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
var arr = []

var maxVal=6;

var filt = Math.floor( fruit.lenght / maxVal)
for (i=0; i<fruit.length; i=i+2) {
    arr.push(fruit[i]);  
    console.log('delta : ' + filt + ' length = ' + fruit.length) ;
    console.log(arr)
}
