                    // Objects





// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating : 4,
//     price : 2153,
//     tags: ["premium", "promoted", "top"],
//   }

//   console.table(apartment);


// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

//   console.table(user);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   const bookTitle = book.title;
//   console.log(bookTitle); // "The Last Kingdom"
  
//   const bookGenres = book.genres;
//   console.log(bookGenres); // ["historical prose", "adventure"]
  
//   const bookPrice = book.price;
//   console.log(bookPrice); // undefined


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];

//   console.log(lastTag);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   console.log(book.title); // "The Last Kingdom" 
//   console.log(book["title"]); // "The Last Kingdom" 
  
//   console.log(book.genres); // ["historical prose", "adventure"]
//   console.log(book["genres"]); // ["historical prose", "adventure"]
  
//   const propKey = "author";
//   console.log(book.propKey); // undefined
//   console.log(book[propKey]); // "Bernard Cornwell"


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
   
//   }
//  apartment.area = 60;
//     apartment.rooms = 3;
    
//     apartment.location = {
//         country: "Jamaica",
//         city: "Kingston",
//     }
    

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = { 
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam"
// }

// console.log(credentials);


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
//   }



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = [];
//   const values = [];

//   for (const key in apartment) {
//    keys.push(key);
//    values.push(apartment[key]);
//   };


//   console.log(keys);
//   console.log(values);

// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys){
//     console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
//   };



// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const values = [];
//   const keys = Object.keys(apartment);
  
//   for (const key of keys) {
//     values.push(apartment[key]);
//   }
  
//   console.log(keys);
//   console.log(values);
  
  
// function countProps(object) {
//     let propCount = 0;
  
//     for (const key in object) {
//       if (Object.keys(object)) {
//         propCount += 1;
//       }
//     }
    

  
//     return propCount;
//   }
  
//   console.log(countProps({ name: "Mango", age: 2 }));
//   console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
//   console.log(countProps({}));


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);

//   console.log(keys);
//   console.log(values);


// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const values = Object.values(salaries);
//     for (const value of values) {
//         totalSalary += value;
        
//     }
//     return totalSalary;
//   }

  
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//   console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
//   console.log(countTotalSalary({}));



// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
  
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }
  
//   console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//   console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
  

// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//     { title: "Beside Still Waters", author: "Robert Sheckley" },
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
//   ];
  
//   const authorToSearchFor = "Robert Sheckley";
  
//   for (const book of books) {
//       if(book.author === authorToSearchFor) {
//           console.log(book);
//           console.log(book.title)
//           console.log(book.rating)
//       }
//   }


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let searchedPrice; 

//   for (const product of products) {
//     if (product.name === productName) {
//       searchedPrice = product.price;
//       break; 
//     }
//   }

//   return searchedPrice; 
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const allProps = [];

//   for (const product of products) {
//     if (propName in product) {
//       allProps.push(product[propName]);
//     }
//   }

//   return allProps;
// }

// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (let product of products) {
//     if(product.name === productName){
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
  
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (let potion of this.potions) {
      
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());



// const bookShelf = {
// 	books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 },
// 	],
// 	changeRating(bookName, newRating) {
// 		for (const book of this.books) {
// 			if (book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };


// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);




// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
// 		if (potion.name === oldName) {
// 			potion.name = newName;
// 		}
// 	}
//   },
// };

// console.log(atTheOldToad.potions);

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.potions);



// function add(...args) {
//   sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(add(32, 6, 13, 19, 8));
// console.log(add(12, 4, 11, 48));


// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (let arg of args) {
//     if (arg > value) {
//       sum += arg;
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));


// function getExtremeScores(scores) {
	
// 	let best = Math.max(...scores);
// 	let worst = Math.min(...scores);
// 	const score = { best, worst };
// 	return score;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
