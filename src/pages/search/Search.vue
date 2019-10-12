<template>
   <div class="search">
     <div class="search-header">
        <i class="iconfont iconsousuo"></i>
        <input type="text" class="searchInput"   v-model="searchText" placeholder="搜索商品，共xxxx款好商品">
        <button @click="$router.push('/home')">取消</button>
    </div>
    <div class="initSearch" v-show="!searchText">
      <div class="initTitle">
        <span>热门搜索</span>
      </div>
      <div class="initList" >
      <a class="initItem" :href="item.schemeUrl" v-for="(item,index) in initSearchRes">
        {{item.keyword}}
      </a>
    </div>
    </div>
    <div class="searchList"  v-show="searchText" >
      <!-- 只有输入框有值-->
      <div class="searchItem"  v-for="(item,index) in searchRes.directlyList">
        <img :src="item.listPicUrl" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
   </div>
</template>
<script type="text/ecmascript-6">
import axios from "axios";
import {reqSearch,reqInit} from "../../api/index";
import { debounce } from "loadsh";
  export default {  
    data(){
      return{
        searchText:"", //
        searchRes:"",//请求结果数据
        initSearchRes:"",//初始化搜索结果
        // isShowInit:true,//是否显示初始化搜索界面
      }
    },
    async mounted(){
      const res=await reqInit()
      this.initSearchRes=res.data.data.hotKeywordVOList
    },
    methods:{
      gotoSearch:debounce(async function gotoSearch (searchText){
        const searchRes = await reqSearch(searchText)
        // console.log(res.data.data.directlyList)
        this.searchRes=searchRes.data.data
      },300)
    },
    watch:{
      searchText(value){
        //如果没有输入值，那么不发请求
          if(value.trim()){
            this.gotoSearch(value)
          }
      }
    }
  }
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
.search
  .search-header
    width 100%
    height 100%
    padding 10px 20px
    .iconsousuo
      position absolute
      top 18px
      left 55px
    input
      width 70%
      height 30px
      border-radius 5%
      border none
      background-color rgba(0,0,0,0.1)
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
      margin-left 10px
  .initSearch
    .initTitle
      height 45px
    .initList
      display flex
      flex-wrap wrap
      justify-content space-around
      
      .initItem
        margin 3px
        width 30%
        height 30px
        text-align left
        line-height 30px
        &:nth-child(1)
          border 1px solid red
        &:nth-child(4)
          border 1px solid red
  .searchList
    display flex
    flex-wrap wrap
    .searchItem
      width 50%
      display flex
      flex-direction column
      text-align center
      justify-content center
      align-items center
      img 
        width 100px
        height 100px
      span 
        font-size 16px
        


  
</style>
