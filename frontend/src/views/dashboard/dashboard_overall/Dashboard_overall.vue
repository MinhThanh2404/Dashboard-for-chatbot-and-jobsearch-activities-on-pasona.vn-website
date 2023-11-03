<template>
  <div>
    <!-- combobox time START -->
    <v-row>
      <v-col cols="12" md="8">
        <h1>
          OVERVIEW
        </h1>
      </v-col>

      <v-col cols="12" md="1" class="mt-1">
        <v-btn small @click="reloadPage" style="color: darkred;">Refresh</v-btn>
      </v-col>
      <v-col cols="12" md="3">
        <v-combobox v-model="selectedItem" :items="time_list" outlined dense></v-combobox>
      </v-col>
    </v-row>
    <!-- combobox time START -->

    <!-- chatbot summary START -->
    <v-row>
      <h2><router-link :to="{ name: 'dashboard_chatbot', query: { selectedItem: selectedItem } }"
          class="hyperlink">CHATBOT</router-link></h2>
    </v-row>
    <v-divider class="mt-2 mb-5"></v-divider>

    <v-row class="horizontalcards">
      <!-- total users START -->
      <v-col cols="12" md="4">
        <small-card-template class="h-100" :statistics="totalUser.statistics" :statTitle="totalUser.statTitle"
          :iconchange="totalUser.statchange > 0" :color="totalUser.statchange > 0" :statchange="totalUser.statchange"
          :time_component="selectedItem" :endpoint="totalUser.endpoint"></small-card-template>
      </v-col>
      <!-- total users END -->

      <!-- total Mes START-->
      <v-col cols="12" md="4">
        <small-card-template class="h-100" :statistics="totalMes.statistics" :statTitle="totalMes.statTitle"
          :iconchange="totalMes.statchange > 0" :color="totalMes.statchange > 0" :statchange="totalMes.statchange"
          :time_component="selectedItem" :endpoint="totalMes.endpoint"></small-card-template>
      </v-col>
      <!-- total Mes END-->

      <!-- rating avg START -->
      <v-col cols="12" md="4">
        <v-card class="ratingcard ">
          <v-card-title class="align-start">
            <span>Rating</span>
            <v-spacer></v-spacer>

            <v-btn x-small class="me-n3 mt-n1" :to="ratingscore.endpoint"> Details </v-btn>
          </v-card-title>

          <v-card-text>
            <div class="ratingicon d-flex justify-center">
              <v-icon size="150" :color="ratingscore.score > 2.5 ? 'success' : 'error'">
                {{ icons.mdiRobotHappyOutline }}
              </v-icon>
            </div>

          </v-card-text>

          <v-card-text>
            <div class="stat d-flex align-center justify-center">
              {{ ratingscore.score }} / 5
            </div>
          </v-card-text>

          <v-card-text>
            <div class="change d-flex align-center">
              <div class="d-flex align-center">
                <v-icon size="15" :color="ratingscore.change > 2.5 ? 'success' : 'error'">
                  {{ ratingscore.change > 2.5 ? icons.mdiArrowUp : icons.mdiArrowDown }}
                </v-icon>
                <!-- <span class="text-right font-weight-medium " 
                :class="color ? 'success--text' : 'error--text'"
                > -->
                <span class="text-right font-weight-medium "
                  :class="ratingscore.change > 2.5 ? 'success--text' : 'error--text'">
                  {{ ratingscore.change }}%
                </span>
                <div class="ma-1">compared to {{ time_change[selectedItem] }}</div>
              </div>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- chatbot summary END -->

    <!-- job search summary START -->
    <!-- section 2: jobsearch -->
    <v-row>
      <h2><router-link :to="{ name: 'dashboard_jobsearch', query: { selectedItem: selectedItem } }" class="hyperlink">JOB
          SEARCH</router-link></h2>
    </v-row>
    <v-divider class="mt-2 mb-5"></v-divider>

    <v-row>
      <v-col cols="12" md="4">
        <!-- total search -->
        <small-card-template class="totalSearch mb-5" :statistics="totalSearch.statistics"
          :statTitle="totalSearch.statTitle" :iconchange="totalSearch.statchange > 0" :color="totalSearch.statchange > 0"
          :statchange="totalSearch.statchange" :time_component="selectedItem"
          :endpoint="totalSearch.endpoint"></small-card-template>

        <overview-search-option :statistics="topicOptions.statistics"></overview-search-option>
      </v-col>

      <v-col cols="12" md="8">
        <!-- <overview-search-option></overview-search-option> -->
        <!-- <overview-search-realtime class="align-center h-100"></overview-search-realtime> -->
      </v-col>
    </v-row>
    <!-- job search summary END -->

  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiArrowDown, mdiArrowUp, mdiLabelVariantOutline, mdiDotsVertical, mdiHelpCircleOutline, mdiRobotHappyOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'
