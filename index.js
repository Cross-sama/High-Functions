const arrForTask1 = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']
arrForTask1.forEach((element) => console.log(`Hello, ${element}!`))

const arrForTask2 = [1, 2, 3, 4, 5];
const answerTask2 = arrForTask2.map((i) => i * 10);
console.log(answerTask2)

const arrForTask3 = [5, 12, 8, 130, 44];
const answerTask3 = arrForTask3.filter((i) => i > 10)
console.log(answerTask3)

const objForTask4 = [
  {name: 'Иван', age: 23}, 
  {name: 'Мария', age: 18}, 
  {name: 'Алексей', age: 32}, 
  {name: 'Ольга', age: 24}, 
  {name: 'Сергей', age: 17}, 
  {name: 'Анна', age: 21}
];
const obj18Plus = objForTask4.filter((i) => i.age > 18)
const answerForTask4 = obj18Plus.map((i) => `${i.name} (${i.age})`)
console.log(answerForTask4)

const objForTask5 = [
  {product: 'Телефон', price: 50000, quantity: 1}, 
  {product: 'Чехол', price: 1500, quantity: 2}, 
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
];
const sum = objForTask5.reduce((acc, product) => {
  const newAcc = acc + product.price * product.quantity
  return newAcc
}, 0)
console.log(`Общая стоимость продаж: ${sum}`)
