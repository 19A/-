<template>
   <div class="reco">
     <div class="reco-header">
        <div class="header">
              <i class="iconfont iconshouye" @click="$router.push('/home')"></i>
              <span :class="{on: isOn}" @click="gotoFindOrSelect(true)">发现</span>
              <span :class="{on: !isOn}" @click="gotoFindOrSelect(false)">甄选家</span>
              <div class="header-right">
                <i class="iconfont iconsousuo" @click="$router.push('/search')"></i>
                <i class="iconfont icongouwuche"@click="$router.push('/cart')" ></i>
              </div>
        </div> 
     </div>
     <div class="roco-nav-wrapper">
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
    <router-view/>   
   </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
  export default {
    data(){
      return{
        isOn:true,
      }
    },

    methods: {
      gotoFindOrSelect (isGoToFind) {
        this.isOn = !this.isOn;
        if (isGoToFind) {
          // 跳转到find--发现页面
            this.$router.push('/reco/find');
        } else {
          // 跳转到select--甄选页面
          this.$router.push('/reco/select');
        }
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.roco-nav-wrapper',{
                    scrollX : true,
                    click: true
                })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.reco
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  .reco-header
    .header
      height 22px
      display flex
      justify-content space-between
      padding 10px
      >i
        font-size 16px
      .header-right
        >.iconfont
          font-size 20px
  .roco-nav-wrapper//主页头部导航
    width 85%
    height 30px
    //padding 10px
    position relative
    box-sizing border-box
    display flex  //如果此处不设置 那么flexitem 不会被其子元素撑开 //块级元素宽度默认是独占一行，不能由子元素内容撑开高度
    overflow hidden
    .nav-list
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
  
</style>
