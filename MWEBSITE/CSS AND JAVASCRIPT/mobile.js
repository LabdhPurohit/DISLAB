const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const Button = doc.querySelector(".mbutton");
const Button2 = doc.querySelector(".mbutton2");
const Button3 = doc.querySelector(".mbutton3");
const Button4 = doc.querySelector(".mbutton4");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

Button.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
Button2.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
Button3.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
Button4.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});