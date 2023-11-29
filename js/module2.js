"use strict";

//function checkStorage(available, ordered) {
//let message;
 //    if (ordered > available) {
 //     message =  "Not enough goods in stock!";
 //    
 //    } else {
 //      message = "Order is processed, our manager will contact you";
 //      
 //    }
 //    return message;
 //  }
 //  
 //  checkStorage(100, 50);
 //  checkStorage(200, 20);
 // // checkStorage(200, 150);
 //  checkStorage(150, 180);
 //  checkStorage(100, 130);

 // ???this code was working for autocheck but not on desktop, why???

 // btw this code was working for desktop, but not for autocheck

//  function checkStorage(available, ordered){
//     if (ordered > available) {
//         console.log ("Not enough goods in stock!");
//     } else {
//         console.log("Order is processed, our manager will contact you");
//     }
//  }

//   checkStorage(100, 50);
//   checkStorage(200, 20);
//  checkStorage(200, 150);
//   checkStorage(150, 180);
//   checkStorage(100, 130);


// function checkStorage(available, ordered) {
//     let message;
//     if (ordered === 0) {
//       message = "There are no products in the order!";
//     } else if (ordered > available){
//       message = "Your order is too large, there are not enough items in stock!";
//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
//     return message;
//   }
//   checkStorage(100, 50);
//   checkStorage(100, 130);
//   checkStorage(70, 0);


// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     const check = password === correctPassword ? "Access granted" : "Access denied, wrong password!";
//     return check;
//   }


//   checkPassword("jqueryismyjam");
//   checkPassword("angul4r1sl1f3");


// function getSubscriptionPrice(type) {
// let message;
//     switch (type){
//       case type = "starter":
//         message = "0";
//         break;
//       case type = "professional":
//         message =  "20";
//         break;
//       case type = "organization":
//         message =  "50";
//         break;
//       default: 
//         message = "Invalid subscription type!";
//     }
//     return message;
//   }

  
//   getSubscriptionPrice("professional");
//   getSubscriptionPrice("organization");
//   getSubscriptionPrice("starter");
//   getSubscriptionPrice("premium");

// in this case autocheck accept, but on desktop it's working only with console.log instead of message. ???


// function isNumberInRange(start, end, number) {
//     let message;
//       if(number >= start && number <= end) {
//         message = true;
//       } else {
//         message = false;
//       }
//     return message;
//   }

//   // second try

//   function isNumberInRange(start, end, number) {
//     console.log(Boolean(number >= start &&  number <= end));
//   }

// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);
// isNumberInRange(10, 30, 5);


// function checkAccess(subType) {
//     let message;
//     if (subType === "pro" || subType === "vip") {
//       message = true;
//     } else {
//       message = false;
//     }
//     return message;
//   }

// function checkAccess(subType){
//     console.log(Boolean(subType === "pro" || subType === "vip"));
// }
// checkAccess("free");
// checkAccess("vip");


// function toggleModalVisibility(isVisible) {
//     console.log(Boolean(!isVisible));
//   }

// function toggleModalVisibility(isVisible){
//     let message;
//     if(!isVisible) {
//         message = true;
//     } else {
//         message = false;
//     }
//     return message;
// }

//   toggleModalVisibility(true);
//   toggleModalVisibility(false);

// function getSubstring(string, length) {
//     let message;
//     const newString = string.slice(0, length);
//     message = newString;
//     return message;
//   }

//   function getSubstring(string, length) {
//     const newString = string.slice(0, length);
//     console.log(newString);
//   }

//   getSubstring("Hello world", 8);
//   getSubstring("Hello world", 3);

// function normalizeInput(input, to) {
//     const lowercaseInput = input.toLowerCase();
//     const toUpperCase = input.toUpperCase();
//     if(to === "upper"){
//       return toUpperCase;
//     } else if (to === "lower") {
//       return lowercaseInput;
//     } else {
//         return("Wrong input!")
//     }
//   }




// function normalizeInput(input, to) {
//   const lowercaseInput = input.toLowerCase();
//   const uppercaseInput = input.toUpperCase();

//   return to === "upper" ? uppercaseInput : (to === "lower" ? lowercaseInput : "Wrong input!");
// }

//   normalizeInput("Stay Awhile and Listen", "upper");
//   normalizeInput("Stay Awhile and Listen", "lower");



// function checkForName(fullName, firstName) {
//     const lowercaseInput = fullName.toLowerCase();
//     const lowercaseCheck = firstName.toLowerCase();
//     let message = lowercaseInput.includes(lowercaseCheck);
//     return message;
//   }
  
//   checkForName("Jason Neis", "Jason");


// function checkFileExtension(fileName, ext) {
//     let message;
//      message = fileName.endsWith(ext) ? message = "File extension matches" : message = "File extension does not match";
//     return message;
// }

// checkFileExtension("styles.css", ".css") 
// checkFileExtension("styles.css", ".js") 
// checkFileExtension("app.js", ".js")
// checkFileExtension("app.js", ".html") 
// checkFileExtension("index.html", ".html") 
// checkFileExtension("index.html", ".css")
// checkFileExtension("index.html", ".js")


// function getFileName(file) {
//     let message;
//     let fileNameIndex = file.indexOf(".");
//     message = file.slice(0, fileNameIndex);
//     return message; 
// }


// function getFileName(file) {
//     let fileNameIndex = file.indexOf(".");
//     if (fileNameIndex === -1) {
//         return file;
//     } else {
//         return file.slice(0, fileNameIndex)
//     }
//   }



// function createFileName(name, ext) {
//     let message;
//     const trimmedInput = name.trim();
//     message = trimmedInput + "." + ext;
//     return message;
//   }


// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
    
//     while (i <= number) {
//       total += i;
//       i++;

//     }
    
//     return total;
//   }

// let count = 0;

// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);

// for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }

// for (let i = 20; i >= 0; i -= 5) {
//     console.log(i);
//   }

// function calculateTotal(number) {
//     let total = 0;
//   for ( let i = 0; i <= number; i++) {
//     total += i;
//   }
//   return total;
// }

// for (let i = 0; i >= - 5; i--) {
//     console.log(i);
//   }

// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 2; i <= number; i += 2){
//         total += i;
//     }
//     return total;
//   }

// for (let i = 0; i < 10; i+=1) {
//     console.log(i);
  
//     if (i === 5) {
//       console.log('Met the number 5, interrupt the execution of the cycle');
//       break;
//     }
//   }
  
//   console.log('Log after cycle');

// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i++){
//     if(i % 5 === 0){
//      number = i;
     
//      break;
    
//     }
    
// }

// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumberFromFive(10, 9);
// console.log("Log after exiting function");


// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++){
//       if ((i % divisor) === 0){
//         return i;
//       }
//     }
//   }