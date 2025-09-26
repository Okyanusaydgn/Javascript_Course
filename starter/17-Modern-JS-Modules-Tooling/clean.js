const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendinglimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendinglimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  value <= getLimit(user) && budget.push({ value: -value, description, user });
  // const nextBudget = (value <= limit) ? [...budget, {value:-value, description,user}]: budget;
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
  }
};
checkExpenses();

// const check2 = () => {
//   for (const entry of budget) {
//     const { user, value } = entry;
//     const lim = spendinglimits?.[user] ?? 0;
//     value < -lim && (entry.flag = 'limit');
//   }
// };

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

// const bigExpenses2 = limit => {
//   const out = budget
//     .filter(el => el.value <= -limit)
//     .map(el => el.description.slice(-2))
//     .join(' / ');
//   console.log(out);
// };

console.log(budget);
logBigExpenses(1);
