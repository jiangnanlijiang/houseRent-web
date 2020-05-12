<template>
  <div style="width: 100%;">
    <el-card style="width: 1000px;min-height: 600px;margin: 20px auto;">
      <div slot="header">
        <el-button size="mini" type="primary" icon="el-icon-arrow-left" @click="$router.go(-1)">返回</el-button>
        <div style="text-align: center">
          <span style="">消息中心</span>
        </div>
      </div>
        <el-tabs tab-position="left" style="padding: 20px;">
          <el-tab-pane label="系统消息"> <sys-message /></el-tab-pane>
          <el-tab-pane label="租房申请"><rent-apply-message /></el-tab-pane>
          <el-tab-pane label="私信"><person-message /></el-tab-pane>
          <el-tab-pane label="我的评论"><my-message /></el-tab-pane>
          <el-tab-pane label="消息设置"><message-setting /></el-tab-pane>
        </el-tabs>
    </el-card>
  </div>
</template>

<script>

  import sysMessage from './sysMessage'
  import rentApplyMessage from './rentApplyMessage'
  import personMessage from './personMessage'
  import myMessage from './myMessage'
  import messageSetting from './messageSetting'

  export default {
    name: 'index',
    components: {
      sysMessage, rentApplyMessage, personMessage, messageSetting, myMessage
    }
  }
</script>

<style>

</style>
