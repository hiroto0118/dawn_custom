// $(function () {
//     if ($("div").hasClass("cart__check")) {
//       $(".cart__checkout-button").attr("disabled", "disabled");
//       $("#cart_check").click(function () {
//         if ($(this).prop("checked") == false) {
//           $(".cart__checkout-button").attr("disabled", "disabled");
//         } else {
//           $(".cart__checkout-button").removeAttr("disabled");
//         }
//       });
//     }
//   });
document.addEventListener("DOMContentLoaded", function () {
    var cartCheckDiv = document.querySelector("div.cart__check");
    var checkoutButton = document.querySelector(".cart__checkout-button");
    var cartCheck = document.getElementById("cart_check");
  
    if (cartCheckDiv) {
      checkoutButton.disabled = true;
  
      cartCheck.addEventListener("click", function () {
        if (!this.checked) {
          checkoutButton.disabled = true;
        } else {
          checkoutButton.disabled = false;
        }
      });
    }
  });