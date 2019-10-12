<template>
  <ul class="main-navbox" v-if="homeData.kingKongModule">
    <li class="nav-item" v-for="(item,index) in homeData.kingKongModule.kingKongList">
      <img v-lazy="item.picUrl" alt="">
      <span>{{item.text}}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
  export default {
    computed:{
      ...mapState({homeData:state=>state.home.homeData})
      // ...mapState(['homeData'])
    },
   async mounted(){
      await this.$store.dispatch("getHomeData")
    }
  }
</script>

<style lang="stylus" scoped>
.main-navbox
      width 100%
      height 175px
      display flex
      flex-direction row
      text-align center
      flex-wrap wrap
      background #f5f5f5
      .nav-item
        width 20%
        height 75px
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 55px
          height 55px
          margin-bottom 3px
        span
          font-size 12px
    
 
</style>
