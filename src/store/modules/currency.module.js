// import authService from '@/services/authService';
import currencyService from '@/services/currencyService';
// import axios from 'axios';

const state = {
  exchangeRate: 0,
  price: null,
};
const getters = {};
const mutations = {
  SET_EXCHANGE_RATE(state, exchangeRate) {
    state.exchangeRate = exchangeRate;
  },

  SET_DAILY_PRICE(state, price) {
    state.price = price;
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

  async getDailyPrice({ commit }) {
    const { data } = await currencyService.getDailyPrice('EUR', 'USD');
    console.log(data);
    let price = data['Time Series FX (Daily)'];
    console.log(price);
    commit('SET_DAILY_PRICE', price);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
