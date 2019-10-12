<template>
  <div class="header">
    <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"></img>
    <i class="iconfont iconsousuo"></i>
    <input type="text" class="searchInput" placeholder="搜索商品，共xxxx款好商品" @click.prevent="$router.push('/search')">
    <button @click="$router.push('/profile')">登录</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {  
    
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
.header
  width 100%
  box-sizing border-box
  padding 12px
  display flex
  align-items center
  .logo
    width 60px
    height 20px
  .iconsousuo
    position absolute
    top 18px
    left 100px
  input
    width 233px
    height 24px
    border-radius 5%
    border none
    background-color rgba(0,0,0,0.1)
    margin 2px 10px
    text-align center
    line-height 24px
  button
    width 40px
    height 20px
    border-radius 10%
    border 1px solid #b4282d
    font-size 12px
    color #b4282d
    background #ffffff
</style>
