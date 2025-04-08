// ----- Sample Data: Food Items -----
const foodData = [
    // NOODLES
    { id: 1, name: "Seafood Pancit Canton", category: "Noodles", price: 378, img: "28_Treasures_Menu/default.jpg" },
    { id: 2, name: "Pancit Canton", category: "Noodles", price: 378, img: "28_Treasures_Menu/default.jpg" },
    { id: 3, name: "Fried Noodles with Assorted Meat/Shredded Meat", category: "Noodles", price: 398, img: "28_Treasures_Menu/default.jpg" },
    { id: 4, name: "Soy Noodles with Bean Sprout", category: "Noodles", price: 328, img: "28_Treasures_Menu/default.jpg" },
    { id: 5, name: "Fried Beef or Asado HOFAN & Vegetables", category: "Noodles", price: 358, img: "28_Treasures_Menu/default.jpg" },
    { id: 6, name: "Fried Beef or Asado HOFAN & Beansprout", category: "Noodles", price: 358, img: "28_Treasures_Menu/default.jpg" },
    { id: 7, name: "Bihon Guisado / Misua Guisado", category: "Noodles", price: 368, img: "28_Treasures_Menu/default.jpg" },

    // NOODLES MAMI
    { id: 8, name: "28 Treasures Special", category: "Noodles Mami", price: 258, img: "28_Treasures_Menu/default.jpg" },
    { id: 9, name: "Beef with Shrimp Wanton", category: "Noodles Mami", price: 258, img: "28_Treasures_Menu/default.jpg" },
    { id: 10, name: "Shrimp Wanton", category: "Noodles Mami", price: 238, img: "28_Treasures_Menu/default.jpg" },
    { id: 11, name: "Braised Beef Brisket", category: "Noodles Mami", price: 258, img: "28_Treasures_Menu/default.jpg" },
    { id: 12, name: "Fish Ball & Fish Cake", category: "Noodles Mami", price: 228, img: "28_Treasures_Menu/default.jpg" },
    { id: 13, name: "Pork Meatballs", category: "Noodles Mami", price: 228, img: "28_Treasures_Menu/default.jpg" },
    { id: 14, name: "Asado", category: "Noodles Mami", price: 268, img: "28_Treasures_Menu/default.jpg" },
    { id: 15, name: "Shredded Chicken", category: "Noodles Mami", price: 228, img: "28_Treasures_Menu/default.jpg" },
    { id: 16, name: "Roast Duck", category: "Noodles Mami", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 17, name: "Seasonal Vegetables with Oyster Sauce", category: "Noodles Mami", price: 258, img: "28_Treasures_Menu/default.jpg" },

    // CONGEE
    { id: 18, name: "Fish Fillet", category: "Congee", price: 288, img: "28_Treasures_Menu/default.jpg" },
    { id: 19, name: "Shrimp Balls", category: "Congee", price: 256, img: "28_Treasures_Menu/default.jpg" },
    { id: 20, name: "Sliced Chicken with Mushroom", category: "Congee", price: 238, img: "28_Treasures_Menu/default.jpg" },
    { id: 21, name: "Pork Meatball (Bola-Bola)", category: "Congee", price: 238, img: "28_Treasures_Menu/default.jpg" },
    { id: 22, name: "Sliced Pork with Century Egg", category: "Congee", price: 248, img: "28_Treasures_Menu/default.jpg" },
    { id: 23, name: "Asado and Salted Egg", category: "Congee", price: 288, img: "28_Treasures_Menu/default.jpg" },

    // SWEET DESSERT
    { id: 24, name: "Butchi (4 pcs)", category: "Sweet Dessert", price: 118, img: "28_Treasures_Menu/default.jpg" },
    { id: 25, name: "Mango Sago", category: "Sweet Dessert", price: 128, img: "28_Treasures_Menu/default.jpg" },
    { id: 26, name: "Black Gulaman", category: "Sweet Dessert", price: 88, img: "28_Treasures_Menu/default.jpg" },
    { id: 27, name: "Black Gulaman with Lychee", category: "Sweet Dessert", price: 98, img: "28_Treasures_Menu/default.jpg" },

    // DIMSUM
    { id: 28, name: "Prawn Hakaw (4 pcs)", category: "Dimsum", price: 158, img: "28_Treasures_Menu/default.jpg" },
    { id: 29, name: "Pork and Shrimp Siomai (4 pcs)", category: "Dimsum", price: 158, img: "28_Treasures_Menu/default.jpg" },
    { id: 30, name: "Sharksfin Dumpling (4 pcs)", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 31, name: "Japanese Siomai (4 pcs)", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 32, name: "Kutchay Dumpling (3 pcs)", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 33, name: "Beancurd Roll (3 pcs)", category: "Dimsum", price: 148, img: "28_Treasures_Menu/default.jpg" },
    { id: 34, name: "Beef Ball (3 pcs)", category: "Dimsum", price: 148, img: "28_Treasures_Menu/default.jpg" },
    { id: 35, name: "Spareribs with Taosi", category: "Dimsum", price: 158, img: "28_Treasures_Menu/default.jpg" },
    { id: 36, name: "Chicken Feet", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 37, name: "Jumbo Siopao (1 pc)", category: "Dimsum", price: 158, img: "28_Treasures_Menu/default.jpg" },
    { id: 38, name: "Asado Siopao (3 pcs)", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 39, name: "Bola Siopao (3 pcs)", category: "Dimsum", price: 138, img: "28_Treasures_Menu/default.jpg" },
    { id: 40, name: "Mantao (Fry or Steam, 6 pcs)", category: "Dimsum", price: 128, img: "28_Treasures_Menu/default.jpg" },

    // SOUP
    { id: 41, name: "Polonchai Seafood Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 42, name: "Seafood Beancurd Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 43, name: "West Lake Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 44, name: "Crabmeat Sweet Corn Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 45, name: "Minced Chicken Corn Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 46, name: "Bird’s Nest Quail Egg Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 47, name: "Bird’s Nest Crabmeat Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 48, name: "Hot & Sour Soup", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 49, name: "Hototai", category: "Soup", price: 388, img: "28_Treasures_Menu/default.jpg" },

    // APPETIZER
    { id: 24, name: "Pan-Fried Oyster Cake", category: "Appetizer", price: 298, img: "28_Treasures_Menu/default.jpg" },
    { id: 25, name: "X.O. Raddish Cake", category: "Appetizer", price: 288, img: "28_Treasures_Menu/default.jpg" },
    { id: 26, name: "Shanghai Fried Rolls", category: "Appetizer", price: 298, img: "28_Treasures_Menu/default.jpg" },
    { id: 27, name: "Wanton (Fry or Steam)", category: "Appetizer", price: 248, img: "28_Treasures_Menu/default.jpg" },
    { id: 28, name: "Salted Egg Tofu", category: "Appetizer", price: 258, img: "28_Treasures_Menu/default.jpg" },
    { id: 29, name: "Salt and Pepper Tofu", category: "Appetizer", price: 258, img: "28_Treasures_Menu/default.jpg" },

    // RICE
    { id: 30, name: "Seafood Fried Rice", category: "Rice", price: 298, img: "28_Treasures_Menu/default.jpg" },
    { id: 31, name: "Yang Chow Fried Rice", category: "Rice", price: 298, img: "28_Treasures_Menu/default.jpg" },
    { id: 32, name: "Beef Fried Rice", category: "Rice", price: 288, img: "28_Treasures_Menu/default.jpg" },
    { id: 33, name: "Garlic Fried Rice", category: "Rice", price: 198, img: "28_Treasures_Menu/default.jpg" },
    { id: 34, name: "Plain Rice", category: "Rice", price: 70, img: "28_Treasures_Menu/default.jpg" },

    // VEGETABLES
    { id: 35, name: "Saute Mixed Vegetables", category: "Vegetables", price: 298, img: "28_Treasures_Menu/default.jpg" },
    { id: 36, name: "Lohanchay", category: "Vegetables", price: 348, img: "28_Treasures_Menu/default.jpg" },
    { id: 37, name: "Polonchai with 3 Kinds Egg", category: "Vegetables", price: 348, img: "28_Treasures_Menu/default.jpg" },
    { id: 38, name: "Chop Suey", category: "Vegetables", price: 368, img: "28_Treasures_Menu/default.jpg" },
    { id: 39, name: "Salted Egg French Beans (New!)", category: "Vegetables", price: 328, img: "28_Treasures_Menu/default.jpg" },

    // BEEF
    { id: 40, name: "Beef Broccoli with Oyster Sauce", category: "Beef", price: 398, img: "28_Treasures_Menu/default.jpg" },
    { id: 41, name: "Sliced Tender Beef with A1 Sauce", category: "Beef", price: 398, img: "28_Treasures_Menu/default.jpg" },
    { id: 42, name: "Sliced Tender Beef with Black Pepper Sauce", category: "Beef", price: 398, img: "28_Treasures_Menu/default.jpg" },
    { id: 43, name: "Beef Brisket with Radish", category: "Beef", price: 398, img: "28_Treasures_Menu/default.jpg" },

    // PORK
    { id: 44, name: "Sweet and Sour Pork", category: "Pork", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 45, name: "Salt and Pepper Spareribs", category: "Pork", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 46, name: "Kingdao Spareribs Wasabe Sauce", category: "Pork", price: 368, img: "28_Treasures_Menu/default.jpg" },
    { id: 47, name: "Mapo Tofu", category: "Pork", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 48, name: "Chopped Pork with French Beans", category: "Pork", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 49, name: "Lechon Tofu (New!)", category: "Pork", price: 428, img: "28_Treasures_Menu/default.jpg" },

    // CHICKEN
    { id: 50, name: "Kung Pao Chicken", category: "Chicken", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 51, name: "Salted Egg Chicken", category: "Chicken", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 52, name: "Lemon Chicken", category: "Chicken", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 53, name: "Salt & Pepper Chicken", category: "Chicken", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 54, name: "Butter Garlic Chicken", category: "Chicken", price: 388, img: "28_Treasures_Menu/default.jpg" },

    // SEAFOOD
    { id: 55, name: "Hot Shrimp Salad", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 56, name: "Honey Walnut Shrimp (New!)", category: "Seafood", price: 488, img: "28_Treasures_Menu/default.jpg" },
    { id: 57, name: "Emperor’s Shrimp (New!)", category: "Seafood", price: 488, img: "28_Treasures_Menu/default.jpg" },
    { id: 58, name: "Shrimp Vegetable with Oyster Sauce", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 59, name: "Shrimp Suahe in Golden Sauce", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 60, name: "Salt and Pepper Shrimp Suahe", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 61, name: "Sweet and Sour Fish Fillet", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 62, name: "Fish Fillet Beancurd and Black Bean", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 63, name: "Szechuan Fish Fillet (New!)", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 64, name: "Steamed Fish Fillet with Garlic", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 65, name: "Fish Fillet Thai Mango Sauce", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 66, name: "Oyster X.O.", category: "Seafood", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 67, name: "Oyster Black Bean Sauce", category: "Seafood", price: 388, img: "28_Treasures_Menu/default.jpg" },
    { id: 68, name: "Malaysian Sauce Squid", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },
    { id: 69, name: "Salt and Pepper Squid", category: "Seafood", price: 458, img: "28_Treasures_Menu/default.jpg" },

    // DRINKS
    { id: 70, name: "Mango Shake", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 71, name: "Lemonade", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 72, name: "Pineapple Juice", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 73, name: "Coke", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 74, name: "Coke Zero", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 75, name: "Coke Light", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 76, name: "Fanta", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 77, name: "Sprite", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 78, name: "Sola Iced Tea", category: "Drinks", price: 80, img: "28_Treasures_Menu/default.jpg" },
    { id: 79, name: "San Miguel Beer Light", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 80, name: "San Miguel Beer Pale", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 81, name: "Tsing Tao Beer", category: "Drinks", price: 100, img: "28_Treasures_Menu/default.jpg" },
    { id: 82, name: "Arabica Coffee in French Press", category: "Drinks", price: 90, img: "28_Treasures_Menu/default.jpg" },
    { id: 83, name: "Bottled Water", category: "Drinks", price: 60, img: "28_Treasures_Menu/default.jpg" }
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
            <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            <button class="favorite-button" onclick="ToggleFavorite()">❤️</button>
        `;
        foodGrid.appendChild(card);
    });
}
renderFoodItems(foodData);
/*
// Function to filter food items based on category
function filterCategory(categoryName) {
    const filteredItems = foodData.filter(item => item.category === categoryName);
    displayFoodItems(filteredItems);
}

// Function to show all food items
function showAllFoodItems() {
    displayFoodItems(foodData); // Display all items
}

// Function to display food items in the grid
function displayFoodItems(items) {
    const foodGrid = document.getElementById('foodGrid');
    foodGrid.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.classList.add('food-item');

        foodItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" />
            <p>${item.name}</p>
            <p>${item.price}</p>
        `;

        foodGrid.appendChild(foodItemDiv);
    });
}

