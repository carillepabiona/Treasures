// ----- Sample Data: Food Items -----
const foodData = [
    { id: 1, name: "Seafood Pansit Canton", category: "Noodles", price: 398, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 2, name: "Fried Noodles with Assorted Meat", category: "Noodles", price: 398, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 3, name: "Fried Beef or Asado HOFAN & Vegetable", category: "Noodles", price: 358, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 4, name: "Fried Beef or Asado HOFAN & Bean sprout", category: "Noodles", price: 358, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 5, name: "Soy Noodles with Bean sprout", category: "Noodles", price: 328, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 6, name: "Bihon Guisado / Misua Guisado", category: "Noodles", price: 368, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 7, name: "Butchi", category: "SweetDessert", price: 2.00, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 8, name: "Mango Sago", category: "SweetDessert", price: 8.50, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 9, name: "Black Gulaman", category: "SweetDessert", price: 6.00, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 10, name: "Black Gulaman with Lychee", category: "SweetDessert", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 11, name: "Prawn Hakaw ", category: "Dimsum", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 12, name: "Pork and Shrimp Siomai ", category: "Dimsum", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 13, name: "Sharksfin Dumpling", category: "Dimsum", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 14, name: "Beancurd Roll ", category: "Dimsum", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 15, name: "Beef Roll", category: "Dimsum", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 16, name: "Beef Roll", category: "Pork", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 17, name: "Beef Roll", category: "Chicken", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 18, name: "Beef Roll", category: "Seafood", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" },
    { id: 19, name: "Beef Roll", category: "Appetizer", price: 8.99, img: "28_Treasures_Menu/Polonchay_with_three_mushrooms.jpg" }
];
// ----- Render Food Items Initially -----
const foodGrid = document.getElementById("foodGrid");
function renderFoodItems(items) {
    foodGrid.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "food-card";
        card.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h6>${item.name}</h6>
          <h6>₱${item.price.toFixed(2)}</h6>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
          <button onclick="ToggleFavorite()">❤️</button>
        `;
        foodGrid.appendChild(card);
    });
}
renderFoodItems(foodData);

// ----- Filter by Category -----
function filterCategory(cat) {
    if (!cat) return renderFoodItems(foodData);
    const filtered = foodData.filter(item => item.category.toLowerCase() === cat.toLowerCase());
    renderFoodItems(filtered);
}

// ----- Cart Logic -----
let cart = [];
function addToCart(id) {
    const foodItem = foodData.find(item => item.id === id);
    cart.push(foodItem);
    updateCartUI();
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}
function updateCartUI() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalSpan = document.getElementById("cartTotal");
    cartItemsDiv.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <span>${item.name} - ₱${item.price.toFixed(2)}</span>
          <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItemsDiv.appendChild(div);
    });
    cartTotalSpan.textContent = total.toFixed(2);
}

// ----- Toggle Cart (opens/closes cart sidebar) -----
function toggleCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.classList.toggle("open"); // Toggle the 'open' class to show/hide the sidebar
}
// ----- Chat Box Logic -----
function toggleChat(event) {
    const chatBox = document.getElementById("chatBox");
    const cartSidebar = document.getElementById("cartSidebar");

    // Close cart if open
    if (cartSidebar.classList.contains("open")) {
        cartSidebar.classList.remove("open");
    }

    chatBox.classList.toggle("open");

    // Listen for clicks outside to close
    if (chatBox.classList.contains("open")) {
        document.addEventListener("click", closeOnClickOutside);
    } else {
        document.removeEventListener("click", closeOnClickOutside);
    }

    event.stopPropagation(); // Prevent click from propagating
}

// ----- Close Cart or Chat when Clicking Outside -----
function closeOnClickOutside(event) {
    const cartSidebar = document.getElementById("cartSidebar");
    const chatBox = document.getElementById("chatBox");
    const cartButton = document.querySelector(".cart-button");
    const chatToggle = document.querySelector(".chat-toggle");

    // Check if the click is outside both containers and buttons
    if (
        !cartSidebar.contains(event.target) &&
        !chatBox.contains(event.target) &&
        !cartButton.contains(event.target) &&
        !chatToggle.contains(event.target)
    ) {
        cartSidebar.classList.remove("open");
        chatBox.classList.remove("open");

        // Remove event listener to prevent unnecessary checks
        document.removeEventListener("click", closeOnClickOutside);
    }
}