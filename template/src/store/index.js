import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/userInfo';
import createPlan from './modules/createPlan';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userInfo,
    createPlan,
  },
  state: {
    menuIsOpen: false,
    currentArea: { id: 1, name: '北海道' },
  },
  mutations: {
    toggleMenu(state, isToggle) {
      if (typeof isToggle !== 'undefined') {
        state.menuIsOpen = isToggle;
      } else {
        state.menuIsOpen = !state.menuIsOpen;
      }
    },
    setArea(state, data) {
      state.currentArea = data;
    },
  },
});
