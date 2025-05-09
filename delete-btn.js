// -------------Input Field Functionality-----------------
document
  .getElementById("input-field2")
  .addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("btn-delete");
    const deleteText = event.target.value;
    // console.log(deleteText)
    if (deleteText === "delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });
//   ---------Button Functionality---------------------
document
.getElementById("btn-delete")
.addEventListener("click", function () {
  //   console.log("btn clicked");
  const text = document.getElementById("target-text");
  text.style.display = "none";
});
