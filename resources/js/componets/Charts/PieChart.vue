<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const states = this.chartData.map(d => d.state);
    const totals = this.chartData.map(d => d.total);

    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;

    this.renderChart(
      {
        labels: states,
        datasets: [
          {
            label: this.label,
            data: totals,
              backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1BA1',
            '#41B8A2',
            '#E466A3',
            '#00D8A4',
            '#DD1BB1',
            '#41B8B3',
            '#E466B3',
            '#00D8B4',
            '#DD1BC1',
            '#41B8C2',
            '#E466C3',
            '#00D8C4',
            '#DD1BD1',
            '#41B8D2',
            '#E466D3',
            '#00D8D4',
            '#DD1BE1',
            '#41B8E2',
            '#E466E3',
            '#00D8E4',
            '#DD1BF1',
            '#41B8F2',
            '#E466F3',
            '#00D8F4',
            '#DD1BAA',
            '#41B8AB',
            '#E466AC',
            '#00D8AD',
            '#DD1BAE',
            '#41B8AF',
            '#E466BA',
            '#00D8BB',
            '#DD1BBC',
            '#41B8BD',
            '#E466BE',
            '#00D8BF',
            '#DD1BCA',
            '#41B8CB',
            '#E466CC',
            '#00D8CD',
            '#DD1BCE',
          ],
            
          }
        ]
      },
      this.options
    );
  }
};
</script>
