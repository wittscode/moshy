const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((i) => {
  i.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
