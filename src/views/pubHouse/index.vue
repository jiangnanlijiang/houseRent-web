<template>
  <div>
    <div>
      <el-card>
        <div slot="header">
          <span>我发布的房源</span>
          <div>
            <el-button type="submary">新增</el-button>
          </div>
        </div>
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
                <span style="position: absolute; bottom: 10px; color: #ff0000;">{{item.verify_status==0?'未审核':(item.verify_status==1?'审核通过':'审核未通过')}}</span>
              </el-col>
            </el-row>
          </el-card>
        </ul>
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
          createDate: '2020.3.12',
          verify_status: 0
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12',
          verify_status: 0
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12',
          verify_status: 1
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12',
          verify_status: 2
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12',
          verify_status: 2
        },
        {
          id: 1,
          address: 'xxxx',
          rentPay: 6000,
          acreage: 80,
          createDate: '2020.3.12',
          verify_status: 1
        }
      ]
    }
  }
}
</script>

<style>

</style>
