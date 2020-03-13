<template>
    <div class="container">
      <el-container>
        <el-header>
          <mainHead />
        </el-header>
        <el-main style="min-height: 700px;">
          <router-view />
        </el-main>
        <el-footer style="padding: 0;">
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
</style>
