<template>
    <el-dialog :visible.sync="dialog" :before-close="close">
      <el-form ref="editForm" :rules="rules" :model="form"></el-form>
    </el-dialog>
</template>

<script>
  export default {
    name: 'edit',
    data() {
      return {
        dialog: false,
        form:{

        },
        rules:{

        }
      }
    },
    methods: {
      close(){
        this.dialog = false;
      }
    }
  }
</script>

<style>

</style>
