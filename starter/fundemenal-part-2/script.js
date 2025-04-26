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

/*
// 🔧 Helper function to cut fruit into 4 pieces
function cutPieces(fruit) {
  return fruit * 4;
}

// 🍹 Main function to process fruits into juice
function fruitProcessor(apples, oranges) {
  // Cutting each fruit into pieces
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  // Creating the juice string with the pieces
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

// 🧪 Testing the function by calling it
console.log(fruitProcessor(2, 3)); 
// Output: Juice with 8 pieces of apple and 12 pieces of orange.
*/

/*
// Yaşa göre yıl hesaplayan fonksiyon
const calcAge = function (birthYear) {
  return 2037 - birthYear; // 2037'den doğum yılını çıkararak yaşı buluyoruz
};

// Emekliliğe kaç yıl kaldığını hesaplayan fonksiyon
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear); // Yaşı hesaplıyoruz
  const retirement = 65 - age; // Emekliliğe kalan yılı buluyoruz

  // Eğer emekliliğe yıl kaldıysa
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`); // Bilgilendirme mesajı
    return retirement; // Kalan yıl geri döndürülüyor
  } else {
    // Eğer kişi zaten emekli olmuşsa
    console.log(`${firstName} has already retired.`); // Bilgilendirme mesajı
    return -1; // -1 ile emekli olduğunu belirtiyoruz
  }
};

// Fonksiyonu çağırıyoruz ve sonucu konsola yazdırıyoruz
console.log(yearsUntilRetirement(1991, "Okyanus")); // 2037 - 1991 = 46 yaşında, 19 yıl kaldı
console.log(yearsUntilRetirement(1970, "Mike"));    // 2037 - 1970 = 67 yaşında, emekli olmuş
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`🏆 Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`🏆 Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("⚖️ No team win...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Okyanus";
const okyanus = [firstName, "Aydogan", 2037 - 1999, "developer", friends];
console.log(okyanus);
console.log(okyanus.length);

// Exercise
function calcAge(birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
