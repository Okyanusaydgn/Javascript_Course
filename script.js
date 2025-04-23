"use strict"; // ✅ Strict mode aktif: Hataları erken fark etmemizi sağlar

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
