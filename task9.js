<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>E-Commerce Dashboard</title>
<style>
  body {
    font-family: Arial;
    margin: 20px;
  }
  .top-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  input, select {
    padding: 8px;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }
  .card {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
  }
  .card img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
  button {
    padding: 6px 10px;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
</head>
<body>

<h2>🛒 E-Commerce Dashboard</h2>

<div class="top-bar">
  <input type="text" id="search" placeholder="Search product..." />
  
  <select id="category">
    <option value="all">All</option>
    <option value="men's clothing">Men's Clothing</option>
    <option value="women's clothing">Women's Clothing</option>
    <option value="electronics">Electronics</option>
    <option value="jewelery">Jewelry</option>
  </select>

  <h4>Cart: <span id="cartCount">0</span></h4>
</div>

<h3 id="status">Loading Products...</h3>

<div class="products" id="products"></div>

<h3>📊 Statistics</h3>
<p>Total Products: <span id="total"></span></p>
<p>Average Price: <span id="avg"></span></p>
<p>Highest Price Product: <span id="high"></span></p>
<p>Lowest Price Product: <span id="low"></span></p>

<script>
let products = [];
let filteredProducts = [];
let cart = [];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

// ✅ Fetch API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    filteredProducts = data;
    displayProducts(data);
    showStats(data);
    document.getElementById("status").innerText = "Products Loaded Successfully";
  })
  .catch(err => {
    console.log(err);
    document.getElementById("status").innerText = "Error Loading Products";
  })
  .finally(() => {
    console.log("Fetch Completed");
  });

// ✅ Display Products
function displayProducts(data) {
  productContainer.innerHTML = "";

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" />
      <h4>${p.title}</h4>
      <p>₹ ${p.price}</p>
      <p>${p.category}</p>
      <p>⭐ ${p.rating.rate}</p>
      <button onclick="addToCart(${p.id})">Add To Cart</button>
      <button onclick="removeFromCart(${p.id})">Remove</button>
    `;

    productContainer.appendChild(card);
  });
}

// ✅ Search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});

// ✅ Category Filter
categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;

  if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(p => p.category === category);
  }

  displayProducts(filteredProducts);
});

// ✅ Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// ✅ Remove from Cart
function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id);
  updateCart();
}

// ✅ Update Cart Count
function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
}

// ✅ Statistics
function showStats(data) {
  document.getElementById("total").innerText = data.length;

  const avg = data.reduce((sum, p) => sum + p.price, 0) / data.length;
  document.getElementById("avg").innerText = avg.toFixed(2);

  const sorted = [...data].sort((a, b) => b.price - a.price);
  document.getElementById("high").innerText = sorted[0].title;

  const low = data.reduce((min, p) => p.price < min.price ? p : min);
  document.getElementById("low").innerText = low.title;
}
</script>

</body>
</html>