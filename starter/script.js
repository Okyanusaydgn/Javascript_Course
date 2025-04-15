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
