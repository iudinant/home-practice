// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']


// function getOrderQuantity(order) {
//     return order.length;
//   }

//   console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));


// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"


// function getLastElementMeta(array) {
  
//     const lastElementIndex = array.length - 1;
//     const lastElement = array[lastElementIndex];
//     const newMasiv = [lastElementIndex, lastElement];
//     return newMasiv;
//   }

//   Виклик функції `getLastElementMeta(["apple", "peach"])` повертає `[1, "peach"]`
// Виклик функції `getLastElementMeta(["apple"])` повертає `[0, "apple"]`
// Виклик функції `getLastElementMeta(["apple", "peach", "pear", "banana"])` повертає `[3, "banana"]`
// Виклик функції `getLastElementMeta(["apple", "peach", "pear"])` повертає `[2, "pear"]`


// function getExtremeElements(array) {
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     const newArray = [firstElement, lastElement];
//     return newArray;
//   }

//   Виклик функції `getExtremeElements([1, 2, 3, 4, 5])` повертає `[1, 5]`
// Виклик функції `getExtremeElements(["apple", "peach", "pear", "banana"])` повертає `["apple", "banana"]`
// Виклик функції `getExtremeElements(["Earth", "Mars", "Venus"])` повертає `["Earth", "Venus"]`

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// method "Join"

// function getLength(array) {
// 	const joinedArray = array.join("");
// 	const arrayLength = joinedArray.length;
// 	return arrayLength;
//   }

//   console.log(getLength(["top", "picks", "for", "you"]));
//   console.log(getLength(["M", "a", "n", "g", "o"]));
//   console.log(getLength(["Mango", "hurries", "to", "the", "train"]));

// method "Split"  split(delimiter)

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// function calculateEngravingPrice(message, pricePerWord) {
// 	const wordsArray = message.split(" ");
// 	const price = wordsArray.length * pricePerWord;
// 	return price;
//   }

//   console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//   console.log(calculateEngravingPrice("JavaScript is in my blood", 20) );
//   console.log(calculateEngravingPrice("Web-development is creative work", 40) );
//   console.log(calculateEngravingPrice("Web-development is creative work", 20));


// method "Slice"  slice(begin, end)

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.table(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0 , 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// method "Concat"   concat(arr1, arr2, ..., arrN)

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];


// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);


// method "indexOf"  indexOf(elem)

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// function getSlice(array, value) {
//   let indexValue = array.indexOf(value) + 1;
// //   let newArray;
//   indexValue > 0 ?  newArray = array.slice(0, indexValue) :  newArray = [];
//   return newArray;
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly") );


// method "push"  push()


// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]


// function createArrayOfNumbers(min, max) {
// 	const elements = [];
// 	for (let i = min; i <= max; i +=1) {
// 		elements.push(i);
		
// 	}
// 	return elements;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(14, 17) );



// function calculateTotalPrice(order) {
// 	let total = 0;
//   for (let i = 0; i < order.length; i++) {
// 	 total += order[i];
	
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function getEvenNumbers(start, end) {
// 	let array=[];
// 	for (let i = start; i <= end; i++) {
// 		// i % 2 === 0 ? array.push(i) : console.log();
// 		if (i % 2 === 0) array.push(i) ;
// 	}
// 	return array;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers() );
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(8, 8) );
// console.log(getEvenNumbers(6, 12));


// method "includes" array.includes(element)

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }


// function checkStorage(storage, item) {
// 	let message;
	
// 	if (storage.includes(item.toLowerCase())) {
// 		 message = `${item.toLowerCase()} is available to order`;
// 	} else {
// 		 message = "Sorry! We are out of stock!";
// 	}
// 	return message;
//   }

// function checkStorage(storage, item) {
// 	const normalizedInput = item.toLowerCase();
// 	if (storage.includes(normalizedInput)) {
// 	  return `${normalizedInput} is available to order`;
// 	} else {
// 	  return "Sorry! We are out of stock!";
// 	}
//   }

//   console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
//   console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
//   console.log(checkStorage(["apple", "plum", "pear"], "carrot") );


// function getCommonElements(array1, array2) {
// 	const commonElements = [];
  
// 	for (const element of array1) {
// 	  if (array2.includes(element)) {
// 		commonElements.push(element);
// 	  }
// 	}
  
// 	return commonElements;
//   }
  
//   // Приклади викликів функції:
//   console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []


// function calculateTotalPrice(order) {
// 	let sum = 0;
//   for (const element of order) {
// 	 sum += element;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([164, 48, 291]));





// homework

// task 1

// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {

// 	const myArray = title.toLowerCase().split(" ").join("-");
	
// 	return myArray;
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// task 2

// function makeArray(firstArray = [], secondArray = [], maxLength = 0){
// 	const result = (firstArray.concat(secondArray)).slice(0, maxLength);
// 	return result;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



// task 3

// function filterArray(numbers, value) {
// const filteredArray = [];
// for (const number of numbers) {
// 	if (number > value){
// 		filteredArray.push(number);
// 	}
	
// }
// return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// function createReversedArray() {
    
//     const argsArray = [...arguments];
    
//     argsArray.reverse();
//     return argsArray;
//   }
  
//   // Приклади використання функції:
//   console.log(createReversedArray(12, 85, 37, 4)); // Виведе [4, 37, 85, 12]
//   console.log(createReversedArray(164, 48, 291)); // Виведе [291, 48, 164]
//   console.log(createReversedArray(412, 371, 94, 63, 176)); // Виведе [176, 63, 94, 371, 412]
//   console.log(createReversedArray()); // Виведе пустий масив, тобто []



//   function calculateTax(amount, taxRate = 0.2) {
//     // const tax = amount * taxRate;
//     return tax = amount * taxRate;
//   }

//   console.log(calculateTax(100, 0.1));
//   console.log(calculateTax(200, 0.1));
//   console.log(calculateTax(100, 0.2));
//   console.log(calculateTax(100, 0.2));
//   console.log(calculateTax(200) );
//   console.log(calculateTax(200, 0.3) );


// call stack

// function fnA() {
//     console.log("Log inside fnA function before calling fnB");
//     fnB();
//     console.log("Log inside fnA function after fnB call");
//   }
  
//   function fnB() {
//     console.log("Log inside fnB function");
//   }
  
//   console.log("Log before calling fnA");
//   fnA();
//   console.log("Log after calling fnA");


// function bar() {
//     console.log("bar");
//   }
  
//   function baz() {
//     console.log("baz");
//   }
  
//   function foo() {
//     console.log("foo");
//     bar();
//     baz();
//   }
  
//   foo();

