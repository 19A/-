<template>
  <div class="btn-mobile btn">
    <div>
      <input class="emailNum" type="text" placeholder="邮箱账号">
    </div>
    <div class="emailCode">
        <input  type="password" placeholder="密码">
    </div>
    <div class="getHelp">
      <span @click="$router.push({path:'/profile/register',query:{isPhoneRegis}})">注册账号</span>
      <span>使用验证码登录</span>
    </div>
    <button class="email-login">登录</button>
    <button class="email-loginOther" @click="$router.push('/profile')">其它登录方式</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isPhoneRegis:false//默认显示 EmailRegis注册
      }
    }
  }
</script>

<style lang="stylus" scoped>
.btn-mobile
  width 100%
  // height 100%
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
  .emailCode
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
  .getHelp
    width: 8.928571rem;
    height 30px
    display: flex;
    justify-content: space-between;
    font-size: 0.399787rem;
    color: #333;
    span 
     font-size 14px
  .email-login
    width: 8.928571rem;
    height: 1.332623rem;
    font-size: 0.373134rem;
    color: #fff;
    outline: none;
    background-color: #b4282d;
    border: 0.013326rem solid #b4282d;
  .email-loginOther
    width: 8.928571rem;
    height: 1.332623rem;
    text-align: center;
    line-height: 1.332623rem;
    font-size: 0.373134rem;
    color: #b4282d;
    border 0.013326rem solid #b4282d
    margin-top 0.399787rem
</style>

