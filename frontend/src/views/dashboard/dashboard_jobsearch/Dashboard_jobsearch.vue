<template>
    <div>
        <!-- combobox time START -->
        <v-row>
            <v-col cols="12" md="8">
                <v-row>
                    <h2>JOB SEARCH SUMMARY</h2>
                </v-row>
            </v-col>

            <v-col cols="12" md="4">
                <v-combobox v-model="selectedItem" :items="time_list" outlined dense></v-combobox>
            </v-col>
        </v-row>
        <!-- combobox time START -->
        <v-divider class="mt-1 mb-5"></v-divider>

        <!-- total search section START -->
        <v-row class="mb-1">
            <!-- compared with KPI START -->
            <v-col cols="12" md="4">
                <job-search-k-p-i class="h-100"></job-search-k-p-i>
            </v-col>
            <!-- compared with KPI END -->

            <!-- distribution from page/chatbot START-->
            <v-col cols="12" md="8">
                <job-search-from class="h-100"></job-search-from>
            </v-col>
            <!-- distribution from page/chatbot END-->
        </v-row>
        <!-- total search section END -->

        <!-- search field START -->
        <v-row>
            <v-col cols="12" md="12">
                <job-search-fields></job-search-fields>
            </v-col>
        </v-row>
        <!-- search field END -->

        <!-- fields detail START -->
        <v-row>
            <!-- keyword search START -->
            <v-col cols="12" md="5">
                <v-card>
                    <v-card-title>
                        WORDCLOUD SEARCH KEYWORD
                    </v-card-title>
                    <v-card-text></v-card-text>
                </v-card>
            </v-col>
            <!-- keyword search END -->

            <!-- location START -->
            <v-col cols="12" md="7">
                <v-card>
                    <v-card-title class="align-start">
                        <span>Most Searched Locations</span>
                        <v-spacer></v-spacer>

                        <v-btn x-small class="me-n3 mt-n1" to="/jobsearch_data"> Details </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <job-search-location></job-search-location>
                    </v-card-text>
                </v-card>
            </v-col>
            <!-- location END -->
        </v-row>

        <v-row>
            <!-- salary START -->
            <v-col cols="12" md="4">
                <job-search-salary></job-search-salary>
                <job-search-language class="mt-3"></job-search-language>
            </v-col>
            <!-- salary END -->

            <!-- industry START-->
            <v-col cols="12" md="8">
                <job-search-industry></job-search-industry>
            </v-col>
            <!-- industry END-->

        </v-row>
        <!-- fields detail END -->

        <!-- wordcloud START -->
        <v-row>
            <v-col cols="12" md="12">
                <job-search-industry></job-search-industry>

            </v-col>
        </v-row>
        <!-- wordcloud END -->
        <!-- message content end -->

    </div>
</template>

<script>
import { mdiArrowDown, mdiArrowUp, mdiLabelVariantOutline, mdiDotsVertical, mdiHelpCircleOutline, mdiRobotHappyOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'
import SmallCardTemplate from '@/components/statistics-card/SmallCardTemplate.vue'
import VueApexCharts from 'vue-apexcharts'
// import VueWorldCLoud from 'vue-wordcloud'

import JobSearchKPI from './JobSearchKPI.vue'
import JobSearchFrom from './JobSearchFrom.vue'
import JobSearchFields from './JobSearchFields.vue'
import JobSearchLocation from './JobSearchLocation.vue'
import JobSearchSalary from './JobSearchSalary.vue'
import JobSearchIndustry from './JobSearchIndustry.vue'
import JobSearchLanguage from './JobSearchLanguage.vue'
// import ChatbotRating from './ChatbotRating.vue'
// import ChatbotTopicDist from './ChatbotTopicDist.vue'
// import ChatbotTopicTime from './ChatbotTopicTime.vue'
// import ChatbotWordcloud from './ChatbotWordcloud.vue'

export default {
    components: {
        SmallCardTemplate,
        StatisticsCardVertical,
        JobSearchKPI,
        VueApexCharts,
        JobSearchFrom,
        JobSearchFields,
        JobSearchLocation,
        JobSearchSalary,
        JobSearchIndustry,
        JobSearchLanguage,
        // ChatbotRating,
        // ChatbotTopicDist,
        // ChatbotTopicTime,
        // ChatbotWordcloud,
    },
    data() {
        return {
            selectedItem: localStorage.getItem("time_component") ? localStorage.getItem("time_component") : "Today",

            time_list: ['Today', 'Week', 'Month', 'Quarter', 'Year'],

            time_change: {
                Today: 'yesterday',
                Week: 'last week',
                Month: 'last month',
                Quarter: 'last quarter',
                Year: 'last year',
            },

            rentationRate: {
                statistics: 4.7,
                statTitle: 'Rentation Rate',
                statchange: -10,
            },

            ratingscore: {
                score: 4,
                change: -0.1,
            },

            icons: {
                mdiArrowUp,
                mdiArrowDown,
                mdiDotsVertical,
                mdiRobotHappyOutline,
            }

        }
    },
    watch: {
        selectedItem(newOption) {
            localStorage.setItem("time_component", newOption);
            console.log(newOption);
            console.log(localStorage.getItem("time_component"))
        }
    },
    mounted() {
        const storedItem = localStorage.getItem('selectedItem');
        if (storedItem) {
            this.selectedItem = storedItem;
        }
    },
}
</script>

<style>
h2 {
    color: darkred !important;
    font-size: 3rem !important;
    font-weight: 900 !important;
}

.h-100 {
    height: 100% !important;
}

.change {
    position: absolute;
    bottom: 6px;
    right: 16px;
}
</style>