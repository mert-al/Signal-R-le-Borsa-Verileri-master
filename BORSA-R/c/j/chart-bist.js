
const ctxBist = document.getElementById('chartBist').getContext('2d');
const chartBist = new Chart(ctxBist, {
    type: 'line',
    data: {
        labels: ['10:00', '12:00', '14:00','16:00', '18:00', '20:00'],
        datasets: [{
            label: '',
            data: [1802, 2202, 3702, 2502, 3602, 1702],
            fill: true,
            backgroundColor: [
                '#d0d6dc'
            ]
        }]
    },
    options: {
        plugins: {
          legend: {
            display: false
          }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

