let up = document.getElementById("up");
/*on scroll da event bisht8l lma enta t3ml scroll */
onscroll = function () {
  if (scrollY >= 500) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
//hena b2a ana bt7km el button hai3ml eh lma ados 3aleh
up.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

//we caught up the add to cart button
let carts = document.querySelectorAll(".add-cart");

//hena ana ha7ot eh elly y7sl lma tdos 3la add to cart
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    console.log("done");
  });
}
