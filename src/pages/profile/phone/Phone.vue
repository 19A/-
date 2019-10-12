<template>
  <div class="btn-mobile btn">
    <div>
      <input class="phoneNum" type="text" placeholder="请输入手机号">
    </div>
    <div class="phoneCode">
        <input  type="text" placeholder="请输入短信验证码">
        <button class="getCode">获取验证码</button>
    </div>
    <div class="getHelp">
      <span>遇到问题</span>
      <span>使用验证码登录</span>
    </div>
    <button class="phone-login">登录</button>
    <button class="phone-loginOther" @click="$router.push('/profile')">其它登录方式</button>
    <div class="phoneNum">
      <span @click="$router.push({path:'/profile/register',query:{isPhoneRegis}})">注册账号></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isPhoneRegis:true//默认显示 phone注册
      }
    }
  }
</script>

<style lang="stylus" scoped>
.btn-mobile
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  font-size 16px
  input
    width: 8.928571rem;
    height: 1.19936rem;
    margin-top: 0.266525rem;
    border-bottom: 0.013326rem solid #ddd;
    color: #666;
    border: 0.013326rem solid rgba(0,0,0,0);
    outline: none;
  .phoneCode
    display flex
    justify-content center
    align-items center
    position relative
    input 
      width: 8.928571rem;
      height: 1.19936rem;
      margin-top: 0.266525rem;
      border-bottom: 0.013326rem solid #ddd;
      color: #666;
      border: 0.013326rem solid rgba(0,0,0,0);
      outline: none;
    .getCode
      position absolute
      top 12px
      right 2px
      width: 2.238806rem;
      height: 0.772921rem;
      color: #333;
      outline: none;
      margin: 0.199893rem 0.133262rem 0 0;
      background-color: #fff;
      border-radius: 0.133262rem;
      border: 0.013326rem solid #333;
  .getHelp
    width: 8.928571rem;
    height 30px
    display: flex;
    justify-content: space-between;
    font-size: 0.399787rem;
    color: #333;
    span 
     font-size 14px
  .phone-login
    width: 8.928571rem;
    height: 1.332623rem;
    font-size: 0.373134rem;
    color: #fff;
    outline: none;
    background-color: #b4282d;
    border: 0.013326rem solid #b4282d;
  .phone-loginOther
    width: 8.928571rem;
    height: 1.332623rem;
    text-align: center;
    line-height: 1.332623rem;
    font-size: 0.373134rem;
    color: #b4282d;
    border 0.013326rem solid #b4282d
    margin-top 0.399787rem
</style>