import SmallCardTemplate from '@/components/statistics-card/SmallCardTemplate.vue'
import VueApexCharts from 'vue-apexcharts'

// demos
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import OverviewSearchOption from './OverviewSearchOption.vue'
import OverviewSearchRealtime from './OverviewSearchRealtime.vue'
import { mapActions } from "vuex"
export default {
  components: {
    SmallCardTemplate,
    StatisticsCardVertical,
    DashboardStatisticsCard,
    VueApexCharts,
    OverviewSearchOption,
    OverviewSearchRealtime,
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

      totalUser: {
        statistics: 350,
        statTitle: 'Total Users',
        statchange: 42,
        endpoint: '/chatbot_data'
      },

      totalMes: {
        statistics: 100000,
        statTitle: 'Total Mes',
        statchange: -10,
        endpoint: '/chatbot_data'
      },

      ratingscore: {
        score: 4,
        change: -0.1,
        endpoint: '/user_info'
      },

      totalSearch: {
        statistics: 3500,
        statTitle: 'Total Search',
        statchange: -2,
        endpoint: '/jobsearch_data'
      },

      topicOptions: {
        statistics: [60, 20, 40, 60, 10],
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
      var chartData1 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'total_users' })

      // chatbot - total Users
      this.totalUser.statistics = new Set(chartData1.map(item => item.customer_id)).size

      // chatbot - total Messages
      this.totalMes.statistics = chartData1.length

      var chartData2 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'rating' })

      // chatbot - average rating
      let sumOfRatings = 0;
      if (chartData2.length > 0) {
        for (const item of chartData2) {
          sumOfRatings += parseInt(item.rating, 10); // Convert to base 10
        }
        // Calculate the average
        const averageRating = (sumOfRatings / chartData2.length).toFixed(1);
        this.ratingscore.score = averageRating
      }
      else { this.ratingscore.score = '-' }

      var chartData3 = await this.getChartData({ Time: this.selectedItem, Visual_name: 'total_search' })

      // jobsearch - total search
      this.totalSearch.statistics = chartData3.length

      // jobsearch - search option
      var SearchOptionData = []
      var searchOption = ['keyword', 'location', 'industry', 'salary', 'language']
      const counts = {
        'keyword': 0,
        'location': 0,
        'industry': 0,
        'salary': 0,
        'language': 0
      };

      chartData3.forEach(item => {
        // Define the columns you want to count
        const columnsToCount = ['keyword', 'location', 'industry', 'salary', 'language']

        columnsToCount.forEach(column => {
          const value = item[column];

          if (value !== "") {
            counts[column] = counts[column] + 1;
          }
        });
      });

      // Convert counts object to an array of objects
      console.log(Object.keys(counts).map(key => counts[key]))
      this.topicOptions.statistics = Object.keys(counts).map(key => counts[key])
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
    // Call the loadChartData function every 1 minute
    this.refreshInterval = setInterval(await this.loadChartData(), 60000); // 1000 milliseconds = 1 second

  },
}
</script>

<style lang="scss" scoped>
.combobox {
  position: fixed;
  z-index: 1000;
}

.h-100,
.ratingcard {
  height: 100%;
}

h2 {
  color: darkred !important;
  font-size: 2rem !important;
}

h1 {
  color: rgb(179, 3, 3) !important;
  font-size: 4rem !important;
  text-shadow: 2px 2px 4px rgba(255, 252, 86, 0.877) !important;
}

.hyperlink {
  text-decoration: none !important;
  color: inherit;
}

// .ratingcard {
//   background-color: #ffffff !important;
//   opacity: 1 !important;
//   border-radius: 10% !important;
//   border-style: solid !important;
//   border-color: darkred !important;
// }

.stat {
  color: firebrick !important;
  font-size: 1.75rem !important;
  font-weight: 800 !important;
  margin-top: -25px;
  margin-bottom: -15px;
}

.ratingicon {
  margin-top: -50px;
}

.change {
  position: absolute;
  bottom: 6px;
  right: 16px;
}

.btn {
  color: darkred !important;
}
</style>