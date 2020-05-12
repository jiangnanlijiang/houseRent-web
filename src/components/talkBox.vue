<template>
  <!--<div class="message_box">
    <ul class="infinite-list" v-infinite-scroll="load">
      <li class="infinite-list-item" v-for="i in count">{{i}}</li>
    </ul>
  </div>-->
</template>

<script>
export default {
  name: 'talkBox',
  data () {
    return {
      count: 5
    }
  },
  methods: {
    load() {
      this.count = 10;
    }
  }
}
</script>

<style lang="less" scoped>
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
