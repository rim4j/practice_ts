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

//array types

const products: string[] = ["book", "tv"];

//tuples types

const category: [number, string] = [2, "learning"];

//enums

enum Color {
  RED,
  GREEN,
  BLUE,
}

const enumProduct = {
  id: 1,
  title: "book",
  price: 99,
  color: Color.RED,
};

if (enumProduct.color === Color.RED) {
  console.log("product not exist");
}

//union types

const unionAdd = (input1: number | string, input2: number | string) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(unionAdd(5, 3));
console.log(unionAdd("book1", "book2"));
