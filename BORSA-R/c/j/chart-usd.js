
const ctxUsd = document.getElementById('chartUsd').getContext('2d');
const chartUsd = new Chart(ctxUsd, {
    type: 'line',
    data: {
        labels: ['10:00', '12:00', '14:00','16:00', '18:00', '20:00'],
        datasets: [{
            label: '',
            data: [18.45, 18.55, 18.65, 18.00, 15.00, 13.702],
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

