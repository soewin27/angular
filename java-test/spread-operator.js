//SPREAD OPERATOR IS USED BY THREE DOTS(...)



const a = [1, 2, 3, 4, 5];
const c = [6, 7, 8, 9, 10];
const b = [c, ...a]
const d = [6, 7, 8, 9, 10,...a];
console.log(c)
console.log(b)
console.log(d)

//push string
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];
rivers.push(moreRivers)
console.log(rivers)

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars);

//array construting
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

//array copy

arraycopied = [...a]
console.log(arraycopied)

//spread string
let string = ['A', 'BC', 'D'];
let spread_string = ['A', ...'BC', 'D'];
console.log(string)
console.log(spread_string)