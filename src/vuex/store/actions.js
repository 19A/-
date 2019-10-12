// //定义多个函数方法（间接更新状态）
// import { GET_HOME_DATA } from "./mutations-type";
// import { reqHomeData } from "../../api";
// export default{
//   // async getHomeData({commit}){
//   //   const res= await reqHomeData()  //发送异步请求
//   //   const homeData=res.data
//   //   if(res.code===0){
//   //     commit(GET_HOME_DATA,{homeData}) //commit触发mutation调用
//   //   }
//   // }
//   async getHomeData2({commit}) {
//     const result = await reqHomeData(); // 发送ajax
//     const homeData = result.data
//     if (result.code === 0) {
//       commit(GET_HOME_DATA,{homeData})    // 根据返回的数据调用 mutations 更改数据
//     }
//   },
// }