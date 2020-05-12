<template>
  <div style="padding: 20px;">
    <el-form ref="passwordForm" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="原密码" prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" class="input-width" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="form.newPassword" class="input-width" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword" class="input-width" show-password></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button size="small" type="info" style="margin-left: 200px;" @click="reset">重置</el-button>
      <el-button size="small" type="success" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>

  import { changePassword } from '@/api/sys'

  export default {
    name: 'changePassword',
    data() {
      const validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        form: {
          oldPassword: null,
          newPassword: null,
          confirmPassword: null
        },
        rules: {
          oldPassword: [
            {required: true, message: '请输入原密码', trigger: 'change'}
          ],
          newPassword: [
            {required: true, message: '请输入新密码', trigger: 'change'}
          ],
          confirmPassword: [
            {required: true, message: '请输入新密码', trigger: 'change'},
            {validator: validatePassword, trigger: 'change'}
          ]
        }
      }
    },
    methods: {
      reset(){
        this.$refs.passwordForm.resetFields();
      },
      submit() {
        this.$refs.passwordForm.validate((valid) => {
          if(!valid)  return;
          else {
            changePassword(this.form).then(res => {
              this.$message({
                message: res.msg,
                type: 'success',
                duration: 1000
              });
              this.reset();
            }).catch(err => {
              this.$message({
                message: err.response.data.message,
                type: 'error',
                duration: 1000
              });
              this.reset();
            });
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .input-width {
    width: 200px;
  }
</style>
