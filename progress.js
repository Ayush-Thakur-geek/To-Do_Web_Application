const ctx = document.querySelector("#progressChart").getContext("2d");

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");
const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const data = {
  labels,
  datasets: [
    {
      data: [211, 326, 165, 420, 320, 500, 350, 415, 350],
      label: "Progress",
      fill: true,
      backgroundColor: gradient,
      borderColor: "#2309",
      pointBackgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};

const myChart = new Chart(ctx, config);
