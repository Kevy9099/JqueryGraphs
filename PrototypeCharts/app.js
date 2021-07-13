// Initialize
$(document).ready(function () {
  doubleLineChart();
});

//Global Style
const primaryColor = ['rgba(0,45,114,1)'];
const secondaryColor = ['rgba(187,188,188,1)'];
const primaryHoverColor = ['rgba(0,45,114,0.5)'];
const secondaryHoverColor = ['rgba(187,188,188, 0.5'];
const primaryGridColor = ['rgba(0,0,0,0.2)'];
const primaryFontFamily = ['Lato, Helvetica-Neue, monospace'];
// Horizons: Double Line Chart
const horizonYear_Label = ['FY21', 'FY20', 'FY19', 'FY18', ' FY17', 'FY16'];
const horizonStudent_Served = [95, 86, 72, 61, 45, 28];
const horizonFund_Raised = [
  391959.5, 423216.0, 131775.0, 100184.98, 113775.0, 112070.0,
];

// Annual Fund: Giving Percentage (FY20 vs FY21)
const FY21_Label = [
  'Parents',
  'Trustee',
  'Grandparents',
  'Faculty and Staff',
  'Friends/Former Trustees',
  'Alumni',
];
const annualFY21_Amount = [80.0, 9.0, 6.0, 2.0, 2.0, 1.0];
const annualFY21_Total = ['$778,283.00'];
// const axesFY21_Label;

const annualFY20_Label = [
  'Parents',
  'Trustee',
  'Grandparents',
  'Faculty and Staff',
  'Friends/Former Trustees',
  'Alumni',
];
const annualFY20_Amount = [81.0, 8.0, 8.0, 2.0, 0.5, 0.5];
const annualFY20_Total = ['$845,646.00'];
// const axesFY20_Label;

// Double Line Chart: Horizon Data
function doubleLineChart() {
  const ctx = $('#doubleLineChart');
  const labels = horizonYear_Label;
  const data1 = horizonStudent_Served;
  const data2 = horizonFund_Raised;
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Student Served',
        data: data1,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        pointBackgroundColor: primaryColor,
        pointHoverBackgroundColor: primaryHoverColor,
        pointRadius: 6,
        pointHoverRadius: 15,
        yAxisID: 'y',
      },
      {
        label: 'Fund Raised',
        data: data2,
        borderColor: secondaryColor,
        backgroundColor: secondaryColor,
        pointBackgroundColor: secondaryColor,
        pointHoverBackgroundColor: secondaryHoverColor,
        pointRadius: 6,
        pointHoverRadius: 15,
        yAxisID: 'y1',
      },
    ],
  };
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      plugins: {
        legend: {
          display: true,
          //   position: top,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 18,
            },
          },
        },
        title: {
          display: false,
        },
        tooltip: {
          displayColors: false,
          titleFont: {
            family: primaryFontFamily,
            weight: 'bold',
            size: 20,
          },
          bodyFont: {
            family: primaryFontFamily,
            size: 18,
          },

          yAlign: 'top',
        },
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          beginAtZero: true,
          ticks: {
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 18,
            },
          },
          title: {
            display: true,
            text: 'Student Served',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
          },
          grid: {
            display: true,
            color: primaryGridColor,
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return '$' + value / 1000 + 'k';
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 18,
            },
          },
          title: {
            display: true,
            text: 'Fund Raised',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
          },
        },
        x: {
          ticks: {
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 18,
            },
          },
          title: {
            display: true,
            text: 'Year',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
          },
          grid: {
            display: true,
            color: primaryGridColor,
          },
        },
      },
      animation: {
        duration: 3000,
        easing: 'easeInBounce',
      },
    },
  };
  const chart = new Chart(ctx, config);
}

// Pie Chart / Line Chart: Horizon Data

// Double Line / Double  Bar Chart: Annual Fund

// Polar Graph: General
