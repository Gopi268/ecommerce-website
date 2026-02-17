function addToCart(product) {
    alert(product + " added to cart!");
}
let count = 0;
let total = 0;

function addToCart(price) {
    count++;
    total += price;

    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;
}
