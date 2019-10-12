<template>
  <div class="profile">
    <div class="profile-header">
      <i class="iconfont iconshouye" @click="$router.push('/home')"></i>
      <span>网易严选</span>
      <div class="header-right">
        <i class="iconfont iconsousuo" @click="$router.push('/reco')"></i>
        <i class="iconfont icongouwuche"@click="$router.push('/cart')" ></i>
      </div>
    </div>
      <!-- <div class="main-login" v-if="$route.meta.isShowImg"> -->
      <div class="main-login" v-if="$route.path === '/profile/login'|| $route.path ==='/profile/email'||$route.path ==='/profile/phone'">
        <img src="../../assets/images/profile-logo.png">
        <!-- :class="{login:$route.path==='/profile/phone'||'/profile/email'||'/profile/login'}" -->
      </div>
    <router-link to="/profile/login"></router-link>
    <router-link to="/profile/register"></router-link>
     <!-- <router-link to="/profile/phone"></router-link>
     <router-link to="/profile/email"></router-link> -->
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
   
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.profile
  .main-login
    padding 100px 0
    text-align center
    img
      margin-left 50%
      transform translateX(-50%)
      width 123px
      height 45px
      // &.login
      //   transform translate(-50%,-20%) !important
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  .profile-header
    height 22px
    display flex
    justify-content space-between
    padding 10px
    >i
      font-size 16px
    .header-right
      >.iconfont
        font-size 20px
</style>
