var options = {
    series: [{
    name: "Ξ",
    data: [10, 5, 15, 14, 17, 25, 23, 29, 25, 31, 35, 39, 40, 39, 35, 32, 35, 40, 45, 50, 66, 69, 75, 70]
  }],
    chart: {
    type: 'area',
    height: '100%',
    width: '100%',
    zoom: {
      enabled: false
    },
    toolbar: {
        show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2.5
  },
  colors: ['rgba(238, 137, 53, 1)'],
  labels: ['24:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  xaxis: {
    type: 'category',
  },
  yaxis: {
    opposite: false,
    labels: {
        show: false
    }
  },
  legend: {
    horizontalAlign: 'left'
  }
  };

  // var chart = new ApexCharts(document.querySelector("#avchart"), options);
  // chart.render();

  var tnoptions = {
    series: [44, 55, 41, 17, 15],
    colors: ['#57E1FF', '#ED3DD1', '#FFAD10', '#FF5290', '#71F2BC', '#17C3EB'],
    chart: {
        type: 'donut',
    },
    plotOptions: {
        pie: {
            donut: {
                size: '75%',
                labels: {
                    show: false
                }
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    stroke: {
        with: 5
    },
    responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: '100%',
        height: '100%'
      },
      legend: {
        show: false,
        position: 'bottom'
      }
    }
  }]
  };

  var tnchart = new ApexCharts(document.querySelector("#tnchart"), tnoptions);
  tnchart.render();