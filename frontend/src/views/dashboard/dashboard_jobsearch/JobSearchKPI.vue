<template>
    <v-card>
        <v-card-title>Search KPI</v-card-title>
        <v-card-text>
            <div class="d-flex justify-center">
                <vue-apex-charts type="radialBar" :options="NewUserOptions" :series="NewUserData" height="250"
                    width="250"></vue-apex-charts>
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
            NewUserData: [44], // (new users / total users) * 100
            NewUserOptions: {
                chart: {
                    // offsetY: -20,
                    sparkline: {
                        enabled: true,
                    },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -150,
                        endAngle: 150,
                        hollow: {
                            margin: 0,
                            size: '80%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: true,
                                fontSize: '30px',
                                fontWeight: 'bold', //not able to change
                                // offsetY: -20
                            },

                        },
                    }

                },
                fill: {
                    type: 'gradient',
                    colors: ['#B22222'], // Color for the filled portion (44%)
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4
                    }
                },
            },
        };
    },
}
</script>