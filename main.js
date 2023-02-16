let linksBtn = document.querySelector("header .icon");
let links = document.querySelector("header .links ul");
let secondSpan = document.querySelector("header  .icon span:nth-child(2)");

linksBtn.onclick = function () {
  links.classList.toggle("open");
  secondSpan.classList.toggle("open");
};
