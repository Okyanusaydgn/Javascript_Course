'use strict';

// Global düzeyde yani level -top düzeyinde bir fonksiyon.
// Sebebi; Kodun herhangi bir fonksiyonun veya blok yapısının içinde olmadan doğrudan yazıldığı için.
// Her fonksiyon veya global kod için execution-context oluşturulur.
//Execution-context fonksiyon veya global kodun çalışması için gereken ortamdır.
/*
 * Execution Context için de variable environment(değişken ortamı); değişken,fonksiyonlar
 * Scope Chain: bu context'in erişebileceği dış kapsamlar.
 */
function calcAge(birthYear) {
  const age = 2037 - birthYear; // Doğum yılına göre yaş hesaplanıyor

  function printAge() {
    // Bir üst scope’tan gelen değişkenlerle birlikte template string oluşturuluyor
    let output = ` ${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var function scoped olduğu için if bloğundan sonra da erişilebilir
      var millenial = true;

      // Block scope (sadece bu if bloğu içinde geçerli)
      const firstName = 'Steven'; // Bir üstteki firstName değişkenini gölgeler (shadowing)
      const output = 'NEW OUTPUT!'; // Sadece bu blok içinde geçerli yeni bir output değişkeni

      // Yeni bir string oluşturuluyor ve konsola yazdırılıyor
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // Fonksiyon bildirimi – 'use strict' modunda blok içinde tanımlansa da function scoped kalır
      function add(a, b) {
        return a + b;
      }
    }

    // Bu satırdaki output, if bloğundaki değil, yukarıdaki let output değişkenidir.
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

/*
 * 📌 let vs const Özeti:
 * ---------------------
 * - Her ikisi de block-scope'ludur. Yani sadece tanımlandıkları süslü parantez ({ }) içinde geçerlidirler.
 * - `let` ile tanımlanan değişkenin değeri sonradan değiştirilebilir.
 * - `const` ile tanımlanan değişkenin değeri değiştirilemez (sabit).
 *
 * Örnek:
 * let age = 30;
 * age = 31; // ✅ Geçerli
 *
 * const name = "Okyanus";
 * name = "Fatma"; // ❌ Hata! const ile tanımlanan sabit değiştirilemez.
 */

// Hoisting And TDZ

// Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
