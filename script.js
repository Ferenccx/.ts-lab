"use strict";
//Mountains
;
//Declare an array called mountains which is an array of type Mountain
const mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 },
];
//console.log(mountains);
// Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallestHeight = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
let tallestMountain = findNameOfTallestMountain(mountains);
;
// Declare an array called products which is an array of type Product.
// Fill the array with a few products of your own choosing.
const products = [
    { name: 'cupcake', price: 2 },
    { name: 'mini-cupcake', price: 1 },
    { name: 'cookie', price: 5 },
    { name: 'cake', price: 4 },
    { name: 'gelato', price: 3 },
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array
// of Product objects. It returns a number, the average price of all the products provided
// as an argument. If the array argument is empty, return 0.
function calcAverageProductPrice(products) {
    let price = 0;
    for (const product of products) {
        // console.log(product.price)
        price += product.price;
    }
    console.log(price, products);
    let avgPrice = price / products.length;
    console.log(avgPrice);
    return avgPrice;
}
;
// Call calcAverageProductPrice, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log
// the variable.
let averagePrice = calcAverageProductPrice(products);
;
//Declare an array called inventory which is an array of type InventoryItem. Fill the array.
const inventory = [
    { product: { name: 'motor', price: 10.00 }, quantity: 10 },
    { product: { name: 'sensor', price: 12.50 }, quantity: 4 },
    { product: { name: 'LED', price: 1.00 }, quantity: 20 }
];
//Inventory
//Declare a function called calcInventoryValue. It takes one parameter, an array of
// InventoryItem objects. It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
function calcInventoryValue(items) {
    let totalValue = 0;
    for (const inventories of inventory) {
        totalValue += (inventories.product.price * inventories.quantity);
    }
    ;
    // console.log(totalValue);
    return totalValue;
}
;
//Call calcInventoryValue, passing it your products array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170).
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
