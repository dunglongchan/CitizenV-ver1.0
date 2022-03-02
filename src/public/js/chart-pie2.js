// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
console.log("hello")
    // Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Cấp 1", "Cấp2", "Cấp 3", "Đại học", "khác"],
        datasets: [{
            data: [30, 30, 20, 15, 5],
            backgroundColor: ['rgba(26, 188, 156,1.0)', 'rgba(230, 126, 34,1.0)', 'rgba(155, 89, 182,1.0)', 'rgba(231, 76, 60,1.0)', 'rgba(127, 140, 141,1.0)'],
            hoverBackgroundColor: ['rgba(26, 188, 156,1.0)', 'rgba(230, 126, 34,1.0)', 'rgba(155, 89, 182,1.0)', 'rgba(231, 76, 60,1.0)', 'rgba(127, 140, 141,1.0)'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
        }],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false
        },
        cutoutPercentage: 80,
    },
});