<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Topic distribution</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/chatbot_data"> Details </v-btn>
        </v-card-title>
        <v-card-text class="d-flex align-center justify-center">
            <div>
                <vue-apex-charts type="donut" :options="TopicChartOptions" :series="TopicData" height="380"
                    width="380"></vue-apex-charts>
            </div>

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
            TopicLabels: [],
            TopicChartOptions: {
                // default column color
                // colors: ['#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559', '#3b3559'],
                chart: {
                    type: 'donut',
                    height: 1000
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '85%',
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true
                                },
                                fontSize: '40px',
                            }
                        }
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend:
                {
                    position: "bottom",
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#9e0c05',
                        shadeTo: 'light',
                        shadeIntensity: 0.8
                    }
                },

                labels: ['job vacancies', 'salary', 'trivia'],

                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 1000
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },

            TopicData: [90, 60, 40],
            TopicLabels: ['job vacancies', 'salary', 'trivia'],

        }
    }
}
</script>