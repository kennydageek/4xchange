import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth.module';
import currency from './modules/currency.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    currency,
  },
});
