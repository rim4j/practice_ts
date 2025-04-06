const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const number1 = 5;
const number2 = 6;

const result = add(number1, number2);

console.log(result);

//objects types

const product: {
  title: string;
  price: number;
} = {
  title: "book",
  price: 99,
};

console.log(product.title);
