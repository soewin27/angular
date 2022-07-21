//FOR OF LOOP


var scores = [80, 90, 70];

for (var score of scores) {
    score = score + 5;
    console.log(score);
}


let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

const ratings = [
  {user: 'John',score: 3},
  {user: 'Jane',score: 4},
  {user: 'David',score: 5},
  {user: 'Peter',score: 2},
];
let totalscore = 0;
for (const { score } of ratings) {
  totalscore += score;
}

console.log(totalscore)