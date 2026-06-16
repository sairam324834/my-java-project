<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    </script>
    // =======================
// Task 1: Traffic Signal (Switch)
// =======================
function trafficSignal(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Get Ready");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid Signal");
  }
}
trafficSignal("green");


// =======================
// Task 2: Employee Attendance (For Loop)
// =======================
for (let i = 1; i <= 30; i++) {
  console.log(`Employee ${i} Present`);
}


// =======================
// Task 3: ATM Withdrawal (While Loop)
// =======================
let balance = 10000;
while (balance > 0) {
  balance -= 500;
  console.log(`Remaining Balance: ₹${balance}`);
}


// =======================
// Task 4: College Admission (Nested If)
// =======================
function checkAdmission(age, percentage, examPassed) {
  if (age >= 18) {
    if (percentage >= 70) {
      if (examPassed) {
        console.log("Admission Approved");
      } else {
        console.log("Rejected: Entrance exam not passed");
      }
    } else {
      console.log("Rejected: Percentage below 70");
    }
  } else {
    console.log("Rejected: Age below 18");
  }
}
checkAdmission(20, 75, true);


// =======================
// Task 5: Food Delivery (Function)
// =======================
function delivery(customerName, foodItem, address) {
  console.log(`Order for ${customerName}: ${foodItem} will be delivered to ${address}`);
}
delivery("Sairam", "Pizza", "Vijayawada");


// =======================
// Task 6: Salary System (Return Function)
// =======================
function calculateSalary(base) {
  return base + base * 0.2;
}

function calculateBonus(salary) {
  return salary + salary * 0.1;
}

let salary = calculateSalary(30000);
let finalSalary = calculateBonus(salary);
console.log("Final Salary:", finalSalary);


// =======================
// Task 7: Discount Engine (Callback)
// =======================
function applyDiscount(amount, callback) {
  let discounted = amount - amount * 0.1;
  callback(discounted);
}

function generateInvoice(finalAmount) {
  console.log("Invoice Amount:", finalAmount);
}

applyDiscount(1000, generateInvoice);


// =======================
// Task 8: Generator Function
// =======================
function* offersGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let offers = offersGenerator();
console.log(offers.next().value);
console.log(offers.next().value);


// =======================
// Task 9: Spread Operator
// =======================
let scienceStudents = ["A", "B"];
let commerceStudents = ["C", "D"];

let allStudents = [...scienceStudents, ...commerceStudents];
console.log(allStudents);


// =======================
// Task 10: Rest Operator
// =======================
function totalMarks(name, ...marks) {
  let total = marks.reduce((sum, m) => sum + m, 0);
  console.log(`${name} Total Marks: ${total}`);
}
totalMarks("Sairam", 80, 90, 70);


// =======================
// Task 11: Destructuring
// =======================
let emp = {
  name: "venkat",
  department: "IT",
  salary: 40000,
  experience: 3
};

let { name, department, salary: empSalary, experience } = emp;
console.log(name, department, empSalary, experience);


// =======================
// Task 12: Filter Method
// =======================
let products = [
  { name: "Laptop", price: 60000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 15000 }
];

let filtered = products.filter(p => p.price > 5000);
console.log(filtered);


// =======================
// Task 13: Find Method
// =======================
let customers = [
  { name: "A", amount: 20000 },
  { name: "B", amount: 60000 },
  { name: "C", amount: 30000 }
];

let premium = customers.find(c => c.amount > 50000);
console.log(premium);


// =======================
// Task 14: Reduce Method
// =======================
let expenses = [1000, 2000, 3000];
let totalExpense = expenses.reduce((sum, e) => sum + e, 0);
console.log("Total Expense:", totalExpense);


// =======================
// Task 15: Every Method
// =======================
let players = [
  { name: "P1", age: 20 },
  { name: "P2", age: 22 }
];

let allAdults = players.every(p => p.age > 18);
console.log("All players above 18:", allAdults);


// =======================
// Task 16: Some Method
// =======================
let candidates = [
  { name: "A", skills: ["Java"] },
  { name: "B", skills: ["React"] }
];

let hasReact = candidates.some(c => c.skills.includes("React"));
console.log("Any React Developer:", hasReact);


// =======================
// Task 17: Mobile Validator
// =======================
function validateMobile(num) {
  let str = num.toString();
  if (
    str.length === 10 &&
    ["6", "7", "8", "9"].some(d => str.startsWith(d))
  ) {
    console.log("Valid Number");
  } else {
    console.log("Invalid Number");
  }
}
validateMobile(9876543210);


// =======================
// Task 18: URL Slug
// =======================
let title = "Learn JavaScript Complete Course";
let slug = title.toLowerCase().split(" ").join("-");
console.log(slug);


// =======================
// Task 19: Sort Method
// =======================
let employees = [
  { name: "A", salary: 30000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 20000 }
];

// High → Low
employees.sort((a, b) => b.salary - a.salary);
console.log("High to Low:", employees);

// Low → High
employees.sort((a, b) => a.salary - b.salary);
console.log("Low to High:", employees);


// =======================
// Task 20: Map Method
// =======================
let movies = ["RRR", "Pushpa", "KGF"];

let bookings = movies.map((movie, index) => {
  return {
    movie,
    bookingId: "BOOK" + (index + 1)
  };
});

console.log(bookings);