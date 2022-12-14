<template>
  <div class="dashboard-wrapper pa-5">
    <p class="welcome">Welcome, {{ name }}</p>
    <p class="incoming-currency mb-0">1 {{ outgoing }} equals</p>
    <p class="outgoing-currency">
      {{ $store.state.currency.exchangeRate }} {{ incoming }}
    </p>

    <div class="mt-10 white">
      <apex-chart
        width="600"
        height="350"
        type="area"
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

      chartOptions: {
        chart: {
          id: 'vuechart-example',
          type: 'area',
          height: 350,
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'EUR/USD',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
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
    this.name = JSON.parse(localStorage.getItem('user')).name;
    this.incoming = JSON.parse(localStorage.getItem('user')).incomingCurrency;
    this.outgoing = JSON.parse(localStorage.getItem('user')).outgoingCurrency;
    await this.$store.dispatch('currency/getExchangeRates');
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
</style>
