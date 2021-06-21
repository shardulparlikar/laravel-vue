<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">COVID-19 DATA</h1>
      </div>
    </div>
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2 class="text-center">Positive</h2>
        <line-chart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive"
        />
      </div>
    </div>

    <div class="row mt-5" v-if="arrRecovered.length > 0">
      <div class="col">
        <h2 class="text-center">Recovered(statewise)</h2>
        <bar-chart
          :chartData="arrRecovered"
          :options="chartOptions"
          :chartColors="recoveredColors"
          label="Recovered"
        />
      </div>
    </div>

    <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">Deaths(statewise)</h2>
        <pie-chart
          v-if="arrDeaths.length > 0"
          :chartData="arrDeaths"
          :options="chartOptions"
          :chartColors="deathColors"
          label="Deaths"
        />
      </div>
    </div>
    <button @click="sort">Sort Ascending</button>
    <button @click="sortDecending">Sort Descending</button>
    <input v-model="search" />
    <p>{{search}}</p>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">State</th>
          <th scope="col">Active cases</th>
          <th scope="col">Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(obj, index) in stateWiseData" :key="obj.name">
          <th scope="row">{{ index }}</th>
          <td>{{ obj.name }}</td>
          <td>{{ obj.confirmed }}</td>
          <td>{{ obj.deaths }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import PieChart from "./Charts/PieChart.vue";
import LineChart from "./Charts/LineChart.vue";
import BarChart from "./Charts/BarChart.vue";

export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
  },

  data() {
    return {
      arrPositive: [],
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F",
      },

      arrRecovered: [],
      recoveredColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981",
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C",
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      stateWiseData: [],

      search: "",
    };
  },
  methods: {
    sort() {
      this.stateWiseData.sort((a, b) => a.confirmed - b.confirmed);
    },
    sortDecending() {
      this.stateWiseData.sort((a, b) => b.confirmed - a.confirmed);
    },
  },
  computed: {
    selectedItems() {
      //  this.stateWiseData.filter((el) => {
      //   return el.name(this.search);
      // });
      
    },
  },

  async created() {
    const { data } = await axios.get("https://api.covid19india.org/data.json");
   

    data.cases_time_series.forEach((d) => {
      const date = moment(d.dateymd, "YYYY-MM-DD").format("MM/DD");

      const { totalconfirmed, totalrecovered, death } = d;

      this.arrPositive.push({ date, total: totalconfirmed });
    });
    data.statewise.forEach((s) => {
      const { state, confirmed, deltaconfirmed, deaths } = s;
      this.arrRecovered.push({ state, total: confirmed });
      this.arrDeaths.push({ state, total: deaths });
      this.stateWiseData.push({
        name: state,
        confirmed: confirmed,
        deaths: deaths,
      });
      console.log(this.stateWiseData)
    });

  },
};
</script>

<style >
body {
  background-color: black;
  color: white;
}
thead,
tr {
  color: white;
}
</style>
