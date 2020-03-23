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
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" prefix-icon="el-icon-user" placeholder="账号/手机号" class="input"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" show-password :maxlength="16" prefix-icon="el-icon-lock" placeholder="密码" class="input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
        <div style="display: flex;justify-content: flex-end;">
          <label style="cursor: pointer; color:#ff0000;" @click="$router.replace({path: '/register'})">还没有账号?点击注册</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { login } from '@/api/sys.js'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginFormRules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          login(this.loginForm).then(res => {
            const response = res;
            if(response.code == '0000'){
              this.$notify({
                message: response.msg,
                type: 'success',
                duration: 2000
              });
              sessionStorage.setItem("token", response.data.token)
              setTimeout(() => {
                this.$router.push({path: '/index'})
              }, 3*1000)
              this.$router.push({path: '/index'})
            }
            else {
              this.$notify({
                message: response.msg,
                type: 'error',
                duration: 2000
              })
            }
          }).catch(err => {
            console.log(err)
          })
        }
        else{
          return false;
        }
      })
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
    height: 300px;
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
