export type Item = {
  
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
};

export type User = {
  id: string;
  name: string;
  age: number;
  cart: Item[];
};
