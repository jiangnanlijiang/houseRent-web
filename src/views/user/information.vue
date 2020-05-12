<template>
  <div>
    <div style="padding: 20px;">
      <div class="person_message">账号：<span>{{info.account}}</span></div>
      <div class="person_message">姓名：<span v-if="!isEdit">{{info.name}}</span><input v-else v-model="info.name" class="input-edit input-width"></input></div>
      <div class="person_message">性别：
        <span v-if="!isEdit">{{info.sex==0?'男':'女'}}</span>
        <span v-else>
            <el-radio-group v-model="info.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </span>
      </div>
      <div class="person_message">邮箱：<span v-if="!isEdit">{{info.mail}}</span><input v-else v-model="info.mail" class="input-edit input-width"></input></div>
      <div class="person_message">身份证号：<span v-if="!isEdit">{{info.sfz}}</span><input v-else v-model="info.sfz" :maxlength="18" class="input-edit input-width"></input></div>
      <div class="person_message">联系电话：<span v-if="!isEdit">{{info.mobile}}</span><input v-else v-model="info.mobile" class="input-edit input-width"></input></div>
    </div>
    <div v-if="!isEdit">
      <span class="edit" @click="isEdit=true"><i class="el-icon-edit"></i>修改资料</span>
    </div>
    <div v-else style="padding-left: 80%;">
      <el-button type="info" size="mini" @click="cancel">取消</el-button>
      <el-button type="primary" size="mini" @click="editInfo">保存</el-button>
    </div>
  </div>
</template>

<script>

  import { getUserInfo, editUserInfo } from '@/api/sys'

  export default {
    name: 'information',
    data() {
      return {
        info: {
          account: null,
          sex: 0
        },
        isEdit: false,
        province: null,
        city: [],
        county: [],
      }
    },
    created () {
      this.initPage();
      this.province = JSON.parse(sessionStorage.getItem('province'));
    },
    methods: {
      initPage() {
        getUserInfo().then(res => {
          this.info = res.data;
        })
      },
      editInfo() {
        const data = this.info;
        if(data.name == null || data.name == ''){
          this.$message({
            message: '请填写姓名',
            type: 'warning',
            duration: 1000
          });
          return false;
        }
        if(data.sex == null){
          this.$message({
            message: '请选择性别',
            type: 'warning',
            duration: 1000
          });
          return false;
        }
        if(data.mail != null && data.mail != ''){
          let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
          if(!reg.test(data.mail)){
            this.$message({
              message: '邮箱格式有误',
              type: 'warning',
              duration: 1000
            });
            return false;
          }
        }
        editUserInfo(data).then(res => {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 1000
          });
          this.isEdit=false;
        }).catch(err => {
          this.$message({
            message: err.response.data.message,
            type: 'error',
            duration: 1000
          });
        });
      },
      cancel() {
        this.isEdit = false;
      },
      chooseCity(val){
        this.city = []
        this.info.city = null
        this.county = []
        this.info.county = null
        const city = JSON.parse(sessionStorage.getItem('city'))
        for(let i in city){
          if(city[i].pid == val){
            this.city.push(city[i])
          }
        }
      },
      chooseCounty(val){
        this.county = []
        this.info.county = null
        const county = JSON.parse(sessionStorage.getItem('county'))
        for(let i in county){
          if(county[i].pid==val){
            this.county.push(county[i])
          }
        }
      },
    }
  }
</script>

<style lang="less" scoped>
  .input-edit {
    border: 0;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .input-width {
    width: 200px;
  }
  .person_message {
    padding: 10px;
    border-bottom: 1px solid #E4E7ED;
  }
  .edit{
    font-size: 10pt;
    color: #409EFF;
    cursor: pointer;
    padding-left: 80%;
  }
</style>
