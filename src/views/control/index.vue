<template>
  <el-container>
    <el-aside width="200px" style="height: 500px; background-color: #606266;">
      <el-menu default-active="/control/sysConfig"
               :unique-opened="true"
               router background-color="#606266" text-color="#FFFFFF">
        <el-submenu index="sys">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>系统管理</span>
          </template>
            <el-menu-item index="/control/sysConfig">数据字典</el-menu-item>
            <el-menu-item index="/control/role">权限管理</el-menu-item>
            <el-menu-item index="/control/log">操作日志</el-menu-item>
            <el-menu-item index="/control/admin">管理员中心</el-menu-item>
        </el-submenu>
        <el-submenu index="basic">
          <template slot="title">
            <span>基础管理</span>
          </template>
            <el-menu-item index="/control/user">用户管理</el-menu-item>
            <el-menu-item index="/control/house">房源管理</el-menu-item>
            <el-menu-item index="/control/message">消息管理</el-menu-item>
            <el-menu-item index="/control/comment">评论中心</el-menu-item>
        </el-submenu>
        <el-submenu index="business">
          <template slot="title">
            <span>业务管理</span>
          </template>
            <el-menu-item index="/control/contractCenter">出租合同</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <router-view />
  </el-container>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style>

</style>
