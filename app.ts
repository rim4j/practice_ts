const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const number1 = 5;
const number2 = 6;

const result = add(number1, number2);

console.log(result);
console.log("----------------------------------");

//objects types
console.log("----------------------------------objects types");

const product: {
  title: string;
  price: number;
} = {
  title: "book",
  price: 99,
};

console.log(product.title);

console.log("----------------------------------array types");

//array types

const products: string[] = ["book", "tv"];

console.log("----------------------------------tuples types");
//tuples types

const category: [number, string] = [2, "learning"];

console.log("----------------------------------enums");

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

console.log("----------------------------------union types");
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

console.log("----------------------------------literal types");

//literal types

const literalAdd = (
  input1: number | string,
  input2: number | string,
  resultType: "is-number" | "is-string"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "is-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(literalAdd(5, 3, "is-number"));
console.log(literalAdd("5", "3", "is-number"));
console.log(literalAdd("book1", "book2", "is-string"));

//type-aliases
console.log("----------------------------------type-aliases");

type Combine = string | number;
type CombineType = "is-number" | "is-string";

const literalAddCombine = (
  input1: Combine,
  input2: Combine,
  resultType: CombineType
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "is-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(literalAdd(5, 3, "is-number"));
console.log(literalAdd("5", "3", "is-number"));
console.log(literalAdd("book1", "book2", "is-string"));

//function-type
console.log("----------------------------------function-type");

const addFuncType = (num1: number, num2: number): number => {
  return num1 + num2;
};

let addFuncCombine: (a: number, b: number) => number;

addFuncCombine = addFuncType;

console.log(addFuncCombine(2, 8));
