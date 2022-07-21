let total = 0;
function sum(...args) {
  for (const a of args) {
      total += a;
  }
  return total;
}

sum(1, 2, 3);
console.log(total)

