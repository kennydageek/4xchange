<template>
  <div class="dashboard-wrapper pa-5">
    <p class="welcome">Welcome, {{ name }}</p>
    <p class="incoming-currency mb-0">1 {{ outgoing }} equals</p>
    <p class="outgoing-currency">
      {{ $store.state.currency.exchangeRate }} {{ incoming }}
    </p>

    <div class="mt-10 white bar-chart">
      <apex-chart
        width="400"
        height="350"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apex-chart>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // apexchart,
  },
  data() {
    return {
      incoming: '',
      outgoing: '',
      name: '',
      day: null,
      // dailyHigh: [this.day],

      chartOptions: {
        chart: {
          id: 'vuechart-example',
          type: 'bar',
          height: 350,
        },
        xaxis: {
          categories: [1209, 1210, 1211, 1212, 1213, 1214, 1213],
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [1, 1.5, 2.0],
        },
      },
      series: [
        {
          name: 'Currency pair',
          data: [
            1.05948, 1.05329, 1.05498, 1.05649, 1.05882, 1.05802, 1.06733,
            1.06847,
          ],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'EURUSD DAILY MOVEMENT',
        align: 'left',
      },
      markers: {
        size: 0,
      },
      yaxis: {
        title: {
          text: 'Price',
        },
      },
      xaxis: {
        type: 'datetime',
      },
    };
  },
  // methods: {
  //   getCurrencyExchange() {
  //   }
  // },

  async mounted() {
    window.setInterval(() => {
      this.$store.dispatch('currency/getExchangeRates');
    }, 30000);
  },
  async created() {
    this.name = await JSON.parse(localStorage.getItem('user')).name;
    this.incoming = await JSON.parse(localStorage.getItem('user'))
      .incomingCurrency;
    this.outgoing = await JSON.parse(localStorage.getItem('user'))
      .outgoingCurrency;
    await this.$store.dispatch('currency/getExchangeRates');
    await this.$store.dispatch('currency/getDailyPrice');
    this.day = await this.$store.state.currency.price;

    // this.day = Number(this.day);
    console.log(this.day);
  },
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  color: var(--color-grey);
}
.welcome {
  font-size: 1.4rem;
  // margin-bottom: 0;
}

.incoming-currency {
  font-size: 0.8rem;
}
.outgoing-currency {
  font-size: 1.6rem;
  color: #fff;
}

.bar-chart {
  width: 400px;
}
</style>
