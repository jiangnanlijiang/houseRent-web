<template>
  <div class="login">
    <div class="title">
      <img src="../assets/img/title.png" />
    </div>
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/img/logo.jpg" />
      </div>
      <div class="login_form">
        <el-form :model="registerForm" :rules="rules" ref="registerForm">
          <el-form-item prop="account">
            <el-input v-model="registerForm.account" prefix-icon="el-icon-user" placeholder="输入手机号" class="input"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="registerForm.password" type="password" prefix-icon="el-icon-lock" placeholder="输入密码" class="input" show-password></el-input>
          </el-form-item>
          <el-form-item prop="password1">
            <el-input v-model="registerForm.password1" type="password" prefix-icon="el-icon-lock" placeholder="再次输入密码" class="input" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="submit">注册</el-button>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: flex-end;">
          <label style="cursor: pointer; color:#ff0000;" @click="$router.replace({path: '/login'})" >我有账号，去登录</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {register} from '@/api/sys'

  export default {
    name: 'Register',
    data () {
      const validateMobile = (rule, value, callback) => {
        var reg = /^1[3-9][0-9]{9}$/;
        if(!reg.test(value)){
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      };
      const validatePassword = (rule, value, callback) => {
        if(value != this.registerForm.password){
          callback(new Error("两次输入密码不一致"))
        }
        callback();
      };
      return {
        registerForm: {
          account: null,
          password: null,
          password1: null
        },
        rules: {
          account: [
            {required: true, message: '请输入手机号', trigger: 'blur'},
            {validator: validateMobile, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          password1: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validatePassword, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit () {
        this.$refs.registerForm.validate((valid) => {
          if(valid){
            register({mobile: this.registerForm.account, password: this.registerForm.password}).then(res => {
              const response = res.data;
              if(response.code == '0000'){
                this.$notify({
                  message: response.msg,
                  type: 'success',
                  duration: 2000
                });
                setTimeout(() => {
                  this.$router.replace({path: '/login'})
                }, 3*1000)
              }
              else {
                this.$notify({
                  message: response.msg,
                  type: 'error',
                  duration: 2000
                })
              }
            })
          }
          else{
            return false;
          }
        })
        // this.$router.replace({ path: '/login' })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    background-image: url("../assets/img/login-background.jpg");
    height: 100%;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  .login_box{
    width: 450px;
    height: 400px;
    background-color: rgba(255,255,255,0.7);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
      height: 130px;
      width: 130px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .login_form {
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
</style>
