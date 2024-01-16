const inputBox = document.getElementsByClassName("enter-goals")[0];
const listContainer = document.getElementById("list");

function addGoal() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
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
  inputBox.value = "";
}

function colorChange() {
  let colorParent = document.getElementsByClassName("color-parent");
  let colorChild = document.getElementsByClassName("color-fill");
  for (let i = 0; i < colorParent.length; i++) {
    colorParent[i].addEventListener("mouseover", function () {
      colorChild[i].style.transition = "all 0.25s ease";
      colorChild[i].style.opacity = "1";
      colorChild[i].style.top = "0";
      colorParent[i].style.transition = "all 0.25s ease";
      colorParent[i].style.color = "#fff";
    });
    colorParent[i].addEventListener("mouseleave", function () {
      // colorChild[i].style.transition = "all 0.25s ease";
      // colorChild[i].style.top = "-100%";
      // colorParent[i].style.transition = "all 0.25s ease";
      // colorParent[i].style.color = "#000";
      setTimeout(function () {
        colorChild[i].style.transition = "all 0.25s ease";
        colorChild[i].style.top = "-100%";
        colorParent[i].style.transition = "all 0.25s ease";
        colorParent[i].style.color = "#000";
      }, 250);

      setTimeout(function () {
        colorChild[i].style.opacity = "0";
      }, 251); // 250ms is equal to 0.25s
      // Add this block
      setTimeout(function () {
        colorChild[i].style.top = "100%";
      }, 500); // 250ms is equal to 0.25s
    });
  }
}

colorChange();
