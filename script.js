/* SNOW */
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let snowflakes = Array.from({length:120}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*3+1,
  d: Math.random()+1
}));

function snow() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  snowflakes.forEach(f=>{
    ctx.beginPath();
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
    ctx.fill();
    f.y += f.d;
    if(f.y>canvas.height){ f.y=0; f.x=Math.random()*canvas.width }
  });
  requestAnimationFrame(snow);
}
snow();

/* CART */
let cart = [];
const cartEl = document.getElementById("cart");

function toggleCart() {
  cartEl.classList.toggle("show");
}

function addToCart(btn) {
  const p = btn.parentElement;
  cart.push({
    name:p.dataset.name,
    price:parseFloat(p.dataset.price)
  });
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").textContent = cart.length;
  const items = document.getElementById("cartItems");
  const total = document.getElementById("total");
  items.innerHTML = "";
  let sum = 0;

  cart.forEach(i=>{
    sum += i.price;
    items.innerHTML += `<p>${i.name} - $${i.price}</p>`;
  });

  total.textContent = sum.toFixed(2);
}
