<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    <script>
        // TASK 1: Age Category Finder
let age = Number(prompt("Enter age:"));
if (age <= 12) console.log("Child");
else if (age <= 19) console.log("Teenager");
else if (age <= 59) console.log("Adult");
else console.log("Senior Citizen");


// TASK 2: Salary Hike Calculator
let salary = Number(prompt("Enter salary:"));
let hike = 0;

if (salary < 20000) hike = salary * 0.20;
else if (salary <= 50000) hike = salary * 0.10;
else hike = salary * 0.05;

console.log("Old Salary:", salary);
console.log("New Salary:", salary + hike);


// TASK 3: Electricity Bill
let units = Number(prompt("Enter units:"));
let bill = 0;

if (units <= 100) bill = units * 5;
else if (units <= 200) bill = units * 7;
else bill = units * 10;

console.log("Total Bill:", bill);


// TASK 4: Simple ATM
let balance = 100000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Funds");
}


// TASK 5: Login Validation
let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "venkat" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


// TASK 6: Mobile Recharge Offer
let recharge = Number(prompt("Enter recharge amount:"));

if (recharge >= 499) console.log("Netflix Offer");
else if (recharge >= 299) console.log("2GB Extra Data");
else console.log("No Offer");


// TASK 7: Traffic Signal (Switch)
let signal = prompt("Enter signal color:");

switch (signal.toLowerCase()) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid Color");
}


// TASK 8: Employee Attendance
let working = Number(prompt("Enter working days:"));
let present = Number(prompt("Enter present days:"));

let percentage = (present / working) * 100;

console.log("Attendance:", percentage + "%");

if (percentage >= 75) console.log("Eligible");
else console.log("Not Eligible");


// TASK 9: Bus Ticket Booking
let tickets = Number(prompt("Enter number of tickets:"));
let price = 500;

let total = tickets * price;
let gst = total * 0.05;

console.log("Total:", total);
console.log("GST:", gst);
console.log("Final Amount:", total + gst);


// TASK 10: Restaurant Bill
let foodCost = Number(prompt("Enter food cost:"));
let discount = 0;

if (foodCost > 2000) discount = foodCost * 0.10;

console.log("Final Bill:", foodCost - discount);


// TASK 11: Police Recruitment (Nested IF)
let pAge = Number(prompt("Enter age:"));
let height = Number(prompt("Enter height:"));
let weight = Number(prompt("Enter weight:"));

if (pAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight less than 55");
        }
    } else {
        console.log("Rejected: Height less than 160");
    }
} else {
    console.log("Rejected: Age less than 18");
}


// TASK 12: Student Result
let m1 = Number(prompt("Enter mark 1:"));
let m2 = Number(prompt("Enter mark 2:"));
let m3 = Number(prompt("Enter mark 3:"));
let m4 = Number(prompt("Enter mark 4:"));
let m5 = Number(prompt("Enter mark 5:"));

let totalMarks = m1 + m2 + m3 + m4 + m5;
let percent = totalMarks / 5;

console.log("Total:", totalMarks);
console.log("Percentage:", percent);

if (percent >= 90) console.log("Grade A+");
else if (percent >= 80) console.log("Grade A");
else if (percent >= 70) console.log("Grade B");
else if (percent >= 60) console.log("Grade C");
else console.log("Fail");


// TASK 13: Employee Shift Finder
let time = Number(prompt("Enter hour (0-23):"));

if (time >= 6 && time < 14) console.log("Morning Shift");
else if (time >= 14 && time < 22) console.log("Afternoon Shift");
else console.log("Night Shift");


// TASK 14: Loan Eligibility
let lAge = Number(prompt("Enter age:"));
let lSalary = Number(prompt("Enter salary:"));
let exp = Number(prompt("Enter experience:"));

if (lAge >= 21 && lSalary >= 25000 && exp >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// TASK 15: Cab Fare Calculator
let distance = Number(prompt("Enter distance:"));
let fare = 0;

if (distance <= 5) fare = distance * 20;
else fare = (5 * 20) + ((distance - 5) * 15);

console.log("Total Fare:", fare);


// TASK 16: Multiplication Table
let num = Number(prompt("Enter number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


// TASK 17: Password Checker
let passLength = Number(prompt("Enter password length:"));

if (passLength < 6) console.log("Weak");
else if (passLength <= 10) console.log("Medium");
else console.log("Strong");


// TASK 18: Company Bonus System
let expYears = Number(prompt("Enter experience:"));
let empSalary = Number(prompt("Enter salary:"));
let bonus = 0;

if (expYears <= 2) bonus = empSalary * 0.05;
else if (expYears <= 5) bonus = empSalary * 0.10;
else bonus = empSalary * 0.20;

console.log("Bonus:", bonus);


// TASK 19: Countdown Timer (while)
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}
console.log("Happy New Year");


// TASK 20: Interview Selection (Nested IF)
let degree = prompt("Degree completed? (yes/no)");
let communication = prompt("Communication (good/bad)");
let tech = Number(prompt("Technical score:"));

if (degree === "yes") {
    if (communication === "good") {
        if (tech >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Low technical score");
        }
    } else {
        console.log("Rejected: Poor communication");
    }
} else {
    console.log("Rejected: Degree not completed");
}