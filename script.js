// Background Music
const music = document.getElementById("bgMusic");
document.getElementById("playMusicBtn").onclick = () => {
    music.play();
    alert("Music is now playing 🎵");
};

// Load Products
fetch("products.json")
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("productList");
        data.forEach(p => {
            container.innerHTML += `
                <div class="product">
                    <img src="${p.image}">
                    <h3>${p.name}</h3>
                    <p>R${p.price}</p>
                    <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
                </div>`;
        });
    });

// Cart System
let cart = [];

function addToCart(p) {
    cart.push(p);
    alert(p.name + " added to cart!");
    updateCartUI();
}

function updateCartUI() {
    let c = document.getElementById("cartItems");
    c.innerHTML = "";
    cart.forEach(item => {
        c.innerHTML += `<p>${item.name} - R${item.price}</p>`;
    });
}

// Cart panel toggle
document.getElementById("cartBtn").onclick = () => {
    document.getElementById("cartPanel").classList.toggle("open");
};

// WhatsApp Checkout
document.getElementById("checkoutBtn").onclick = () => {
    let message = "Hi, I want to order:\n";
    cart.forEach(item => message += `- ${item.name} (R${item.price})\n`);

    window.open(
        "https://wa.me/27610891814?text=" + encodeURIComponent(message)
    );
};

// Login System (username only)
document.getElementById("loginBtn").onclick = () => {
    document.getElementById("loginModal").style.display = "flex";
};

document.getElementById("saveUserBtn").onclick = () => {
    let username = document.getElementById("usernameInput").value;
    if (username.trim() === "") return alert("Enter a username");

    localStorage.setItem("kayy_user", username);
    alert("Welcome " + username + "!");

    document.getElementById("loginModal").style.display = "none";
};
