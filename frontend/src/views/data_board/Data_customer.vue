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
            <v-data-table :headers="headers" :items="custList" item-key="full_name" class="table-rounded" :page.sync="page"
                :items-per-page="itemsPerPage" hide-default-footer @page-count="pageCount = $event">
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
            sortBy: ['chat_id', 'customer_id', 'question', 'topic', 'keywords', 'response', 'rating', 'created_at'],
            sortDesc: [false, true],
            headers: [
                { text: 'CU_ID', value: 'customer_id' },
                { text: 'EMAIL', value: 'email' },
                { text: 'NAME', value: 'name' },
                { text: 'PHONE_NO', value: 'phone_no' },
                { text: 'RATING', value: 'rating' },
                { text: 'RATING_TIME', value: 'timestamp_' },
                { text: 'UPDATED_AT', value: 'updated_at' },
            ],
            custList: [],
            rating: {
                0: 'Not rating',
                1: 'Very Dissatisfied',
                2: 'Quite Dissatisfied',
                3: 'Neutral',
                4: 'Quite Satisfied',
                5: 'Very Satisfied',
            },
            // icons
            icons: {
                mdiSquareEditOutline,
                mdiDotsVertical,
            },
        }
    },
    methods: {
        async All() {
            var allData = await this.getChartData({ Time: 'all', Visual_name: 'cust_info' })
            this.custList = allData
        },
        ratingColor(rating) {
            switch (parseInt(rating, 10)) {
                case 0:
                    return 'ratingColor0'
                case 1:
                    return 'ratingColor1'
                case 2:
                    return 'ratingColor2'
                case 3:
                    return 'ratingColor3'
                case 4:
                    return 'ratingColor4'
                case 5:
                    return 'ratingColor5'
            }
        },
        ...mapActions(["getChartData"]),
        async loadChartData() {
            var chartData1 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'cust_info' })
            console.log(chartData1)
            this.custList = chartData1
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
        await this.loadChartData()
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
</style>