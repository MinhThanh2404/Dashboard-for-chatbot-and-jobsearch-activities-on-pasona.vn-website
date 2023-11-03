
<template>
  <v-card class="card border-success border-2">
    <v-card-title class="align-start">
      <span>{{ statTitle }}</span>
      <v-spacer></v-spacer>

      <v-btn x-small class="me-n3 mt-n1" :to="endpoint"> Details </v-btn>
    </v-card-title>


    <v-card-text>
      <div class="stat d-flex align-center justify-center" :class="textstyle()">
        <span>
          {{ formatFigure(statistics).figure }}
        </span>
        <span>
          {{ formatFigure(statistics).unit }}
        </span>
      </div>
    </v-card-text>

    <v-card-text>
      <div class="change d-flex align-center">
        <div class="d-flex align-center">
          <v-icon size="15" :color="color ? 'success' : 'error'">
            {{ iconchange ? icons.mdiArrowUp : icons.mdiArrowDown }}
          </v-icon>
          <span class="text-right font-weight-medium " :class="color ? 'success--text' : 'error--text'">
            {{ statchange }}%
          </span>
          <div class="ma-1">compared to {{ time_change[time_component] }}</div>
        </div>
      </div>

    </v-card-text>


  </v-card>
</template>

<script>
import Icons from '@/views/icons/Icons.vue';

import { mdiArrowDown, mdiArrowUp, mdiLabelVariantOutline, mdiDotsVertical, mdiHelpCircleOutline } from '@mdi/js'

export default {
  props: {
    statistics: { type: Number, default: 0 },
    statTitle: { type: String, default: '' },
    iconchange: { type: Boolean, default: '' },
    color: { type: Boolean, default: '' },
    statchange: { type: Number, default: 0 },
    time_component: { type: String, default: 'today' },
    endpoint: { type: String, default: '/' }
  },
  data() {
    return {
      icons: {
        mdiArrowUp,
        mdiArrowDown,
        mdiDotsVertical,
      },
      time_list: ['Today', 'Week', 'Month', 'Quarter', 'Year'],

      time_change: {
        Today: 'yesterday',
        Week: 'last week',
        Month: 'last month',
        Quarter: 'last quarter',
        Year: 'last year',
      },
    }
  },
  methods: {
    formatFigure(figure) {
      if (figure >= 1000 && figure < 1000000) {
        return { figure: (figure / 1000).toFixed(1), unit: 'K', };
      } else if (figure >= 1000000 && figure < 1000000000) {
        return { figure: (figure / 1000000).toFixed(1), unit: ' M' };
      } else if (figure >= 1000000000 && figure < 1000000000000) {
        return { figure: (figure / 1000000).toFixed(1), unit: ' B' };
      } else {
        return { figure: figure.toString(), unit: '' }; // Default formatting if not in specified ranges
      }
    },
    textstyle() {
      let textlength = this.formatFigure(this.statistics).figure.length + this.formatFigure(this.statistics).unit.length
      switch (textlength) {
        // case 4:
        //   return 'length4'
        case 5:
          return 'length5'
        case 6:
          return 'length6'
        default:
          return 'length1'
      }
    },
    async fetchChartData() {
      try {
        const response = await axios.get('http://localhost:8001/getData', {
          params: {
            Time: this.selectedChart,
            Visual_name: this.selectedTimeComponent
          }
        });

        this.chartData = response.data;
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    }
  }
}
</script>

<style>
.length6 {
  font-size: 4.5rem !important;
}

.length5 {
  font-size: 5rem !important;
}

.length1 {
  font-size: 6rem !important;
}

.percentage {
  top: -8px;
  position: relative;
}


.stat {
  color: firebrick !important;
  font-weight: 800 !important;
}

.change {
  position: absolute;
  bottom: 6px;
  right: 16px;

}
</style>
