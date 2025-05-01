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

/*
// 3 farklı kişiyi ayrı değişkenlerde tanımlıyoruz
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Aynı kişileri bir dizi (array) içerisinde topluyoruz
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ["Michael", "Steven", "Peter"]

// Farklı bir yöntemle (new Array) yıl bilgilerini saklıyoruz
const y = new Array(1991, 1984, 2008, 2020);

// Diziden elemanlara erişim
console.log(friends[0]); // İlk eleman: "Michael"
console.log(friends[2]); // Üçüncü eleman: "Peter"

// Dizi uzunluğunu öğrenme
console.log(friends.length); // 3
// Dizideki son elemana erişim
console.log(friends[friends.length - 1]); // "Peter"

// Dizinin bir elemanını değiştirme
friends[2] = "Jay"; 
console.log(friends); // ["Michael", "Steven", "Jay"]

// Tamamen yeni bir dizi atamak istersek hata alırız (const olduğundan)
// friends = ["Bob", "Alice"]; // ❌

// Yeni bir dizi oluşturalım: String, number ve başka bir dizi içeren bir yapı
const firstName = "Okyanus";
const okyanus = [firstName, "Aydogan", 2037 - 1999, "developer", friends];
console.log(okyanus); 
// ["Okyanus", "Aydogan", 38, "developer", ["Michael", "Steven", "Jay"]]

// Yeni dizinin uzunluğunu öğrenelim
console.log(okyanus.length); // 5

// Exercise bölümü: Fonksiyonla yaş hesaplama

// Bir doğum yılı verildiğinde yaş hesaplayan fonksiyon
function calcAge(birthYear) {
  return 2037 - birthYear;
}

// Birkaç doğum yılını bir dizi içinde saklıyoruz
const years = [1990, 1967, 2002, 2010, 2018];

// Tek tek dizideki bazı elemanların yaşını hesaplayalım
const age1 = calcAge(years[0]); // 2037 - 1990
const age2 = calcAge(years[1]); // 2037 - 1967
const age3 = calcAge(years[years.length - 1]); // 2037 - 2018
console.log(age1, age2, age3); // 47, 70, 19

// Aynı işlemi bir dizi içerisinde daha verimli şekilde yapalım
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // [47, 70, 19]

*/

/*
// Arkadaş listesi oluşturuluyor
const friends = ["Michael", "Steven", "Peter"];

// Eleman ekleme
const newLength = friends.push("Jay"); // Listenin sonuna 'Jay' ekleniyor
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4 (listenin yeni uzunluğu)

friends.unshift("John"); // Listenin başına 'John' ekleniyor
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// Eleman silme
friends.pop(); // Son eleman ('Jay') kaldırılıyor
const popped = friends.pop(); // Son eleman ('Peter') kaldırılıyor ve popped değişkenine atanıyor
console.log(popped); // 'Peter'
console.log(friends); // ['John', 'Michael', 'Steven']

friends.shift(); // İlk eleman ('John') kaldırılıyor
console.log(friends); // ['Michael', 'Steven']

// Eleman arama
console.log(friends.indexOf("Steven")); // 1 (Steven'ın index'i)
console.log(friends.indexOf("Bob")); // -1 (Bob listede yok)

// Listenin içinde eleman olup olmadığını kontrol etme
friends.push(23); // Listeye 23 sayısı ekleniyor
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes(23)); // true

// includes ile if kullanımı
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven"); // Bu satır çalışacak
}
*/

/*
// Bahşiş hesaplama fonksiyonu
const calcTip = function (bill) {
  // Fatura 50 ile 300 arasında ise %15, değilse %20 bahşiş hesaplanıyor
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Alternatif fonksiyon (kısa yazım arrow function ile)
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Fatura değerleri listesi
const bills = [125, 555, 44];

// Her fatura için bahşiş değerleri
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Her fatura + bahşiş toplamı
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// Sonuçları ekrana bastırma
console.log(bills, tips, totals);
*/

