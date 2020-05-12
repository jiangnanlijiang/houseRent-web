<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="6">
          <el-carousel height="180px">
            <el-carousel-item v-for="item in info.houseImage" :key="item.id">
              <el-image :src="item.filePath"></el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :offset="2" :span="6">
          <div><span style="font-style: initial;font-size: 20pt;color: #FF0000">{{info.rentMoney}}元/月</span></div>
          <div><span style="font-size: 15pt;">{{info.method==0?'整租':(info.method==1?'合租':'转租')}}</span></div>
          <div><span style="font-size: 15pt;">{{info.provinceName+' '+info.cityName+' '+info.countyName+' '+info.address}}</span></div>
          <div><span style="font-size: 15pt;">{{info.bedRoom}}室 {{info.hall}}厅 {{info.toilet}}卫 {{info.kitchen==0?'无厨房':'有厨房'}} </span></div>
          <div><span style="font-size: 15pt;">{{info.acreage}}m²</span></div>
          <div><span>最近维护时间：{{info.updateTime}}</span></div>
        </el-col>
        <el-col :offset="2" :span="6">
          <div><span>联系人：{{info.linkMan}}</span></div>
          <div><span>联系电话：{{info.linkMobile}}</span></div>
          <el-button type="success" @click="apply" :disabled="info.applyStatus==1">{{info.applyStatus==0?'申请租房':'已申请'}}</el-button>
          <el-button type="primary" @click="talk">联系他</el-button>
        </el-col>
      </el-row>
      <div style="margin: 20px 0 20px 0;background-color: #D9D9D9; "><span style="color: #409EFF;font-size: 15pt;">基础设施</span></div>
      <el-row>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-air-conditioner.jpg"></el-image>
          <div class="icon_font">空调</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-fridge.jpg"></el-image>
          <div class="icon_font">冰箱</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-bed.jpg"></el-image>
          <div class="icon_font">床</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-heater.jpg"></el-image>
          <div class="icon_font">热水器</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-no-broadband.jpg"></el-image>
          <div class="icon_font" style="text-decoration: line-through;">宽带</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-no-gas.jpg"></el-image>
          <div class="icon_font" style="text-decoration: line-through;">天然气</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-no-heating.jpg"></el-image>
          <div class="icon_font" style="text-decoration: line-through;">暖气</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-no-television.jpg"></el-image>
          <div class="icon_font" style="text-decoration: line-through;">电视机</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-wardrobe.jpg"></el-image>
          <div class="icon_font">衣柜</div>
        </el-col>
        <el-col :span="2">
          <el-image src="http://qa6yb49uz.bkt.clouddn.com/icon-washing-machine.jpg"></el-image>
          <div class="icon_font">洗衣机</div>
        </el-col>
      </el-row>
      <div style="margin: 20px 0 20px 0;background-color: #D9D9D9; "><span style="color: #409EFF;font-size: 15pt;">留言板</span></div>
      <!--<div class="message_box">
        <ul class="infinite-list" v-infinite-scroll="load">
          <li class="infinite-list-item" v-for="i in count">{{i}}</li>
        </ul>
      </div>-->
    </el-card>
    <talk-box></talk-box>
  </div>
</template>

<script>

  import { findInfo } from '@/api/house'
  import { rentApply } from '@/api/rent'
  import moment from 'moment'
  import talkBox from '@/components/talkBox'

  export default {
    name: 'houseInfo',
    components: {
      talkBox
    },
    data () {
      return {
        info: {},
      }
    },
    created () {
      this.initPage();
    },
    methods: {
      initPage () {
        const id = this.$route.query.id;
        findInfo({id: id}).then(res => {
          this.info = res.data;
          this.info.updateTime = moment(res.data.updateTime).format('YYYY年MM月DD日 hh:mm:ss');
        })
      },
      apply(){
        const info = {
          houseId: this.info.id,
          applyFor: this.info.linker
        };
        rentApply(info).then(res => {
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }).catch(err => {
          this.$message({
            message: err.response.data.message,
            type: 'error'
          })
        })
      },
      talk () {

      }
    }
  }
</script>

<style lang="less" scoped>
  .icon_font{
    width: auto;
    padding: 20px;
    font-size: 18pt;
  }
  .message_box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    height: 500px;
  }
  .infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
    overflow: auto;
  }
  .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
  }
</style>
