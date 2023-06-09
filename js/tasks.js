'use strict'

{
  const rain = Math.random();
  console.log(Math.round(rain));
  if (rain > 0.5) {
    console.log('Пошел дождь, возьмите зонт');
  } else {
    console.log('Дождя нет!');
  }
}

{
  const examMathematics = prompt('Ведите количество баллов по Математике');
  const examRussianLanguage = prompt('Ведите количество баллов по Русскому языку');
  const examInformatics = prompt('Ведите количество баллов по Информатике');

  if (examMathematics + examRussianLanguage + examInformatics >= 256) {
    console.log('Поздравляем! Вы отлично поработали!')
  } else {
    console.log('До следующего раза, неудачник!')
  }
}

{
  const bank = prompt('Ведите сумму которую Вам необходимо')
  if (bank % 100 === 0) {
    console.log('Возьмите свои грязные деньги!')
  } else {
    console.log('Терминал не выдает мелкие купюры, введите другую сумму')
  }
}

держи
function checkRating() {
  const min = 100
  const max = 5000
  return (number) => {
    if(number >= min && number <= max && number % 100 === 0) return true
    return false
  }
}

function getMoney(money) {
  const avalibleRating = checkRating()
  return avalibleRating(money) ? "Доступно" : "Нет в наличии"
}
console.log(getMoney(Number(prompt('Количество денег для снятия?',''))))