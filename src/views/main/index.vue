<template>
    <div class="container">
      <el-container>
        <el-header style="padding: 0;">
          <mainHead />
        </el-header>
        <el-main style="width: 100%; padding: 0;">
          <router-view />
        </el-main>
        <el-footer class="footer">
          <mainFoot />
        </el-footer>
      </el-container>
    </div>
</template>

<script>

import mainHead from './mainHead'
import mainFoot from './mainFoot'

export default {
  name: 'index',
  components: {
    mainHead, mainFoot
  }
}
</script>

<style lang="less" scoped>
  .container {
    height: 100%;
    padding: 0;
  }
  .footer {
    width: 100%;
    height: 40px;
    padding: 0;
    position: fixed;
    bottom: 0;
  }
</style>
