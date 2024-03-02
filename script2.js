let input = document.querySelector("input");
let listContainer = document.getElementById("goals-added");
let date = document.getElementById("date");
let timer = document.getElementById("timer");
let line = document.getElementById("line");
let slider = document.querySelectorAll(".options-list");
let goal = document.getElementById("adding-goals");
let add_btn = document.getElementById("add");
let color_cont = document.getElementsByClassName("color-parent");
let color_fill = document.getElementsByClassName("color-fill");
let span = document.createElement("span");
let submit = document.getElementById("submit");

let h = 23;
let m = 59;
let s = 59;

function addTimer() {
  setInterval(() => {
    s--;
    if (s < 0) {
      m--;
      s = 59;
    }
    if (m < 0) {
      h--;
      m = 59;
    }
    if (h < 0) {
      h = 23;
    }
    let displayS = s < 10 ? "0" + s : s;
    let displayM = m < 10 ? "0" + m : m;
    let displayH = h < 10 ? "0" + h : h;
    timer.innerHTML = `${displayH}:${displayM}:${displayS}`;
    bar();

    function bar() {
      let elapsedSeconds = (23 - h) * 3600 + (59 - m) * 60 + (59 - s);
      let width = (elapsedSeconds / (24 * 3600)) * 100;
      line.style.width = width + "%";
    }
  }, 1000);
}

function addDate() {
  setInterval(() => {
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
  }, 1000);
}

function addGoal() {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    input.value = "";
    listContainer.appendChild(li);

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

function sliding_img() {
  let rotate = 0;
  let diffRot = 0;
  for (let i = 0; i < slider.length; i++) {
    slider[i].addEventListener("mousemove", function (e) {
      let diff = e.clientY - slider[i].getBoundingClientRect().top;
      diffRot = e.clientX - rotate;
      rotate = e.clientX;
      // let img = document.getElementsByClassName("sliding-img"); // Corrected this line
      // img[i].style.opacity = "1";
      gsap.to(slider[i].querySelector(".sliding-img"), {
        opacity: 1,
        duration: 0.5,
        left: e.clientX,
        top: diff,
        rotate: gsap.utils.clamp(-20, 20, diffRot),
      });

      gsap.to(slider[i].querySelector("h2"), {
        opacity: 0.5,
        x: 30,
      });
    });

    slider[i].addEventListener("mouseleave", function (e) {
      gsap.to(slider[i].querySelector(".sliding-img"), {
        opacity: 0,
        duration: 0.5,
        // left: e.clientX,
        // top: e.clientY - slider[i].getBoundingClientRect().top,
      });

      gsap.to(slider[i].querySelector("h2"), {
        opacity: 1,
        x: 0,
      });
    });
  }
}

function goalAnimation() {
  goal.addEventListener("mouseover", () => {
    input.style.transition = "all 0.5s ease";
    add_btn.style.transition = "transform 0.5s ease";
    input.style.width = "750px";
    input.style.opacity = "1";
    add_btn.style.transform = "translateX(342px)";
  });

  goal.addEventListener("mouseleave", () => {
    input.style.transition = "all 0.5s ease";
    add_btn.style.transition = "transform 0.5s ease";
    input.style.width = "60px";
    input.style.opacity = "0";
    add_btn.style.transform = "translateX(0px)";
  });
}

function colorAppear() {
  for (let i = 0; i < color_cont.length; i++) {
    color_cont[i].addEventListener("mouseover", function () {
      color_fill[i].style.transition = "all 0.3s ease";
      color_fill[i].style.top = "0";
    });
    color_cont[i].addEventListener("mouseleave", function () {
      color_fill[i].style.transition = "all 0.3s ease";
      color_fill[i].style.top = "100%";
    });
  }
}

function submitProperty() {
  span.style.display = "none";
  addDate();
}

// Get all .options-list elements
let optionsList = document.querySelectorAll(".options-list");

// Get the #list div
let listDiv = document.getElementById("list");

let progressList = document.getElementById("mainProgress");

// Add click event listeners to all .options-list elements
for (let i = 0; i < optionsList.length; i++) {
  optionsList[i].addEventListener("click", function (e) {
    // Prevent the default action of the click event (which is to follow the link)
    e.preventDefault();

    // Get the text content of the clicked element
    let optionText = optionsList[i].querySelector("h2").textContent;

    // Change the content of the #list div based on the text content of the clicked element
    if (optionText === "Home") {
      // fetch("page2.html")
      //   .then((response) => response.text())
      //   .then((data) => {
      //     listDiv.innerHTML = data;
      //   });
      listDiv.children[0].style.display = "flex";
      listDiv.children[1].style.display = "none";
    } else if (optionText === "Progress") {
      listDiv.children[0].style.display = "none";
      listDiv.children[1].style.display = "flex";
    } else if (optionText === "Community") {
      listDiv.innerHTML = "<h2>History content</h2>";
    }
  });
}

colorAppear();
sliding_img();

addTimer();
goalAnimation();
