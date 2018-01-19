import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations.js';
import getters from './getters';
import actions from './actions';
import songInfo from './module/song-info';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    songInfo
  }
})
