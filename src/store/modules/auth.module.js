import authService from '@/services/authService';
import AuthService from '@/services/authService';
import axios from 'axios';

const state = {
  user: null,
};
const getters = {};
const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  },
};
const actions = {
  async registerUser({ commit }, form) {
    let { name, email, password } = form;
    console.log(name, email, password);

    const { data } = await AuthService.registerUser(form);
    console.log(data);

    commit('SET_USER_DATA', data);
  },

  async login({ commit }, form) {
    let { name, email, password } = form;
    console.log(name, email, password);
    const { data } = await authService.login(form);
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
