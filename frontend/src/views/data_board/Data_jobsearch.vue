<template>
    <div>
        <v-row>
            <v-col cols="12" md="8">
            </v-col>

            <v-col cols="12" md="1" class="mt-1">
                <v-btn small @click="All" style="color: darkred;">All</v-btn>
            </v-col>
            <v-col cols="12" md="3">
                <v-combobox v-model="selectedItem" :items="time_list" outlined dense></v-combobox>
            </v-col>
        </v-row>
        <v-card>
            <v-data-table :headers="headers" :items="jobsearchList" item-key="full_name" class="table-rounded"
                :page.sync="page" :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
                <!-- topic -->
                <template #[`item.topic`]="{ item }">
                    <v-chip small :color="statusColor[item.topic]" class="font-weight-medium">
                        {{ item.topic }}
                    </v-chip>
                </template>
                <!-- rating -->
                <template #[`item.rating`]="{ item }">
                    <v-chip small :class="ratingColor(item.rating)" class="font-weight-medium">
                        {{ rating[item.rating] }}
                    </v-chip>
                </template>
            </v-data-table>
            <v-pagination v-model="page" :length="pageCount" circle></v-pagination>
        </v-card>

    </div>
</template>
  
<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import { mapActions } from "vuex"

export default {
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
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            sortBy: ['id', 'customer_id', 'keyword', 'industry', 'language', 'location', 'salary', 'search_time'],
            sortDesc: [false, true],
            headers: [
                { text: 'ID', value: 'id' },
                { text: 'CU_ID', value: 'cust_id' },
                { text: 'KEYWORD', value: 'keyword' },
                { text: 'INDUSTRY', value: 'industry' },
                { text: 'LANGUAGE', value: 'language' },
                { text: 'LOCATION', value: 'location' },
                { text: 'SALARY', value: 'salary' },
                { text: 'SEARCH_TIME', value: 'search_time' },
            ],
            jobsearchList: [],
            // icons
            icons: {
                mdiSquareEditOutline,
                mdiDotsVertical,
            },
        }
    },
    methods: {
        async All() {
            var allData = await this.getChartData({ Time: 'all', Visual_name: 'jobsearch_data' })
            this.jobsearchList = allData
        },
        ...mapActions(["getChartData"]),
        reloadPage() {
            var currentTimeComponent = localStorage.getItem("time_component")
            window.location.reload();
            localStorage.setItem("time_component", currentTimeComponent);
        },
        updatePage(page) {
            this.page = page;
        },
        async loadChartData() {
            var chartData1 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'jobsearch_data' })
            console.log(chartData1)
            this.jobsearchList = chartData1
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
    async mounted() {
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
.ratingColor0 {
    background-color: white !important;
    color: black !important;
}

.ratingColor1 {
    background-color: darkred !important;
    color: white !important;
}

.ratingColor2 {
    background-color: lightsalmon !important;
    color: black !important;
}

.ratingColor3 {
    background-color: lightgoldenrodyellow !important;
}

.ratingColor5 {
    background-color: lightgreen !important;
}

.ratingColor4 {
    background-color: darkorange !important;
    color: white !important;
}
</style>./chatbot-data