
//vuex管理的 home 模块的状态对象 
import { GET_HOME_DATA } from "./mutations-type";
import { reqHomeData } from "../../../../api/index";
export default {
  state:{
    homeData: [],
  },
  mutations: {
    [GET_HOME_DATA](state, {homeData}) {
      state.homeData = homeData // mutation直接操作状态
    },
  },
  actions:{
    async getHomeData({commit}) {
    const result = await reqHomeData(); // 发送ajax
    const homeData = result.data
    if (result.code === 0) {
      // console.log("action")
      commit(GET_HOME_DATA,{homeData})    // 根据返回的数据调用 mutations 更改数据
      }
    },
  },
  getters: {},
}