/*
const okyanusArray = [
  "Okyanus",
  "Aydogan",
  "2037-1999",
  "developer",
  ["Michael", "Peter", "Seven"],
];

const okyanus = {
  firstName: "Okyanus",
  lastName: "Aydogan",
  age: 2037 - 1991,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};
*/
/*
// Bir nesne (object) oluşturuyoruz
const okyanus = {
  firstName: "Okyanus",
  lastName: "Aydogan",
  age: 2037 - 1991,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
};

// Nesneyi ekrana yazdırıyoruz
console.log(okyanus);

// Dot notation ile lastName'e erişiyoruz
console.log(okyanus.lastName);

// Bracket notation ile lastName'e erişiyoruz
console.log(okyanus["lastName"]);

// Dinamik bir şekilde property ismini birleştirerek erişiyoruz
const nameKey = "Name";
console.log(okyanus["first" + nameKey]); // "firstName" oluyor
console.log(okyanus["last" + nameKey]); // "lastName" oluyor

// Kullanıcıdan bir bilgi almak için prompt kullanıyoruz
const interestedIn = prompt(
  "What do you want to know about Okyanus? Choose between firstName, lastName, age, job, and friends"
);

// Kullanıcının istediği bilgi varsa gösteriyoruz, yoksa uyarıyoruz
if (okyanus[interestedIn]) {
  console.log(okyanus[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends."
  );
}

// Nesneye yeni özellikler ekliyoruz
okyanus.location = "Turkey"; // Dot notation ile
okyanus["linkedn"] = "okyanusaydgnlink.co"; // Bracket notation ile
console.log(okyanus);

// Challenge:
// "Okyanus has 3 friends, and his best friend is called Michael"

// Dot Notation Kullanımı
console.log(
  `${okyanus.firstName} has ${okyanus.friends.length} friends, and his best friend is called ${okyanus.friends[0]}`
);

// Bracket Notation ile Aynı Örnek:
console.log(
  `${okyanus["firstName"]} has ${okyanus["friends"].length} friends, and his best friend is called ${okyanus["friends"][0]}`
);
*/

/*
// Okyanus adında bir nesne (object) oluşturuyoruz
const okyanus = {
  firstName: "Okyanus",
  lastName: "Aydogan",
  birthYear: 1991,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // 1. Versiyon - calcAge fonksiyonu (Parametreli kullanım)
  calcAgeV1: function (birthYear) {
    return 2037 - birthYear;
  },

  // 2. Versiyon - calcAge fonksiyonu (this kullanarak doğrudan obje içinden alma)
  calcAgeV2: function () {
    // console.log(this); // this burada 'okyanus' nesnesini temsil eder
    return 2037 - this.birthYear;
  },

  // 3. Versiyon - calcAge fonksiyonu (yaşı hesaplayıp nesne içine kaydetme)
  calcAge: function () {
    this.age = 2037 - this.birthYear; // nesneye age adında yeni bir özellik ekliyoruz
    return this.age;
  },

  // Özet (Summary) oluşturan fonksiyon
  getSummary: function () {
    // hasDriversLicense true ise "has", değilse "doesn't have" yazacak
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has" : "doesn't have"
    } a driver's license.`;
  },
};

// ---- Test kısmı ----

// 1. Versiyonu test ediyoruz
console.log("1. Versiyon (Parametre ile):", okyanus.calcAgeV1(1991)); // 46

// 2. Versiyonu test ediyoruz
console.log("2. Versiyon (this ile doğrudan nesneden):", okyanus.calcAgeV2()); // 46

// 3. Versiyonu çalıştırıyoruz (age'i nesneye kaydeder)
okyanus.calcAge();

// Artık okyanus nesnesinde age özelliği var, onu yazdırıyoruz
console.log("Yaş bilgisi:", okyanus.age); // 46

// Summary bilgisini alıyoruz
console.log("Summary bilgisi:", okyanus.getSummary());
*/

// Challenge #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
