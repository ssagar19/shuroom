var fo = document.createElement("div");
var imgs = document.getElementsByTagName("img");
[...imgs].forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    e.target.style.width = "1000px";
    e.target.style.width = "500px";
  });
});
