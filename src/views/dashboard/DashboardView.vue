<template>
  <div class="dashboard-wrapper pa-5">
    <p class="welcome">Welcome, {{ name }}</p>
    <p class="incoming-currency mb-0">1 {{ outgoing }} equals</p>
    <p class="outgoing-currency">
      {{ $store.state.currency.exchangeRate }} {{ incoming }}
    </p>
  </div>
</template>

<script>
// import {mapActions} from vuex;
export default {
  data() {
    return {
      incoming: '',
      outgoing: '',
      name: '',
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
