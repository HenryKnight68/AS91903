(async function () {
  const labels = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Generation (GWh)",
        data: [43988, 44690, 44163, 44641, 44692, 45142, 44535, 44617, 44694, 44668],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      },
      {
        label: "Consumption (GWh)",
        data: [40242, 40749, 40232, 39933, 39965, 40314, 39449, 39593, 39062, 39135],
        fill: false,
        borderColor: "rgb(7, 12, 192)",
        tension: 0.1
      }
    ]
  };

  var c = new Chart(document.getElementById("gen_vs_cons"), {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      onResize: (a, b) => {
        for (let id in Chart.instances) {
          Chart.instances[id].resize();
        }
      },
      /*
      scales: {
        y: {
          min: 0
        }
      }*/
    }
  });
})();
