// function power(a,b){
//   let result = 1;
//   for(let i = 1; i<=b; i++){
//     result = result * a;
//   }
//   return result;
//   }
// let num = power(3,2);
// document.write(num);
// function leap(year){
//   if(year % 4 == 0){
//     alert("The year is leap year");
//   }else{
//     alert("The year is not leap year")
//   }
// }
// leap(2020);

// function calculateS(a,b,c){
//   return (a +b + c) / 2;
// }
// function areaOfCircule(a,b,c){
//   let s = calculateS(a,b,c);
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// let result = areaOfCircule(10,12,4);
// document.write(result);

// // Function to calculate average marks
// function calculateAverage(marks) {
//   const sum = marks.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / marks.length;
//   return average;
// }

// // Function to calculate percentage
// function calculatePercentage(marks) {
//   const totalMarks = marks.length * 100;
//   const obtainedMarks = marks.reduce((acc, curr) => acc + curr, 0);
//   const percentage = (obtainedMarks / totalMarks) * 100;
//   return percentage;
// }

// // Main function to call other functions and display results
// function mainFunction(mark1, mark2, mark3) {
//   const marks = [mark1, mark2, mark3];
//   const average = calculateAverage(marks);
//   const percentage = calculatePercentage(marks);
//   console.log(`Average marks: ${average}`);
//   console.log(`Percentage: ${percentage}%`);
// }

// function customIndexOf(str, char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       return i;
//     }
//   }
//   return -1;
// }
// const str = "hello world";
// const char = "n";
// const index = customIndexOf(str, char);
// console.log(index);

// function deleteVowels(sentence) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (!vowels.includes(sentence[i].toLowerCase())) {
//       result += sentence[i];
//     }
//   }
//   return result;
// }
// const sentence = "This is a sample sentence.";
// const result = deleteVowels(sentence);
// console.log(result);

// function kmToMeters(km){
//   let meters = km * 1000;
//   return meters;
// }
// function kmToFeet(km){
//   let feet = km * 3280.84;
//   return feet;

// }
// function kmToInches(km){
//   let inches = km * 39370.1;
//   return inches;

// }
// function kmToCentimeter(km){
//   let centemeter = km * 100000;
//   return centemeter;

// }
// let distance = 10;
// let meters = kmToMeters(distance);
// let feet = kmToFeet(distance);
// let inches = kmToInches(distance);
// let centimeters = kmToCentimeter(distance);
// document.write(`${meters} is meter = km` + "<br>");
// document.write(`${feet} is feet` + "<br>");
// document.write(`${inches} is inches` + "<br>");
// document.write(`${centimeters} is centimeters`);

// function countVowelPairs(text) {
//   let count = 0;
//   for (let i = 0; i < text.length - 1; i++) {
//     const char1 = text[i].toLowerCase();
//     const char2 = text[i + 1].toLowerCase();
//     switch (char1 + char2) {
//       case "ae":
//       case "ai":
//       case "ao":
//       case "au":
//       case "ea":
//       case "ei":
//       case "eo":
//       case "eu":
//       case "ia":
//       case "ie":
//       case "io":
//       case "iu":
//       case "oa":
//       case "oe":
//       case "oi":
//       case "ou":
//       case "ua":
//       case "ue":
//       case "ui":
//       case "uo":
//         count++;
//         break;
//       default:
//         break;
//     }
//   }
//   return count;
// }
// const text = "Pleases read this application and give me gratuity";
// const count = countVowelPairs(text);
// console.log(`The text contains ${count} pairs of vowels in succession.`);

// // define constant rate of overtime pay
// const overtimeRate = 12;

// // prompt user for input
// let hoursWorked = prompt("Enter the number of hours worked:");

// // convert input to a number
// hoursWorked = parseInt(hoursWorked);

// // calculate overtime pay if applicable
// if (hoursWorked > 40) {
//   let overtimeHours = hoursWorked - 40;
//   let overtimePay = overtimeHours * overtimeRate;
//   console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
// } else {
//   console.log("No overtime pay earned.");
// }

// const link = (document.getElementById("link").onclick = () => {
//   alert("addasffad");
// });
