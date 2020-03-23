<template>
  <div>
    <el-dialog :visible.sync="dialog" :before-close="close" title="新增字典数据" width="400px">
      <el-form :model="dataForm" ref="dataForm" label-width="100px">
        <el-form-item label="键名" prop="key">
          <el-input v-model="dataForm.key" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="键值" prop="value">
          <el-input v-model="dataForm.value" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="dataForm.type" class="input-width"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="dataForm.remark" type="textarea" class="input-width"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-col :offset="15" :span="4"><el-button size="mini" type="info" @click="close">取消</el-button> </el-col>
        <el-col :offset="1" :span="4"><el-button size="mini" type="primary" @click="submit">确认</el-button> </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>

import { saveInfo } from '@/api/sysConfig'
import {} from 'element-ui'

export default {
  name: 'editForm',
  data () {
    return {
      dialog: false,
      dataForm: {
        key: null,
        value: null,
        type: null,
        remark: null
      }
    }
  },
  methods: {
    close () {
      this.dialog = false
      this.$refs.dataForm.resetFields()
    },
    submit () {
      this.dialog = false
      const infos = this.dataForm
      debugger
      saveInfo(infos).then(res => {
        this.$notify({
          title: '成功',
          message: res.data.msg,
          type: 'success'
        })
        this.close()
      }).catch(res => {
        this.$notify({
          title: '失败',
          message: '新增失败',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .input-width {
    width: 200px;
  }
</style>
