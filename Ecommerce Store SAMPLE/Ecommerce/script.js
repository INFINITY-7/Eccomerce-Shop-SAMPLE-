let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("count").innerText = cart.length;

function addToCart(name,price){

cart.push({
name:name,
price:price
});

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

document.getElementById("count").innerText =
cart.length;

alert(name + " Added To Cart");

}