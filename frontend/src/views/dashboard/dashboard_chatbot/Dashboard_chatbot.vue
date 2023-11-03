<template>
    <div>
        <!-- combobox time START -->
        <v-row>
            <v-col cols="12" md="8">
                <v-row>
                    <h2>CHATBOT SUMMARY</h2>
                </v-row>
            </v-col>

            <v-col cols="12" md="1" class="mt-1">
                <v-btn small @click="reloadPage" style="color: darkred;">Refresh</v-btn>
            </v-col>
            <v-col cols="12" md="3">
                <v-combobox v-model="selectedItem" :items="time_list" outlined dense></v-combobox>
            </v-col>
        </v-row>
        <!-- combobox time END -->
        <v-divider class="mt-1 mb-5"></v-divider>

        <!-- user section start -->
        <v-row class="horizontalcards">
            <!-- new users START -->
            <v-col cols="12" md="4">
                <chatbot-new-user :NewUserData="NewUserData" class="h-100"></chatbot-new-user>
            </v-col>
            <!-- new users END -->

            <!-- rentation rate START-->
            <v-col cols="12" md="4">
                <small-card-template class="h-100" :statistics="rentationRate.statistics"
                    :statTitle="rentationRate.statTitle" :iconchange="rentationRate.statchange > 0"
                    :color="rentationRate.statchange > 0" :statchange="rentationRate.statchange"
                    :time_component="selectedItem" :endpoint="rentationRate.endpoint"></small-card-template>
            </v-col>
            <!-- rentation rate END-->

            <!-- rating START -->
            <v-col cols="12" md="4">
                <chatbot-rating class="h-100"></chatbot-rating>
            </v-col>
            <!-- rating END -->
        </v-row>
        <!-- user section end -->

        <!-- message content start -->
        <v-row>
            <!-- topic dist START -->
            <v-col cols="12" md="4">
                <chatbot-topic-dist class="h-100"></chatbot-topic-dist>
            </v-col>
            <!-- topic dist END -->

            <!-- message for each topic over time START-->
            <v-col cols="12" md="8">
                <chatbot-topic-time class="h-100"></chatbot-topic-time>
            </v-col>
            <!-- message for each topic over time END-->

        </v-row>

        <!-- wordcloud START -->
        <v-row>
            <v-col cols="12" md="12">
                <v-card>
                    <v-card-title>
                        COMMON WORDS/PHRASES
                    </v-card-title>
                    <v-card-text></v-card-text>
                </v-card>
                <!-- <chatbot-wordcloud></chatbot-wordcloud> -->

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

import ChatbotNewUser from './ChatbotNewUser.vue'
import ChatbotRating from './ChatbotRating.vue'
import ChatbotTopicDist from './ChatbotTopicDist.vue'
import ChatbotTopicTime from './ChatbotTopicTime.vue'
import { mapActions } from "vuex"

export default {
    components: {
        SmallCardTemplate,
        StatisticsCardVertical,
        ChatbotNewUser,
        VueApexCharts,
        ChatbotRating,
        ChatbotTopicDist,
        ChatbotTopicTime,
        // ChatbotWordcloud,
    },
    data() {
        return {
            selectedItem: localStorage.getItem("time_component") ? localStorage.getItem("time_component") : "Today",

            time_list: ['Today', 'Week', 'Month', 'Quarter', 'Year'],

            NewUserData: [0],

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
                endpoint: '/user_info'
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
        async selectedItem(newOption) {
            localStorage.setItem("time_component", newOption);
            console.log(newOption);
            console.log(localStorage.getItem("time_component"))
            await this.loadChartData()
        }
    },
    methods: {
        ...mapActions(["getChartData"]),
        reloadPage() {
            var currentTimeComponent = localStorage.getItem("time_component")
            window.location.reload();
            localStorage.setItem("time_component", currentTimeComponent);
        },
        async loadChartData() {
            // new Users
            var newCustData = await this.getChartData({ Time: this.selectedItem, Visual_name: 'new_customers' })
            var totalCustData = await this.getChartData({ Time: 'all', Visual_name: 'cust_info' })
            var newCusttotal = new Set(newCustData.map(item => item.customer_id)).size 

            var totalCust = new Set(totalCustData.map(item => item.customer_id)).size
            console.log(this.selectedItem, ':', newCusttotal)
            console.log('year:', totalCust)

            this.NewUserData = [parseFloat(((newCusttotal/totalCust)*100).toFixed(1))]

            // Rentation Rate
            var rentationData = await this.getChartData({ Time: this.selectedItem, Visual_name: 'rentation'})
            var totalCurrentUser = new Set(rentationData.map(item => item.customer_id)).size

            console.log('rentation',(totalCurrentUser/totalCust).toFixed(2))

            this.rentationRate.statistics = parseFloat((totalCurrentUser/totalCust).toFixed(2))

            // // chatbot - average rating
            // let sumOfRatings = 0;
            // if (chartData2.length > 0) {
            //     for (const item of chartData2) {
            //         sumOfRatings += parseInt(item.rating, 10); // Convert to base 10
            //     }
            //     // Calculate the average
            //     const averageRating = (sumOfRatings / chartData2.length).toFixed(1);
            //     this.ratingscore.score = averageRating
            // }
            // else { this.ratingscore.score = '-' }

            // var chartData3 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'total_search' })

            // // jobsearch - total search
            // this.totalSearch.statistics = chartData3.length

            // // jobsearch - search option
            // var SearchOptionData = []
            // var searchOption = ['keyword', 'location', 'industry', 'salary', 'language']
            // const counts = {
            //     'keyword': 0,
            //     'location': 0,
            //     'industry': 0,
            //     'salary': 0,
            //     'language': 0
            // };

            // chartData3.forEach(item => {
            //     // Define the columns you want to count
            //     const columnsToCount = ['keyword', 'location', 'industry', 'salary', 'language']

            //     columnsToCount.forEach(column => {
            //         const value = item[column];

            //         if (value !== "") {
            //             counts[column] = counts[column] + 1;
            //         }
            //     });
            // });

            // // Convert counts object to an array of objects
            // console.log(Object.keys(counts).map(key => counts[key]))
            // this.topicOptions.statistics = Object.keys(counts).map(key => counts[key])
        }
    },
    mounted() {
        const storedItem = localStorage.getItem('selectedItem');
        if (storedItem) {
            this.selectedItem = storedItem;
        }
        window.onbeforeunload = function () {
            localStorage.clear();
        };
        console.log(this.selectedItem)
        this.loadChartData()
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