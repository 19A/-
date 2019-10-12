<template>
   <div class="cart">
     <div class="cart-header">
       <span>购物车</span>
       <a href="##">领卷</a>
     </div>
     <div class="cart-main">
       <div class="cart-list">
         <div class="cart-item">
           <i></i>
           <span>1111111</span>
         </div>
         <div class="cart-item">
           <i></i>
           <span>222222222</span>
         </div>
         <div class="cart-item">
           <i></i>
           <span>33333333</span>
         </div>
       </div>
       <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
       <div class="add-loginBtn">
         <span>去添加点什么吧</span>
         <div class="login-btn">
           <a href="##">登录</a>
         </div>
       </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.cart
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background-color #f4f4f4
  overflow hidden
  .cart-header
    // width 100%
    height 44px
    padding 0 20px
    display flex
    justify-content space-between
    align-items center
    background-color #fff
    span 
      font-size 18px
      color #333
    a
      font-size 14px
      color #b4282d
  .cart-main
    width 100%
    display flex
    flex-direction column
    
    .cart-list
      width 100%
      height 35px
      padding 0 20px
      display flex
      .cart-item
        width 33%
        text-align center
        height 35px
        line-height 35px
        span 
          font-size 12px
    img
      width 125px 
      height 125px
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .add-loginBtn
      display flex
      flex-direction column
      margin-top 320px
      span 
        text-align center
      .login-btn
        height 45px
        width 240px
        background red
        text-align center
        line-height 45px
        margin-top 40px
        margin-left 60px
        a
          color white
</style>
