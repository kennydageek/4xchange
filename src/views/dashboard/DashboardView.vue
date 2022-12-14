<template>
  <div class="dashboard-wrapper pa-5">
    <p class="welcome">Welcome, Kehinde</p>
    <p class="incoming-currency mb-0">1 united state Dollar equals</p>
    <p class="outgoing-currency">
      {{ $store.state.currency.exchangeRate }} Euro
    </p>
  </div>
</template>

<script>
// import {mapActions} from vuex;
export default {
  // methods: {
  //   getCurrencyExchange() {
  //   }
  // },

  methods: {
    async updateExchangeRate() {
      await this.$store.dispatch('currency/getExchangeRates');
    },
  },

  async mounted() {
    window.setInterval(() => {
      this.$store.dispatch('currency/getExchangeRates');
    }, 10000);
  },
  async created() {
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
