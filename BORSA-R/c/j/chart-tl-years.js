
const ctxYears = document.getElementById('chartTlYears').getContext('2d');
const chartTlYears = new Chart(ctxYears, {
    type: 'bar',
    data: {
        labels: ['BORSA', 'DOLAR', 'EURO', 'ALTIN'],
        datasets: [{
            label:'asdads',
            data: ["1.211", 1.002,1.101,1.511],
            backgroundColor: [
                'rgba(61, 180, 114, 0.1)',
                'rgba(61, 180, 114, 0.1)',
                'rgba(61, 180, 114, 0.1)',
                'rgba(213, 19, 23, 0.1)'
            ],
            borderColor: [
                'rgba(61, 180, 114, 1)',
                'rgba(61, 180, 114, 1)',
                'rgba(61, 180, 114, 1)',
                'rgba(213, 19, 23, 1)'
            ],
            borderWidth: 1,
            borderRadius: 10
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

