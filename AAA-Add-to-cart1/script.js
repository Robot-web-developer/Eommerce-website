let productsDiv = document.querySelector(".products");
let cartBox = document.querySelector(".cart-items");
let counter = document.querySelector("#counter");
let priceCount = document.querySelector("#priceCount");
let emptyCart = document.querySelector(".empty-cart");
let count = 0;
let total = 0;

let items = [
  {
    img: "./images/product1.jpeg",
    name: "Air Pods",
    price: "$" + 50.0,
  },
  {
    img: "./images/product2.jpeg",
    name: "Wireless Airbuds",
    price: "$" + 100.0,
  },
  {
    img: "./images/product3.jpeg",
    name: "Camera",
    price: "$" + 150.0,
  },
  {
    img: "./images/product4.jpeg",
    name: "Wireless Airbuds",
    price: "$" + 20.0,
  },
];

items.forEach((product) => {
  productsDiv.innerHTML += `
    <div class="card">
            <img src="${product.img}" alt="">
            <h4>${product.name}</h4>
            <h3>${product.price}.00</h3>
            <button onclick="addToCart(this)">Add to cart</button>
            </div>
            `;
});

function addToCart(card) {
    let cardDetails = card.parentElement;
    let allElements = cardDetails.children;
  cartBox.innerHTML += `
  <div class="product-in-cart">
  <img src="${allElements[0].src}" alt="">
        <div class="product-name">${allElements[1].innerText}</div>
        <div class="product-price">${allElements[2].textContent}</div>
        <i class="ri-delete-bin-7-fill" onclick="remove(this);"></i>
        </div>
        `;
        emptyCart.style.display = "none"; 
        count++;
  counter.textContent = count;
  
  let price = allElements[2].textContent;
  let split = price.split("");
  split.shift();
  let join = split.join("");
  total += parseFloat(join);
  
  priceCount.textContent = "$" + total + ".00";
}

function remove(product) {
  let productInCart = product.parentElement;
  productInCart.remove();
  count--;
  counter.textContent = count;
  let currentProductPrice = product.previousElementSibling.textContent;
  let split = currentProductPrice.split("");
  split.shift();
  let join = split.join("");
  total -= parseFloat(join);
  priceCount.textContent = "$" + total + ".00";

  if (count === 0) {
  emptyCart.style.display = "block"; // jab sab remove ho jaye to show karo
  }
  
}
