export const Navbar = () => {
    return `
    <div class="logo">
        <img src="https://fakestoreapi.com/icons/logo.png" height="60" width="60" alt="logo">
    </div>

    <ul>
        <li onclick="location.href='./'">Home</li>
        <li onclick="location.href='./Local_Storage.html'">Products</li>
        <li onclick="location.href='./pages/Contact.html'">Contact</li>
    </ul>

    <ul>
        <li class="cart-container" onclick="location.href='./pages/Cart.html'">
            <i class="bi bi-cart" style="font-size:22px;"></i>
            <span id="cartCount" class="cart-badge">0</span>
        </li>
        <li onclick="location.href='./pages/Login.html'">Login</li>
        <li onclick="location.href='./pages/SignUp.html'">SignUp</li>
    </ul>
    `;
};
