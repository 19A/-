<template>
  <section class="recoFind-container">
    <RecoList  v-if="tabIndex !== 4" />
    <OrderList v-if="tabIndex == 4" />
  </section>
</template>
<script>
  // import {mapState} from 'vuex';
  import RecoList from '../components/RecoList/RecoList';
  import OrderList from '../components/OrderList/OrderList';
  export default {
    // computed: {
    //   ...mapState({
    //     tabIndex: state => state.recommend.tabIndex
    //   })
    // },
    components: {
      RecoList,
      OrderList
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  // @import "../../../common/stylus/mixins.styl";
  .recoFind-container
    background-color #eee
</style>
