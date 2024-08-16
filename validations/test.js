// var array = [1,2,3,4,5,6]
// var newarray = []
// array.forEach((value)=>{
// newarray.push(value*2)
// })
// console.log(array)
// console.log(newarray)

// var array = [1,2,3,4,5,6]
// var neww=array.map((value,index)=>{return {value:value*2,index:index,array:array}})
// console.log(neww)

// var neww=array.forEach((value)=>{return value*2}) error
// console.log(array)
// console.log(neww)

// splice 
// let array = [1, 2, 3, 4, 5];
// let removed = array.splice(2, 2); // Starts at index 2, removes 2 elements
// console.log(array); // Output: [1, 2, 5]
// console.log(removed); // Output: [3, 4]
// // adding
// let array = [1, 2, 3];
// array.splice(1, 0, 'a', 'b'); // Starts at index 1, removes 0 elements, adds 'a' and 'b'
// console.log(array); // Output: [1, 'a', 'b', 2, 3]
// replacing
let array = [1,2,3]
array.splice(0,1,"a")
console.log(array)
