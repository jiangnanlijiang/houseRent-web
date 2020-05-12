<template>
  <el-container>
    <el-header height="auto">
      <el-card>
        <div slot="header">
          <span>房源信息管理</span>
        </div>
        <el-row>
          <el-col :span="2"><span>房源状态</span></el-col>
          <el-col :span="4">
            <el-select size="mini" v-model="options.status" class="select-width">
              <el-option label="正在审核" value="0"></el-option>
              <el-option label="审核通过" value="1"></el-option>
              <el-option label="审核驳回" value="2"></el-option>
              <el-option label="已出租" value="3"></el-option>
              <el-option label="出租结束" value="4"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2"><span>发布时间</span></el-col>
          <el-col :span="4">
            <el-date-picker size="mini" v-model="options.createTime" class="select-width"></el-date-picker>
          </el-col>
          <el-col :span="2"><span>发布人</span></el-col>
          <el-col :span="4">
            <el-input size="mini" v-model="options.creator" class="select-width"></el-input>
          </el-col>
          <el-col :offset="3" :span="2">
            <el-button size="mini" type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-header>
    <el-main>
      <el-table :data="infos" height="100%">
        <el-table-column label="地址" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.provinceName+ ' ' +scope.row.cityName+ ' ' +scope.row.countyName+ ' ' +scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="面积(㎡)" prop="acreage" align="center"></el-table-column>
        <el-table-column label="期望租金(￥)" prop="rentMoney" align="center"></el-table-column>
        <el-table-column label="户型" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.bedRoom+'卧'+scope.row.hall+'厅'+scope.row.toilet+'卫'+(scope.row.kitchen==1?'有厨房':'无厨房')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="出租方式" align="center">
          <template slot-scope="scope">
            <span>{{scope.row.method==0?'整租':(scope.row.method=='1'?'合租':'转租')}}</span>
          </template>
        </el-table-column>
        <el-table-column label="房源状态" prop="statusName"></el-table-column>
        <el-table-column label="创建人" prop="creator"></el-table-column>
        <el-table-column label="创建时间" prop="createTime"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" :ref="scope.row.id" placement="bottom" title="确认审核" >
              <el-button type="info" size="mini" @click="verify(scope.row.id, 2)">审核驳回</el-button>
              <el-button type="success" size="mini" @click="verify(scope.row.id, 1)">审核通过</el-button>
              <el-button type="primary" size="mini"slot="reference">审核</el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size.sync="pageSize"
        :current-page.sync="pageNum"
        :total="total"
        :pager-count="5"
        hide-on-single-page @current-change="initData"></el-pagination>
    </el-main>
  </el-container>
</template>

<script>

  import { findAll, updateStatus } from '@/api/house.js'

export default {
  name: 'index',
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      total: null,
      options: {},
      infos: [],
      visible: []
    }
  },
  created () {
    this.initData();
  },
  methods: {
    initData () {
      let options = {};
      options.isDelete = 0;
      if(this.options.status !=null && this.options.status != ''){
        options.status = this.options.status;
      }
      if(this.options.creator !=null && this.options.creator != ''){
        options.creator = this.options.creator;
      }
      if(this.options.createTime != null && this.options.createTime != ''){
        options.createTime = this.options.createTime;
      }
      options.pageNum = this.pageNum;
      options.pageSize = this.pageSize;
      findAll(options).then(res => {
        this.infos = res.data.list;
        this.total = res.data.total;
      })
    },
    verify (id, val) {
      this.$refs[id].doClose();
      updateStatus({id: id, status: val}).then(res => {
        this.initData();
        this.$message({
          message: res.msg,
          type: 'success'
        });
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .select-width {
    width: 150px;
  }
</style>
