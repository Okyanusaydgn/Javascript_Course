/*
// ✅ Değişken tanımlama ve veri tipi kullanımı

let js = "amazing";
console.log(40 + 8 + 23 - 10); // Basit matematik işlemi

console.log("Jonas");
console.log(23);

// ✅ Değişken tanımlama örnekleri
let firstName = "Okyanus";
console.log(firstName);

let jonas_matilda = "JM"; // Birden fazla isim tek değişkende
let $function = 27; // Geçerli ama önerilmez: özel karakterli değişken

let person = "Okyanus";
let PI = 3.1415; // Büyük harfle yazılan değişkenler genelde sabitler için

// ✅ İş/meslek örneği
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
console.log(myFirstJob);


// ✅ Boolean değer örneği
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof operatörü değişkenin veri tipini gösterir
console.log(typeof javascriptIsFun); // boolean

// ✅ Tür değişimi (type coercion)
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // string

// ✅ Değeri atanmamış değişken
let year;
console.log(year);           // undefined
console.log(typeof year);    // "undefined"

year = 1991;
console.log(typeof year);    // number


// ✅ let ile değişkeni sonradan değiştirebiliriz
let age = 30;
age = 31;

// ✅ const ile tanımlanan değişken değiştirilemez
const birthYear = 1991;
// birthYear = 1990; // ❌ Hata verir

// const ile tanımlanan bir değişkenin değeri hemen verilmelidir
// const job; // ❌ Hata: Initialization required
*/

/*
// ✅ Math Operators (Matematiksel Operatörler)
const now = 2037;
const ageOkyanus = now - 1991;
const ageSarah = now - 2018;

console.log(ageOkyanus, ageSarah); // Yaşları yazdırır: 46, 19
console.log(ageOkyanus * 2, ageOkyanus / 10, 2 ** 3);
// Çarpma, bölme ve üslü ifade örnekleri: 92, 4.6, 8

// ✅ String birleştirme (Concatenation)
const firstName = "Okyanus";
const lastName = "Aydogan";
console.log(firstName + " " + lastName); // "Okyanus Aydogan"

// ✅ Assignment Operators (Atama Operatörleri)
let x = 10 + 5; // x = 15
x += 10; // x = 25
x *= 4; // x = 100
x++; // x = 101
x--; // x = 100
x--; // x = 99
console.log(x); // 99

// ✅ Comparison Operators (Karşılaştırma Operatörleri)
console.log(ageOkyanus > ageSarah); // true: Okyanus Sarah'tan büyük
console.log(ageSarah >= 18); // true: Sarah 18 yaşında veya büyük mü?

const isFullAge = ageSarah >= 18; // Boolean değer olarak saklandı

// ✅ Daha karmaşık bir karşılaştırma
console.log(now - 1991 > now - 2018);
// Aynı şekilde: ageOkyanus > ageSarah demektir
*/
/*
📌 Operator Precedence ve Assignment

- 2037 yılında yaş hesaplaması
- x ve y'ye aynı değerin atanması
- Ortalama yaşın bulunması
*/

/*
const now = 2037;
const ageOkyanus = now - 1991;
const ageSarah = now - 2018;

// Karşılaştırma: Okyanus mu daha yaşlı?
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // İşlem: 25 - 10 = 15, 15 - 5 = 10 → x = y = 10
console.log(x, y);

const averageAge = (ageOkyanus + ageSarah) / 2;
console.log(ageOkyanus, ageSarah, averageAge);
*/

/*
📌 BMI (Vücut Kitle İndeksi) Karşılaştırması

- Mark ve John'un BMI değerleri hesaplanıyor
- Daha yüksek BMI'ye sahip kişi belirleniyor
*/
/*
// Kilo ve boy bilgileri
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

// BMI hesaplamaları
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Karşılaştırma: Mark'ın BMI değeri John'dan yüksek mi?
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
// Değişken tanımlamaları
const firstName = "Okyanus";
const job = "developer";
const birthYear = 1999;
const year = 2037;

// 🔸 Eski yöntemle string birleştirme (concatenation)
const okyanus =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(okyanus); // I'm Okyanus, a 38 years old developer!

// 🔹 Template literals ile string oluşturma (ES6+ yöntemi)
const okyanusNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(okyanusNew); // I'm Okyanus, a 38 year old developer

// 🔸 Eski yöntemle çok satırlı string (escape karakteriyle: \n\)
console.log(
  "String with \n\
   multiple \n\
  lines"
);

// 🔹 Template literals ile çok satırlı string (daha okunabilir)
console.log(`String
  multiple
  lines`);
*/

