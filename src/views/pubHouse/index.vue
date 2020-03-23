<template>
  <div>
    <editForm ref="editForm" />
    <div>
      <el-card>
        <div slot="header">
          <el-row>
            <el-col>
              <span>我的房源信息</span>
            </el-col>
            <el-col :offset="22">
              <el-button size="mini" type="primary" @click="addInfo">新增</el-button>
            </el-col>
          </el-row>
        </div>
        <div v-if="this.houseData!=null&&this.houseData.length>0">
          <ul v-for="(item, key) in houseData" :key="key">
          <el-card>
            <el-row>
              <el-col :span="10">
                <img src="../../assets/logo.png" class="avatar_house" />
              </el-col>
              <el-col :span="10">
                <div class="message">地址：{{item.address}}</div>
                <div class="message">面积：{{item.acreage}}</div>
                <div class="message">租金：{{item.rentPay}}/月</div>
                <div class="message">发布时间：{{item.createDate}}</div>
              </el-col>
              <el-col :span="4">
                <span style="position: absolute; bottom: 10px; color: #ff0000;">{{item.verify_status==0?'正在审核':(item.verify_status==1?'审核通过':'审核驳回')}}</span>
              </el-col>
            </el-row>
          </el-card>
        </ul>
        </div>
        <div v-else><span style="padding: 20px;text-align: center;display: block;">您还没有发布房源信息</span></div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import editForm from './editForm'
  import { findAll, test } from '@/api/house'
  import { readRegion } from '@/utils/load'

  export default {
  name: 'index',
  components: {
    editForm
  },
  created () {
    this.option.t = 'pub';
    findAll(this.option).then(res => {
      this.houseData = res.data;
    })
    readRegion();
  },
  data () {
    return {
      option: {},
      houseData: []
    }
  },
  methods: {
    initPage() {
      findAll(this.option).then(res => {
        this.houseData = res.data;
      })
    },
    addInfo(){
      this.$refs.editForm.dialog=true;
      this.$refs.editForm.province = JSON.parse(sessionStorage.getItem('province'))
    }
  }
}
</script>

<style>

</style>
