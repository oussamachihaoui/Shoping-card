// manipulating multiple prices
const addition = document.querySelectorAll(".addition");
const substraction = document.querySelectorAll(".substraction");
const priceElement = document.querySelectorAll(".price");
const quantity = document.querySelectorAll(".quantity");
const deleteProduct = document.querySelectorAll(".delete");
const liked = document.querySelectorAll(".heart");
const total = document.querySelector(".total");

console.log(liked);
console.log(deleteProduct);
console.log(quantity);
console.log(addition);
console.log(substraction);
console.log(priceElement);

// MAIN LOGIC

function addByClicking(btn, q, priceE, money) {
  const selectBtn = addition[btn];

  selectBtn.addEventListener("click", () => {
    let count = parseInt(quantity[q].value);
    count += 1;
    quantity[q].value = count;
    priceElement[priceE].innerHTML = `$${count * money}`;
    updatePrice();
  });
}

function substractByClicking(btn, q, priceE, money) {
  const selectBtn = substraction[btn];
  selectBtn.addEventListener("click", () => {
    if (!selectBtn.disabled) {
      let currentPrice = parseInt(
        priceElement[priceE].innerHTML.replace("$", "")
      );
      let count = parseInt(quantity[q].value);

      if (count > 0) {
        count -= 1;
        quantity[q].value = count;
        currentPrice -= money;
        priceElement[priceE].innerHTML = `$${currentPrice}`;
        updatePrice();
      }
    }
    if (count === 0) {
      substraction.disabled = true;
    }
  });
}

function updatePrice() {
  let totalPrice = 0;
  for (let i = 0; i < quantity.length; i++) {
    let count = parseInt(quantity[i].value);
    let pricePerItem = getPricePerItem(i);
    totalPrice += count * pricePerItem;
  }
  total.innerHTML = `$${totalPrice + 10}`;
}

function getPricePerItem(index) {
  switch (index) {
    case 0:
      return 120;
    case 1:
      return 150;
    case 2:
      return 200;

    default:
      return 0;
  }
}

function deleteProductByClicking(btn, id) {
  const selectBtn = deleteProduct[btn];
  selectBtn.addEventListener("click", () => {
    const productId = document.querySelector("#" + id);
    productId.remove();
  });
}

function likedProduct(heartP) {
  const selectedHeart = liked[heartP];
  let isClicked = false;
  selectedHeart.addEventListener("click", () => {
    isClicked = !isClicked;

    if (isClicked) {
      selectedHeart.style.color = "red";
    } else {
      selectedHeart.style.color = "blue";
    }
  });
}

// input 1
addByClicking(0, 0, 0, 120);
substractByClicking(0, 0, 0, 120);

// input 2
addByClicking(1, 1, 1, 150);
substractByClicking(1, 1, 1, 150);

// input 3
addByClicking(2, 2, 2, 200);
substractByClicking(2, 2, 2, 200);

// delete prodcut1
deleteProductByClicking(0, "product1");
// delete product2
deleteProductByClicking(1, "product2");
// delete product3
deleteProductByClicking(2, "product3");

// like product
likedProduct(0);
likedProduct(1);
likedProduct(2);

// for (let i = 0; i < addition.length; i++) {
//   addition[i].innerHTML = "hello";
// }

// add quanity function
// function addUpElement() {
//   let count = parseInt(quantity.value);
//   count += 1;
//   quantity.value = count;
//   priceElement.innerHTML = `$${count * 120}`;
// }

// substraction.addEventListener("click", () => {
//   if (!substraction.disbaled) {
//     let currentPrice = parseInt(priceElement.innerHTML.replace("$", ""));
//     let count = parseInt(quantity.value);

//     if (count > 0) {
//       count -= 1;
//       quantity.value = count;
//       currentPrice -= 120;
//       priceElement.innerHTML = `$${currentPrice}`;
//     }
//   }
//   if (count === 0) {
//     substraction.disabled = true;
//   }
// });

// substract quanity function
// function substractElm() {
//   if (!substraction.disbaled) {
//     let currentPrice = parseInt(priceElement.innerHTML.replace("$", ""));
//     let count = parseInt(quantity.value);

//     if (count > 0) {
//       count -= 1;
//       quantity.value = count;
//       currentPrice -= 120;
//       priceElement.innerHTML = `$${currentPrice}`;
//     }
//     if (count === 0) {
//       substraction.disabled = true;
//     }
//   }
// }

// normal statment without using the fucntion

// addition.addEventListener("click", () => {
//   let count = parseInt(quantity.value);
//   count += 1;
//   quantity.value = count;
//   priceElement.innerHTML = `$${count * 120}`;
// });
