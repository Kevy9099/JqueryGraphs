$(document).ready(function () {
  verticalBar();
  horizontalBar();
  pieChart();
  doughnutChart();
  lineChart();
});

/* Global Variables */
let labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
let colorRGBA = [
  'rgba(238, 109, 72, 1)',
  'rgba(170, 207, 210, 1)',
  'rgba(250, 194, 31, 1)',
  'rgba(127, 186, 99, 1)',
  'rgba(99, 29, 76, 1)',
];
let colorHex = ['#EE6D48', '#002D72', '#FAC21F', '#7FBA63', '#631D4C'];
let hoverColor = ['#5cb85c', '#D74B4B', '#6685a4', '#f0ad4e', '#5bc0de'];

//-----------------------------------------------//
/* Vertical Bar Chart Using Chart.JS */
//-----------------------------------------------//
function verticalBar() {
  let ctx = document.getElementById('vertChart').getContext('2d');
  let vertChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: colorRGBA,
          borderColor: colorRGBA,
          hoverBackgroundColor: hoverColor,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        yAxis: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      animation: {
        duration: 3000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

//-----------------------------------------------//
/* Horizontal Bar Chart Using Chart.JS */
//-----------------------------------------------//
function horizontalBar() {
  let ctx = document.getElementById('horiChart');
  let horiChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: colorRGBA,
          borderColor: 'black',
        },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      scales: {
        xAxis: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      animation: {
        duration: 3000,
        easing: 'easeInOutQuint',
      },
    },
  });
}

//-----------------------------------------------//
/* Pie Chart Using Chart.JS */
//-----------------------------------------------//
function pieChart() {
  let ctx = document.getElementById('pieChart').getContext('2d');
  let pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: [100, 70, 20, 50, 10],
          backgroundColor: colorHex,
          borderColor: 'black',
          hoverBackgroundColor: hoverColor,
          hoverOffset: 30,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          onHover: handleHover,
          onLeave: handleLeave,
        },
        tooltip: {
          // enabled: false,
          usePointStyle: true,
          callbacks: {
            labelPointStyle: function (context) {
              return {
                pointStyle: 'triangle',
                rotation: 0,
              };
            },
          },
        },
      },
    },
  });
}

//-----------------------------------------------//
/* Doughnut Chart Using Chart.JS */
//-----------------------------------------------//
function doughnutChart() {
  let ctx = document.getElementById('doughnutChart').getContext('2d');

  let doughChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: [100, 70, 20, 50, 10],
          backgroundColor: colorHex,
          borderColor: 'black',
          hoverBackgroundColor: hoverColor,
        },
      ],
    },
    options: {
      responsive: true,
      onClick: function (e) {
        var activePoints = doughChart.getElementsAtEvent(e);
        var selectedIndex = activePoints[0]._index;
        alert(this.data.datasets[0].data[selectedIndex]);
      },
      plugins: {
        legend: {
          position: 'right',
          onHover: handleHover,
          onLeave: handleLeave,
        },
      },
    },
  });
}

//-----------------------------------------------//
/* Line Chart Using Chart.JS */
//-----------------------------------------------//
function lineChart() {
  let ctx = document.getElementById('lineChart').getContext('2d');
  let lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# of Votes',
          data: [65, 59, 80, 81, 26, 55, 40],
          fill: true,
          borderColor: 'rgba(0,0,0,0.5)',
          pointStyle: 'star',
          pointRadius: 8,
          pointBackgroundColor: colorHex,
          pointHoverRadius: 20,
          pointHoverBackgroundColor: [
            'rgba(238, 109, 72, 1)',
            'rgba(170, 207, 210, 1)',
            'rgba(250, 194, 31, 1)',
            'rgba(127, 186, 99, 1)',
            'rgba(99, 29, 76, 1)',
          ],
          pointBorderColor: colorHex,
        },
        {
          label: '# of Votes',
          data: [70, 40, 59, 87, 24, 10],
          fill: false,
          borderColor: 'rgba(0,0,0,0.5)',
          pointStyle: 'triangle',
          pointRadius: 8,
          pointBackgroundColor: colorHex,
          pointHoverRadius: 20,
          pointHoverBackgroundColor: [
            'rgba(238, 109, 72, 1)',
            'rgba(170, 207, 210, 1)',
            'rgba(250, 194, 31, 1)',
            'rgba(127, 186, 99, 1)',
            'rgba(99, 29, 76, 1)',
          ],
          pointBorderColor: colorHex,
        },
        {
          label: '# of Votes',
          data: [33, 97, 26, 62, 77, 55, 40],
          fill: false,
          borderColor: 'rgba(0,0,0,0.5)',
          pointStyle: 'circles',
          pointRadius: 8,
          pointBackgroundColor: colorHex,
          pointHoverRadius: 20,
          pointHoverBackgroundColor: [
            'rgba(238, 109, 72, 1)',
            'rgba(170, 207, 210, 1)',
            'rgba(250, 194, 31, 1)',
            'rgba(127, 186, 99, 1)',
            'rgba(99, 29, 76, 1)',
          ],
          pointBorderColor: colorHex,
        },
      ],
    },
    options: {
      responsive: true,
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true,
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
          color: colorHex,
          labels: {
            font: {
              size: 20,
            },
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
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
