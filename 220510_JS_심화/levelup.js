import _ from "lodash";

//JS 데이터
// String: "", '', ``
// Number
// Boolean: true, false
// undefined
// null
// Array:[]
// Object: {}

// const result = "Hello world".indexOf("world");
// console.log(result);

//.concat()
// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Bananan", "Cherry"];

// console.log(numbers.concat(fruits));
// console.log(fruits);

//.forEach()

// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple",  "Banana", "Cherry"];

// fruits.forEach(function(element, index, array){
//     console.log(element, index, array)
// })

//.map()
// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// const a = fruits.forEach(function (fruit, index) {
//   console.log(`${fruit}-${index}`);
// });
// console.log(a);

// const b = fruits.map(function (fruit, index) {
//   return `${fruit}-${index}`;
// });
// console.log(b);

//.filter()

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number <3)
// console.log(a)

// const b = numbers.filter(number =>number <3)
// console.log(b)

// .find() .findIndex()

// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// const a = fruits.find((fruit) => /^B/.test(fruit));
// console.log(a);
// const b = fruits.findIndex((fruit) => /^B/.test(fruit));
// console.log(b);

// .includes()
// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// const a = numbers.includes(3);
// console.log(a);

// const b = fruits.includes('Sseul')
// console.log(b)

// .push() .unshift() : 원본수정됨!!! 주의!!!

// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// .reverse() : 원본 수정됨!!! 주의!!!

// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// console.log(`원본 : `,numbers)
// console.log(`원본 : `,fruits)

// numbers.reverse()
// fruits.reverse()

// console.log(`reverse : `,numbers)
// console.log(`reverse : `,fruits)

//.splice() : 원본수정됨!!! 주의!!!
// const numbers = [1, 2, 3, 4];
// const fruits = ["Apple", "Banana", "Cherry"];

// numbers.splice(2, 1, 999);
// console.log(numbers);

//객체!!
// const userAge = {
//     //key: value
//     name: 'Sseul',
//     age: 29
// }

// const userEmail = {
//     name: 'Sseul',
//     email: 'sgsg9447@gmail.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k : 123}
// const b = { k : 123}
// console.log(a === b)

// const user = {
//   name: "Sseul",
//   age: 29,
//   email: "sgsg9447@gmail.com",
// };

// const keys = Object.keys(user);
// console.log(keys);

// console.log(user.email);
// console.log(user["email"]);

// const values = keys.map((key) => user[key]);
// console.log(values);

// 구조 분해 할당 = 비구조화 할당
// const user = {
//   name: "Sseul",
//   age: 29,
//   email: "sgsg9447@gmail.com",
// };
// console.log(age)
// const { name, age, email, address } = user;
// console.log(`구조분해할당:`,age)
// console.log(`user.age:`,user.age)
// console.log(`user['age']:`,user['age'])

// console.log(`사용자의 이름은 ${name}입니다`);
// console.log(`${name}의   나이는 ${age}세입니다`);
// console.log(`${name}의 이메일 주소는 ${email}입니다.`);
// console.log(address);

// const fruits = ["Apple", "Banana", "Cherry"];
// const [a, b, c, d] = fruits;
// console.log(a, b, c, d);

// const user = {
//     name: "Sseul",
//     age: 29,
//     email: "sgsg9447@gmail.com",
//   };
//   const { name:seulgi, age, email, address='korea' } = user;

//   console.log(`사용자의 이름은 ${seulgi}입니다`);
//   console.log(`${seulgi}의   나이는 ${age}세입니다`);
//   console.log(`${seulgi}의 이메일 주소는 ${email}입니다.`);
//   console.log(address);

// const fruits = ["Apple", "Banana", "Cherry"];
// const [a, b, c, d] = fruits;
// console.log(a, b, c, d);

// const fruits = ["Apple", "Banana", "Cherry"];
// const [, b,] = fruits;
// console.log(b);

// 전개연산자(Spread)
// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);
// console.log(...fruits);
// console.log("Apple", "Banana", "Cherry");

// function toObject(a, b, c) {
//   return {
//     a: a,
//     b: b,
//     c: c,
//   };
// }
// console.log(toObject(...fruits));
// console.log(toObject(fruits[0], fruits[1], fruits[2]))

// const toObject = (a, b, c) => ({ a, b, c });

