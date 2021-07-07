$(document).ready(function () {
  barGraph1();
  barGraph2();
  barGraph3();
  lineGraph1();
  lineGraph2();
  lineGraph3();
  doughnutGraph1();
  doughnutGraph2();
  doughnutGraph3();
  polarGraph1();
  polarGraph2();
  polarGraph3();
  radarGraph1();
  radarGraph2();
  radarGraph3();
});

/* Global List */
let campaignTooltip = [
  'Trinity Emergency Fund',
  'Endowments',
  'Other',
  'Total Endowment Gain',
  'Shine 2020',
  'Horizon',
  '2019 Annual Fund',
  'Trinity Promise',
];

let campaignAxis = [
  'Trinity Emerg. Fund',
  'Endow.',
  'Other',
  'Total Endow. +',
  "Shine 20'",
  'Horizon',
  "19' Ann. Fund",
  'Trinity Promise',
];
let campaignAmount = [
  13442, 18005, 94300, 177658, 262205, 423216, 826146, 4783640,
];

let campaignAmountActual = [13, 18, 94, 177, 262, 423, 826, 478];

let campaignAmountGoal = [15, 20, 200, 178, 300, 500, 900, 800];

let campaignActualLine = [
  13442, 18005, 94300, 177658, 262205, 423216, 826146, 4783640,
];

let campaignGoalLine = [
  18000, 25005, 100300, 190000, 400000, 2000000, 4000000, 5000000,
];

let budgetToolTip = [
  'Pesonnel Costs',
  'Administrative',
  'Facilities & Maintenance',
  'Curriculum & Classroom',
  'Technology & Strategic',
  'Food Service',
  'Interest, Sustainability & Others',
];

let budgetAxis = [
  'Pesonnel',
  'Admin.',
  'Facil. & Maint.',
  'Curr. & Clrm.',
  'Tech. & Strat.',
  'Food Serv.',
  'Int., Sustain & Others',
];
let budgetedAmount = [941397, 850559, 643668, 534659, 484689, 459940, 395690];

let budgetedGoal = [800000, 900000, 700000, 600000, 400000, 500000, 400000];

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
let netAmount = [100563, 282332, 384020, 448556, 3278888];

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
let primaryColor = ['#002D72'];
let pieHoverColors = ['#fac21f'];
let radarColor = ['rgba(0,45,114,0.5)'];
let radarPointColor = 'rgba(0,0,0,0.5)';
let radarColor2 = ['rgba(187, 188, 188, 1)'];

