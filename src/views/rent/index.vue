<template>
  <div style="width: 100%;">
    <div>
      <el-button type="primary">查询</el-button>
    </div>
    <div>
      <el-row  v-for="(item, key) in houseData" :key="key" style="padding: 10px;" >
        <el-col :span="20" :offset="2">
          <el-card :body-style="{padding: '20px'}">
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
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
