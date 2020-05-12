<template>
  <div style="padding: 0 5px 5px 5px; height: 60px">
    <div class="head">
      <el-row>
        <el-col :span="4">
          <span @click="$router.push({path: '/index'})" >
            <img src="../../assets/img/title.png" class="avatar_title">
          </span>
        </el-col>
        <el-col :offset="8" :span="3" style="padding: 15px;">
          <span class="rent" @click="$router.push({path: '/rent'})">我要租房</span>
        </el-col>
        <el-col :span="3" style="padding: 15px;">
          <span class="show" @click="$router.push({path: '/pubHouse'})">发布房源</span>
        </el-col>
        <el-col :span="3" style="padding: 15px;">
          <span class="control" @click="$router.push({path: '/control'})">管理员中心</span>
        </el-col>
        <el-col :span="3" style="padding: 15px;">
          <span v-if="this.token==null" class="login" @click="$router.push({path: '/login'})">登录/注册</span>
          <span v-else class="login">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link login">欢迎您<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="person">个人中心</el-dropdown-item>
                <el-dropdown-item command="message">消息中心</el-dropdown-item>
                <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </el-col>
      </el-row>
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
  },
  methods: {
    handleCommand(command){
      if(command == 'logOut'){
        this.logOut();
      }
      else if(command == 'person'){
        this.$router.push('/user');
      }
      else if(command == 'message'){
        this.$router.push('/message');
      }
    },
    logOut() {
      this.$webSocketServer.close();
      sessionStorage.removeItem("token");
      this.$router.replace("/login");
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
    font-size: 18pt;
    color: #FFFFFF;
    font-family: 宋体;
  }
  .el-dropdown-link {
    color: #409EFF;
  }
</style>
