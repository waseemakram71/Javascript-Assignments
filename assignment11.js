// function sum(a,b){

//   document.write(a + b );

// }

// var functionExp = sum(786,4 );
// functionExp;
// function fullName(firstName,lastName){
//   var n = firstName + " " + lastName;
//   return n;

// }
//  var w = fullName("waseem","akram");
//  document.write(w);

// function sum(a,b){
//   var n = a + b;
//   return n;

// }
//  var w = sum(7,4);
//  document.write(w);

// function CurrentDate(){
//   let now = new Date();
//   document.write(now);
// }
// CurrentDate();

// function square(num){

//   return num * num;

// }
// let a = 10;
// let result = square(a);
// document.write(result);

// var aera =  () =>{

//  let a = 10;
//  let b = 20;
// return a * b;

// }

// let result = aera();
// document.write(result);
// let num = 4;
// function factorial(num) {
//   // base case
//   if (num === 0) {
//     return 1;
//   }
//   // recursive case
//   else {
//     return num * factorial(num - 1);
//   }
// }
// let  result = factorial(4);
// document.write(result);

// function count(start,end){
//   for(let i = start; i<= end; i++){
// document.write(i + "<br>");
//   }
// }
// count(1,10);
// let str = prompt("enter the string")
//  function pal(str){
//   let a = str.split('');
//   let b = a.reverse('');
//   let c = b.join('');
//   if(c === str){
//     alert("this is palindrome");
//   }else{
//     alert("this is not palindrome");
//   }
//  }
//  pal(str);

// function calculateHypotenuse(base, perpendicular) {

//   function calculateSquare(num) {
//     return num * num;
//   }

//   const baseSquared = calculateSquare(base);
//   const perpendicularSquared = calculateSquare(perpendicular);

//   const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);

//   return hypotenuse;}

// let a = calculateHypotenuse(2,3)
// document.write(a);
function result() {
  let str = "waseem akram sharani";
  let a = str.split(" ");
  for (let i = 0; i < a.length; i++) {
    let firstChar = a[i].slice(0, 1);
    let otherChar = a[i].slice(1);
    firstChar = firstChar.toUpperCase();
    otherChar = otherChar.toLowerCase();
    let full = firstChar + otherChar;
    document.write(full + " ");
  }
  document.write("</br>");
}
result();
result();
