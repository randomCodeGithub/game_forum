const toggleButton = document.getElementById("toggle-menu") as HTMLElement;
const mobileMenu = document.getElementById("mobile-menu") as HTMLElement;
const backButton = document.getElementById("back") as HTMLElement;

toggleButton.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("d-none");
});

const cicleForMultipleElements = (elementID: any) => {
  for (let i = 0; i < elementID.length; ++i) {
    if (!elementID[i].classList.contains("d-none")) {
      elementID[i].classList.add("d-none");
    }
  }
};

const cicleForMultipleElementsWithContinue = (
  elementId: any,
  addChange: "add" | "remove"
) => {
  for (let i = 0; i < elementId.length; ++i) {
    if (elementId[i].classList.contains("menu-item")) {
      if (addChange === "remove") {
        elementId[i].classList.remove("d-none");
      } else {
        elementId[i].classList.add("d-none");
      }
    } else {
      continue;
    }
  }
};

// ======================

backButton.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  let dropdownObjects = target.parentNode.parentNode.querySelectorAll(
    ".dropdown-object"
  );
  let allLiElements = target.parentNode.parentNode.querySelectorAll("li");

  backButton.classList.add("d-none");

  cicleForMultipleElements(dropdownObjects);
  cicleForMultipleElementsWithContinue(allLiElements, "remove");
});

const dropdownDisplaying = (elementId: string) => {
  document.getElementById(elementId).addEventListener("click", function (e) {
    const target = e.target as HTMLElement;
    let allLiElements = target.parentNode.parentNode.querySelectorAll("li");

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
