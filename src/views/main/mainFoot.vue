<template>
  <div>
    <span>版权所有&copy;</span>
    <span>李锋制作 </span>
    <span><a href="http://www.jxufe.edu.cn//" target="_blank" >江西财经大学</a></span>
    <span><a href="#" target="_blank">信息管理学院</a></span>
  </div>
</template>

<script>
export default {
  name: 'mainFoot'
}
</script>

<style lang="less" scoped>
  div {
    background-color: rgba(0,0,0, 0.6);
    width: 100%;
    height: 100%;
    padding: 0;
  }
  span {
    color: #FFFFFF;
    padding-right: 100px;
    top: 30%;
    position: relative;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
  }
</style>
