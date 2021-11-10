var options = {
  series: [{
    name: "",
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
      show: true,
      formatter: function (val, index) {
        return val ? 'Ξ ' + val : '';
      }
    },
  },
  legend: {
    horizontalAlign: 'left'
  }
};

var chart = new ApexCharts(document.querySelector("#avchart"), options);
chart.render();

var tnoptions = {
  series: [10, 15, 20, 35, 10, 10],
  labels: ["ASTRO", "BAYC", "Punk", "AXIE", "VEE", "Others"],
  colors: ['#57E1FF', '#ED3DD1', '#FFAD10', '#FF5290', '#71F2BC', '#17C3EB'],
  chart: {
    type: 'donut',
    width: '100%',
    height: '100%'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '80%',
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            label: 'Collections',
          }
        }
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    position: 'bottom',
    fontSize: '14px',
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
    formatter: function (seriesName, opts) {
      const total = opts.w.globals.series.reduce((accumulator, a) => accumulator + a, 0)
      const value = opts.w.globals.series[opts.seriesIndex]
      const percentage = ((value / total) * 100).toFixed(0)
      return `<div class="apexcharts-legend-text__name">${seriesName}</div><div class="apexcharts-legend-text__percentage">${percentage}%</div>`
    },
    markers: {
      width: 20,
      height: 20,
      fillColors: undefined,
      radius: 0,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0
    },
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
    }
  }]
};

var tnchart = new ApexCharts(document.querySelector("#tnchart"), tnoptions);
tnchart.render();