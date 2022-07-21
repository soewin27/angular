let price = 8.99,
    tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice);



function format(literals, ...substitutions) {
  let result = '';

  for (let i = 0; i < substitutions.length; i++) {
      result += literals[i];
      result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9,
  priceEach = 8.99,
  result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;

console.log(result);