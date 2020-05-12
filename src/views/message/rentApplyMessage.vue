<template>
    <div>
      <el-select v-if="data != null && data.length > 0" v-model="isRead" size="mini" style="width: 120px;padding: 0 20px 10px 680px;" @change="initPage">
        <el-option label="全部" :value="null"></el-option>
        <el-option label="已读" :value="0"></el-option>
        <el-option label="未读" :value="1"></el-option>
      </el-select>
      <div v-if="data == null || data.length <= 0" style="text-align: center;"> <span>没有任何申请</span></div>
      <div v-else>
        <el-card v-for="item in data" :key="item.id">
          <el-row>
            <el-col>
              <span>用户{{item.name}}向您申请租用您位于{{item.address}}的房子</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="12"><span @click="searchInfo" style="color: #409EFF;cursor: pointer;">查看详情</span></el-col>
            <el-col :span="3">
              <el-button type="primary" size="mini">删除</el-button>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
</template>

<script>
  import { getApplyMessage } from '@/api/message'

  export default {
    name: 'rentApplyMessage',
    data () {
      return {
        pageNum: 1,
        pageSize: 10,
        total: null,
        isRead: null,
        data: []
      }
    },
    created () {
      this.initPage();
    },
    methods: {
      initPage() {
        const criteria = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          isRead: this.isRead
        };
        getApplyMessage(criteria).then(res => {
          this.data = res.data.list;
          this.total = res.data.total;
        })
      },
      searchInfo (val) {
        this.$router.push({path: '/pubHouse/houseInfo', query: {id: val}})
      }
    }
  }
</script>

<style>

</style>
