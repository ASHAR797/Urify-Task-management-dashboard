const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['mon 12', 'thu 13', 'wed 14', 'thu 15', 'Fri 16', 'Sat 17' , 'Sun 18', 'Mon 19'],
      datasets: [{
        label: '# of Votes',
        data: [1,2,3,4,5,6,7,8],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });