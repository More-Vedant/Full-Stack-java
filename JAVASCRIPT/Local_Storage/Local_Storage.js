const API = `https://fakestoreapi.com/products`;

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
let allProducts = [];

const mainDiv = document.getElementById("mainData");


async function ApiCall() {
    try {
        const res = await fetch(API);
        const data = await res.json();
        allProducts = data;
        dataAppend(allProducts);
    } catch (error) {
        console.log(error);
    }
}

window.onload = () => {
    updateCartCount();
};

ApiCall();


function createSortFilterUI() {
    if (document.querySelector(".category")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "category";

    
    const sortBy = document.createElement("select");
    sortBy.innerHTML = `
        <option value="">Sort By Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
    `;

    
    const filterBy = document.createElement("select");
    filterBy.innerHTML = `
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
    `;

    sortBy.addEventListener("change", applySortFilter);
    filterBy.addEventListener("change", applySortFilter);

    wrapper.append(sortBy, filterBy);
    document.body.insertBefore(wrapper, mainDiv);
}


function applySortFilter() {
    const sortValue = document.querySelector(".category select:nth-child(1)").value;
    const filterValue = document.querySelector(".category select:nth-child(2)").value;

    let result = [...allProducts];

    
    if (filterValue) {
        result = result.filter(p => p.category === filterValue);
    }

    
    if (sortValue === "low") {
        result.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    dataAppend(result);
}


function dataAppend(products) {
    if (!document.querySelector(".category")) createSortFilterUI();
    mainDiv.innerHTML = "";

    products.forEach(el => {
        const card = document.createElement("div");

        const img = document.createElement("img");
        const title = document.createElement("h3");
        const price = document.createElement("p");

        const addBtn = document.createElement("button");
        const plusBtn = document.createElement("button");
        const minusBtn = document.createElement("button");
        const qty = document.createElement("span");

        img.src = el.image;
        img.style.width = "150px";

        title.innerText = el.title;
        price.innerText = `₹ ${el.price}`;

        addBtn.innerText = "Add";
        plusBtn.innerText = "+";
        minusBtn.innerText = "-";

        plusBtn.style.display = "none";
        minusBtn.style.display = "none";
        qty.style.display = "none";

        const existing = cartData.find(item => item.id === el.id);

        if (existing) {
            addBtn.style.display = "none";
            plusBtn.style.display = "inline-block";
            minusBtn.style.display = "inline-block";
            qty.style.display = "inline-block";
            qty.innerText = existing.qty;
            minusBtn.disabled = existing.qty === 1;
        }

        
        addBtn.onclick = () => {
            cartData.push({ ...el, qty: 1 });
            qty.innerText = 1;

            addBtn.style.display = "none";
            plusBtn.style.display = "inline-block";
            minusBtn.style.display = "inline-block";
            qty.style.display = "inline-block";
            minusBtn.disabled = true;

            saveCart();
        };

        
        plusBtn.onclick = () => {
            const item = cartData.find(i => i.id === el.id);
            item.qty++;
            qty.innerText = item.qty;
            minusBtn.disabled = false;
            saveCart();
        };

        
        minusBtn.onclick = () => {
            const index = cartData.findIndex(i => i.id === el.id);
            cartData[index].qty--;

            if (cartData[index].qty <= 0) {
                cartData.splice(index, 1);
                addBtn.style.display = "inline-block";
                plusBtn.style.display = "none";
                minusBtn.style.display = "none";
                qty.style.display = "none";
            } else {
                qty.innerText = cartData[index].qty;
                minusBtn.disabled = cartData[index].qty === 1;
            }

            saveCart();
        };

        card.append(img, title, price, addBtn, plusBtn, qty, minusBtn);
        mainDiv.append(card);
    });
}


function updateCartCount() {
    const badge = document.getElementById("cartCount");
    if (!badge) return;

    let totalQty = 0;
    cartData.forEach(item => totalQty += item.qty);

    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? "inline-block" : "none";
}


function saveCart() {
    localStorage.setItem("cartData", JSON.stringify(cartData));
    updateCartCount();
}
