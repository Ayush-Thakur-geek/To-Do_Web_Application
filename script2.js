let input = document.getElementById("adding-goals");
let listContainer = document.getElementById("goals-added");
let date = document.getElementById("date");

function addDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date.innerHTML = `${dd}/${mm}/${yy} - { dd/mm/yyyy } Format`;
}

function addGoal() {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    span.onclick = function () {
      li.style.display = "none";
    };
    li.onclick = function () {
      li.classList.toggle("checked");
    };
  }
}

addDate();