// console.log(toObject(...fruits));
// console.log(toObject(fruits[0], fruits[1], fruits[2]));

//데이터불변성(Immutability)
//원시 데이터 : String, Number, Boolean, undefined, null

// ----------------------------------------
// |1:       |2:       |3:       |4:
// ----------------------------------------

// let a = 1;
// let b = 4;
// console.log(a, b, a === b);
// //숫자데이터 1이 첫번째 메모리 주소인 |1:1 에 들어가게됨
// //숫자데이터 4가 두번째 메모리 주소인 |2:4 에 들어가게됨
// // |1:1      |2:4       |3:       |4:
// //변수 a는 첫번째 메모리 주소를 바라보게되고,
// //변수 b는 두번째 메모리 주소를 바라보게된다.
// //값도 다르고 메모리주소도 다르기에 false

// b = a;
// console.log(a, b, a === b);
// //b라는 변수부분에 a라는 변수를 할당하고있음
// // |1:1      |2:4       |3:       |4:
// //b는 두번째 메모리 주소를 바라보지않고, 첫번째 메모리 주소를 바라보게됨!
// //값도 같고, 바라보는 메모리 주소가 같기에 true

// a = 7;
// console.log(a, b, a === b);
// //a에 숫자데이터 7을 할당을 하면 1번에 덮어씌어지는것이아님
// //새로운 데이터이기에 세번째 메모리 주소인 |3:7에 들어가게됨
// // |1:1      |2:4       |3:7       |4:
// //a가 3번 메모리 주소를 바라보게됨
// //값도 다르고 메모리주소도 다르기에 false

// let c = 1;
// console.log(b, c, b === c);
// //변수 c에 1을 할당하여 숫자데이터인 1이 |4:에 들어가는것이 아니라!
// //기존 메모리주소에 있는 숫자데이터1을 바라보게되는것!
// //따라서 숫자도 같고 메모리주소도 같기에 true

// //원시데이터들은 새롭게 만들어지는것이 아니고 한번 메모리주소에 만들어지면 항상 불변한다!

//참조형데이터!
// ----------------------------------------
// |1: {       } |2: {       } |3: {       }
// ----------------------------------------

// let a = { k: 1 };
// let b = { k: 1 };
// console.log(a, b, a === b);
// //생김새는 똑같으나 다른 메모리 주소를 바라보기에 false
// // |1: { k:1 } |2: { k:1 } |3: {       }

// a.k = 7;
// // |1: { k:7 } |2: { k:1 } |3: {       }
// b = a;
// // |1: { k:7 } |2: { k:1 } |3: {       }
// // b가 바라보고 있던것이 원래는 |2: 의 메모리 주소였는데, |1: 의 메모리주소를 바라봄
// // 따라서 true
// console.log(a, b, a === b);

// a.k = 2;
// // |1: { k:2 } |2: { k:1 } |3: {       }
// console.log(a, b, a === b);
// //a의 값을 바꿔도 a와b는 똑같은 |1:을 바라보고있기에 b의 값도 바뀌고 true로 나옴

// let c = b;
// // |1: { k:2 } |2: { k:1 } |3: {       }
// // a와 b모두 1번 메모리주소를 바라보고 있는데, c라는 변수에 b를 할당하고 있기에
// // c도 1번 메모리주소를 바라보게됨
// console.log(a, b, a === c);
// // 모두 값이 같고 바라보는것이 1번 메모리주소를 바라보기에 true

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

// ----------------------------------------
// |1:       |2:       |3:       |4:
// ----------------------------------------

// const user = {
//   name: "Sseul",
//   age: 29,
//   emails: ["sgsg9447@gmail.com"],
// };

// //얕은복사
// // const copyUser = Object.assign({}, user)
// const copyUser = { ...user };
// console.log(copyUser === user);

// user.age = 22;
// console.log("user", user);
// console.log("copyUser", copyUser);

// console.log("---------------");
// console.log("---------------");

// user.emails.push("sseul@naver.com");
// console.log(user.emails === copyUser.emails);
// console.log(user);

// 깊은복사
// const copyUser = _.cloneDeep(user);
// console.log(copyUser === user);

// user.age = 22;
// console.log("user", user);
// console.log("copyUser", copyUser);

// console.log("---------------");
// console.log("---------------");

// user.emails.push("sseul@naver.com");
// console.log(user.emails === copyUser.emails);
// console.log(user);
