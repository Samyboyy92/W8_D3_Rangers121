import { createUser, createItem, addToCart, printCart, cartTotal, removeFromCart } from './functions';


const user = createUser('Sam Mennenga', 31);


const itemA = createItem('Item A', 10, 'Description A', 1 );
const itemB = createItem('Item B', 15, 'Description B', 1);
const itemC = createItem('Item C', 20, 'Description C', 1);


addToCart(itemA, user);


printCart(user);

console.log(`Total: $${cartTotal(user)}`);


addToCart(itemA, user);
addToCart(itemB, user);
addToCart(itemC, user);


printCart(user);


console.log(`Total: $${cartTotal(user)}`);


removeFromCart(itemA, user);


printCart(user);


console.log(`Total: $${cartTotal(user)}`);
