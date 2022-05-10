import random from "./getRandom";

// // // 산술 연산자

// // console.log(1 + 2);
// // console.log(5 - 7);
// // console.log(3 * 4);
// // console.log(10 / 2);

// // // 할당 연산자

// // let a = 2;
// // // a = a + 1;
// // a += 1;

// // console.log(a);

// // // 비교 연산자

// // const a = 1;
// // const b = 3;

// // console.log(a !== b);

// // console.log(a === b);

// // function isEqual(x, y) {
// //   return x === y;
// // }

// // console.log(isEqual(1, 1));
// // console.log(isEqual(2, "2"));

// // const c = 1;
// // const d = 7;
// // console.log(c < d);

// // // 논리 연산자
// // const a = 1 === 1;
// // const b = "AB" === "AB";
// // const c = true;
// // console.log(a);
// // console.log(b);
// // console.log(c);

// // console.log('&&: ',a && b && c); /*그리고 and*/
// // console.log('||: ',a || b && c); /*또는 or*/
// // console.log('!: ', !a); /*부정 not*/

// // 삼항 연산자
// const a = 1 < 2

// if(a){
//     console.log('참')
// }else{
//     console.log('거짓')
// }

// console.log(a ? '참': '거짓')

// console.log(random());

// const a = random();

// switch (a) {
//   case 0:
//     console.log("a is 0");
//     break;
//   case 2:
//     console.log("a is 2");
//     break;
//   case 4:
//     console.log("rest...");
//     break;
//   default:
//     console.log("rest...");
// }

// if (a === 0) {
//   console.log("a is 0");
// } else if (a == 2) {
//   console.log("a is 2");
// } else {
//   console.log("rest...");
// }

// //반복문
// //for (시작조건; 종료조건; 변화조건){}

// const ulEl = document.querySelector("ul");

// for (let i = 0; i < 3; i += 1) {
//   const li = document.createElement("li");
//   li.textContent = `list -${i + 1}`;
//   li.addEventListener("click", function () {
//     console.log(li.textContent);
//   });
//   ulEl.appendChild(li);
// }

// //형 변환

// const a = 1;
// const b = "1";

// console.log(a == b);

// //Truthy(참 같은 값)
// // true, {}, [], 1, 2, 'false', -12, '3.14', ...

// //Falsy(거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN

// if ('false') {
//   console.log(123);
// }

// 함수 복습
// function sum(x, y) {
//   return x + y;
// }

// const sum = function (x, y) {
//   return x + y;
// };

// const a = sum(1, 3);
// const b = sum(4, 12);

// console.log(a + b);

// //화살표 함수
// // () =>{} vs function(){}

// const double = function (x) {
//   return x * 2;
// };

// console.log("double: ", double(7));

// const doubleArrow = (x) => {
//   return x * 2;
// };
// const doubleArrow2 = (x) => x * 2;
// ;

// console.log("doubleArrow", doubleArrow(7));
// console.log("doubleArrow2", doubleArrow2(7));

// //즉시실행함수
// //IIFE, Immediately-Invoked Function Expression

// const a = 7;
// // function double() {
// //   console.log(a * 2);
// // }
// // double();

// (function () {
//   console.log(a * 2);
// })();

// (function () {
//   console.log(a * 2);
// })();

//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7;
// double();

// function double() {
//   console.log(a * 2);
// }

// const a = 7;
// double();

// const double = function () {
//   console.log(a * 2);
// };

//타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// setTimeout(function () {
//   console.log("sseul!");
// }, 3000);

// const timer = setTimeout(() => {
//   console.log("Sseul!");
// }, 3000);

// const h1El = document.querySelector("h1");
// h1El.addEventListener("click", () => {
//   clearTimeout(timer);
// });

// 콜백
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하는 함수

// function timeout(callback) {
//   setTimeout(() => {
//     console.log("Sseul");
//     callback()
//   }, 3000);
// }

// timeout(()=>{
//     console.log("Done");
// });

//생성자 함수

// const heropy = {
//   firstName: "Heropy",
//   lastName: "Park",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(heropy);

// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// const sseul = new User("sseul", "kim");

// console.log(sseul);

//this
// 일반(Normal)함수는 호출 위치에 따라 this 정의!
// 화살표(Arrow)함수는 자신이 선언된 함수 범위에서 this 정의!

// const sseul = {
//   name: "Sseul",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   },
// };

// sseul.normal();
// sseul.arrow();

// const timer = {
//   name: "Sseul!!",
//   timeout: function () {
//     setTimeout( () =>{
//       console.log(this.name);
//     }, 2000);
//   },
// };

// timer.timeout();

//ES6 Classes

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const sseul = new User("Sseul", "Kim");

// console.log(sseul);
// console.log(sseul.getFullName());

//상속(확장)
// class Vehicle{
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }

// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle{
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }

// class Car extends Vehicle{
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }
