<template>
    <v-card>
        <v-card-title class="align-start">
            <span>New Users</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" to="/user_info"> Details </v-btn>
        </v-card-title>
        <v-card-text>
            <div class="d-flex justify-center">
                <vue-apex-charts type="radialBar" :options="NewUserOptions" :series="NewUserData" height="400"
                    width="600"></vue-apex-charts>
            </div>

        </v-card-text>
    </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    props: {
        NewUserData: {type: Array, default: [0]}// (new users / total users) * 100
    },
    components: {
        VueApexCharts,
    },

    data() {
        return {
            NewUserOptions: {
                chart: {
                    offsetY: -20,
                    sparkline: {
                        enabled: true,
                    },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
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
                                fontSize: '50px',
                                fontWeight: 600, //not able to change
                                offsetY: -20
                            },

                        }
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