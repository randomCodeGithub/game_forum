const scrollButton = document.getElementById("go-top") as HTMLElement;

const scrollTopIsNull = (elementID: any) => {
  if (window.scrollY == 0) {
    elementID.classList.add("d-none");
    elementID.classList.remove("d-flex");
  }
};

scrollTopIsNull(scrollButton);

scrollButton.addEventListener("click", () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
);

window.addEventListener(
  "scroll",
  () => {
    scrollButton.classList.remove("d-none");
    scrollButton.classList.add("d-flex");
    scrollTopIsNull(scrollButton);
  },
  true
);
