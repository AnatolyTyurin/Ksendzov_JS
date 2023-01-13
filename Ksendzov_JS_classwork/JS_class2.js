// let a = 10;
// let b = 15;

// let c = a > b;
// console.log("Result = ", c);


// let a = 10;
// let b = 15;

// let c1 = a > b;
// let c2 = a < b;
// let c3 = a == b;
// let c4 = a != b;

// if (c1){
//     console.log("Result C1=", c1)
// } else if(c2){
//     console.log("Result C2=", c2)
// } else if(c3){
//     console.log("Result C3=", c3)
// } else if(c4){
//     console.log("Result C4=", c4)
// } else{
//     console.log("Other result")
// }

// if (c2){
//     console.log("Result C2=", c2)
//     if (c4){
//         console.log("Result C2 C4 =", c4)
//     }
// }

// let count = 0
// while(c2){
//     // count ++
// count = count +1
//     console.log("Count ==", count)
// if (count == 10){
//     break
// } else if (count == 5){
//     continue
// } else if(count == 8){
//     let count2 = 0
//     while(true){
//         count2++
//         console.log("Count2 ==", count2)

//         if (count2 == 4)
//         {
//             break
//         }
//     }
// }
// console.log("Count ==--==", count)
// }

// count = 10
// for (let i = 0; i < count; i++){

//     count++
//     console.log("I == ", i)

// }

let codes = [100, 200, 300, 400, 500]
console.log("Array == ", codes)

for (let i in codes){
    console.log("I == ", codes[i])

    if (codes[i] == 300){
        codes[i] = 700
    }
} 
console.log("New_Array ==", codes)
