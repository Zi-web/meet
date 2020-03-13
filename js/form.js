document.getElementById("btn__call").onclick = function() {showForm()};
      function showForm() {
    document.querySelector('.overlay').classList.add("show");
    document.querySelector('.form-wrapper').classList.add("show-form");
}

document.getElementById("closeform").onclick = function() {closeForm()};
      function closeForm() {
    document.querySelector('.overlay').classList.remove("show");
    document.querySelector('.form-wrapper').classList.remove("show-form");
}