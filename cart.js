document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cartContainer");
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    if (cart.length === 0) {
        cartContainer.innerHTML = `<p>YOUR CART IS EMPTY</p>`;
        return;
    }

    cart.forEach((item) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.setAttribute("class", "cart-item");
        cartItemDiv.innerHTML = `
            
            <p><b>id:</b>  <span>${item.id}</span></p>
            <p><b>name:</b>  <span>${item.name}</span></p>
            <p><b>username:</b>  <span>${item.username}</span></p>
            <p><b>email:</b>  <span>${item.email}</span></p>
            <p>Quantity:  ${item.quantity}</p>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">remove</button>

            `;
        cartContainer.append(cartItemDiv);
    });


});
function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter((item) => item.id !== userId);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}