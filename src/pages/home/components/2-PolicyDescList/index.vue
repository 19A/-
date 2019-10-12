<template>
   <ul class="main-grow">
      <li v-for="(item,index) in homeData.policyDescList">
        <img class="grow-icon iconfont"  v-lazy="item.icon"></img>
        <span>{{item.desc}}</span>
      </li>
  </ul>
</template>
<script type="text/ecmascript-6">
import { mapState } from "vuex";
  export default {
    // props:['policyDescList'],
    data(){
      return{

      }
    },
    computed:{
      ...mapState({homeData:state=>state.home.homeData})
      // ...mapState(['homeData'])
    },
   async mounted(){
      await this.$store.dispatch("getHomeData")
      // const res = await reqHomeData()
      // this.policyDescList=res.data.data.policyDescList,
      // console.log(res)
      // console.log(this.homeData)
    }
  }
</script>
<style lang="stylus" scoped>
.main-grow
  height 36px
  background-color white
  display flex
  justify-content space-around
  align-items center
  font-size 12px
  padding 0 10px
  li
    display flex
    flex-direction row
    .grow-icon
      width 15px
      height 15px
    span 
      font-size 12px
    
    
 
</style>
