<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Tasks</title>
</head>
<body>
<h1>JavaScript Practice Tasks</h1>

    </script>

    ------------------task 1------------------

    const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kavin", salary: 50000 },
  { id: 3, name: "John", salary: 75000 }
];

// Above 40k
const above40k = employees.filter(emp => emp.salary > 40000);
console.log("Above 40K:", above40k);

// First above 60k
const above60k = employees.find(emp => emp.salary > 60000);
console.log("First Above 60K:", above60k);

// Total salary
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// Names array
const names = employees.map(emp => emp.name);
console.log("Names:", names);


-------------------task 2---------------

function checkAdmission(name, age, percentage) {
  if (age >= 18 && percentage >= 60) {
    return `${name} is Eligible`;
  } else {
    return `${name} is Not Eligible`;
  }
}

console.log(checkAdmission("Sai", 20, 75));


------------------task 3----------------------

const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

// Total bill
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Bill:", total);

// Most expensive
const expensive = cart.reduce((max, item) =>
  item.price > max.price ? item : max
);
console.log("Expensive Product:", expensive);

// Product names
const productNames = cart.map(item => item.product);
console.log("Products:", productNames);


------------------task 4--------------

function trafficSignal(signal) {
  let fine = 0;

  switch (signal) {
    case "red":
      console.log("Stop");
      fine = 1000;
      break;
    case "yellow":
      console.log("Get Ready");
      fine = 500;
      break;
    case "green":
      console.log("Go");
      fine = 0;
      break;
    default:
      console.log("Invalid Signal");
  }

  console.log("Fine:", fine);
}

trafficSignal("red");

---------------task 5--------------

const students = [
  { name: "A", mark: 95 },
  { name: "B", mark: 45 },
  { name: "C", mark: 80 },
  { name: "D", mark: 30 }
];

// Passed
const passed = students.filter(s => s.mark >= 50);
console.log("Passed:", passed);

// Failed
const failed = students.filter(s => s.mark < 50);
console.log("Failed:", failed);

// Grades
const grades = students.map(s => {
  let grade = s.mark >= 90 ? "A" :
              s.mark >= 75 ? "B" :
              s.mark >= 50 ? "C" : "Fail";
  return { name: s.name, grade };
});
console.log("Grades:", grades);

----------------task 6---------------

function placeOrder(customerName, ...items) {
  console.log("Customer:", customerName);
  console.log("Items:", items);
  console.log("Total Items:", items.length);
}

placeOrder("Sai", "Pizza", "Burger", "Coke");

---------------task 7-------------

let balance = 1000;

function deposit(amount) {
  balance += amount;
  return balance;
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
  } else {
    console.log("Insufficient Balance");
  }
  return balance;
}

function checkBalance() {
  return balance;
}

console.log(deposit(500));
console.log(withdraw(300));
console.log(checkBalance());

-------------task 8--------------

let seats = [];

function bookSeat(seatNo) {
  if (!seats.includes(seatNo)) {
    seats.push(seatNo);
    console.log("Booked:", seatNo);
  } else {
    console.log("Seat already booked");
  }
}

bookSeat(1);
bookSeat(2);
bookSeat(1);

console.log("All Seats:", seats);

------------task 9-------------

function validateUser(username, password, email) {
  if (username.includes(" ")) {
    return "Username should not contain spaces";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  return "Login Successful";
}

console.log(validateUser("Sai", "password123", "sai@gmail.com"));

---------------task 10-------------

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    console.log("All Titles:");
    data.forEach(p => console.log(p.title));

    const above1000 = data.filter(p => p.price > 1000);
    console.log("Above 1000:", above1000);

    console.log("Total Products:", data.length);
  });

  -----------task 11------------


function getDOBDetails(dob) {
  const date = new Date(dob);

  console.log("Day:", date.getDate());
  console.log("Month:", date.getMonth() + 1);
  console.log("Year:", date.getFullYear());

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  console.log("Weekday:", days[date.getDay()]);
}

getDOBDetails("2001-05-21");

-----------task 12---------

function netflixPlan(plan) {
  let result =
    plan === "mobile" ? "Watch on Mobile" :
    plan === "basic" ? "HD Streaming" :
    plan === "standard" ? "Full HD + 2 Screens" :
    plan === "premium" ? "4K + 4 Screens" :
    "Invalid Plan";

  console.log(result);
}

netflixPlan("premium");

------------task 13-----------

const patients = [
  { id: 1, name: "A", critical: true },
  { id: 2, name: "B", critical: false },
  { id: 3, name: "C", critical: true }
];

// Critical patients
const criticalPatients = patients.filter(p => p.critical);
console.log("Critical:", criticalPatients);

// Find by ID
const patient = patients.find(p => p.id === 2);
console.log("Patient ID 2:", patient);

// Count
console.log("Total Patients:", patients.length);

----------task 14--------------

const inv1 = [{ name: "Pen", price: 10 }];
const inv2 = [{ name: "Book", price: 50 }];

// Merge
const merged = [...inv1, ...inv2];
console.log("Merged:", merged);

// Destructuring
merged.forEach(({ name, price }) => {
  console.log(name, price);
});

// Add new product
const updated = [...merged, { name: "Pencil", price: 5 }];
console.log("Updated:", updated);

-----------task 15------------

let group = ["A", "B", "C"];

// Add
group.push("D");

// Remove last
group.pop();

// Remove first
group.shift();

// Add at start
group.unshift("Z");

// Insert at position
group.splice(1, 0, "X");

console.log("Final Group:", group); 