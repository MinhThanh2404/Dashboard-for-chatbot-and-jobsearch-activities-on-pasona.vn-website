<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Weekly Overview</span>

      <v-spacer></v-spacer>

      <v-btn icon small class="mt-n2 me-n3">
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-btn @click="changeData()">change</v-btn>
      <!-- Chart -->
      <vue-apex-charts :options="chartOptions" :series="chartData" height="210"></vue-apex-charts>

      <div class="d-flex align-center">
        <h3 class="text-2xl font-weight-semibold me-4">
          45%
        </h3>
        <span>Your sales perfomance in 45% 🤩 better compare to last month</span>
      </div>

      <v-btn block color="primary" class="mt-6" outlined>
        Details
      </v-btn>
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
      chartOptions: {
        // default column color
        colors: ['#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559'],
        chart: {
          type: 'bar',
          toolbar: {
            show: false,
          },
          // offsetX: 0,
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            distributed: true,
            borderRadius: 8,
            startingShape: 'rounded',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ['Sun', 'M', 'T', 'W', 'T', 'F', 'Sat'],
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
          tickPlacement: 'on',
          labels: {
            show: true,
            style: {
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          show: true,
          tickAmount: 4,
          labels: {
            offsetY: 3,
            formatter: value => `$${value}`,
          },
        },
        stroke: {
          width: [2, 2],
        },
        grid: {
          strokeDashArray: 12,
          padding: {
            right: 0,
          },
        },
      },

      chartData: [],
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
      },
    }
  },

  created() {
    // Get the current day (0 for Sunday, 1 for Monday, and so on)
    const currentDay = new Date().getDay()

    // Define an array of colors, one for each day of the week
    const dayColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#C0C0C0']

    // Set a different color for the current day
    this.chartOptions.colors[currentDay] = dayColors[currentDay]

    this.chartData = this.formatData([
      { key: 20 },
      { key: 40 },
      { key: 50 },
      { key: 60 },
      { key: 70 },
      { key: 10 },
      { key: 20 },
    ])

  },
  
  methods: {

    changeData() {
      // load updated data
      const newData = this.formatData([
        { key: (Math.random() * 10000) / 10 },
        { key: (Math.random() * 10000) / 10 },
        { key: (Math.random() * 10000) / 10 },
        { key: (Math.random() * 10000) / 10 },
        { key: (Math.random() * 10000) / 10 },
        { key: (Math.random() * 10000) / 10 },
      ])

      // Update the series data
      this.chartData = newData
    },
    formatData(chartData) {
      let result = []
      chartData.forEach(element => {
        console.log(element.key)
        result.push(element.key)
      })

      return [
        {
          data: result,
        },
      ]
    },
    getChartData() {
      return null
    },
  },
}
</script>
