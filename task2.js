<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    <script>
        // ================= TASK 1: Student Result Checker =================
console.log("----- Task 1: Student Result -----");

let marks = 75;

// Pass or Fail
let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:", result);

// Grade
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("No Grade");
}


// ================= TASK 2: Employee Bonus Calculator =================
console.log("\n----- Task 2: Employee Bonus -----");

let salary = 25000;

let bonus = salary * 0.10;
let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);


// ================= TASK 3: User Login Validation =================
console.log("\n----- Task 3: Login Validation -----");

let email = "venkat@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}


// ================= TASK 4: Product Discount Calculator =================
console.log("\n----- Task 4: Discount Calculator -----");

let price = 2000;

let finalPrice = price > 1000 ? price - (price * 0.20) : price;

console.log("Final Amount :", finalPrice);


// ================= TASK 5: Array Product Management =================
console.log("\n----- Task 5: Array Operations -----");

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);
console.log("Last Product :", products[products.length - 1]);
console.log("Total Products :", products.length);


// ================= TASK 6: Employee Object =================
console.log("\n----- Task 6: Object -----");

let employee = {
    name: "venkat",
    department: "Development",
    salary: 30000
};

console.log("Employee Details :", employee);
console.log("Employee Name :", employee.name);
console.log("Employee Salary :", employee.salary);


// ================= TASK 7: E-Commerce Cart Total =================
console.log("\n----- Task 7: Cart Total -----");

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let total = shirt + pant + shoe;
let discount = total * 0.10;
let finalAmount = total - discount;

console.log("Total Bill :", total);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);


// ================= TASK 8: Age Eligibility Checker =================
console.log("\n----- Task 8: Age Eligibility -----");

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}


// ================= TASK 9: Increment Decrement Practice =================
console.log("\n----- Task 9: Increment/Decrement -----");

let a = 10;

console.log("Initial Value :", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);


// ================= TASK 10: Mini Employee Attendance System =================
console.log("\n----- Task 10: Attendance -----");

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}


// ================= BONUS TASK: Employee Management =================
console.log("\n----- Bonus Task -----");

let emp = {
    id: 232326,
    name: "Venkat",
    department: "Information",
    salary: 40000,
    experience: 3
};

console.log("Employee ID :", emp id);
console.log("Employee Name :", emp name);
console.log("Department :", emp department);
console.log("Salary :",emp salary );
console.log("Experience :", emp.experience + "years");

let empBonus = emp.salary * 0.10;
let empFinalSalary = 40000 + empBonus;

console.log("Bonus :", empBonus);
console.log("Final Salary :", empFinalSalary);

let performance = emp.experience >= 2 ? "Good" : "Average";
console.log("Performance Status :", performance);