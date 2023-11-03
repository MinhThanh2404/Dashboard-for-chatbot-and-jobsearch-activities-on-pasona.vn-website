<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Search Options</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
        </v-card-title>
        <v-card-text>
            <div class="d-flex justify-center">
                <vue-apex-charts type="donut" :options="TopicChartOptions" :series="statistics" height="400"
                    width="400"></vue-apex-charts>
            </div>

        </v-card-text>

    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mapActions } from "vuex"

export default {
    props: {
        statistics: {type: Array, default: [0,0,0,0,0]},
    },
    components: {
        VueApexCharts,
    },

    data() {
        return {
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
                            size: "80%",
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
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#9e0c05',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    }
                },
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
                }],
                labels: ['Keyword', 'Location', 'Industry', 'Salary', 'Language']
            },
        }
    },
    
    methods: {

    },
}
</script>