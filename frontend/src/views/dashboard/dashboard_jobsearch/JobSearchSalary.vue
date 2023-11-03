<template>
    <v-card>
        <v-card-title class="align-start">
            <span>Salary Range</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
        </v-card-title>
        <v-card-text class="d-flex align-center justify-center">
            <div >
                <vue-apex-charts type="donut" :options="TopicChartOptions" :series="TopicData"
                    height="400" width="400"></vue-apex-charts>
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
                            size: '80%',
                            labels: {
                                show: false,
                                total: {
                                    showAlways: true,
                                    show: true
                                }, 
                                fontSize: '20px',
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
                        shadeIntensity: 0.8
                    }
                },

                labels:['Negotiable', 'Under $500', '$500 - $1000', '$1000 - $1500', '$1500 - $3000', 'Over $3000'],

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

            TopicData: [90, 60, 40, 30, 77, 55],

        }
    }
}
</script>