var add = function (num1, num2) {
    return num1 + num2;
};
var number1 = 5;
var number2 = 6;
var result = add(number1, number2);
console.log(result);
console.log("----------------------------------");
//objects types
console.log("----------------------------------objects types");
var product = {
    title: "book",
    price: 99,
};
console.log(product.title);
console.log("----------------------------------array types");
//array types
var products = ["book", "tv"];
console.log("----------------------------------tuples types");
//tuples types
var category = [2, "learning"];
console.log("----------------------------------enums");
//enums
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var enumProduct = {
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
var unionAdd = function (input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(unionAdd(5, 3));
console.log(unionAdd("book1", "book2"));
console.log("----------------------------------literal types");
//literal types
var literalAdd = function (input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "is-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(literalAdd(5, 3, "is-number"));
console.log(literalAdd("5", "3", "is-number"));
console.log(literalAdd("book1", "book2", "is-string"));
//type-aliases
console.log("----------------------------------type-aliases");
var literalAddCombine = function (input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "is-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
console.log(literalAdd(5, 3, "is-number"));
console.log(literalAdd("5", "3", "is-number"));
console.log(literalAdd("book1", "book2", "is-string"));
//function-type
console.log("----------------------------------function-type");
var addFuncType = function (num1, num2) {
    return num1 + num2;
};
var addFuncCombine;
addFuncCombine = addFuncType;
console.log(addFuncCombine(2, 8));
