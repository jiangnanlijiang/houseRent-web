<template>
  <div style="padding: 0 5px 5px 5px; height: 50px">
    <div class="head">
      <span @click="$router.push({path: '/index'})" >
        <img src="../../assets/img/head_title.png">
      </span>
      <span class="rent" @click="$router.push({path: '/rent'})">租房</span>
      <span class="show" @click="$router.push({path: '/pubHouse'})">发布房源</span>
      <span class="control" @click="$router.push({path: '/controller'})">管理员中心</span>
      <span class="login" @click="$router.push({path: '/login'})">登录/注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHead'
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
  .rent, .show, .control, .login {
    font-size: 14pt;
    color: #FFFFFF;
    font-family: 宋体;
    padding: 30px;
    position: relative;
    bottom: 15px;
    left: 800px;
  }
</style>
