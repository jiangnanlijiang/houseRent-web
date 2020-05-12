<template>
  <div style="width: 100%;height: 100%;">
    <el-card class="show">
      <el-card>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>出租方式</span>
          </el-col>
          <el-col :span="10">
            <el-radio-group v-model="criteria.method">
              <el-radio :label="0">不限</el-radio>
              <el-radio :label="1">整租</el-radio>
              <el-radio :label="2">合租</el-radio>
              <el-radio :label="3">转租</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>户型</span>
          </el-col>
          <el-col :span="10">
            <el-radio-group v-model="criteria.bedRoom">
              <el-radio :label="0">不限</el-radio>
              <el-radio :label="1">一居室</el-radio>
              <el-radio :label="2">二居室</el-radio>
              <el-radio :label="3">三居室</el-radio>
              <el-radio :label="4">三居室+</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>房租金额</span>
          </el-col>
          <el-col :span="10">
            <el-input style="width: 100px;" v-model="criteria.minPay" size="mini" /> 元/月 - <el-input style="width: 100px;" v-model="criteria.maxPay" size="mini" /> 元/月
          </el-col>
        </el-row>
        <el-button type="primary" @click="initPage">查询</el-button>
      </el-card>
        <div v-if="total != null && total>0">
            <el-row>
              <template v-for="item in houseData">
                <el-col style="padding: 20px" :span="8">
                  <el-card>
                    <div  style="cursor: pointer;" @click="$router.push({path: '/rent/houseInfo', query: {id: item.id}})">
                      <el-image :src="item.image"></el-image>
                      <div><span>地址：{{item.provinceName + item.cityName + item.countyName + item.address}}</span></div>
                      <div><span>面积：{{item.acreage}} m²</span></div>
                      <div><span>租金：{{item.rentMoney}} 元</span></div>
                    </div>
                  </el-card>
                </el-col>
              </template>
            </el-row>
          <el-pagination
            background
            layout="prev, pager, next"
            :page-size.sync="pageSize"
            :current-page.sync="pageNum"
            :total="total"
            :pager-count="5"
            hide-on-single-page @current-change="initPage"></el-pagination>
        </div>
        <div v-else><span style="padding: 20px;text-align: center;display: block;">没有找到您想要的房源信息</span></div>
    </el-card>
  </div>
</template>

<script>

  import { findAll } from '../../api/house'

  export default {
  name: 'index',
  data () {
    return {
      pageSize: 9,
      pageNum: 1,
      total: null,
      houseData: [],
      criteria: {
        method: 0,
        bedRoom: 0
      },
    }
  },
    created () {
      this.initPage();
    },
    methods: {
    initPage () {
      const criteria = {
        isDelete: 0,
        status: 1
      };
      if(this.criteria.method != null && this.criteria.method != ''){
        criteria.method = this.criteria.method;
      }
      if(this.criteria.bedRoom != null && this.criteria.bedRoom != ''){
        criteria.bedRoom = this.criteria.bedRoom;
      }
      if(this.criteria.minPay !=null && this.criteria.minPay != ''){
        criteria.minPay = this.criteria.minPay;
      }
      if(this.criteria.maxPay != null && this.criteria.maxPay != ''){
        criteria.maxPay = this.criteria.maxPay;
      }
      criteria.pageSize = this.pageSize;
      criteria.pageNum = this.pageNum;
      findAll(criteria).then(res => {
        this.houseData = res.data.list;
        this.total = res.data.total;
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .show {
    width: 1200px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }
  .avatar_house {
    padding: 10px;
    height: 150px;
  }
  .message {
    padding: 5px;
    font-family: 宋体;
    font-size: 20px;
    font-style: initial;
  }
</style>
