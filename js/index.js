'use strict'

// phone AppleX 
const phoneAppleX = 'Apple X';
const phoneAppleXQuantity = 15;
const cellPhones = 'Мобильные телефоны';
const phoneAppleXPrice = 999;

console.log(typeof phoneAppleXQuantity);
console.log(typeof phoneAppleXPrice);

const nameProduct = prompt('Натменование товара');
const quantityProduct = prompt('Количество товара');
const priceProduct = prompt('Цена товара');

console.log(`На складе осталось (${phoneAppleXQuantity}) единиц товара (${phoneAppleX}) на сумму (${phoneAppleXQuantity * phoneAppleXPrice}) $`)


