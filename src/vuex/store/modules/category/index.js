
//vuex管理的 home 模块的状态对象 
import { GET_CATEGORY_DATA } from "./mutations-type";
import { reqCategoryData } from "../../../../api";
export default {
  state:{
    categoryData: [],
  },
  mutations: {
    [GET_CATEGORY_DATA](state, {categoryData}) {
      state.categoryData = categoryData // mutation直接操作状态
    },
  },
  actions:{
    async getCategoryData({commit}) {
    const result = await reqCategoryData(); // 发送ajax
    const categoryData = result.data
    if (result.code === 0) {
      console.log("action")
      commit(GET_CATEGORY_DATA,{categoryData})    // 根据返回的数据调用 mutations 更改数据
      }
    },
  },
  getters: {},
}
