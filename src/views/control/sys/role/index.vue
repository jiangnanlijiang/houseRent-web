<template>
  <div style="width: 100%;">
    <el-table :data="data" style="width: 100%;">
      <el-table-column label="编号" prop="id"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="等级" prop="level"></el-table-column>
      <el-table-column label="上级角色" prop="pRole"></el-table-column>
      <el-table-column label="创建时间" prop="createTime">
        <template slot-scope="scope">
          <span>{{moment(scope.row.createTime).format('YYYY年MM月DD日 hh:mm:ss')}}</span>
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
      hide-on-single-page @current-change="initPage"></el-pagination>
  </div>
</template>

<script>

  import { getSysRole } from '@/api/sysRole'
  import moment from 'moment'

  export default {
  name: 'index',
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      total: null,
      data: [],
    }
  },
  created () {
    this.initPage();
  },
  methods: {
    moment,
    initPage() {
      let criteria = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      getSysRole(criteria).then(res => {
        this.data = res.data.list;
        this.total = res.data.total;
      })
    }
  }
}
</script>

<style scoped>

</style>
