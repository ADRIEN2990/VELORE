
// ========================================
// VÉLORÉ - FUNCIONES PRINCIPALES
// ========================================

const productGrid = document.getElementById("product-grid");
const filterButtons = document.querySelectorAll(".filter-button");

const cartOverlay = document.getElementById("cart-overlay");
const openCartButton = document.getElementById("open-cart");
const closeCartButton = document.getElementById("close-cart");

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");

// ========================================
// CARRITO Y ALMACENAMIENTO
// ========================================

let cart = JSON.parse(localStorage.getItem("velore-cart")) || [];

function saveCart() {
    localStorage.setItem("velore-cart", JSON.stringify(cart));
}

// ========================================
// MOSTRAR PRODUCTOS
// ========================================

function displayProducts(category = "all") {
    productGrid.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {

        const productCard = document.createElement("article");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="product-image-container">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >
                <span class="product-tag">${product.tag}</span>
            </div>

            <div class="product-info">
                <p class="product-category">
                    ${getCategoryName(product.category)}
                </p>

                <h3>${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">
                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button
                        class="add-cart-button"
                        data-id="${product.id}"
                    >
                        AÑADIR +
                    </button>
                </div>
            </div>
        `;

        productGrid.appendChild(productCard);
    });

    // Conectar botones de cada producto
    document.querySelectorAll(".add-cart-button").forEach(button => {
        button.addEventListener("click", () => {
            addToCart(Number(button.dataset.id));
        });
    });
}

// ========================================
// NOMBRES DE CATEGORÍAS
// ========================================

function getCategoryName(category) {
    const categories = {
        clothing: "ROPA",
        shoes: "CALZADO",
        accessories: "ACCESORIOS"
    };

    return categories[category] || category;
}

// ========================================
// FORMATO DE PRECIOS
// ========================================

function formatPrice(price) {
    return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0
    }).format(price);
}

// ========================================
// FILTRAR PRODUCTOS
// ========================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        displayProducts(category);

    });

});

// ========================================
// AGREGAR AL CARRITO
// ========================================

function addToCart(productId) {

    const product = products.find(item => item.id === productId);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart();
    updateCart();

}

// ========================================
// ACTUALIZAR CARRITO
// ========================================

function updateCart() {

    cartItemsContainer.innerHTML = "";

    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {

        const product = products.find(p => p.id === item.id);

        if (!product) return;

        const subtotal = product.price * item.quantity;

        total += subtotal;
        totalItems += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>${formatPrice(product.price)}</p>

                <div class="quantity-controls">
                    <button class="quantity-button" data-id="${product.id}" data-action="decrease">−</button>

                    <span>${item.quantity}</span>

                    <button class="quantity-button" data-id="${product.id}" data-action="increase">+</button>
                </div>
            </div>

            <div class="cart-item-right">
                <p>${formatPrice(subtotal)}</p>

                <button class="remove-button" data-id="${product.id}">
                    Eliminar
                </button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);

    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = formatPrice(total);

    saveCart();

    // Conectar controles de cantidades
    document.querySelectorAll(".quantity-button").forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            if (button.dataset.action === "increase") {
                changeQuantity(id, 1);
            } else {
                changeQuantity(id, -1);
            }

        });

    });

    // Conectar botones para eliminar
    document.querySelectorAll(".remove-button").forEach(button => {

        button.addEventListener("click", () => {
            removeFromCart(Number(button.dataset.id));
        });

    });

}

// ========================================
// MODIFICAR CANTIDADES
// ========================================

function changeQuantity(productId, amount) {

    const item = cart.find(product => product.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== productId);
    }

    updateCart();

}

// ========================================
// ELIMINAR PRODUCTOS
// ========================================

function removeFromCart(productId) {

    cart = cart.filter(item => item.id !== productId);

    updateCart();

}

// ========================================
// ABRIR Y CERRAR CARRITO
// ========================================

openCartButton.addEventListener("click", () => {
    cartOverlay.classList.add("active");
});

closeCartButton.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
});

cartOverlay.addEventListener("click", event => {

    if (event.target === cartOverlay) {
        cartOverlay.classList.remove("active");
    }

});

// ========================================
// SIMULAR FINALIZACIÓN DE COMPRA
// ========================================

checkoutButton.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Tu bolsa está vacía.");
        return;
    }

    const confirmation = confirm(
        "¿Deseas finalizar tu compra de prueba?"
    );

    if (confirmation) {

        alert(
            "¡Gracias por tu compra!\n\n" +
            "Esta es una demostración académica de VÉLORÉ."
        );

        cart = [];

        updateCart();

        cartOverlay.classList.remove("active");

    }

});

// ========================================
// INICIALIZAR TIENDA
// ========================================

displayProducts();
updateCart();