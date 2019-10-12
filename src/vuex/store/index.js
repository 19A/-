// 向外暴露store对象
import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import state from "./state";

import home from "./modules/home";
import category from "./modules/category";
import user from "./modules/user/user";
Vue.use(Vuex)
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  state,
  modules: {
    home,
    category,
    user
  }
})
