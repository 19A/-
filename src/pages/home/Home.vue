<template>
  <div class="home native active">
          <!--头部区域-->
          <div class="home-header">
            <!--头部-->
            <Header/>
            <div class="header-nav">
              <span class="toggle-arrow" :class="{arrowDown:isShowUpArrow?'':true}"
                @click="toggleArrow"
              ><i class="iconfont icondownarrow"></i></span>
              <div class="wrapper" v-show="!isShowUpArrow">
                <ul class="nav-list content">
                  <li class="nav-item"><a class="nav-active" href="##">推荐</a></li>
                  <li class="nav-item"><a href="##">居家生活</a></li>
                  <li class="nav-item"><a href="##">服饰鞋包</a></li>
                  <li class="nav-item"><a href="##">美食酒水</a></li>
                  <li class="nav-item"><a href="##">居家生活</a></li>
                  <li class="nav-item"><a href="##">服饰鞋包</a></li>
                  <li class="nav-item"><a href="##">美食酒水</a></li>
                  <li class="nav-item"><a href="##">居家生活</a></li>
                  <li class="nav-item"><a href="##">服饰鞋包</a></li>
                  <li class="nav-item"><a href="##">美食酒水</a></li>
                  <li class="nav-item"><a href="##">居家生活</a></li>
                </ul>
              </div>
              <!-- 全部频道 -->
              <div class="nav-box" v-show="isShowUpArrow">
                <div class="box-title">全部频道</div>
                <div class="box-list">
                  <div class="box-item nav-active"><a href="##">推荐</a></div>
                  <div class="box-item"><a href="##">居家生活</a></div>
                  <div class="box-item"><a href="##">服饰鞋包</a></div>
                  <div class="box-item"><a href="##">美食酒水</a></div>
                  <div class="box-item"><a href="##">居家生活</a></div>
                  <div class="box-item"><a href="##">服饰鞋包</a></div>
                  <div class="box-item"><a href="##">美食酒水</a></div>
                  <div class="box-item"><a href="##">居家生活</a></div>
                  <div class="box-item"><a href="##">服饰鞋包</a></div>
                  <div class="box-item"><a href="##">美食酒水</a></div>
                  <div class="box-item"><a href="##">居家生活</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="home-main-container">
            <div class="home-main">
            <!--轮播区域-->
            <div class="main-scroll swiper-container">
              <div class="scroll-list swiper-wrapper">
                <div class="swiper-slide">
                 <li> <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt=""></li>
                </div>
                <div class="swiper-slide">
                  <li><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt=""></li>
                </div>
                <div class="swiper-slide">
                  <li><img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt=""></li>
                </div>
                <div class="swiper-slide">
                  <li><img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt=""></li>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
             <!--导航栏区域-----policyDescList-->
              <PolicyDescList/>
              <!--新品首发区域-----KingkongModule-->
              <KingkongModule/>
            <!--新人专享礼-->
            <div class="gift-container">
              <p class="gift-title">- 新人专享礼 -</p>
              <div class="gift-content">
                <div class="gift-left">
                  <span>新人专享礼包</span>
                  <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
                </div>
                <div class="gift-right">
                  <div class="gift-right-top">
                    <div class="title">
                      <span>福利社</span>
                      <span>今日特价</span>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png">
                  </div>
                  <div class="gift-right-top gift-right-bottom">
                    <div class="title">
                      <span>新人拼团</span>
                      <span>1元起包邮</span>
                    </div>
                    <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png">
                  </div>
                </div>
              </div>
            </div>
            <!--品牌制造商直供-->
            <div class="make-container">
              <div class="make-header">
                <span>品牌制造商直供</span>
                <span class="more">
                  更多
                   <i class="iconfont icondownarrow"></i>
                </span>
              </div>
              <div class="make-list">
                <div class="make-item">
                  <span>海外制造商</span>
                  <div class="content">
                    <span>34.9元起</span>
                    <span>上新</span>
                  </div>
                </div>
                <div class="make-item">
                  <span>CK制造商</span>
                  <div class="content">
                    <span>34.9元起</span>
                    <span>上新</span>
                  </div>
                </div>
                <div class="make-item">
                  <span>Nine West制造商</span>
                  <div class="content">
                    <span>34.9元起</span>
                    <span></span>
                  </div>
                </div>
                <div class="make-item">
                  <span>新秀丽制造商</span>
                  <div class="content">
                    <span>34.9元起</span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
</template>

