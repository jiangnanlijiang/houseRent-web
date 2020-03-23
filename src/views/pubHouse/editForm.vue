<template>
    <div>
      <el-dialog :visible.sync="dialog" :before-close="close" width="800px">
        <el-form ref="editForm" label-width="80px" :model="dataForm">
          <el-row>
            <el-col :span="6">
              <el-form-item label="所在城市" prop="province">
                <el-select v-model="dataForm.province" class="select-width" @change="chooseCity">
                  <el-option
                    v-for="item in province"
                    :key="item.code"
                    :value="item.code"
                    :label="item.name">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item prop="city" label-width="20px">
                <el-select v-model="dataForm.city" class="select-width" @change="chooseCounty">
                  <el-option
                    v-for="item in city"
                    :key="item.code"
                    :value="item.code"
                    :label="item.name"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :offset="1" :span="3">
              <el-form-item prop="county" label-width="20px">
                <el-select v-model="dataForm.county" class="select-width">
                  <el-option
                    v-for="item in county"
                    :key="item.code"
                    :value="item.code"
                    :label="item.name"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="具体地址" prop="address">
            <el-input v-model="dataForm.address" style="width: 300px;"></el-input>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item label="期望租金" prop="rentMoney">
                <el-input v-model="dataForm.rentMoney" class="input-width"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="出租方式" prop="method">
                <el-select v-model="dataForm.method" class="input-width">
                  <el-option label="整租" value="1"></el-option>
                  <el-option label="合租" value="2"></el-option>
                  <el-option label="转租" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label-width="房屋面积(m²)" prop="acreage">
                <el-input v-model="dataForm.acreage" placeholder="请输入房屋面积" class="input-width"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label-width="卧室数量" prop="bedRoom">
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="联系人" prop="linkMan">
                <el-input v-model="dataForm.linkMan" class="input-width"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="联系电话" prop="linkMobile">
                <el-input v-model="dataForm.linkMobile" :maxlength="13" class="input-width"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :offset="15" :span="4"><el-button size="mini" type="info" @click="close">取消</el-button> </el-col>
          <el-col :offset="1" :span="4"><el-button size="mini" type="primary" @click="submit">确认</el-button> </el-col>
        </el-row>
      </el-dialog>
    </div>
</template>

<script>

  import { saveInfo } from '@/api/house'

  export default {
    name: 'editForm',
    data () {
      const validateMoney = (rule, value, callback) => {
        let reg = /^1[3-9][0-9]{9}$/

      };
      const validateMobile = (rule, value, callback) => {
        let reg = /^1[3-9][0-9]{9}$/;
        if(!reg.test(value)){
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      };
      return {
        dialog: false,
        dataForm: {
          province: null,
          city: null,
          county: null,
          address: null,
          rentMoney: null,
          method: null,
          linkMan: null,
          linkMobile: null
        },
        rules: {
          province: [
            {required: true, message: '请选择地址', trigger: 'blur'}
          ],
          city: [
            {required: true, message: '请选择地址', trigger: 'blur'}
          ],
          county: [
            {required: true, message: '请选择地址', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请填写详细地址', trigger: 'blur'}
          ],
          rentMoney: [
            {required: true, message: '请填写期望租金', trigger: 'blur'}
          ],
          method: [
            {required: true, message: '请选择出租方式', trigger: 'blur'}
          ],
          linkMan: [
            {required: true, message: '请填写联系人', trigger: 'blur'}
          ],
          linkMobile: [
            {required: true, message: '请填写联系电话', trigger: 'blur'}
          ]
        },
        province: null,
        city: [],
        county: []
      }
    },
    methods: {
      close () {
        this.$refs.editForm.resetFields();
        this.dialog=false;
      },
      submit () {
        const data = this.dataForm;
        saveInfo(data).then(res => {
          this.$message({
            message: '新增成功',
            type: 'success'
          })
          this.$parent.initPage();
          this.close();
        })
      },
      chooseCity(val){
        this.city = []
        this.dataForm.city = null
        this.county = []
        this.dataForm.county = null
        const city = JSON.parse(sessionStorage.getItem('city'))
        for(let i in city){
          if(city[i].pid == val){
            this.city.push(city[i])
          }
        }
      },
      chooseCounty(val){
        this.county = []
        this.dataForm.county = null
        const county = JSON.parse(sessionStorage.getItem('county'))
        for(let i in county){
          if(county[i].pid==val){
            this.county.push(county[i])
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .input-width {
    width: 200px;
  }
  .select-width {
    width: 100px;
  }
</style>
