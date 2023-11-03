<template>
  <v-card>
    <v-card-title class="align-start">
            <span>Satisfaction</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/user_info"> Details </v-btn>
        </v-card-title>

    <v-card-text>
      <!-- Chart -->
      <vue-apex-charts :options="chartOptions" :series="chartData" height="210"></vue-apex-charts>

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
            dataLabels: {
              position: 'top',
              // fontColor: '#AB0020',
              total: {
                enabled: true,
                formatter: undefined,
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: '#373d3f',
                  fontSize: '12px',
                  fontFamily: undefined,
                  fontWeight: 600
                }
              }
            }
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -30,
          fontColor: '#AB0020',

          background: {
            enabled: true,
            foreColor: '#FFFFFF',
            padding: 4,
            opacity: 0.9,
          },
          // style: {
          //   fontSize: '14px',
          //   fontColor: '#FFFFFF'
          // },
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
          tickAmount: 5,
          labels: {
            offsetY: 3,
            formatter: value => `${value}`,
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
    const dayColors = '#B22222'

    // Set a different color for the current day
    this.chartOptions.colors[currentDay] = dayColors

    this.chartData = this.formatData([
      { key: 4 },
      { key: 4 },
      { key: 4.5 },
      { key: 4.6 },
      { key: 5 },
      { key: 4.5 },
      { key: 3 },
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
