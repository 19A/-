<template>
  <div class="right-container">
     <div class="category-right"  v-if="categoryData.categoryL1List">
        <div class="category-rightImg">
          <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png" alt="">
        </div>
        <ul class="category-rightContent">
          <li v-for="(item, index) in categoryData.categoryL1List[currentIndex].subCateList">
            <img v-lazy="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </li>   
        </ul>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState } from "vuex";
  export default {
    props:{
      currentIndex:Number
    },
    data(){
      return{
        
      }
    },
     computed:{
      ...mapState({categoryData:state=>state.category.categoryData})
      // ...mapState(['homeData'])
    },
     mounted(){
        
             
    },
    watch:{
      categoryData(){
        this.$nextTick(()=>{
                  let scroll2 = new BScroll('.right-container',{
                                  scrollY : true,
                                  click: true
                              })
                })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.right-container
  height 500px
  overflow hidden
  .category-right
    width 315px
    padding 5px
    .category-rightImg
      img 
        width 260px
        height 100px
    .category-rightContent
      display flex
      flex-wrap wrap
      // justify-content center
      // align-items center
      li
        width 33%
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        img 
          width 70px
          height 70px 
</style>
