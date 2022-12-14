// import authService from '@/services/authService';
import currencyService from '@/services/currencyService';
// import axios from 'axios';

const state = {
  exchangeRate: 0,
};
const getters = {};
const mutations = {
  SET_EXCHANGE_RATE(state, exchangeRate) {
    state.exchangeRate = exchangeRate;
  },
};
const actions = {
  async getExchangeRates({ commit }) {
    // Dynamically getting the currencies from local storage
    let from = JSON.parse(localStorage.getItem('user')).incomingCurrency;
    let to = JSON.parse(localStorage.getItem('user')).outgoingCurrency;

    const { data } = await currencyService.getExchangeRate(from, to);
    let exchangeRate = data['Realtime Currency Exchange Rate'];
    // console.log(data);
    let eurToUsd = exchangeRate['5. Exchange Rate'];

    commit('SET_EXCHANGE_RATE', eurToUsd);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
