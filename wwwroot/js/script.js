// ----- Search Box -----
function showSearchBox() {
    $('#searchBox').show();
    $('#controlBox').hide();
}

function hideSearchBox() {
    $('#searchBox').hide();
    $('#controlBox').show();
}


// ----- Chat Box Logic ----- //
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
        document.getElementById("chatBadge").style.display = "none"; // Hide notification dot when opened
        document.addEventListener("click", closeOnClickOutside);
    } else {
        document.removeEventListener("click", closeOnClickOutside);
    }


    event.stopPropagation(); // Prevent click from propagating
}

// Chat Notification function
function showChatNotification() {
    const chatBadge = document.getElementById("chatBadge");
    if (!document.getElementById("chatBox").classList.contains("open")) {
        chatBadge.style.display = "inline-block";
    }
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

    // Close cart if open
    if (cartSidebar.classList.contains("open")) {
        cartSidebar.classList.remove("open");
    }

    chatBox.classList.toggle("open");

    // Listen for clicks outside to close
    if (chatBox.classList.contains("open")) {
        document.getElementById("chatBadge").style.display = "none"; // Hide notification dot when opened
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








