// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);

// console.log('Importing module');
// console.log(price, tq);
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.tq);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// import add, { cart } from './shoppingCart.js';

// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// Top-level await(ES2022)

// const URL = 'https://jsonplaceholder.typicode.com/posts';

// async function getPosts() {
//   try {
//     const res = await fetch(URL);
//     if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

//     const data = await res.json();
//     console.log('All posts:', data); // ← burada veriyi kullan
//     return data; // gerekirse dışarıya döndür
//   } catch (err) {
//     console.error('Failed to load posts:', err);
//     throw err; // üst katman da hata görsün istiyorsan
//   }
// }

// getPosts();

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

/*
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

// The module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
