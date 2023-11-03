<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Options Over Time</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
        </v-card-title>
        <v-card-text>
            <vue-apex-charts type="line" height="450" :options="chartOptions" :series="series"></vue-apex-charts>
        </v-card-text>
    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import dataSeries from './OverviewSearchRealtime-data'

export default {
    components: {
        VueApexCharts,
    },

    data() {
        return {
            series: dataSeries,
            chartOptions: {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Price'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                    }
                }
            },

        }

    },
}

</script>
<style></style>