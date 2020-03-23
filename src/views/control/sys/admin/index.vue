<template>
  <el-container>
    <el-header height="auto">
      <div>
        <editForm ref="editForm" />
      </div>
      <el-card>
        <div slot="header">
          <span>管理员用户</span>
        </div>
        <div>
          <el-row>
            <el-col :span="1"><span>账号</span></el-col>
            <el-col :span="3"><el-input size="mini" class="input-width"></el-input> </el-col>
            <el-col :span="1"><span>名称</span></el-col>
            <el-col :span="3"><el-input size="mini" class="input-width"></el-input> </el-col>
            <el-col :span="2"><el-button size="mini" type="primary" @click="findAll">查询</el-button> </el-col>
            <el-col :offset="12" :span="2"><el-button size="mini" type="primary" @click="addForm">新增</el-button> </el-col>
          </el-row>
        </div>
      </el-card>
    </el-header>
    <el-main>
      <el-table :data="infos">
        <el-table-column align="center" label="名称" prop="name"></el-table-column>
        <el-table-column align="center" label="账号" prop="account"></el-table-column>
        <el-table-column align="center" label="创建时间" prop="createTime"></el-table-column>
        <el-table-column align="center" label="创建人" prop="creator"></el-table-column>
        <el-table-column align="center" label="操作">
          <template>
            <span style="color: #409EFF; cursor: pointer; padding: 10px;">修改</span>
            <span style="color: #409EFF; cursor: pointer; padding: 10px;">查看</span>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>

  import editForm from './editForm'

  import { findAll } from '@/api/sysAdmin'

  export default {
    name: 'index',
    components: { editForm },
    data () {
      return {
        infos: []
      }
    },
    created () {
      this.findAll()
    },
    methods: {
      addForm () {
        const _this = this.$refs.editForm
        _this.dialog = true
      },
      findAll () {
        findAll().then(res => {
          this.infos = res.data.data
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .input-width {
    width: 100px;
  }
</style>
