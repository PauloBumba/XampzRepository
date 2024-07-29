const ctx = document.getElementById('modalidadesPieChart').getContext('2d');
const modalidadesPieChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Basquetebol', 'Futebol', 'Xadrez', 'E-sports', 'Truco', 'Andebol'], 
        datasets: [{
            label: 'Distribuição',
            data: [15, 25, 10, 20, 10, 20], 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

function updateChart() {
    const data = modalidadesPieChart.data.datasets[0].data;
    for (let i = 0; i < data.length; i++) {
        data[i] = Math.floor(Math.random() * 30); // Atualiza com um valor aleatório
    }
    modalidadesPieChart.update();
}

// Função para aplicar filtro aos dados do gráfico
function filterData() {
    const data = modalidadesPieChart.data.datasets[0].data;
    for (let i = 0; i < data.length; i++) {
        data[i] = Math.floor(Math.random() * 20); // Atualiza com um valor aleatório filtrado
    }
    modalidadesPieChart.update();
}

// Atualiza o gráfico automaticamente a cada 3 segundos
setInterval(() => {
    updateChart();
}, 3000);

document.getElementById('update-chart').addEventListener('click', () => {
    updateChart();
});

document.getElementById('filter-data').addEventListener('click', () => {
    filterData();
});