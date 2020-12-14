"use strict";
var scrollButton = document.getElementById("go-top");
var scrollTopIsNull = function (elementID) {
    if (window.scrollY == 0) {
        elementID.classList.add("d-none");
        elementID.classList.remove("d-flex");
    }
};
scrollTopIsNull(scrollButton);
scrollButton.addEventListener("click", function () {
    return window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
window.addEventListener("scroll", function () {
    scrollButton.classList.remove("d-none");
    scrollButton.classList.add("d-flex");
    scrollTopIsNull(scrollButton);
}, true);
