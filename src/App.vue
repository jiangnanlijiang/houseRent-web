<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    let loading = document.getElementById('sampleContainer');
    if(loading!=null){
      document.body.removeChild(loading);
    }
  }
}
</script>

<style>

</style>
