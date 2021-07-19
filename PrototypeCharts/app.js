console.log(Chart.defaults);

// Initialize
$(document).ready(function () {
  doubleLineChart();
  pieChart1();
  pieChart2();
  pieChart3();
  pieChart4();
  pieChart5();
  pieChart6();
  doubleBarChart1();
  doubleBarChart2();
  polarAreaChart();

  Utils.isElementInView($('#doubleLineChart'), false);
});

function Utils() {}

Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  },
};

var Utils = new Utils();

//Global Style
const primaryColor = ['rgba(0,45,114,1)'];
const secondaryColor = ['rgba(187,188,188,1)'];
const primaryHoverColor = ['rgba(0,45,114,0.5)'];
const secondaryHoverColor = ['rgba(187,188,188, 0.5'];
const primaryGridColor = ['rgba(0,0,0,0.2)'];
const primaryFontFamily = ['Lato, Helvetica-Neue, monospace'];
const primaryHexColor = [
  '#002D72',
  '#002D72',
  '#002D72',
  '#002D72',
  '#002D72',
  '#002D72',
  '#002D72',
  '#002D72',
];

//Global Labels
const year_Labels = ['FY21', 'FY20', 'FY19', 'FY18', ' FY17', 'FY16'];
const giving_Labels = [
  'Parents',
  'Trustee',
  'Grandparents',
  'Faculty and Staff',
  'Friends/Former Trustees',
  'Alumni',
];
const role_PartLabels = ['Trustee', 'Parent', 'Faculty/Staff'];

// Horizons: Double Line Chart
const lineStudent_Served = [95, 86, 72, 61, 45, 28];
const lineFund_Raised = [
  391959.5, 423216.0, 131775.0, 100184.98, 113775.0, 112070.0,
];

// Horizons: Pie Chart
const pieYear_Label = [
  'Trustee',
  'Friend',
  'Parent',
  'Faculty/Staff',
  'Foundation',
  'Past Parent',
  'Grandparent',
  'Misc.',
];
const pieTotal_Donors = [163, 59, 59, 62, 90, 42];
const pieYear_FY21 = [6.0, 6.0, 69.0, 10.0, 3.0, 0.0, 4.0, 2.0];
const pieYear_FY20 = [25.0, 5.0, 41.0, 12.0, 8.0, 4.0, 0.0, 5.0];
const pieYear_FY19 = [29.0, 8.0, 41.0, 5.0, 7.0, 8.0, 0.0, 2.0];
const pieYear_FY18 = [26.0, 11.0, 40.0, 8.0, 5.0, 5.0, 2.0, 3.0];
const pieYear_FY17 = [20.0, 42.0, 22.0, 5.0, 7.0, 0.0, 1.0, 3.0];
const pieYear_FY16 = [31.0, 24.0, 7.0, 24.0, 10.0, 0.0, 2.0, 2.0];

// Annual Fund: Giving Percentage (FY20 vs FY21)
const annualFY21_Amount = [80.0, 9.0, 6.0, 2.0, 2.0, 1.0];
const annualFY21_Total = ['$778,283.00'];
const annualFY21_Part = [100, 92, 97];
const annualFY20_Amount = [81.0, 8.0, 8.0, 2.0, 0.5, 0.5];
const annualFY20_Total = ['$845,646.00'];
const annualFY20_Part = [95, 91, 98];

