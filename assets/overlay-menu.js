"use strict";
var toggleButton = document.getElementById("toggle-menu");
var mobileMenu = document.getElementById("mobile-menu");
var backButton = document.getElementById("back");
toggleButton.addEventListener("click", function (e) {
    mobileMenu.classList.toggle("d-none");
});
var cicleForMultipleElements = function (elementID) {
    for (var i = 0; i < elementID.length; ++i) {
        if (!elementID[i].classList.contains("d-none")) {
            elementID[i].classList.add("d-none");
        }
    }
};
var cicleForMultipleElementsWithContinue = function (elementId, addChange) {
    for (var i = 0; i < elementId.length; ++i) {
        if (elementId[i].classList.contains("menu-item")) {
            if (addChange === "remove") {
                elementId[i].classList.remove("d-none");
            }
            else {
                elementId[i].classList.add("d-none");
            }
        }
        else {
            continue;
        }
    }
};
// ======================
backButton.addEventListener("click", function (e) {
    var target = e.target;
    var dropdownObjects = target.parentNode.parentNode.querySelectorAll(".dropdown-object");
    var allLiElements = target.parentNode.parentNode.querySelectorAll("li");
    backButton.classList.add("d-none");
    cicleForMultipleElements(dropdownObjects);
    cicleForMultipleElementsWithContinue(allLiElements, "remove");
});
var dropdownDisplaying = function (elementId) {
    document.getElementById(elementId).addEventListener("click", function (e) {
        var target = e.target;
        var allLiElements = target.parentNode.parentNode.querySelectorAll("li");
        cicleForMultipleElementsWithContinue(allLiElements, "add");
        backButton.classList.remove("d-none");
        document
            .getElementById(document.getElementById(elementId).id + "__dropdwown")
            .classList.toggle("d-none");
    });
};
dropdownDisplaying("forum-item");
dropdownDisplaying("uploader-item");
dropdownDisplaying("ffs-item");
dropdownDisplaying("server-item");
