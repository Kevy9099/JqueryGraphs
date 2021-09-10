//////////////////////* Intialize *////////////////////////////
$(document).ready(function () {
    doubleBarChart1();
    doubleBarChart2();
});

//////////////////////* Bar Charts Lables *////////////////////////////
let annualYears = ["FY21", "FY20"];

let givenDonors = [
    "Parent",
    "Trustee",
    "Grandparents",
    "Faculty/Staff",
    "Friends/Former Trustees",
    "Alumni",
];

let roleDonors = [
    "Parent",
    "Trustee",
    "Faculty/Staff",
]

// Giving Percentage & Role Participation Percentage for 2021
let givingFY21 = [80.0, 9.0, 6.0, 2.0, 2.0, 1.0];

let roleFY21 = [100, 92, 97];

// Giving Percentage & Role Participation % for 2020
let givingFY20 = [81.0, 8.0, 8.0, 2.0, 0.5, 0.5];

let roleFY20 = [95, 91, 98];

//////////////////////* Double Bar Charts *////////////////////////////
function doubleBarChart1() {
    let ctx = $('#doubleBarChart1');
    let label = givenDonors;
    let data1 = givingFY21;
    let data2 = givingFY20;
    let data = {
        labels: label,
        datasets: [
            {
                type: "bar",
                label: "FY21",
                data: data1,
                backgroundColor: primaryColor,
                borderColor: primaryBorderColor,
                borderRadius: 5,
                borderWidth: 2,
            },
            {
                type: "bar",
                label: "FY20",
                data: data2,
                backgroundColor: secondaryColor,
                borderColor: primaryBorderColor,
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
            plugins: {
                legend: {
                    display: false,
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
                    yAlign: 'bottom',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 90,
                    ticks: {
                        color: neutralColor,
                        callback: function (value) {
                            return (value / 100) * 100 + "%";
                        },
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                    title: {
                        display: true,
                        text: "Given Percentage",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 18,
                        }
                    },
                    grid: {
                        color: neutralColor,
                    }
                },
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 14,
                        },
                        maxRotation: 90,
                        minRotation: 90,
                    },
                    title: {
                        display: true,
                        text: "Donor Type",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 20,
                        },
                    },
                    grid: {
                        color: neutralColor,
                    },
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}

function doubleBarChart2() {
    let ctx = $('#doubleBarChart2');
    let label = roleDonors;
    let data1 = roleFY21;
    let data2 = roleFY20;
    let data = {
        labels: label,
        datasets: [
            {
                type: 'bar',
                label: 'FY21',
                data: data1,
                backgroundColor: primaryColor,
                borderColor: primaryBorderColor,
                borderRadius: 5,
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'FY20',
                data: data2,
                backgroundColor: secondaryColor,
                borderColor: primaryBorderColor,
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
            plugins: {
                legend: {
                    display: false,
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
                    yAlign: 'bottom',
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    ticks: {
                        color: neutralColor,
                        callback: function (value) {
                            return (value / 100) * 100 + "%";
                        },
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 16,
                        },
                    },
                    title: {
                        display: true,
                        text: "Role Participation Percentage",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 18,
                        }
                    },
                    grid: {
                        color: neutralColor,
                    }
                },
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 14,
                        },
                        maxRotation: 90,
                        minRotation: 90,
                    },
                    title: {
                        display: true,
                        text: "Donor Type",
                        color: neutralColor,
                        font: {
                            family: primaryFont,
                            weight: "bold",
                            size: 20,
                        },
                    },
                    grid: {
                        color: neutralColor,
                    },
                },
            },
        },
    };
    let chart = new Chart(ctx, config);
}

