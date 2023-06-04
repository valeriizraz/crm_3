'use strict'

// phone AppleX 
const phoneAppleX = 'Apple X';
const phoneAppleXQuantity = 15;
const cellPhones = 'Мобильные телефоны';
const phoneAppleXPrice = 999;

console.log(typeof phoneAppleXQuantity);
console.log(typeof phoneAppleXPrice);
console.log(`На складе осталось (${phoneAppleXQuantity}) единиц товара (${phoneAppleX}) на сумму (${phoneAppleXQuantity * phoneAppleXPrice}) $`)

{
  const tvLg = "TV LG";
  let tvLgQuantity = 8;
    tvLgQuantity = prompt('Ведите нужное количество', '')
  const tvS = 'Телевизоры';
  const tvPrice = 178;

  console.log(`на складе осталось (${tvLgQuantity}) единиц товара (${tvLg}) на сумму (${tvPrice * tvLgQuantity})`)
}



