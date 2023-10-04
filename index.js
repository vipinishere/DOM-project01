const colorButtons = document.querySelectorAll(".button");

colorButtons.forEach(function (button) {
  // color of each div using id
  const color = button.id;
  button.addEventListener("click", function () {
    document.body.style.backgroundColor = `${color}`;
  });
});
