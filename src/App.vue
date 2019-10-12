<template>
  <div class="app-container">
      <div class="page"> 
        <keep-alive>
           <router-view/>
        </keep-alive>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer";
export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
*
  margin 0
  padding 0

//公共样式
html
  font-size 14px
.nav-active
  color #b4282d
  border-bottom 2px solid #b4282d
.on
  color #b4282d
.native
  display none
.active
  display block
.wrapper-native
  display none !important
.wrapper-active
  display block !important
  
//页面样式
.app-container
  width 100%
  height 100%
  overflow-x hidden
  .page
    width 100%
    height 100%
    overflow hidden
</style>
