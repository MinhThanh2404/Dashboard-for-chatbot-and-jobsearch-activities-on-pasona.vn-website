<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Most Searched Industries</span>
      <v-spacer></v-spacer>

      <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
    </v-card-title>

    <v-card-text>
      <vue-apex-charts class="chart-container" @mouseenter="showMagnifier" @mouseleave="hideMagnifier" type="treemap"
        height="500" :options="chartOptions" :series="series"></vue-apex-charts>
      <div class="magnifier" ref="magnifier"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          data: [
            {
              x: 'IT (Software&Web)',
              y: 100
            },
            {
              x: 'Manufacturing(Apparels)',
              y: 90
            },
            {
              x: 'Service (Other)',
              y: 20
            },
            {
              x: 'Real Estate',
              y: 44
            },
            {
              x: 'Trading',
              y: 200
            },
            {
              x: 'Construction/Civil Engineering',
              y: 14
            },
            {
              x: 'IT (Hardware & Networking)',
              y: 90
            },
            {
              x: 'Interior Design',
              y: 33
            },
            {
              x: 'Service(Hotel,Travel,Beauty)',
              y: 58
            },
            {
              x: 'Education',
              y: 43
            },
          ]
        }
      ],
      chartOptions: {
        legend: {
          show: false
        },
        chart: {
          height: 400,
          type: 'treemap',
          foreColor: '#FFFFFF',
          toolbar: {
            show: false
          },
          selection: {
            enabled: true,
            fill: {
              color: '#ffffff',
              foreColor: '#000000'
            },
            stroke: {
              width: 1,
              color: '#B222222'
            }
          }
        },
        dataLabels: {
          enabled: true,
          fontSize: '60px',
          fontWeight: 'bold',
          formatter: function (text, op) {
            return [text, op.value]
          },
        },
        plotOptions: {
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            dataLabels: {
              format: 'truncate'
            }
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#ffb09c',
            shadeTo: 'light',
            shadeIntensity: 0.5
          }
        },

      },

    }
  },
  methods: {
    showMagnifier(event) {
      const magnifier = this.$refs.magnifier;
      const chartContainer = event.target;

      const rect = chartContainer.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      magnifier.style.left = `${offsetX - 50}px`; // Adjust position based on magnifier size
      magnifier.style.top = `${offsetY - 50}px`;
      magnifier.style.display = 'block';
    },
    hideMagnifier() {
      this.$refs.magnifier.style.display = 'none';
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
}

.magnifier {
  position: absolute;
  width: 100px;
  /* Adjust the size of the magnifier as needed */
  height: 100px;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.5);
  /* Adjust the background color and opacity */
  display: none;
}
/* .treemaptext {
    font-size: 90px !important;
    font-weight: 600 !important;
} */

</style>