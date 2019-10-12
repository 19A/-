<template>
  <div class="footer"  v-show="$route.meta.isShowFooter">
      <ul class="footer-list">
        <li class="footer-item" @click="goto('/home')" :class="{on:isCurrent('/home')}">
          <i class="iconfont iconshouye"></i>
          <span>首页</span>
        </li>
        <li class="footer-item" @click="goto('/category')" :class="{on:isCurrent('/category')}">
          <i class="iconfont iconleimupinleifenleileibie"></i>
          <span>分类</span>
        </li>
        <li class="footer-item" @click="goto('/reco')" :class="{on:isCurrent('/reco')}">
          <i class="iconfont iconliaojiemodou"></i>
          <span>识物</span>
        </li>
        <li class="footer-item" @click="goto('/cart')" :class="{on:isCurrent('/cart')}">
          <i class="iconfont icongouwuche"></i>
          <span>购物车</span>
        </li>
        <li class="footer-item" @click="goto('/profile')" :class="{on:isCurrent('/profile')}">
          <i class="iconfont icongeren"></i>
          <span>个人</span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import  "../../assets/css/mixins.styl";
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
        console.log()
      },
      isCurrent(path){
        return this.$route.path===path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  border-1px(black,top)
  position fixed
  bottom 0
  left 0
  width 100%
  height 60px
  background white
  .footer-list
    width 100%
    height 100%
    display flex
    .footer-item
      width 20%
      height 100%
      display flex
      flex-direction column
      justify-content center
      align-items center
  
</style>
