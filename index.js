let data = [
  {
    id: "1",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/3/c/3c886839836103c7468fb5eb1646ac33f376d95b31defbe4f98258b9070b3ec0.jpeg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "2",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/9/3/9323b3e387eb48d255736c50b27fa357b3511cc72deae20a0a60c91ac62e7dd8.jpeg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "3",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/c/b/cbga7.jpg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "4",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/a/l/aldauto2.jpg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "5",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/f/d/fd1.jpg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "6",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/a/4/a4d11d77913c024438be23697ee550b216400e9dbaecc6c1df84c512e23f49c0.jpeg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "7",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/c/b/cbdv5.jpg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "8",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/8/1/81ca84766c8b8463b6dae68027681ce094edff3e8192b40265abb61238422b03.jpeg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
  {
    id: "9",
    avatar:
      "https://seedsmanlive.gumlet.io/media/catalog/product/cache/454a85a9ea0a509c3175af5cd11c8ce3/0/f/0f6f1bc2048dfc74292d8f44caa99f5503dad714873cd8212584f79617fd4951.jpeg",
    para: "CBG Relief Auto Feminised Seeds",
    price: "€10.99",
    qty: 1,
  },
];


// !with refresh
let divBlock = document.getElementById("divBlock");
let section = document.querySelector(".sectionBlock");
let aside = document.querySelector(".dashBoard");

let cartData = [];

if (localStorage.getItem("cartData")) {
  cartData = JSON.parse(localStorage.getItem("cartData"));
}

data.map(val => {
  const data12 = `<div class="division">
    <img src=${val.avatar} alt="" />
    <p>${val.para}</p>
    <h2>${val.price}</h2>
    <h2 id="quantity">${val.qty}</h2>
    <button class=${"btn" + val.id} value=${val.id}>ADD TO CART</button>
  </div>`;
  divBlock.insertAdjacentHTML("beforeend", `${data12}`);

  let dynamic = "btn" + val.id;
  let btn = document.getElementsByClassName(dynamic)[0];
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    addToCart(val.id);
    let data15 = JSON.stringify(data[val.id - 1]);
    console.log(data15);
    window.localStorage.setItem("cartData", data15);
    document.getElementById("quantity").innerHTML = click;
    updateQuantity();
  });
});

let click = 0;
function addToCart(itemId) {
  click++;
  window.localStorage.setItem("cart", click);
  let quant = localStorage.getItem("cart");
  document.getElementById("count").innerHTML = quant;
  console.log("cart Item:", itemId);

  let toast = document.querySelector(".toast");
  let toastify = `<div class="toasting">Product Added</div>`;
  toast.insertAdjacentHTML("beforeend",`${toastify}`)
}

function updateQuantity() {
  let quantities = document.getElementsByClassName("quantity");
  for (let i = 0; i < quantities.length; i++) {
    quantities[i].innerHTML = cartData[i].qty;
  }
}

let cartCount = localStorage.getItem("cart");
if (cartCount) {
  document.getElementById("count").innerHTML = cartCount;
  click = parseInt(cartCount);
  updateQuantity();
}

// !other method

// let divBlock = document.getElementById("divBlock");

// data.map(val => {
//   const data12 = `<div class="division">
//             <img src=${val.avatar} alt="" />
//             <p>${val.para}</p>
//             <h2>${val.price}</h2>
//             <h2 id="quantity">${val.qty}</h2>
//             <button class=${"btn" + val.id} value=${val.id}>ADD TO CART</button>
//   </div>`;
//   divBlock.insertAdjacentHTML("beforeend", `${data12}`);

//   let dynamic = "btn" + val.id;
//   let btn = document.getElementsByClassName(dynamic);
//   let click = 0;

// btn[0].addEventListener("click", function (e) {
//   click++;
//   console.log("cartItem" + "-" + click);
//   let productId = e.target.value;
//   console.log(productId);
//   let demo = data[productId - 1];
//   console.log(demo);

//   alert("Product Added To Cart");

//   let demo1 = JSON.stringify(demo);
//   let dem = demo.qty++;
//   console.log(dem);

// let h2 = parseInt(document.getElementById("count").innerHTML);
// document.getElementById("count").innerHTML = click;
//   // console.log(h2);

// let quantity = document.getElementById("quantity").innerHTML;
// document.getElementById("quantity").innerHTML = dem;
//   // console.log(quantity);

// window.localStorage.setItem("cart", click);
// window.localStorage.setItem("Product", demo1);
// });
// });
