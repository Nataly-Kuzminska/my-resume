const toggleImg = document.getElementById("toggle");

toggleImg.addEventListener('click', e => {
  document.querySelector(".text").classList.toggle("fade");
});