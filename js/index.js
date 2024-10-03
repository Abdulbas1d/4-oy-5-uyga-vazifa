// 1-Misol

// let num = +prompt('Sonni kiriting');
// let res;
// if (num > 0) {
//     res = ++num
// } else {
//     res = 'Bu butun son emas'
// }

// console.log(res);




// 2-Misol

// let num = +prompt('Sonni kiriting');
// let res;
// if (num > 0) {
//     res = ++num
// } else {
//     res = num -= 2
// }

// console.log(res);




// 3-Misol

// let num = +prompt('Sonni kiriting');
// let res;
// if (num > 0) {
//     res = ++num
// } else if (num < 0) {
//     res = num -= 2
// } else {
//     res = num += 10
// }

// console.log(res);




// 4-Misol

// let num1 = +prompt('1-sonni kiriting');
// let num2 = +prompt('2-sonni kiriting');
// let num3 = +prompt('3-sonni kiriting');

// let musbat = 0;

// if (num1 > 0) {
//     musbat++
// }

// if (num2 > 0) {
//     musbat++
// }

// if (num3 > 0) {
//     musbat++
// }

// console.log(musbat);




// 5-Misol

// let num1 = +prompt('1-sonni kiriting');
// let num2 = +prompt('2-sonni kiriting');
// let num3 = +prompt('3-sonni kiriting');

// let musbat = 0;
// let manfiy = 0;

// if (num1 > 0) {
//     musbat++
// } else {
//     manfiy++
// }

// if (num2 > 0) {
//     musbat++
// } else {
//     manfiy++
// }

// if (num3 > 0) {
//     musbat++
// } else {
//     manfiy++
// }

// console.log('Bu sonlar orasida' + " " + musbat + " " + "musbat son bor");
// console.log('Bu sonlar orasida' + " " + manfiy + " " + "manfiy son bor");




// 6-Misol

// let num1 = +prompt('1-sonni kiriting');
// let num2 = +prompt('2-sonni kiriting');
// let res;

// if (num1 > num2) {
//     console.log("Bu yerda eng kotta son" + " " + num1);
// } else {
//     console.log("Bu yerda eng kotta son" + " " + num2);
// }




// 7-Misol

// let num1 = +prompt('1-sonni kiriting');
// let num2 = +prompt('2-sonni kiriting');
// let res;

// if (num1 < num2) {
//     console.log("Bu yerda eng kichik son" + " " + num1);
// } else {
//     console.log("Bu yerda eng kichik son" + " " + num2);
// }




// 8-Misol

// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let max;
// let min;

// if (num1 > num2 || num1 < num2) {
//     max = num1
//     min = num2
// } else {
//     max = num2
//     min = num1
// }

// console.log("Bu yerda eng kotta son" + " " + max);
// console.log("Bu yerda eng kichik son" + " " + min);




// 9-Misol

// let a = +prompt('1-son kiriting');
// let b = +prompt('2-son kiriting');
// let c;

// if (a > b) {
//     c = a;
//     a = b;
//     b = c;
// }

// console.log(a);
// console.log(b);




// 10-Misol

// let a = +prompt('1-sonni kiriting');
// let b = +prompt('2-sonni kiriting');
// let res;

// if (a != b) {
//     res = a + b;
//     a = res;
//     b = res;
//     console.log(a, b);
// } else {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// }




// 11-Misol

// let a = +prompt('1-sonni kiriting');
// let b = +prompt('2-sonni kiriting');
// let max;

// if (a != b) {
//     if (a > b) {
//         max = a;
//     } else {
//         max = b;
//     }

//     a = max;
//     b = max;
//     console.log(a, b);
// } else {
//     a = 0;
//     b = 0;
//     console.log(a, b);
// }




// 12-Misol

// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let num3 = +prompt("3-sonni kiriting");

// let min;

// if (num1 < num2) {
//     min = num1
// } else {
//     min = num2
// }

// if (min > num3) {
//     min = num3
// }

// console.log(min);




// 13-Misol

// let  num1 = +prompt("1-sonni kiriting");
// let  num2 = +prompt("2-sonni kiriting");
// let  num3 = +prompt("3-sonni kiriting");
// let middle;

// if ((num1 > num2 && num1 < num3) || (num1 < num2 && num1 >num3)) {
//     middle = num1
// } else if ((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
//     middle = num2
// } else {
//     middle = num3
// } 

// console.log(middle);




// 14-Misol

// let  num1 = +prompt("1-sonni kiriting");
// let  num2 = +prompt("2-sonni kiriting");
// let  num3 = +prompt("3-sonni kiriting");
// let max;
// let min;

// if (num1 > num2) {
//     max = num1
// } else {
//     max = num2
// }

// if (max < num3) {
//     max = num3
// }

// if (num1 < num2) {
//     min = num1
// } else {
//     min = num2
// }

// if (min > num3) {
//     min = num3
// }

// console.log("Bu yerda eng kotta son" + " " + max);
// console.log("Bu yerda eng kichik son" + " " + min);




// 15-Misol

// let  num1 = +prompt("1-sonni kiriting");
// let  num2 = +prompt("2-sonni kiriting");
// let  num3 = +prompt("3-sonni kiriting");

// let sum1 = num1 + num2
// let sum2 = num1 + num3
// let sum3 = num2 + num3
// let res1;
// let res2;

// if (sum1 >= sum2 && sum1 >= sum3) {
//     res1 = num1
//     res2 = num2
// } else if (sum2 >= sum1 && sum2 >= sum3) {
//     res1 = num1 
//     res2 = num3
// } else {
//     res1 = num2 
//     res2 = num3
// }

// console.log("Eng katta yig'indini beradigan sonlar:" + " " + res1 + " " + "va" + " " + res2);










// Boolean ga doir misol va masalalar



// 1-Misol

// let a = +prompt ('Sonni kiriting');
// if (a > 0) {
//     console.log("A soni musbat");
// } else {
//     console.log("A soni musbat emas");
// }




// 2-Misol

// let a = +prompt ('Sonni kiriting');
// if (a % 2 == 1) {
//     console.log("A soni toq son");
// } else {
//     console.log("A soni toq son emas");
// }




// 3-Misol

// let a = +prompt('Sonni kiriting');
// if (a % 2 == 0) {
//     console.log("A soni juft son");
// } else {
//     console.log("A soni juft son emas");
// }




// 4-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// if (a > 2 && b <= 3) {
//     console.log(true);
// } else {
//     console.log(false);
// }




// 5-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// if (a >= 0 || b <= 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }




// 6-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");

// if (a <= b && b <= c) {
//     console.log(true);
// } else {
//     console.log(false);
// }




// 7-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");

// if (b > a && b < c) {
//     console.log(true);   
// } else {
//     console.log(false);
// }




// 8-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// if (a % 2 == 1 && b % 2 == 1) {
//     console.log(true);
// } else {
//     console.log(false); 
// }




// 9-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// if (a % 2 == 1 || b % 2 == 1) {
//     console.log(true);
// } else {
//     console.log(false); 
// }




// 10-Misol

// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//     console.log(true);
// } else {
//     console.log(false);
// }








// MASALA

// Xarajatlar xisob kitobi



// let money = +prompt("Alisherni pulini kiriting (So'mda)")
// let sum = 11000.34 * 500 + 11000.34 * 250 + 12354.03 * 250

// if (money >= sum) {
//     console.log("Oq yo'l alisher");
// } else {
//     console.log("Alisher, ozgina puling yetarli emas ekan. Yana ozgina sabr qilish kerak");
// }