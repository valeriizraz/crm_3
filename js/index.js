'use strict'

{
const phoneAppleX = 'Apple X';
const phoneAppleXQuantity = 15;
const cellPhones = 'Мобильные телефоны';
const phoneAppleXPrice = 999;

console.log(typeof phoneAppleXQuantity);
console.log(typeof phoneAppleXPrice);
console.log(`На складе осталось (${phoneAppleXQuantity}) единиц товара (${phoneAppleX}) на сумму (${phoneAppleXQuantity * phoneAppleXPrice}) $`);
}

{
  const productName = prompt('Ведите название');
  const productQuantity = prompt('Ведите количество');
    if (Number(productQuantity)) {
      console.log('Все верно!');
    } else {
      console.log('Ведите пожалуйста число');
    }
  const productCategory = prompt('Ведите категорию');
  const productPrice = prompt('Ведите цену');
    if (Number(productPrice)) {
      console.log('Все верно!');
    } else {
      console.log('Ведите пожалуйста число');
    }

  console.log(`на складе осталось (${productQuantity}) единиц товара на сумму (${productPrice * productQuantity})`);
}



