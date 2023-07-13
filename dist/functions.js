"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCart = exports.cartTotal = exports.removeQuantityFromCart = exports.removeFromCart = exports.addToCart = exports.createItem = exports.createUser = void 0;
const uuid_1 = require("uuid");
function createUser(name, age) {
    const id = (0, uuid_1.v4)();
    return {
        id,
        name,
        age,
        cart: [],
    };
}
exports.createUser = createUser;
function createItem(name, price, description, quantity) {
    const id = (0, uuid_1.v4)();
    return {
        id,
        name,
        price,
        description,
        quantity
    };
}
exports.createItem = createItem;
function addToCart(item, user) {
    user.cart.push(item);
}
exports.addToCart = addToCart;
function removeFromCart(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
exports.removeFromCart = removeFromCart;
function removeQuantityFromCart(item, quantity, user) {
    const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
        if (user.cart[index].quantity <= quantity)
            user.cart.splice(index, 1);
    }
    else {
        user.cart[index].quantity -= quantity;
    }
}
exports.removeQuantityFromCart = removeQuantityFromCart;
function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price, 0);
}
exports.cartTotal = cartTotal;
function printCart(user) {
    console.log(`User's Cart:`);
    user.cart.forEach((item) => {
        console.log(`- ${item.name}: $${item.price}`);
    });
}
exports.printCart = printCart;
