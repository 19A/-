<template>
  <section class="register-container">
    <div class="regis-title">
      <span>{{$route.query.isPhoneRegis ? '手机号注册' : '邮箱账号注册'}}</span>
    </div>
    <div class="phone-regis" v-show="$route.query.isPhoneRegis">
      <div class="phone">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="code">
        <input class="msg-code" type="text" placeholder="请输入短信验证码" v-model="code" >
        <button :disabled="!isRightPhone || computeTime>0"  :class="{right_phone_number: isRightPhone}"
         class="get-code" @click.prevent="getCode">
           {{computeTime>0 ? `已发送验证码(${computeTime}s)` : '获取验证码'}}
        </button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register" @click="register">注册</button>
    </div>
    <div class="email-regis" v-show="!$route.query.isPhoneRegis">
      <div class="email">
        <input type="text" placeholder="邮箱账号" v-model="email">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码" v-model="confirmPwd">
      </div>
      <div class="error-message">
        <span>{{errorMsg}}</span>
      </div>
      <button class="register" @click="register" >注册</button>
    </div>
    <div class="toash-info">
      <span class="select" :class="{selected: isSelect}" @click="isSelect = !isSelect">
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="iavascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="iavascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register"
         @click="$router.replace({path: '/profile/register', query: {isPhoneRegis: false}})"
         v-show="$route.query.isPhoneRegis"
    >
      <span>邮箱账号注册</span>
      <i class="iconfont icon-52"></i>
    </div>
  </section>
</template>
<script>
import { reqSendCode } from "../../../api/index";
import { reqSmsLogin } from "../../../api/index";
  export default {
    data () {
      return {
        errorMsg: '', // 验证失败提示错误信息
        isSelect: true, // 是否勾选同意协议
        phone: '', // 用户注册的手机号
        email: '', // 用户注册的邮箱
        code: '', // 用户输入的手机验证码
        pwd: '', // 用户输入的密码
        confirmPwd: '' ,// 用户输入的确认密码
        computeTime: 0, // 计时剩余的时间, 为0时没有计时了
      }
    },
    // props: {
    //   setIsShow: Function
    // },
     computed: {
      /* 是否是正确手机号*/
      isRightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      // toggleLoginMethod () {
      //   this.setIsShow();
      // },
      async register () {
        const {phone, code, email, pwd, confirmPwd} = this;
        if (this.$route.query.isPhoneRegis) {
          // 手机号注册
          if (phone.trim() === '') {
            this.errorMsg = '手机号不能为空';
          } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.errorMsg = '手机号格式不正确';
          } else if (code.trim() === '') {
            this.errorMsg = '验证码不能为空';
          } else if (!(/^\d{6}$/.test(code))) {
            this.errorMsg = '请输入正确的6位数字验证码';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('手机格式校验成功');
            //发送登录请求
            
            const res =await reqSmsLogin(phone,code)
            if (res.code===0) {
              alert('注册成功')
  
               this.$router.push('/home')
            } else {
              alert(res.msg)
            }
          }
        } else {
          // 邮箱注册
          if (email.trim() === '') {
            this.errorMsg = '邮箱不能为空';
          } else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
            this.errorMsg = '邮箱格式不正确';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else if (pwd !== confirmPwd) {
            this.errorMsg = '两次输入的密码不一致';
          } else {
            this.errorMsg = '';
            console.log('邮箱注册校验成功');
          }
        }
      },
      async getCode(){
        // alert('----')
        // 设置最大时间
        this.computeTime = 10
        // 启动循环定时器进行计时
        const intervalId = setInterval(() => {
          this.computeTime--
          // 一旦到了0, 清除定时器
          if (this.computeTime===0) {
            clearInterval(intervalId)
          }
        }, 1000)
        console.log("1111")
        const res=await reqSendCode(this.phone);
        if (res.code===0) {
          alert('短信已成功发送')
        } else {
          alert(res.msg)
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  // @import "../../../common/stylus/mixins.styl";
  .register-container
    background-color #fff
    padding 0 40px
    .regis-title
      margin-top 20px
      display flex
      justify-content center
      span
        font-size 18px
        color #333
    .phone-regis, .email-regis
      padding-top 120px
      .error-message
        font-size 12px
        color red
        margin 5px 0
      .phone, .code, .pwd, .email, .confirm-pwd
        // width 340px
        height 45px
        border-bottom 1px solid #ddd
        margin-top 10px
        display flex
        input
          margin 14px 0
          font-size 14px
          color #666
          border 1px solid rgba(0,0,0,0)
          outline none
        button
          width 84px
          height 29px
          font-size 14px
          color #333
          outline none
          margin-left 35px
          margin-top 5px
          background-color #fff
          border-radius 5px
          border 1px solid black
          &.rgiht_phone_number
            color black
      .register
        width 300px
        height 50px
        font-size 14px
        color #fff
        outline none
        background-color red
        border 1px solid red
    .toash-info
      height 20px
      display flex
      align-items center
      margin-top 15px
      .select
        width 14px
        height 14px
        margin-right 5px
        border 1px solid #7f7f7f
        &.selected
          background-image url("https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png")
          background-repeat no-repeat
          background-position -323px -86px
      input
        width 20px
        height 20px
        outline none
        visibility hidden
      .text
        a
          color #007AFF
    .email-register
      display flex
      justify-content center
      align-items baseline
      margin-top 15px
      font-size 14px
      i
        font-size 14px
</style>
