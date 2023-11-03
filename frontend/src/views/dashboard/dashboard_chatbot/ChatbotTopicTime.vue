<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Topic Over Time</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/chatbot_data"> Details </v-btn>
        </v-card-title>
        <v-card-text>
            <vue-apex-charts type="line" height="350" :options="chartOptions" :series="series"></vue-apex-charts>
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
                    name: "Job Vacancies",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    name: "Salary",
                    data: [12, 11, 14, 18, 17, 13, 13]
                }
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            fontColor: '#fffff',
                        }
                    }
                },
                colors: ['#B22222', '#545454'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 0.5
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                },
                yaxis: {
                    title: {
                        text: 'Messages'
                    },
                    min: 0,
                    tickAmount: 6,
                    labels: {
                        offsetY: 3,
                        offsetX: -5,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            },

        }

    },
}

</script>
<style></style>