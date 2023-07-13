import { v4 as uuidv4 } from 'uuid';
import { Item, User } from './types';

export function createUser(name: string, age: number): User {
  const id = uuidv4();
  return {
    id,
    name,
    age,
    cart: [],
  };
}

export function createItem(name: string, price: number, description: string, quantity: number): Item {
  const id = uuidv4();
  return {
    id,
    name,
    price,
    description,
    quantity
  };
}

export function addToCart(item: Item, user: User): void {
  user.cart.push(item);
}

export function removeFromCart(item: Item, user: User): void {
  user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}

export function removeQuantityFromCart(item: Item, quantity: number, user: User): void {
  const index = user.cart.findIndex((cartItem) => cartItem.id === item.id);
  if (index !== -1) {
    if (user.cart[index].quantity <= quantity) 
      user.cart.splice(index, 1);
    } else {
      user.cart[index].quantity -= quantity;
    }
  }


export function cartTotal(user: User): number {
  return user.cart.reduce((total, item) => total + item.price, 0);
}

export function printCart(user: User): void {
  console.log(`User's Cart:`);
  user.cart.forEach((item) => {
    console.log(`- ${item.name}: $${item.price}`);
  });
}
