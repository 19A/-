<template>
<div class="profile-main">
  <div class="main-loginWays">
    <router-link to="/profile/phone">
      <div class="btn-mobile btn">
        <i class="iconfont iconweibiaoti1"></i>
        手机号快捷登录
      </div>
    </router-link>
    <router-link to="/profile/email">
      <div class="btn-email btn">
        <i class="iconfont iconyouxiang"></i>
        邮箱账号登录
      </div>
    </router-link>
    <router-view></router-view>
  </div>
  <div class="main-footer">
    <span>
      <i class="iconfont iconweixin"></i>
      微信
    </span>
    <span>|</span>
    <span>
      <i class="iconfont iconqq"></i>
      QQ
    </span>
    <span>|</span>
    <span>
      <i class="iconfont iconweibo"></i>
      微博
    </span>
      </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
     data(){
      return{
        // isShowImg:false,//默认不显示登录的图片样式
      }
    },
    methods:{

      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile-main
    height 100%
    background #F2F5F4
    .main-loginWays
      height 250px
      padding 0 20px
      .btn
        height 50px
        border 1px solid #DD1A21
        border-radius 2px
        text-align center
        line-height 50px
        margin-bottom 20px
        &.btn-mobile
          color white
          background #DD1A21
        &.btn-email
          color #DD1A21
      //.btn-mobile
      //  border 0 solid #DD1A21
      //  border-radius 2px
      //.btn-email
        //border 0 solid #DD1A21
        //border-radius 2px
    .main-footer
      display flex
      justify-content center
      >span
        margin 0 10px

 

 
</style>
