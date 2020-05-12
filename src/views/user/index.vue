<template>
    <div style="width: 100%;">
      <el-card body-style="padding: 0;" style="width: 1000px;min-height: 600px;margin: 20px auto;">
        <div slot="header">
          <el-button size="mini" type="primary" icon="el-icon-arrow-left" @click="$router.go(-1)">返回</el-button>
          <div style="text-align: center">
            <span style="">用户中心</span>
          </div>
        </div>
        <div style="padding: 10px 0 10px 50%;transform: translate(-5%);border-bottom: 2px solid #E4E7ED;width: 100%;">
          <el-image src="" class="avatar_head">
            <div slot="error" style="width: 100%;height: 100%;">
              <i class="el-icon-picture-outline" style="margin: 50%; transform: translate(-50%, -50%);"></i>
            </div>
          </el-image>
          <span style="color: #409EFF;cursor: pointer;font-size: 10pt;"><i class="el-icon-edit"></i>修改头像</span>
        </div>
        <el-tabs tab-position="left" style="width: 100%;padding: 10px;">
          <el-tab-pane label="基础信息">
            <information />
          </el-tab-pane>
          <el-tab-pane label="修改密码">
            <changePassword />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
</template>

<script>

  import information from './information'
  import changePassword from './changePassword'
  import { readRegion } from '../../utils/load'

  export default {
    name: 'index',
    components: {
      information, changePassword
    },
    created () {
      readRegion();
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .avatar_head {
    width: 120px;
    height: 120px;
    border:2px solid #F2F6FC;
    border-radius: 50%;
  }
</style>