// Initial display of all items (if desired)
document.addEventListener('DOMContentLoaded', function () {
    showAllFoodItems();
});*/

// ----- Search Box -----
function showSearchBox() {
    $('#searchBox').show();
    $('#controlBox').hide();
}

function hideSearchBox() {
    $('#searchBox').hide();
    $('#controlBox').show();
}

// ----- Cart Logic -----
let cart = [];
function addToCart(id) {
    const foodItem = foodData.find(item => item.id === id);
    const existingItem = cart.find(item => item.id === foodItem.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...foodItem, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartUI();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalSpan = document.getElementById("cartTotal");
    const cartBadge = document.getElementById("cartBadge");
    cartItemsDiv.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        // Create item elements
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details"> 
                    <p>₱${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
            </div>
            <div class="quantity-controls">
                <h6>${item.name}</h6>
                <button class="quantity-button" onclick="decreaseQuantity(${index})">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button" onclick="increaseQuantity(${index})">+</button>
                <button class="delete-button" onclick="removeFromCart(${index})">X</button>
            </div>
        `;
        cartItemsDiv.appendChild(div);
    });

    cartTotalSpan.textContent = total.toFixed(2);

    // Update cart badge
    if (itemCount > 0) {
        cartBadge.textContent = itemCount;
        cartBadge.style.display = "inline-block";
    } else {
        cartBadge.style.display = "none";
    }
}

// ----- Chat Notification function -----
function showChatNotification() {
    const chatBadge = document.getElementById("chatBadge");
    if (!document.getElementById("chatBox").classList.contains("open")) {
        unreadMessagesCount++;
        chatBadge.textContent = unreadMessagesCount;  // Update the badge with unread message count
        chatBadge.style.display = "inline-block";
    }
}
function receiveNewMessage(message) {
    showChatNotification();  // Call the notification function
    const chatHistory = document.getElementById("chatHistory");
    const newMessageElement = document.createElement("div");
    newMessageElement.textContent = message;
    chatHistory.appendChild(newMessageElement);
}

// ----- Toggle Cart (opens/closes cart sidebar) -----
function toggleCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    const chatBox = document.getElementById("chatBox");
    const chatToggle = document.querySelector(".chat-toggle");

    cartSidebar.classList.toggle("open");

    if (cartSidebar.classList.contains("open")) {
        if (chatBox.classList.contains("open")) {
            chatBox.classList.remove("open");
        }
        chatToggle.style.display = "none";
    } else {
        chatToggle.style.display = "block";
    }
}

// ----- Chat Box Logic -----
function toggleChat(event) {
    const chatBox = document.getElementById("chatBox");
    const cartSidebar = document.getElementById("cartSidebar");

    // Reset unread messages count when opening chat box
    if (!chatBox.classList.contains("open")) {
        unreadMessagesCount = 0;
        const chatBadge = document.getElementById("chatBadge");
        chatBadge.style.display = "none";  // Hide the badge when the chat is opened
    }

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


    // ----- Function to receive a new message from the backend -----
    // This should be triggered from your TCP connection or backend message handling
    function receiveNewMessage(message) {
        // Call the function to show notification
        showChatNotification();

        // Optionally, append the message to a chat box or chat history
        const chatHistory = document.getElementById("chatHistory");
        const newMessageElement = document.createElement("div");
        newMessageElement.textContent = message;
        chatHistory.appendChild(newMessageElement);
    }
}