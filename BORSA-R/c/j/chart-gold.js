
const ctxGold = document.getElementById('chartGold').getContext('2d');
const chartGold = new Chart(ctxGold, {
    type: 'line',
    data: {
        labels: ['10:00', '12:00', '14:00','16:00', '18:00', '20:00'],
        datasets: [{
            label: '',
            data: [1.802, 2.202, 3.702, 2.502, 3.602, 1.702],
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

