// let now = new Date();
// document.write(now);

// let now = new Date();
// let currentMonth = now.getMonth();
// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const monthName = monthNames[currentMonth];
// document.write(monthName);

// let now = new Date();
// let currentDay = now.getDay();
// let dayNames = ["Monday","Tuseday","Wednsday","Thursday","Friday","Saturday","Sunday"];
// let dayName = dayNames[currentDay];
// let result = dayName.slice(0,3);
// document.write(result);

// let now = new Date();
// let toDay = now.getDay();
// let dayNames = ["Monday","Tuseday","Wednsday","Thursday","Friday","Saturday","Sunday"];
// if(toDay === "Sunday" || toDay === "Saturday"){
//   alert("its fun day")
// }else{
//   alert("nothing");
// }
// let now = new Date();
// let currentDate = now.getDate();
// if(currentDate <= 15){
//   alert("First fifteen days of  the  month");
// }else{
//   alert("Last days of  the  month");
// }
// document.write(currentDate);

// let now = new Date('jan 1 1970');
// let currentDate = new Date();
// let diff = currentDate.getTime() - now.getTime();
// let minutes = Math.floor(diff / (1000 * 60));
// document.write(`Elapesd minutes since january 1, 1970  :  ${minutes}`);

// var now = new Date();
// var hours = now.getHours();
// if(hours < 12){
//   alert("its am");
// }else{
//   alert("its pm");
// }

// let now = new Date();
// let ramzanStart = new Date('june 18,2015');

// let diffTime =(now.getTime() - ramzanStart.getTime());
// let diffDays = Math.ceil (diffTime / (1000 * 3600 * 24));
// document.write(diffDays);

// let now = new Date();
// let a = new Date(2020,11,31);
// document.write(a);

// let now = new Date();
// let currentDate = new Date('jan 1, 2015');
// let diffMs = now.getTime() - currentDate.getTime();
// let diffS = Math.floor(diffMs / (1000));
// document.write(diffS);

// const now = new Date();
// const currentHours = now.getHours();
// const setNew = now.setHours(currentHours + 1);
// document.write(now);

// const now = new Date();
// const setNew = now.setFullYear(now.getFullYear() - 100);
// document.write(now);

// let now = new Date();
// let age = prompt("please enter your age");
// let birtYear = now.getFullYear() - age;

// let now = new Date();
// let months = ["jan","Febury","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// let currentMonth = now.getMonth();
// let month = months[currentMonth];
// let custmerName = "Danish";
// let unites = 1000;
// let chargesperUnit = 20;
// let netAmountPay = unites * chargesperUnit;
// let lateCharges = 2500;
// let grossAmount = netAmountPay + lateCharges;
// document.write("Customer Name:", custmerName + "<br>" + "current month:",month + "<br>" + "consume unites:",unites + "<br>" + "charges per unit:",chargesperUnit + "<br>" + "Net Amount Payable:",netAmountPay + "<br>" + "Late payment surcharges:",lateCharges + "<br>" + "Gross Amount Payable:",grossAmount);
