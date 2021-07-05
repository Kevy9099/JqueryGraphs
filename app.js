$(document).ready(function () {
  barGraph();
  lineGraph();
  doughnutGraph();
  polarGraph();
  radarGraph();
});

/* Global List */
let campaignList = [
  'Trinity Emergency Fund',
  'Endowments',
  'Other',
  'Total Endowment Gain',
  'SHINE 2020',
  'Horizons',
  '2019 Annual Fund',
  'Trinity Promise',
];
let campaignAmount = [
  13442, 18005, 94300, 177658, 262205, 423216, 826146, 4783640,
];

let campaignAmountActual = [13, 18, 94, 177, 262, 423, 826, 478];

let campaignAmountGoal = [15, 20, 200, 178, 300, 500, 900, 800];

let budgetedList = [
  'Pesonnel Costs',
  'Administrative',
  'Facilities & Maintenance',
  'Curriculum & Classroom',
  'Technology & Strategic',
  'Food Service',
  'Interest, Sustainability & Other',
];
let budgetedAmount = [10413975, 850559, 643668, 534659, 484689, 459940, 395690];

let revenueList = [
  'Tuition & Fees',
  'Support & Contributions',
  'Interest & Miscellaneous Income',
];
let revenueAmount = [12718180, 1010000, 55000];
let netAssets = [
  'Accounts Payable',
  'Legacy Debt',
  'Trinity Promise Debt',
  'Prepaid Tuition & Other',
  'Net Assets',
];
let netAmount = [92563, 282332, 3840204, 4485562, 32788881];

/* Global Colors */
let textColors = ['rgba(250,194,31,1'];
let borderColors = ['rgba(187,188,188,1)'];
let borderHoverColors = ['rgba(187,188,188,0.5)'];
let barColors = ['rgba(0,45,114,1)'];
let barHoverColors = ['rgba(187, 188, 188, 1)', 'rgb(170, 207, 210, 1)'];
let pointColors = ['rgba(108,172,228,1)'];
let pointHoverColors = ['rgba(187, 188, 188, 1)', 'rgb(170, 207, 210, 1)'];
let pieColors = [
  '#002d72',
  '#631d4c',
  '#7fba63',
  '#ee6d48',
  '#aacfd2',
  '#bbbcbc',
];

let pieHoverColors = ['#fac21f'];

//-----------------------------------------------//
/* Bar Chart */
//-----------------------------------------------//
function barGraph() {
  let ctx = document.getElementById('barChart').getContext('2d');
  let barChart = new Chart(ctx, {
    data: {
      labels: budgetedList,
      datasets: [
        {
          type: 'bar',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: barColors,
          hoverBackgroundColor: barHoverColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          borderRadius: 15,
          borderWidth: 5,
          barThickness: 100,
          // borderSkipped: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Budgeted Expenses Report',
          font: {
            size: 20,
          },
        },
        tooltip: {
          displayColors: false,
          titleFont: {
            weight: 'bold',
            size: 20,
          },
          bodyFont: {
            size: 18,
          },
          yAlign: 'bottom',
        },
      },

      scales: {
        y: {
          beginAtZero: true,
          max: 1000000,
          min: 100000,
          title: {
            display: true,
            text: 'Budgeted Expenses',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value, index, values) {
              return '$' + value;
            },
            font: {
              size: 14,
            },
          },
          grid: {
            display: false,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Budgeted Department',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            font: {
              size: 12,
            },
          },
          grid: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

//-----------------------------------------------//
/* Line Chart */
//-----------------------------------------------//
function lineGraph() {
  let ctx = document.getElementById('lineChart').getContext('2d');
  let lineChart = new Chart(ctx, {
    data: {
      labels: campaignList,
      datasets: [
        {
          type: 'line',
          label: 'Campaign Donation Report',
          data: campaignAmount,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: pointColors,
          pointHoverBackgroundColor: pointHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 8,
          pointHoverRadius: 15,
        },
        {
          type: 'bar',
          label: 'Campaign Donation Report',
          data: campaignAmount,
          backgroundColor: barColors,
          hoverBackgroundColor: barHoverColors,
          hoverBorderColor: borderHoverColors,
          borderColor: borderColors,
          borderWidth: 5,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Campaign Report',
          font: {
            size: 20,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Donation',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value, index, values) {
              return '$' + value;
            },
            font: {
              size: 14,
            },
          },
          grid: {
            display: true,
            color: borderHoverColors,
          },
        },
        x: {
          title: {
            display: true,
            text: 'Donors',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            font: {
              size: 14,
            },
          },
          grid: {
            display: false,
            color: borderHoverColors,
          },
        },
      },
    },
  });
}

//-----------------------------------------------//
/* Doughnut Chart */
//-----------------------------------------------//
function doughnutGraph() {
  let ctx = document.getElementById('doughnutChart').getContext('2d');

  let doughChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: netAssets,
      datasets: [
        {
          label: 'Total',
          data: netAmount,
          backgroundColor: pieColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          hoverBackgroundColor: pieHoverColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total Liabilities and Net Assets',
          padding: 20,
          font: {
            size: 20,
          },
        },
        legend: {
          labels: {
            padding: 30,
            font: {
              weight: 'bold',
              size: 20,
            },
            // color: textColors,
          },
          display: true,
          position: 'right',
          onHover: handleHover,
          onLeave: handleLeave,
        },
        tooltip: {
          displayColors: false,
          titleFont: {
            weight: 'bold',
            size: 20,
          },
          bodyFont: {
            size: 18,
          },
        },
      },
    },
  });
}

//-----------------------------------------------//
/* Polar Chart */
//-----------------------------------------------//
function polarGraph() {
  let ctx = document.getElementById('polarChart').getContext('2d');

  let polarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: campaignList,
      datasets: [
        {
          label: '# of Votes',
          data: [11, 16, 7, 3, 14],
          backgroundColor: barColors,
          borderColor: 'black',
          hoverBackgroundColor: barHoverColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
    },
  });
}

//-----------------------------------------------//
/* Radar Chart */
//-----------------------------------------------//

function radarGraph() {
  let ctx = document.getElementById('radarChart').getContext('2d');

  let radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: campaignList,
      datasets: [
        {
          label: 'Actual Donation',
          data: campaignAmountActual,
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
        },
        {
          label: 'Goal Donation',
          data: campaignAmountGoal,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      data: {
        ticks: {
          callback: function (value, index, values) {
            return '$' + value + 'k';
          },
        },
      },
    },
  });
}

function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] =
        index === item.index || color.length === 9 ? color : color + '4D';
      console.log('hover');
    }
  );
  legend.chart.update();
}
function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
      console.log('leave');
    }
  );
  legend.chart.update();
}
