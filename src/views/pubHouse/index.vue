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
          <el-card style="width: 1000px;cursor: pointer;">
            <el-row>
              <el-col :span="8">
                <el-image :src="item.image" ></el-image>
              </el-col>
              <el-col :offset="2" :span="10">
                <div class="message">地址：{{item.provinceName+item.cityName+item.countyName+item.address}}</div>
                <div class="message">面积：{{item.acreage}}</div>
                <div class="message">租金：{{item.rentMoney}}/月</div>
                <div class="message">发布时间：{{item.createTime}}</div>
              </el-col>
              <el-col :span="4">
                <span style="position: absolute; bottom: 10px; color: #ff0000;">{{item.status==0?'正在审核':(item.status==1?'审核通过':(item.status==2?'审核驳回':(item.saddlebrown==3?'已出租':'出租完成')))}}</span>
              </el-col>
            </el-row>
          </el-card>
        </ul>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size.sync="pageSize"
            :current-page.sync="pageNum"
            :total="total"
            :pager-count="5"
            hide-on-single-page @current-change="initPage"></el-pagination>
        </div>
        <div v-else><span style="padding: 20px;text-align: center;display: block;">您还没有发布房源信息</span></div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import editForm from './editForm'
  import { findAll } from '@/api/house'
  import { readRegion } from '@/utils/load'
  import moment from 'moment'

  export default {
  name: 'index',
  components: {
    editForm
  },
  created () {
    this.initPage();
    readRegion();
  },
  data () {
    return {
      pageSize: 10,
      pageNum: 1,
      total: null,
      criteria: {},
      houseData: []
    }
  },
  methods: {
    initPage() {
      const criteria = {};
      criteria.pageSize = this.pageSize;
      criteria.pageNum = this.pageNum;
      criteria.t = 'pub';
      findAll(criteria).then(res => {
        this.houseData = res.data.list;
        this.houseData.forEach(res => {
          res.createTime = moment(res.createTime).format('YYYY年MM月DD日 hh:mm:ss');
        })
        this.total = res.data.total;
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
