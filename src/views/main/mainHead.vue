<template>
  <div style="padding: 0 5px 5px 5px; height: 50px">
    <div class="head">
      <span @click="$router.push({path: '/index'})" >
        <img src="../../assets/img/title.png" class="avatar_title">
      </span>
      <span class="rent" @click="$router.push({path: '/rent'})">租房</span>
      <span class="show" @click="$router.push({path: '/pubHouse'})">发布房源</span>
      <span class="control" @click="$router.push({path: '/control'})">管理员中心</span>
      <span v-if="this.token==null" class="login" @click="$router.push({path: '/login'})">登录/注册</span>
      <span v-else class="login">欢迎您</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHead',
  created () {
    this.token = sessionStorage.getItem('token')
  },
  data () {
    return {
      token: null
    }
  }
}
</script>

<style lang="less" scoped>
  .head {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: rgba(0,0,0,0.7);
    box-sizing: border-box;
  }
  span {
    cursor: pointer;
  }
  .avatar_title {
    height: 100%;
  }
  .rent, .show, .control, .login {
    font-size: 14pt;
    color: #FFFFFF;
    font-family: 宋体;
    padding: 30px;
    position: relative;
    bottom: 15px;
    left: 700px;
  }
</style>