//-----------------------------------------------//
/* Bar Chart */
//-----------------------------------------------//
function barGraph1() {
  let ctx = document.getElementById('barChart1').getContext('2d');
  let barChart = new Chart(ctx, {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'bar',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: barColors,
          hoverBackgroundColor: barHoverColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          borderRadius: 10,
          borderWidth: 3,
          barThickness: 50,
          // borderSkipped: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
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
            maxRotation: 90,
            minRotation: 90,
            font: {
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return budgetAxis[value];
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

function barGraph2() {
  let ctx = document.getElementById('barChart2').getContext('2d');
  let config = {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'bar',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: barColors,
          hoverBackgroundColor: barHoverColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          borderRadius: 10,
          borderWidth: 3,
          barThickness: 35,
          // borderSkipped: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: true,
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
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return budgetAxis[value];
            },
          },
          grid: {
            display: false,
          },
        },
        x: {
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
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
              size: 14,
            },
          },
          grid: {
            display: true,
            color: 'rgba(0,0,0,0.2)',
          },
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  };
  let barChart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#animate')
      .addEventListener('click', function destoryChart() {
        barChart.destroy();
        barChart = new Chart(ctx, config);
      });
  })();
}
function barGraph3() {
  let ctx = document.getElementById('barChart3').getContext('2d');

  let config = {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'bar',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: pieColors,
          hoverBackgroundColor: pieHoverColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          borderRadius: 0,
          borderWidth: 3,
          barThickness: 20,
          borderSkipped: true,
        },
        {
          type: 'bar',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: pieColors,
          hoverBackgroundColor: pieHoverColors,
          borderColor: borderColors,
          hoverBorderColor: borderHoverColors,
          borderRadius: 50,
          borderWidth: 3,
          barThickness: 20,
          borderSkipped: true,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
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
          min: 0,
          title: {
            display: true,
            text: 'Budgeted Expenses',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
              size: 14,
            },
          },
          grid: {
            display: false,
          },
        },
        x: {
          beginAtZero: true,
          max: 1000000,
          min: 0,
          title: {
            display: true,
            text: 'Budgeted Department',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            font: {
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return budgetAxis[value];
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
  };
  let barChart = new Chart(ctx, config);
  // (function () {
  //   document
  //     .querySelector('#stack')
  //     .addEventListener('click', function switchChart3() {});
  // })();
}

//-----------------------------------------------//
/* Line Chart */
//-----------------------------------------------//
function lineGraph1() {
  let ctx = document.getElementById('lineChart1').getContext('2d');
  let lineChart = new Chart(ctx, {
    data: {
      labels: campaignTooltip,
      datasets: [
        {
          type: 'line',
          label: 'Donation',
          data: campaignAmount,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: pointColors,
          pointHoverBackgroundColor: pointHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          type: 'bar',
          label: 'Donation',
          data: campaignAmount,
          backgroundColor: barColors,
          hoverBackgroundColor: barHoverColors,
          hoverBorderColor: borderHoverColors,
          borderColor: borderColors,
          borderRadius: 10,
          borderWidth: 2,
          barThickness: 45,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
          title: {
            display: true,
            text: 'Donation',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
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
            scaleLabel: {
              show: true,
            },
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            font: {
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return campaignAxis[value];
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

function lineGraph2() {
  let ctx = document.getElementById('lineChart2').getContext('2d');
  let data1 = campaignActualLine;
  let data2 = campaignGoalLine;
  let chart_labels = campaignTooltip;
  let xAxis_labels = campaignAxis;
  let config = {
    data: {
      labels: chart_labels,
      datasets: [
        {
          type: 'line',
          label: 'Actual',
          backgroundColor: barColors,
          data: data1,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: barColors,
          pointHoverBackgroundColor: pointHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          type: 'line',
          label: 'Goal',
          backgroundColor: barColors,
          data: data2,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: pointColors,
          pointHoverBackgroundColor: pointHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 6,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Campaign Report & Budgeted Report',
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
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Donation',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
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
            scaleLabel: {
              show: true,
            },
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            font: {
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return xAxis_labels[value];
            },
          },
          grid: {
            display: false,
            color: borderHoverColors,
          },
        },
      },
    },
  };
  let lineChart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#switch1')
      .addEventListener('click', function switchChart1() {
        let data = lineChart.config.data;
        let temp = lineChart.config.options;
        data.datasets[0].data = data1;
        data.datasets[1].data = data2;
        data.labels = chart_labels;
        temp.scales.x.ticks = {
          maxRotation: 90,
          minRotation: 90,
          font: {
            weight: 'bold',
            size: 12,
          },
          callback: function (value) {
            return xAxis_labels[value];
          },
        };
        lineChart.update();
      });
  })();
  (function () {
    document
      .querySelector('#switch2')
      .addEventListener('click', function switchChart2() {
        let chart_labels = budgetToolTip;
        let data1 = budgetedAmount;
        let data2 = budgetedGoal;
        let temp = lineChart.config.options;
        let xAxis_labels = budgetAxis;
        let data = lineChart.config.data;
        data.datasets[0].data = data1;
        data.datasets[1].data = data2;
        data.labels = chart_labels;
        temp.scales.x.ticks = {
          maxRotation: 90,
          minRotation: 90,
          font: {
            weight: 'bold',
            size: 12,
          },
          callback: function (value) {
            return xAxis_labels[value];
          },
        };
        lineChart.update();
      });
  })();
}

function lineGraph3() {
  let ctx = document.getElementById('lineChart3').getContext('2d');
  let data1 = campaignActualLine;
  let data2 = campaignGoalLine;
  let chart_labels = campaignTooltip;
  let xAxis_labels = campaignAxis;
  let config = {
    data: {
      labels: chart_labels,
      datasets: [
        {
          type: 'line',
          label: 'Actual',
          backgroundColor: pointColors,
          data: data1,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: pieColors,
          pointHoverBackgroundColor: pieHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          type: 'line',
          label: 'Goal',
          backgroundColor: barColors,
          data: data2,
          borderColor: borderColors,
          pointStyle: 'circle',
          pointBackgroundColor: pieColors,
          pointHoverBackgroundColor: pieHoverColors,
          pointBorderColor: 'rgba(0,0,0,0.5)',
          pointRadius: 6,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Campaign Report & Budgeted Report',
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
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Donation',
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              weight: 'bold',
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
            scaleLabel: {
              show: true,
            },
            font: {
              weight: 'bold',
              size: 20,
            },
          },
          ticks: {
            maxRotation: 90,
            minRotation: 90,
            font: {
              weight: 'bold',
              size: 12,
            },
            callback: function (value) {
              return xAxis_labels[value];
            },
          },
          grid: {
            display: false,
            color: borderHoverColors,
          },
        },
      },
    },
  };
  let lineChart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#switch1')
      .addEventListener('click', function switchChart1() {
        let data = lineChart.config.data;
        let temp = lineChart.config.options;
        data.datasets[0].data = data1;
        data.datasets[1].data = data2;
        data.labels = chart_labels;
        temp.scales.x.ticks = {
          maxRotation: 90,
          minRotation: 90,
          font: {
            weight: 'bold',
            size: 12,
          },
          callback: function (value) {
            return xAxis_labels[value];
          },
        };
        lineChart.update();
      });
  })();
  (function () {
    document
      .querySelector('#switch2')
      .addEventListener('click', function switchChart2() {
        let chart_labels = budgetToolTip;
        let data1 = budgetedAmount;
        let data2 = budgetedGoal;
        let temp = lineChart.config.options;
        let xAxis_labels = budgetAxis;
        let data = lineChart.config.data;
        data.datasets[0].data = data1;
        data.datasets[1].data = data2;
        data.labels = chart_labels;
        temp.scales.x.ticks = {
          maxRotation: 90,
          minRotation: 90,
          font: {
            weight: 'bold',
            size: 12,
          },
          callback: function (value) {
            return xAxis_labels[value];
          },
        };
        lineChart.update();
      });
  })();
}

//-----------------------------------------------//
/* Doughnut Chart */
//-----------------------------------------------//
function doughnutGraph1() {
  let ctx = document.getElementById('doughnutChart1').getContext('2d');

  let doughChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: netAssets,
      datasets: [
        {
          label: 'Total',
          data: netAmount,
          backgroundColor: barColors,
          borderColor: 'white',
          hoverBackgroundColor: barHoverColors,
          borderWidth: 2,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
          display: false,
          labels: {
            padding: 30,
            font: {
              weight: 'bold',
              size: 20,
            },
            // color: textColors,
          },
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

function doughnutGraph2() {
  let ctx = document.getElementById('doughnutChart2').getContext('2d');
  let chartType = 'doughnut';
  let config = {
    type: chartType,
    data: {
      labels: netAssets,
      datasets: [
        {
          label: 'Total',
          data: netAmount,
          backgroundColor: pieColors,
          borderColor: 'white',
          hoverBackgroundColor: pieHoverColors,
          borderWidth: 2,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
          display: true,
          labels: {
            padding: 30,
            font: {
              weight: 'bold',
              size: 12,
            },
            // color: textColors,
          },
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
  };

  let doughChart = new Chart(ctx, config);

  (function () {
    document
      .querySelector('#changeChart1')
      .addEventListener('click', function changeChart1() {
        let data = doughChart.config.data;
        data.datasets[0].type = chartType;
        doughChart.update();
      });
  })();

  (function () {
    document
      .querySelector('#changeChart2')
      .addEventListener('click', function changeChart2() {
        let chartType = 'pie';
        let data = doughChart.config.data;
        data.datasets[0].type = chartType;
        doughChart.update();
      });
  })();
}

function doughnutGraph3() {
  let ctx = document.getElementById('doughnutChart3').getContext('2d');
  let chartType = 'doughnut';
  let config = {
    type: chartType,
    data: {
      labels: netAssets,
      datasets: [
        {
          label: 'Total',
          data: netAmount,
          backgroundColor: pieColors,
          borderColor: 'white',
          hoverBackgroundColor: pieHoverColors,
          borderWidth: 2,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
          display: true,
          labels: {
            padding: 30,
            font: {
              weight: 'bold',
              size: 12,
            },
            // color: textColors,
          },
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
  };

  let doughChart = new Chart(ctx, config);

  (function () {
    document
      .querySelector('#changeChart1')
      .addEventListener('click', function changeChart1() {
        let data = doughChart.config.data;
        data.datasets[0].type = chartType;
        doughChart.update();
      });
  })();

  (function () {
    document
      .querySelector('#changeChart2')
      .addEventListener('click', function changeChart2() {
        let chartType = 'pie';
        let data = doughChart.config.data;
        data.datasets[0].type = chartType;
        doughChart.update();
      });
  })();
}
//-----------------------------------------------//
/* Polar Chart */
//-----------------------------------------------//
function polarGraph1() {
  let ctx = document.getElementById('polarChart1').getContext('2d');

  let polarChart = new Chart(ctx, {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'polarArea',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: barColors,
          borderColor: 'white',
          hoverBackgroundColor: barHoverColors,
          borderWidth: 2,
          hoverOffset: 40,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

function polarGraph2() {
  let ctx = document.getElementById('polarChart2').getContext('2d');

  let polarChart = new Chart(ctx, {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'polarArea',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: barColors,
          borderColor: 'white',
          hoverBackgroundColor: barHoverColors,
          borderWidth: 2,
          hoverOffset: 40,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
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
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}
function polarGraph3() {
  let ctx = document.getElementById('polarChart3').getContext('2d');

  let polarChart = new Chart(ctx, {
    data: {
      labels: budgetToolTip,
      datasets: [
        {
          type: 'polarArea',
          label: 'Total',
          data: budgetedAmount,
          backgroundColor: pieColors,
          borderColor: 'white',
          hoverBackgroundColor: pieHoverColors,
          borderWidth: 2,
          hoverOffset: 40,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
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
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

//-----------------------------------------------//
/* Radar Chart */
//-----------------------------------------------//

function radarGraph1() {
  let ctx = document.getElementById('radarChart1').getContext('2d');

  let radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: campaignTooltip,
      datasets: [
        {
          label: 'Actual Donation',
          data: campaignAmountActual,
          fill: true,
          backgroundColor: radarColor,
          pointBackgroundColor: barColors,
          pointHoverBackgroundColor: radarColor,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          label: 'Goal Donation',
          data: campaignAmountGoal,
          fill: true,
          backgroundColor: radarColor2,
          pointBackgroundColor: barColors,
          pointHoverBackgroundColor: radarColor,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
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
      scale: {
        pointLabels: {
          weight: 'bold',
          fontSize: 25,
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

function radarGraph2() {
  let ctx = document.getElementById('radarChart2').getContext('2d');

  let radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: campaignTooltip,
      datasets: [
        {
          label: 'Actual Donation',
          data: campaignAmountActual,
          fill: true,
          backgroundColor: radarColor,
          pointBackgroundColor: barColors,
          pointHoverBackgroundColor: radarColor,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          label: 'Goal Donation',
          data: campaignAmountGoal,
          fill: true,
          backgroundColor: radarColor2,
          pointBackgroundColor: barColors,
          pointHoverBackgroundColor: radarColor,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Campaign Report',
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
      scale: {
        pointLabels: {
          weight: 'bold',
          fontSize: 25,
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}
function radarGraph3() {
  let ctx = document.getElementById('radarChart3').getContext('2d');

  let radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: campaignTooltip,
      datasets: [
        {
          label: 'Actual Donation',
          data: campaignAmountActual,
          fill: true,
          backgroundColor: radarColor,
          pointBackgroundColor: pieColors,
          pointHoverBackgroundColor: pieHoverColors,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
        {
          label: 'Goal Donation',
          data: campaignAmountGoal,
          fill: true,
          backgroundColor: radarColor2,
          pointBackgroundColor: pieColors,
          pointHoverBackgroundColor: pieHoverColors,
          pointRadius: 6,
          pointHoverRadius: 15,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Campaign Report',
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
      scale: {
        pointLabels: {
          weight: 'bold',
          fontSize: 25,
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] =
        index === item.index || color.length === 9 ? color : color + '4D';
    }
  );
  legend.chart.update();
}

function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    }
  );
  legend.chart.update();
}