/*
// Sarah'ın yaşını tanımlıyoruz
const age = 15;

// Eğer yaş 18 veya daha fazlaysa ehliyet alabilir
if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  // Eğer yaş 18'den küçükse, kaç yıl beklemesi gerektiğini hesaplıyoruz
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 🙂`);
}


// Doğum yılını tanımlıyoruz
const birthYear = 1998;

let century; // century değişkenini tanımlıyoruz ama henüz bir değer vermedik

// Doğum yılı 2000 veya daha küçükse 20. yüzyıl, büyükse 21. yüzyıl kabul ediyoruz
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

// Sonuç olarak hangi yüzyılda doğduğunu yazdırıyoruz
console.log(century);
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})`);
}
*/

/*
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Okyanus"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Okyanus"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = 18;
if (age === 18) console.log("You just became an adult :d (strict)");

if (age == 18) console.log("You just became an adult :d(loose)");

const favourite = Number(prompt("What's your favourite number ?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7.");
}

if (favourite !== 23) console.log("Why not 23?");
*/

/*
const hasDriversLicence = true; // ✅ A: Ehliyeti var mı?
const hasGoodVision = true; // 👁️ B: Görüşü iyi mi?

// 🔀 AND operatörü: Her iki koşul da true mu?
console.log(hasDriversLicence && hasGoodVision); // 👉 true

// ➕ OR operatörü: En az biri true mu?
console.log(hasDriversLicence || hasGoodVision); // 👉 true

// ❗ NOT operatörü: Ehliyeti yok mu?
console.log(!hasDriversLicence); // 👉 false

// const isTired = false; // 😴 C: Yorgun mu?

// 🔁 OR ile üç durumdan biri true mu diye kontrol ediyoruz
console.log(hasDriversLicence || hasGoodVision || isTired); // 👉 true

// 🔍 Tüm şartlar sağlanıyor mu?
if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive! 🚗✅"); // 🟢 Şartlar uygunsa Sarah sürebilir
} else {
  console.log("Someone else should drive... 🚫🛑"); // 🔴 Aksi halde başka biri sürsün
}
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy!");
// }

/*
// BONUS 1
// 🧮 Ortalama skor hesaplama
const scoreDolphins = (97 + 112 + 80) / 3; // 🐬 Dolphins'in puan ortalaması
const scoreKoalas = (109 + 95 + 50) / 3; // 🐨 Koalas'ın puan ortalaması
console.log("🐬 Dolphins average score:", scoreDolphins);
console.log("🐨 Koalas average score:", scoreKoalas);

// 🏆 Kazananı belirleme şartları
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("🏆 Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("🏆 Koalas win the trophy!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("🤝 It's a draw! Both win the trophy!");
} else {
  console.log("❌ No one wins the trophy. Minimum score of 100 not reached.");
}
*/
/*
const day = "monday";

// 🔄 switch yapısı ile gün kontrolü
switch (day) {
  case "monday": // 📅 Pazartesi günü
    console.log("📘 Plan a course structure"); // Kurs yapısını planla
    console.log("👨‍💻 Go to coding meetup"); // Kodlama etkinliğine katıl
    break;
  case "tuesday": // 📅 Salı günü
    console.log("🎥 Prepare theory videos"); // Teorik videolar hazırla
    break;
  case "wednesday": // 📅 Çarşamba günü
  case "thursday":  // 📅 Perşembe günü
    console.log("🧑‍💻 Write code examples"); // Kod örnekleri yaz
    break;
  case "friday": // 📅 Cuma günü
    console.log("🎬 Record videos"); // Videoları kaydet
    break;
  case "saturday": // 📅 Cumartesi
  case "sunday":   // 📅 Pazar
    console.log("😎 Enjoy the weekend :D"); // Hafta sonunun tadını çıkar!
    break;
  default:
    console.log("❌ Not a valid day!"); // Geçersiz gün
}
*/
// 🧠 if-else alternatifi

const day = "monday";

if (day === "monday") {
  console.log("📘 Plan a course structure");
  console.log("👨‍💻 Go to coding meetup");
} else if (day === "tuesday") {
  console.log("🎥 Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("🧑‍💻 Write code examples");
} else if (day === "friday") {
  console.log("🎬 Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("😎 Enjoy the weekend :D");
} else {
  console.log("❌ Not a valid day!");
}
