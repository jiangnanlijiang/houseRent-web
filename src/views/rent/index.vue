<template>
  <div style="width: 100%;height: 100%;">
    <div style="padding: 10px;">
      <el-card>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>出租方式</span>
          </el-col>
          <el-col :span="10">
            <el-radio-group v-model="searchForm.type">
              <el-radio :label="0">不限</el-radio>
              <el-radio :label="1">整租</el-radio>
              <el-radio :label="2">合租</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>户型</span>
          </el-col>
          <el-col :span="10">
            <el-radio-group v-model="searchForm.layout">
              <el-radio :label="0">不限</el-radio>
              <el-radio :label="1">一居室</el-radio>
              <el-radio :label="2">二居室</el-radio>
              <el-radio :label="3">三居室</el-radio>
              <el-radio :label="3">三居室+</el-radio>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="padding: 10px;">
          <el-col :span="2">
            <span>房租金额</span>
          </el-col>
          <el-col :span="10">
            <el-input style="width: 100px;" v-model="searchForm.min_pay" size="mini" /> 元/月 - <el-input style="width: 100px;" v-model="searchForm.max_pay" size="mini" /> 元/月
          </el-col>
        </el-row>
        <el-button type="primary">查询</el-button>
      </el-card>
    </div>
    <div style="width: 100%;">
      <el-card class="show">
        <el-row  v-for="(item, key) in houseData" :key="key" style="padding: 5px;" >
          <el-col :span="20" :offset="2">
            <el-card>
              <el-row>
                <el-col :span="10">
                  <img src="../../assets/logo.png" class="avatar_house" />
                </el-col>
                <el-col :span="14">
                  <div class="message">地址：{{item.address}}</div>
                  <div class="message">面积：{{item.acreage}}</div>
                  <div class="message">租金：{{item.rentPay}}/月</div>
                  <div class="message">发布时间：{{item.createDate}}</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
        <div>
          <el-pagination background layout="prev, pager, next" :page-size="5" :total="10"></el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      houseData: [
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12'
        }
      ],
      searchForm: {
        type: 0,
        layout: 0,
        max_pay: null,
        min_pay: null
      }
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
