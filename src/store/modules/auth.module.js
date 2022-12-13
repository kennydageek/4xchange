import AuthService from '@/services/authService';

const state = {};
const getters = {};
const mutations = {};
const actions = {
  async registerUser(_, form) {
    let { name, email, password } = form;
    console.log(name, email, password);

    const { data, status } = await AuthService.registerUser(form);

    console.log(data);
    console.log(status);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