<script type="text/ecmascript-6">
// import {reqHomeData} from "../../api/index";
import BScroll from "better-scroll";
import PolicyDescList from "./components/2-PolicyDescList";
import  KingkongModule  from "./components/3-KingKongModule";
  export default {
    data(){
        return{
          isShowNavItem:false,//默认不显示头部导航的样式
          isShowUpArrow:false,//默认nav-box不显示，且箭头向下
          policyDescList:""
        }
      },
    components:{
      PolicyDescList,
      KingkongModule
    },
    methods:{
      toggleArrow(){
        this.isShowUpArrow=!this.isShowUpArrow
      },

    },
     mounted(){
      // const res = await reqHomeData()
      // this.policyDescList=res.data.data.policyDescList,
      // console.log(res.data)
      
      // console.log(res)
      this.$nextTick(() => {
            // 在界面更新后创建BScroll(只能创建一个)
            /*
            单例:1. 在创建前, 判断是否存在,只有不存在, 才去创建2. 创建后, 保存它
             */
             // 第一次打开
               let scroll1 = new BScroll('.wrapper',{
                    scrollX : true,
                    click: true
                })
                
                let scroll2 = new BScroll('.home-main-container',{
                    scrollY : true,
                    click: true
                })
            //swiper
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: 1000,//可选选项，自动滑动
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
            })
          })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.home//主页样式
  position relative
  padding-bottom 60px
  padding-top 82px
  box-sizing border-box
  width 100%
  min-height 100%
  overflow hidden
  .home-header//主页头部
    background #fff
    height 82px
    width 100%
    position relative
    z-index 100
    margin-bottom 5px
    position fixed
    top 0px
    left 0px
    .header-nav
      width 100%
      height 30px
      position relative
      .toggle-arrow
        position absolute
        right 0
        top 0
        width 60px
        height 30px
        text-align center
        line-height 30px
        overflow hidden
        background-color #fff
        &.arrowDown
          transform rotateZ(180deg)
      .nav-box
        width 100%
        height 200px
        // height 670px
        background #fff
        .box-title
          height 30px
          font-size 16px
        .box-list
          display flex
          flex-wrap wrap
          .box-item
            width 20%
            height 30px
            border 1px solid gray
            border-radius 10%
            margin 5px
            text-align center
            line-height 30px
            &.nav-active
              border 1px solid #b4282d

      .wrapper//主页头部导航
        width 85%
        height 30px
        //padding 10px
        position relative
        box-sizing border-box
        display flex  //如果此处不设置 那么flexitem 不会被其子元素撑开 //块级元素宽度默认是独占一行，不能由子元素内容撑开高度
        overflow hidden
        .content
          height 30px
          display flex
          .nav-item
            width 90px
            height 30px
            color #b4282d
            text-align center
            line-height 30px
            &:nth-child(1)
              width 60px
            &:nth-child(6)
              width 100px
            //&:nth-child(1)
            //  width 80px
            a
              padding 5px
  .home-main-container
    width 100%
    height 400px
    home-main
    .main-scroll
      width 375px
      height 200px
      //overflow hidden
      .swiper-wrapper
        display flex
        flex-direction row
        .swiper-slide
          width 375px
          height 200px
          img
            width 375px
            height 200px
      .swiper-pagination
          .swiper-pagination-bullet
            background-color rgba(255,255,255,0.5)
            color red
            width 20px
            height 4px
            border-radius 0
    .gift-container
      height 250px
      padding 10px
      //overflow hidden

      .gift-title
        text-align  center
        height 45px
        line-height 45px
        font-size 14px
      .gift-content
        display flex
        text-align  center
        .gift-left
          display flex
          flex-direction column
          width 50%
          background-color #f9e9cf
          margin-right 2px
          span
            font-size 14px
          img
            width 179px
            height 179px
        .gift-right
          width 50%
          display flex
          flex-direction column
          .gift-right-top
            display flex
            background-color #fbe2d3
            .title
              display flex
              flex-direction column
              span
                font-size 14px
              span
                &:nth-child(2)
                  font-size 12px
            img
              width 100px
              height 100px
          .gift-right-bottom
            background-color #ffecc2
    .make-container
      padding 10px
      .make-header
        height 50px
        line-height 50px
        display flex
        justify-content space-between
      .make-list
        display flex
        flex-wrap wrap
        .make-item
          width 50%
          height 130px
          display flex
          flex-direction column
          text-align center
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
          >span
            margin-top 20px
            text-align center
          .content
            display flex
            justify-content center
            align-items center
            display flex
            span:nth-child(1)
              width 50%
              color #777
            span:nth-child(2)
              width 32px
              height 15px
              color #ffffff
              text-align center
              background-color #cbb693



    
 
</style>
