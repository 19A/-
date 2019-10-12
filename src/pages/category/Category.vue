
<template>
  <div class="category">
     <div class="category-header">
        <i class="iconfont iconsousuo"></i>
        <input type="text" class="searchInput" placeholder="搜索商品，共xxxx款好商品" @click.prevent="$router.push('/search')">
     </div>
     <div class="category-main">
        <div class="line"></div>
        <div class="category-container" >
           <div class="category-left-wrapper"  v-if="categoryL1List">
              <ul class="category-left">
                <li class="left-item" v-for="(item,index) in categoryL1List" :key="index"
                 :class="{active:categoryL1List[currentIndex] === item}" 
                        @click="goto(index)" >
                  <a href="##">{{item.name}}</a>
                </li>
              </ul>
           </div>
           <CategoryList :currentIndex="currentIndex"/>
        </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { reqCategory } from "../../api";
import BScroll from "better-scroll";
import  CategoryList  from "./categoryList/CategoryList";
import { mapState } from "vuex";
  export default {
    components:{
      CategoryList
    },
    data(){
        return{
          currentIndex:0, //默认第一个显示激活样式
          id:0,//当前选项的id
        }
    },
     computed:{
      ...mapState({categoryL1List:state=>state.category.categoryData.categoryL1List})
      // ...mapState(['homeData'])
    },
    methods:{
       goto(index){
          this.currentIndex=index
       }
    },
   async mounted(){
      await this.$store.dispatch("getCategoryData")

       let scroll1 = new BScroll('.category-left-wrapper',{
                          scrollY : true,
                          click: true
                      })
    },
    watch:{
      categoryL1List(value){
        console.log(value)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
/* 当前页公共样式 */

.category
  // position absolute
  // top 0
  // left 0
  overflow hidden
  .category-header
    width 100%
    height 100%
    padding 10px 20px
    .iconsousuo
      position absolute
      top 18px
      left 90px
    input
      width 90%
      height 30px
      border-radius 5%
      border none
      background-color rgba(0,0,0,0.1)
      text-align center
      line-height 24px
  .category-main
    height 100%
    position relative
    .line
      width 100% 
      height 2px
      background  #eee
    .category-container
      height 100%
      overflow hidden
      display flex
      .category-left-wrapper
         height 550px
        .category-left
          display flex
          flex-direction column
          padding 10px 0
          .left-item
            &.active
              color #ab2b2b
              border-left 2px solid #ab2b2b
              a
                color #ab2b2b
            width 82px
            height 20px
            text-align center
            line-height 25px
            border-left 1px solid #fff
            padding 9px 0
            
</style>
