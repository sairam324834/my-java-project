<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    </script>
    console.log("----- Task 1: Student Management System -----");

var students = [
  { id: 1, name: "Ram", department: "CSE", mark: 85 },
  { id: 2, name: "Sita", department: "ECE", mark: 92 },
  { id: 3, name: "John", department: "MECH", mark: 45 },
  { id: 4, name: "Anu", department: "CSE", mark: 76 },
  { id: 5, name: "Raj", department: "IT", mark: 60 }
];

// Display names
for (var i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

// Total marks
var totalMarks = 0;
for (var i = 0; i < students.length; i++) {
  totalMarks += students[i].mark;
}
console.log("Total Marks:", totalMarks);

// Above 80
for (var i = 0; i < students.length; i++) {
  if (students[i].mark > 80) {
    console.log("Above 80:", students[i].name);
  }
}

// Grade
function getGrade(mark) {
  if (mark >= 90) return "A";
  else if (mark >= 75) return "B";
  else if (mark >= 50) return "C";
  else return "Fail";
}

// Print details
function printStudent(student) {
  console.log(student.name, student.mark, getGrade(student.mark));
}

for (var i = 0; i < students.length; i++) {
  printStudent(students[i]);
}
console.log("----- Task 2: Employee Payroll -----");

var employees = [
  { id: 1, name: "Amit", salary: 40000, department: 1 },
  { id: 2, name: "Neha", salary: 25000, department: 2 },
  { id: 3, name: "Ravi", salary: 32000, department: 1 }
];

// Names
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

// Total salary
var totalSalary = 0;
for (var i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}
console.log("Total Salary:", totalSalary);

// Above 30k
for (var i = 0; i < employees.length; i++) {
  if (employees[i].salary > 30000) {
    console.log("High Salary:", employees[i].name);
  }
}

// Switch
function deptName(code) {
  switch (code) {
    case 1: return "IT";
    case 2: return "HR";
    default: return "Other";
  }
}

// Callback
function payrollReport(callback) {
  for (var i = 0; i < employees.length; i++) {
    callback(employees[i]);
  }
}

payrollReport(function(emp) {
  console.log(emp.name, deptName(emp.department));
});
console.log("----- Task 3: Food System -----");

var foods = [
  { id: 1, foodName: "Pizza", price: 250, category: 1 },
  { id: 2, foodName: "Burger", price: 150, category: 2 },
  { id: 3, foodName: "Biryani", price: 300, category: 3 }
];

// Names
for (var i = 0; i < foods.length; i++) {
  console.log(foods[i].foodName);
}

// Total value
var total = 0;
for (var i = 0; i < foods.length; i++) {
  total += foods[i].price;
}
console.log("Total Menu Value:", total);

// Above 200
for (var i = 0; i < foods.length; i++) {
  if (foods[i].price > 200) {
    console.log("Expensive:", foods[i].foodName);
  }
}

// Switch
function foodCategory(c) {
  switch (c) {
    case 1: return "Fast Food";
    case 2: return "Snacks";
    case 3: return "Main Course";
  }
}

// Callback
function orderConfirm(callback) {
  callback("Order Placed Successfully!");
}

orderConfirm(function(msg) {
  console.log(msg);
});
console.log("----- Task 4: Movie Booking -----");

var movies = [
  { movieName: "RRR", ticketPrice: 200, availableSeats: 50, lang: 1 },
  { movieName: "KGF", ticketPrice: 180, availableSeats: 0, lang: 2 }
];

// Names
for (var i = 0; i < movies.length; i++) {
  console.log(movies[i].movieName);
}

// Seats
var seats = 0;
for (var i = 0; i < movies.length; i++) {
  seats += movies[i].availableSeats;
}
console.log("Total Seats:", seats);

// Booking check
for (var i = 0; i < movies.length; i++) {
  if (movies[i].availableSeats > 0) {
    console.log("Booking Available:", movies[i].movieName);
  }
}

// Switch
function language(l) {
  switch (l) {
    case 1: return "Telugu";
    case 2: return "Hindi";
  }
}

// Callback
function booking(cb) {
  cb("Booking Confirmed");
}

booking(function(msg) {
  console.log(msg);
});
console.log("----- Task 5: Hospital -----");

var patients = [
  { patientId: 1, patientName: "Ramesh", age: 65, disease: 1 },
  { patientId: 2, patientName: "Suresh", age: 30, disease: 2 }
];

// Names
for (var i = 0; i < patients.length; i++) {
  console.log(patients[i].patientName);
}

// Count
console.log("Total Patients:", patients.length);

// Age > 60
for (var i = 0; i < patients.length; i++) {
  if (patients[i].age > 60) {
    console.log("Senior:", patients[i].patientName);
  }
}

// Switch
function diseaseDept(d) {
  switch (d) {
    case 1: return "Cardiology";
    case 2: return "General";
  }
}

// Callback
function appointment(cb) {
  cb("Appointment Confirmed");
}

appointment(function(msg) {
  console.log(msg);
});
console.log("----- Task 6: Library -----");

var books = [
  { bookId: 1, bookName: "JS", author: "ABC", price: 600 },
  { bookId: 2, bookName: "HTML", author: "XYZ", price: 300 }
];

// Names
for (var i = 0; i < books.length; i++) {
  console.log(books[i].bookName);
}

// Total value
var totalBook = 0;
for (var i = 0; i < books.length; i++) {
  totalBook += books[i].price;
}
console.log(totalBook);

// Above 500
for (var i = 0; i < books.length; i++) {
  if (books[i].price > 500) {
    console.log(books[i].bookName);
  }
}

// Issue function
function issueBook(name) {
  console.log(name + " issued");
}

issueBook("JS");
console.log("----- Task 7: E-Commerce -----");

var products = [
  { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
  { productId: 2, productName: "Mouse", price: 500, stock: 20 }
];

// Display
for (var i = 0; i < products.length; i++) {
  console.log(products[i].productName);
}

// Inventory
var inv = 0;
for (var i = 0; i < products.length; i++) {
  inv += products[i].price * products[i].stock;
}
console.log(inv);

// Low stock
for (var i = 0; i < products.length; i++) {
  if (products[i].stock < 10) {
    console.log(products[i].productName);
  }
}

// Callback
function report(cb) {
  cb("Report Generated");
}

report(function(msg) {
  console.log(msg);
});
console.log("----- Task 8: Admission -----");

var applicants = [
  { name: "Ravi", age: 19, percentage: 70, department: 1 },
  { name: "Anu", age: 17, percentage: 80, department: 2 }
];

// Names
for (var i = 0; i < applicants.length; i++) {
  console.log(applicants[i].name);
}

// Eligibility
var count = 0;
for (var i = 0; i < applicants.length; i++) {
  if (applicants[i].age >= 18 && applicants[i].percentage >= 60) {
    count++;
  }
}
console.log("Eligible:", count);

// Callback
function admission(cb) {
  cb("Admission Done");
}

admission(function(msg) {
  console.log(msg);
});
console.log("----- Task 9: Bus -----");

var passengers = [
  { passengerId: 1, name: "venkat", seatNumber: 1, ticketPrice: 500 },
  { passengerId: 2, name: "sairam", seatNumber: 2, ticketPrice: 500 }
];

// Names
for (var i = 0; i < passengers.length; i++) {
  console.log(passengers[i].name);
}

// Total collection
var total = 0;
for (var i = 0; i < passengers.length; i++) {
  total += passengers[i].ticketPrice;
}
console.log(total);

// Callback
function ticket(cb) {
  cb("Ticket Confirmed");
}

ticket(function(msg) {
  console.log(msg);
});
console.log("----- Task 10: Mobile Store -----");

var mobiles = [
  { brand: "Samsung", model: "S21", price: 70000, stock: 5 },
  { brand: "Realme", model: "Narzo", price: 15000, stock: 10 }
];

// Names
for (var i = 0; i < mobiles.length; i++) {
  console.log(mobiles[i].brand, mobiles[i].model);
}

// Stock value
var total = 0;
for (var i = 0; i < mobiles.length; i++) {
  total += mobiles[i].price * mobiles[i].stock;
}
console.log(total);

// Above 20k
for (var i = 0; i < mobiles.length; i++) {
  if (mobiles[i].price > 20000) {
    console.log(mobiles[i].model);
  }
}

// Callback
function sales(cb) {
  cb("Sales Report Generated");
}

sales(function(msg) {
  console.log(msg);
});