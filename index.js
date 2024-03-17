const image = document.querySelector("img");
const btn = document.querySelector(".btn");
const downloadLink = document.querySelector(".download");
let i = 0;

btn.addEventListener("click", () => {
    image.src = `https://picsum.photos/300?random=${i}`;
    i++;
});
image.addEventListener("click", () => {
    image.classList.toggle("full-size");
});
downloadLink.addEventListener("click", () => {
    downloadLink.href = image.src;
});
