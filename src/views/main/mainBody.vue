<template>
  <div>
    <el-card>
      <el-input v-model="message" style="width: 500px"></el-input>
      <el-button type="primary" @click="send">发送消息</el-button>
    </el-card>
  </div>
</template>

<script>


  export default {
    name: 'mainBody',
    data () {
      return {
        message: null
      }
    },
    created () {
    },
    mounted () {
      if(this.$webSocketServer.webSocket != null && this.$webSocketServer.webSocket.readyState == 1){
        this.$webSocketServer.webSocket.onmessage = function (event) {
          console.log(event);
          console.log(event.data);
        }
      }
      else if(sessionStorage.getItem("token") != null){
        this.$webSocketServer.initWebSocket();
      }
    },
    methods: {
      send() {
      }
    }
  }
</script>

<style lang="less" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
