//////////////////////* Intialize *////////////////////////////

$(document).ready(function () {
    polarAreaChart();
});

//////////////////////* Polar Area Chart Lables *////////////////////////////
let monthNames = [
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
    'June'
]

let monthlyFunds = [
    50.00, 98966.00, 222302.00, 814409.52, 123268.03, 240959.50, 107754.29, 65195.00,
    260791.76, 189788.00, 210500.00, 20625.97
]

//////////////////////* Polar Area Chart*////////////////////////////
function polarAreaChart() {
    let ctx = $('#polarAreaChart');
    let label = monthNames;
    let data1 = monthlyFunds;
    let data = {
        labels: label,
        datasets: [
            {
                label: '',
                data: data1,
                borderColor: primaryBorderColor,
                backgroundColor: primaryPieColors,
                hoverBackgroundColor: secondaryColor,
                borderRadius: 4,
                hoverOffset: 30,
            },
        ],
    };
    let config = {
        type: "polarArea",
        data: data,
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scale: {
                max: 800000,
                min: 0,
            },
            gridLines: {
                display: false,
            },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    onHover: handleHover,
                    onLeave: handleLeave,
                    labels: {
                        color: secondaryColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 18,
                        },
                        usePointStyle: true,
                    },
                },
                title: {
                    display: true,
                    text: "Funds Raised Per Month",
                    color: neutralColor,
                    font: {
                        size: 20,
                    },
                },
                tooltip: {
                    displayColors: false,
                    titleFont: {
                        weight: "bold",
                        size: 20,
                    },
                    bodyFont: {
                        size: 18,
                    },
                    yAlign: "bottom",
                },
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 3000,
                easing: 'easeInElastic',
            },
        },
    };
    let chart = new Chart(ctx, config);
    // (function () {
    //     document
    //         .querySelector('#polar-animate')
    //         .addEventListener('click', function destoryChart() {
    //             chart.destroy();
    //             chart = new Chart(ctx, config);
    //         });
    // })();
}