// General: Amount of Funds Raised per Month
const general_monthLabels = [
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const general_FundRaised = [
  50.0, 98966.99, 222302.0, 814409.52, 123268.03, 240959.5, 107754.29, 65195.0,
  260761.76, 189788, 210500.0, 20625.97,
];

// Double Line Chart: Horizon Data
function doubleLineChart() {
  let ctx = $('#doubleLineChart');
  let labels = year_Labels;
  let data1 = lineStudent_Served;
  let data2 = lineFund_Raised;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Student Served',
        data: data1,
        borderColor: primaryColor,
        backgroundColor: primaryColor,
        pointBackgroundColor: primaryColor,
        pointHoverBackgroundColor: secondaryHoverColor,
        pointRadius: 6,
        pointHoverRadius: 15,
        yAxisID: 'y',
      },
      {
        label: 'Fund Raised',
        data: data2,
        borderColor: 'black',
        backgroundColor: secondaryColor,
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: secondaryHoverColor,
        pointRadius: 6,
        pointHoverRadius: 15,
        yAxisID: 'y1',
      },
    ],
  };
  let config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      plugins: {
        legend: {
          display: false,
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
            display: false,
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

  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#line-animate')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

// Pie Chart / Line Chart: Horizon Data
function pieChart1() {
  let ctx = $('#pieChart1');
  const labels = pieYear_Label;
  const data1 = pieYear_FY21;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,
        borderRadius: 5,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY21',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate1')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function pieChart2() {
  let ctx = $('#pieChart2');
  const labels = pieYear_Label;
  const data1 = pieYear_FY20;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,
        borderRadius: 5,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY20',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate2')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function pieChart3() {
  let ctx = $('#pieChart3');
  const labels = pieYear_Label;
  const data1 = pieYear_FY19;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,
        borderRadius: 5,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY19',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate3')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function pieChart4() {
  let ctx = $('#pieChart4');
  const labels = pieYear_Label;
  const data1 = pieYear_FY18;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,
        borderRadius: 5,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY18',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate4')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function pieChart5() {
  let ctx = $('#pieChart5');
  const labels = pieYear_Label;
  const data1 = pieYear_FY17;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,
        borderRadius: 5,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY17',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate5')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function pieChart6() {
  let ctx = $('#pieChart6');
  const labels = pieYear_Label;
  const data1 = pieYear_FY16;
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Roles',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryHexColor,
        hoverBackgroundColor: secondaryColor,
        hoverBorderColor: primaryColor,

        borderWidth: 2,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      rotation: -100 * Math.PI - (25 / 180) * Math.PI,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          onHover: handleHover,
          onLeave: handleLeave,
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'FY16',
          font: {
            family: 'Lato',
            weight: 'bold',
            size: 20,
          },
        },
        cutoutPercentage: 80,
        tooltip: {
          title: {
            display: true,
          },
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
          yAlign: 'bottom',
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeInBounce',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#pie-animate6')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
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

// Double Line / Double  Bar Chart: Annual Fund

function doubleBarChart1() {
  let ctx = $('#doubleBarChart1');
  const labels = giving_Labels;
  const data1 = annualFY21_Amount;
  const data2 = annualFY20_Amount;
  let data = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: 'FY21 - Giving %',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryColor,
        borderRadius: 5,
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'FY20 - Giving %',
        data: data2,
        borderColor: 'white',
        backgroundColor: secondaryColor,
        borderRadius: 5,
        borderWidth: 2,
      },
    ],
  };
  let config = {
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      plugins: {
        legend: {
          display: false,
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

          yAlign: 'bottom',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 90,
          ticks: {
            callback: function (value) {
              return (value / 100) * 100 + '%';
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 18,
            },
          },
          title: {
            display: true,
            text: 'Role Participation Percentage (%)',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
            grid: {
              display: true,
              color: primaryGridColor,
            },
          },
        },

        x: {
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
            text: 'Roles',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
            grid: {
              display: true,
              color: primaryGridColor,
            },
          },
        },
      },
      animation: {
        duration: 2000,
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#bar-animate1')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

function doubleBarChart2() {
  let ctx = $('#doubleBarChart2');
  const labels = role_PartLabels;
  const data1 = annualFY21_Part;
  const data2 = annualFY20_Part;
  let data = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: 'FY21 - Role Participation %',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryColor,
        borderRadius: 5,
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'FY20 - Role Participation %',
        data: data2,
        borderColor: 'white',
        backgroundColor: secondaryColor,
        borderRadius: 5,
        borderWidth: 2,
      },
    ],
  };
  let config = {
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      intersect: false,
      plugins: {
        legend: {
          display: false,
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

          yAlign: 'bottom',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 100,
          ticks: {
            callback: function (value) {
              return (value / 100) * 100 + '%';
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 18,
            },
          },
          title: {
            display: true,
            text: 'Giving Percentage (%)',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
            grid: {
              display: true,
              color: primaryGridColor,
            },
          },
        },

        x: {
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
            text: 'Roles',
            scaleLabel: {
              show: true,
            },
            font: {
              family: primaryFontFamily,
              weight: 'bold',
              size: 20,
            },
            grid: {
              display: true,
              color: primaryGridColor,
            },
          },
        },
      },
      animation: {
        duration: 3000,
      },
    },
  };

  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#bar-animate2')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}

// Polar Graph: General
function polarAreaChart() {
  let ctx = $('#polarAreaChart');
  const labels = general_monthLabels;
  const data1 = general_FundRaised;
  let data = {
    labels: labels,
    datasets: [
      {
        label: '',
        data: data1,
        borderColor: 'white',
        backgroundColor: primaryColor,
        hoverBackgroundColor: secondaryHoverColor,
        borderRadius: 4,
        hoverOffset: 30,
      },
    ],
  };
  let config = {
    type: 'polarArea',
    data: data,
    options: {
      maintainAspectRatio: false,
      responsive: true,
      intersect: false,
      scale: {
        max: 800000,
        min: 0,
        ticks: {
          display: true,
          // maxTicksLimit: 1,
        },
      },
      gridLines: {
        display: false,
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
          },
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            font: {
              family: 'Lato',
              weight: 'bold',
              size: 18,
            },
            usePointStyle: true,
          },
          onHover: function (event, legendItem) {
            document.getElementById('polarAreaChart').style.cursor = 'pointer';
          },
          onLeave: function () {
            document.getElementById('polarAreaChart').style.cursor = 'default';
          },
        },
        title: {
          display: true,
          text: 'Funds Raised Per Month',
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
        duration: 3000,
        easing: 'easeInOutQuart',
      },
    },
  };
  let chart = new Chart(ctx, config);
  (function () {
    document
      .querySelector('#polar-animate')
      .addEventListener('click', function destoryChart() {
        chart.destroy();
        chart = new Chart(ctx, config);
      });
  })();
}
