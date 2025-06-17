(async function () {
  const labels = [
    "Oil - 299PJ",
    "Geothermal - 206PJ",
    "Fossil Gas - 149PJ",
    "Hydro - 96PJ",
    "Biomass - 44PJ",
    "Coal - 38PJ",
    "Wind - 12PJ",
    "Biogas - 4PJ",
    "Solar - 2PJ",
    "Waste Heat - 1PJ",
    "Liquid Biofuels - <1PJ"
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        label: "Fossil Fuels",
        data: [299, 0, 149, 0, 0, 38, 0, 0, 0, 1, 0],
        fill: false,
        borderWidth: 1,
        backgroundColor: ["#931F1D"],
        borderColor: ["#931F1D"],
        stacked: true,
        tension: 0.1
      },
      {
        axis: "y",
        label: "Renewable Energy",
        data: [0, 206, 0, 96, 44, 0, 12, 4, 2, 0, 0.5],
        fill: true,
        borderWidth: 1,
        backgroundColor: ["#A7BE6B"],
        borderColor: ["#A7BE6B"],
        stacked: true,
        tension: 0.1
      }
    ]
  };

  var c = new Chart(document.getElementById("nz_total_energy_usage"), {
    type: "bar",
    data: data,
    options: {
      aspectRatio: 1.75,
      datasets: {
        bar: {
          //barThickness: 15,
          borderRadius: 10
        }
      },
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Energy Consumption (PJ)",
          }
        },
        y: {          
          stacked: true,
          
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Primary Energy Supply in NZ",
          font: {
            size: 20
          }
        }
      },
      onResize: (a, b) => {
        for (let id in Chart.instances) {
          Chart.instances[id].resize();
        }
      },
    }
  });
})();
