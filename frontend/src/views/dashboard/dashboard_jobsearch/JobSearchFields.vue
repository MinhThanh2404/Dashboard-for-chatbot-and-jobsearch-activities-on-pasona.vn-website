<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Most Searched Fields</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
        </v-card-title>
        <v-card-text>
            <vue-apex-charts type="line" height="500" :options="chartOptions" :series="series"></vue-apex-charts>
        </v-card-text>
    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        VueApexCharts,
    },

    data() {
        return {
            series: [
                {
                    name: "Keyword",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    name: "Location",
                    data: [12, 11, 14, 18, 17, 13, 13]
                },
                {
                    name: "Industry",
                    data: [40, 33, 30, 51, 9, 22, 20]
                },
                {
                    name: "Salary",
                    data: [23, 30, 41, 12, 21, 9, 11]
                },
                {
                    name: "Language",
                    data: [14, 2, 4, 21, 16, 3, 6]
                },
            ],
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
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#C20C05',
                        shadeTo: 'dark',
                        shadeIntensity: 0.7
                    }
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                },
                yaxis: {
                    title: {
                        text: 'Number of search'
                    },
                    min: 0,
                    tickAmount: 6,
                },
                tooltip: {
                    shared: false,
                }
            },

        }

    },
}

</script>
<style></style>