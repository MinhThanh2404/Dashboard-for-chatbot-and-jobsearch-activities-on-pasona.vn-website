<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Language</span>
      <v-spacer></v-spacer>

      <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
    </v-card-title>

    <v-card-text>
      <!-- Chart -->
      <vue-apex-charts type="bar" :options="chartOptions" :series="chartData" height="220"></vue-apex-charts>

      <!-- <div class="d-flex align-center">
          <h3 class="text-2xl font-weight-semibold me-4">
            45%
          </h3>
          <span>Your sales perfomance in 45% 🤩 better compare to last month</span>
        </div> -->

      <!-- <v-btn block color="primary" class="mt-6" outlined>
          Details
        </v-btn> -->
    </v-card-text>
  </v-card>
</template>
  
<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd } from '@mdi/js'
import { getCurrentInstance } from '@vue/composition-api'

export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      chartData: [{
        name: 'English',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Japanese',
        data: [53, 32, 33, 52, 13, 43, 32]
      },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 8,
            startingShape: 'rounded',
            endingShape: 'rounded',
            horizontal: true,
          },
        },
        colors: ['#3b3559', '#B22222'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ['#fff']
        },
        xaxis: {
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        yaxis: {
          title: {
            text: undefined
          },
        },
        grid: {
          show: false
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40,
        },
      },


    }


  },


  // created() {
  //   // Get the current day (0 for Sunday, 1 for Monday, and so on)
  //   const currentDay = new Date().getDay()

  //   // Define an array of colors, one for each day of the week
  //   const dayColors = '#B22222'

  //   // Set a different color for the current day
  //   this.chartOptions.colors[currentDay] = dayColors

  //   this.chartData = [{
  //     name: 'JobPage',
  //     data: [4, 6, 8, 7, 5, 4, 6]
  //   },
  //   {
  //     name: 'Chatbot',
  //     data: [6, 3, 7, 1, 3, 4, 9]
  //   }]
  // },

  methods: {

    changeData() {
      // load updated data
      const newData = [{
        name: 'English',
        data: [4, 6, 8, 7, 5, 4, 6]
      },
      {
        name: 'Japanese',
        data: [6, 3, 7, 1, 3, 4, 9]
      }]

      // Update the series data
      this.chartData = newData
    },
    getChartData() {
      return null
    },
  },
}
</script>
  