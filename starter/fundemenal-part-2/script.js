"use strict"; // ✅ Strict mode aktif: Hataları erken fark etmemizi sağlar

/*
// Değişken tanımlamaları
let hasDriversLicence = false; // Başlangıçta ehliyetim yok
const passTest = true; // Sınavı geçtiğimi varsayıyoruz

// Eğer sınavı geçtiysem, ehliyeti alabilirim
if (passTest) hasDriversLicence = true;

// Eğer artık ehliyetim varsa, araba sürebilirim
if (hasDriversLicence) console.log("I can drive :D"); // ✅ Konsola bu yazı çıkar

// ⛔ Strict mode sayesinde aşağıdaki değişken adları hata verir:
// Çünkü bunlar gelecekteki JavaScript anahtar kelimeleridir:

// const interface = 'Audio'; // ❌ SyntaxError: Unexpected strict mode reserved word
// const private = 534;       // ❌ SyntaxError: Unexpected strict mode reserved word
*/

/*
// 🔹 Simple function that logs a message
function logger() {
  console.log("My name is Okyanus");
}

// 🔸 Calling / Running / Invoking the logger function
logger();
logger();
logger();

// 🔹 Function to process fruits into juice
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// 🔸 Using the function and logging the result
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Output: Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // Output: Juice with 2 apples and 4 oranges.

// 🔹 Direct logging without storing the return value
console.log(fruitProcessor(3, 3));

// 🔹 Example with variables as inputs
let userApples = 1;
let userOranges = 5;

const userJuice = fruitProcessor(userApples, userOranges);
console.log("User Juice:", userJuice);
*/

/*
// --------------------------------------
// Function Declarations vs Expressions vs Arrow Functions
// --------------------------------------

// 🔹 Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// 🔸 Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

// 🔸 Logging both results
console.log(age1, age2);

*/

/*
// 🔹 Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// 🔹 Arrow Function with multiple lines
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Okyanus"));
console.log(yearsUntilRetirement(1991, "Jonas"));
*/
