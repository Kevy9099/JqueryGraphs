//////////////////////* Intialize *////////////////////////////
$(document).ready(function () {
    doubleLineChart();
    pieChart1();
    pieChart2();
    pieChart3();
    pieChart4();
    pieChart5();
    pieChart6();

    ////////////////////////////// Animation //////////////////////
    // IntersectionObserver
    let options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);

    function callback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                $('#doubleLineChart').parent().addClass('chart-shake');
            } else {
                $('#doubleLineChart').parent().removeClass('chart-shake');
            }
        });
    }

    let target = document.querySelectorAll('.chart-animation');
    target.forEach((item) => {
        if (item) {
            observer.observe(item);
        }
    });
});

//////////////////////* Global Styles *////////////////////////////

// RGBA & Hex Main Colors
let primaryColor = ["rgba(0,45,114,1)"]; // Blue
let secondaryColor = ["rgba(250,194,31,1)"]; // Yellow
let primaryHexColor = ["#002D72"]; // Blue
let secondaryHexColor = ["#FAC21F"]; // Yellow
let neutralColor = ["#FFFFFF"] // White

// Other Colors 
let primaryBorderColor = ["#FFFFFF"];
let primaryPieColors = ["#002D72", "#631d4c", "#7fba63", "#ee6d48", "#aacfd2", "#bbbcbc", '#ee6d48', '#7fba63'];
let primaryPolarColors = ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];


// Fonts
let primaryFont = ["Lato, Helvetica-Neue, monospace"];

//////////////////////* Line & Pie Chart Lables *////////////////////////////
// Line Chart Y-Axis
let yearsNames = ["FY21", "FY20", "FY19", "FY18", " FY17", "FY16"];

// Line Chart Served & Raised
let fundsRaised = [391959.5, 423216.0, 131775.0, 100184.98, 113775.0, 112070.0];
let fundsServed = [95, 86, 72, 61, 45, 28];

// Pie Chart Donor Types & Donation Year
let donorTypes = [
    'Trustee',
    'Friend',
    'Parent',
    'Faculty/Staff',
    'Foundation',
    'Past Parent',
    'Grandparent',
    'Misc.',
];

let donorsFY21 = [6.0, 6.0, 69.0, 10.0, 3.0, 0.0, 4.0, 2.0];
let donorsFY20 = [25.0, 5.0, 41.0, 12.0, 8.0, 4.0, 0.0, 5.0];
let donorsFY19 = [29.0, 8.0, 41.0, 5.0, 7.0, 8.0, 0.0, 2.0];
let donorsFY18 = [26.0, 11.0, 40.0, 8.0, 5.0, 5.0, 2.0, 3.0];
let donorsFY17 = [20.0, 42.0, 22.0, 5.0, 7.0, 0.0, 1.0, 3.];
let donorsFY16 = [31.0, 24.0, 7.0, 24.0, 10.0, 0.0, 2.0, 2.0];

/////////////////////* Global Tools *///////////////////////////////
// Custom Tooltip Position
let tooltipPlugin = Chart.registry.getPlugin('tooltip');
tooltipPlugin.positioners.myCustomPositioner = function (
    elements,
    eventPosition
) {
    let tooltip = this;
    return {
        x: eventPosition.x,
        y: eventPosition.y - 15,
    };
};

// Handle Hover & Leave Hover 
function handleHover(evt, item, legend) {
    document.getElementById('pieChart1').style.cursor = 'pointer';
    document.getElementById('polarAreaChart').style.cursor = 'pointer';
    legend.chart.data.datasets[0].backgroundColor.forEach(
        (color, index, colors) => {
            colors[index] =
                index === item.index || color.length === 9 ? color : color + '4D';
        }
    );
    legend.chart.update();
}

function handleLeave(evt, item, legend) {
    document.getElementById('pieChart1').style.cursor = 'default';
    document.getElementById('polarAreaChart').style.cursor = 'default';
    legend.chart.data.datasets[0].backgroundColor.forEach(
        (color, index, colors) => {
            colors[index] = color.length === 9 ? color.slice(0, -2) : color;
        }
    );
    legend.chart.update();
}
//////////////////////* Double Line Chart *////////////////////////////
function doubleLineChart() {
    let ctx = $('#doubleLineChart');
    let label = yearsNames;
    let data1 = fundsServed;
    let data2 = fundsRaised;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Students Served",
                data: data1,
                borderColor: primaryColor,
                pointBackgroundColor: primaryColor,
                pointRadius: 6,
                pointHoverRadius: 15,
                yAxisID: "y",
            },
            {
                label: "Funds Raised",
                data: data2,
                borderColor: secondaryColor,
                pointBackgroundColor: secondaryColor,
                pointRadius: 6,
                pointHoverRadius: 15,
                yAxisID: "y1",
            },
        ],
    };
    let config = {
        type: "line",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                    position: "myCustomPositioner",
                },
            },
            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    beginAtZero: true,
                    grid: {
                        color: neutralColor,
                    },
                    ticks: {
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                    title: {
                        display: true,
                        text: "Students Served",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: 'bold',
                            size: 20,
                        },
                    }
                },
                y1: {
                    type: "linear",
                    display: true,
                    position: "right",
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        callback: function (value) {
                            return "$" + value / 1000 + "k";
                        },
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                    title: {
                        display: true,
                        text: "Funds Raised",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: 'bold',
                            size: 20,
                        },
                    },
                },
                x: {
                    grid: {
                        color: neutralColor,
                    },
                    ticks: {
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },

                    },
                    title: {
                        display: true,
                        text: "Year",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: 'bold',
                            size: 20,
                        },
                    },
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}

//////////////////////* Pie Charts *////////////////////////////
function pieChart1() {
    let ctx = $('#pieChart1');
    let label = donorTypes;
    let data1 = donorsFY21;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}

function pieChart2() {
    let ctx = $('#pieChart2');
    let label = donorTypes;
    let data1 = donorsFY20;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}
function pieChart3() {
    let ctx = $('#pieChart3');
    let label = donorTypes;
    let data1 = donorsFY19;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}
function pieChart4() {
    let ctx = $('#pieChart4');
    let label = donorTypes;
    let data1 = donorsFY18;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}
function pieChart5() {
    let ctx = $('#pieChart5');
    let label = donorTypes;
    let data1 = donorsFY17;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}
function pieChart6() {
    let ctx = $('#pieChart6');
    let label = donorTypes;
    let data1 = donorsFY16;
    let data = {
        labels: label,
        datasets: [
            {
                label: "Donor",
                data: data1,
                backgroundColor: primaryPieColors,
                borderColor: primaryBorderColor,
                hoverBackgroundColor: secondaryColor,
                borderWidth: 2,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        usePointStyle: true,
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        family: primaryFont,
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        family: primaryFont,
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}