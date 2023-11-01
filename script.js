document.addEventListener("DOMContentLoaded", () => {
  // --Задание 1--
  document.getElementById('submit').onclick = function() {
    this.textContent = 'Нажми сильнее...';
}
  // --Задание 1--

// --Задание 4--
let str = "Привет строки";
let length = str.length;
console.log(str.length)
// --Задание 4--

// --Задание 7--
// let number = prompt("Введите число от 10000 до 99999", 0);
//     number = number + '';
//     if (number === number.split('').reverse().join(''))
//         alert("Введенное число является палиндромом");
//     else
//         alert('Введенное число не является палиндромом');
// --Задание 7--

// --Задание 5--
// let repeat = true;
// while (repeat) {
//   const num1 = Number(prompt("Введите первое число:"));
//   const num2 = Number(prompt("Введите второе число:"));
//   const sign = prompt("Введите знак (+, -, *, /):");
//   let result;
//   switch (sign) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       alert("Некорректный знак!");
//       continue;
//   }
//   alert(`Результат: ${result}`);
//   repeat = confirm("Хотите решить еще один пример?");
// }
// --Задание 5--

// --Задание 10--
let arrOfNumbers = [
  1, -4653, -3, 4, 5, 54, 684, 7, 8, 9, 10,
];


let maxNumber = (a, b) => {
  return a > b ? a : b;
},
  minNumber = (a, b) => {
      return a < b ? a : b
  };

console.log(arrOfNumbers.reduce(maxNumber))
console.log(arrOfNumbers.reduce(minNumber))
})
// --Задание 10--


