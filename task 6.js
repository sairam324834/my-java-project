<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    </script>
    let employee = {
  name: "Sairam",
  salary: 30000,
  experience: 4
};

let bonus = 0;

if (employee.experience >= 5) {
  bonus = employee.salary * 0.20;
} else if (employee.experience >= 2) {
  bonus = employee.salary * 0.10;
} else {
  bonus = employee.salary * 0.05;
}



let finalSalary = employee.salary + bonus;

console.log("Final Salary:", finalSalary);
let name = "venkat";
let age = 18;
let percentage = 65;

if (age >= 17) {
  if (percentage >= 60) {
    console.log("Admission Approved");
  } else {
    console.log("Admission Rejected");
  }
} else {
  console.log("Admission Rejected");
}


let choice = 1;

switch (choice) {
  case 1:
    console.log("Order Confirmed: Pizza");
    break;
  case 2:
    console.log("Order Confirmed: Burger");
    break;
  case 3:
    console.log("Order Confirmed: Shawarma");
    break;
  case 4:
    console.log("Order Confirmed: Fried Rice");
    break;
  default:
    console.log("Invalid Choice");
}



let students = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

let count = 0;

for (let student of students) {
  console.log(student);
  count++;
}

console.log("Total Students:", count);

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];

let total = 0;
let maxProduct = cart[0];

cart.forEach(item => {
  console.log(item.product);
  total += item.price;

  if (item.price > maxProduct.price) {
    maxProduct = item;
  }
});

console.log("Total:", total);
console.log("Most Expensive:", maxProduct.product);

let balance = 10000;

function deposit(amount) {
  balance += amount;
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
  } else {
    console.log("Insufficient Balance");
  }
}

function checkBalance() {
  console.log("Balance:", balance);
}

deposit(2000);
withdraw(3000);
checkBalance();

let age = 25;

if (age < 5) {
  console.log("Free Ticket");
} else if (age <= 18) {
  console.log("₹100");
} else if (age <= 60) {
  console.log("₹200");
} else {
  console.log("₹120");
}

let amount = 4000;
let discount = 0;

if (amount > 5000) {
  discount = amount * 0.20;
} else if (amount > 3000) {
  discount = amount * 0.10;
} else if (amount > 1000) {
  discount = amount * 0.05;
}

let finalAmount = amount - discount;

console.log("Original:", amount);
console.log("Discount:", discount);
console.log("Final:", finalAmount);

let items = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

items.push("Bread", "Butter");
items.shift();
items.pop();

console.log("Milk exists:", items.includes("Milk"));
console.log("Final Inventory:", items);

let patient = {
  patientName: "Kiran",
  age: 45,
  disease: "Fever",
  doctor: "Dr. Rao"
};

// for-in loop
for (let key in patient) {
  console.log(key + ":", patient[key]);
}

// destructuring
let { patientName, age, disease, doctor } = patient;

console.log(patientName, age, disease, doctor);

function sendSMS() {
  console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
  console.log("Order Placed Successfully");
  callback();
}

placeOrder(sendSMS);

function* offers() {
  yield "10% Cashback";
  yield "20% Cashback";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

let gen = offers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


let employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 30000 },
  { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highest = employees[0];

employees.forEach(emp => {
  console.log(emp.name);
  totalSalary += emp.salary;

  if (emp.salary > highest.salary) {
    highest = emp;
  }
});

console.log("Total Salary:", totalSalary);
console.log("Highest Paid:", highest.name);


let totalSeats = 50;

function bookSeats(seats) {
  if (seats <= totalSeats) {
    totalSeats -= seats;
    console.log("Seats Booked:", seats);
  } else {
    console.log("Booking Rejected");
  }
}

bookSeats(10);
bookSeats(45);


let totalSeats = 50;

function bookSeats(seats) {
  if (seats <= totalSeats) {
    totalSeats -= seats;
    console.log("Seats Booked:", seats);
  } else {
    console.log("Booking Rejected");
  }
}

bookSeats(10);
bookSeats(45);