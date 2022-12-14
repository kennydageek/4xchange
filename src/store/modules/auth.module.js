// import authService from '@/services/authService';
import AuthService, { apiClient } from '@/services/authService';
// import axios from 'axios';

const state = {
  user: null,
  wallet: { balance: 0 },
};
const getters = {};
const mutations = {
  SET_USER_DATA(state, { form, token }) {
    let { name, email, incomingCurrency, outgoingCurrency } = form;
    state.user = form;
    localStorage.setItem('token', JSON.stringify(token));
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    state.wallet.balance = 1000;

    localStorage.setItem(
      'user',
      JSON.stringify({
        name,
        email,
        incomingCurrency,
        outgoingCurrency,
      })
    );
  },
};
const actions = {
  async registerUser({ commit }, form) {
    // let { name, email, password, incomingCurrency, outgoingCurrency } = form;
    // console.log(name, email, password);

    const { data } = await AuthService.registerUser(form);
    // console.log(data);
    const { token } = data;

    commit('SET_USER_DATA', { form, token });
  },

  async login({ commit }, form) {
    let { email, password } = form;
    console.log(email, password);
    const { data } = await AuthService.login(form);
    console.log(data);
    commit('SET_USER_DATA', data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
