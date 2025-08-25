// 🚀 JavaScript Fundamentals Project

// -----------------------------
// 🎯 Part 1: Basics (Variables, Conditionals)
// -----------------------------
let userAge = 20; // Variable declaration
if (userAge >= 18) {
  console.log("You are an adult."); 
} else {
  console.log("You are a minor.");
}

// Greeting function with DOM interaction
document.getElementById("greetBtn").addEventListener("click", function() {
  let name = document.getElementById("username").value;
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "!";
  } else {
    document.getElementById("greeting").textContent = "Please enter your name!";
  }
});

// -----------------------------
// ❤️ Part 2: Functions
// -----------------------------
function calculateTotal(a, b) {
  return a + b;
}

function formatString(str) {
  return str.toUpperCase() + " 🎉";
}

// Function usage
document.getElementById("calcBtn").addEventListener("click", function() {
  let total = calculateTotal(5, 10);
  document.getElementById("calcResult").textContent = "Total: " + total;
  console.log(formatString("calculation done"));
});

// -----------------------------
// 🔁 Part 3: Loops
// -----------------------------
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // Clear before adding
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
});

// Another loop example: while loop
let counter = 0;
while (counter < 3) {
  console.log("While loop count: " + counter);
  counter++;
}

// -----------------------------
// 🌐 Part 4: DOM Manipulation
// -----------------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});

// Event listener for greeting section is already in Part 1
