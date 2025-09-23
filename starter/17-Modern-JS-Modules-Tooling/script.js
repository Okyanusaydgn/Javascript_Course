// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);

console.log('Importing module');
// console.log(price, tq);
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.tq);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
