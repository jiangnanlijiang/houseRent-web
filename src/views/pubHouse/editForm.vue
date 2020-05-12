<template>
    <div>
      <el-dialog :visible.sync="dialog" :before-close="close" width="1000px">
        <el-form ref="editForm" :rules="rules" label-width="110px" :model="dataForm">
          <el-row>
            <el-col :span="5">
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
            <el-col :offset="2" :span="5">
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
            <el-col :span="4">
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
          <el-row>
            <el-col :span="12">
              <el-form-item label="具体地址" prop="address">
                <el-input v-model="dataForm.address" style="width: 280px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="房屋面积(m²)" prop="acreage">
                <el-input v-model="dataForm.acreage" placeholder="请输入房屋面积" class="input-width"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="期望租金(￥)" prop="rentMoney">
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
            <el-col :span="5">
              <el-form-item label="房屋类型" prop="bedRoom">
                <el-select v-model="dataForm.bedRoom" class="select-width">
                  <el-option label="一居室" value="1"></el-option>
                  <el-option label="两居室" value="2"></el-option>
                  <el-option label="三居室" value="3"></el-option>
                  <el-option label="四居室" value="4"></el-option>
                  <el-option label="五居室" value="5"></el-option>
                  <el-option label="六居室" value="6"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item prop="hall">
                <el-select v-model="dataForm.hall" class="select-width">
                  <el-option label="无厅" value="0"></el-option>
                  <el-option label="一厅" value="1"></el-option>
                  <el-option label="两厅" value="2"></el-option>
                  <el-option label="三厅" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item prop="kitchen">
                <el-select v-model="dataForm.kitchen" class="select-width">
                  <el-option label="有厨房" value="1"></el-option>
                  <el-option label="无厨房" value="0"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="toilet">
                <el-select v-model="dataForm.toilet" class="select-width">
                  <el-option label="无独卫" value="0"></el-option>
                  <el-option label="一独卫" value="1"></el-option>
                  <el-option label="两独卫" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="dataForm.remark" class="input-width"></el-input>
          </el-form-item>
          <el-form-item label="上传图片(最多5张)">
            <el-upload action="https://upload.qiniup.com"
                       ref="uploadImage"
                       list-type="picture-card"
                       :before-upload="beforeUpload"
                       :on-success="uploadSuccess"
                       :on-error="uploadFailed"
                       :limit="5"
                       :data="uploadForm">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <el-row>
          <el-col :offset="18" :span="2"><el-button size="mini" type="info" @click="close">取消</el-button> </el-col>
          <el-col :offset="1" :span="2"><el-button size="mini" type="primary" @click="submit">确认</el-button> </el-col>
        </el-row>
      </el-dialog>
    </div>
</template>

<script>

  import { saveInfo } from '@/api/house'
  import { getUploadData } from '../../api/utils'

  export default {
    name: 'editForm',
    data () {
      const validateMoney = (rule, value, callback) => {
        let reg = /^([1-9][0-9]*)|([0]\.\{1,2})|([1-9][0-9]*\.\d{1,2})$/
        if(!reg.test(value)){
          callback(new Error("金额输入有误"))
        }
        callback();
      };
      const validateAcreage = (rule, value, callback) => {
        let reg = /^([1-9][0-9]*)|([0]\.\{1,2})|([1-9][0-9]*\.\d{1,2})$/
        if(!reg.test(value)){
          callback(new Error("面积输入有误"))
        }
        callback();
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
          acreage: null,
          rentMoney: null,
          method: null,
          bedRoom: null,
          hall: null,
          kitchen: null,
          toilet: null,
          linkMan: null,
          linkMobile: null,
          remark: null,
          image: null
        },
        rules: {
          province: [
            {required: true, message: '请选择省', trigger: 'change'}
          ],
          city: [
            {required: true, message: '请选择市', trigger: 'change'}
          ],
          county: [
            {required: true, message: '请选择县', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请填写详细地址', trigger: 'change'}
          ],
          acreage: [
            {required: true, message: '请填写房屋面积', trigger: 'change'},
            {validator: validateAcreage, trigger: 'blur'}
          ],
          rentMoney: [
            {required: true, message: '请填写期望租金', trigger: 'change'},
            {validator: validateMoney, trigger: 'change'}
          ],
          method: [
            {required: true, message: '请选择出租方式', trigger: 'change'}
          ],
          bedRoom: [
            {required: true, message: '请选择卧室数量', trigger: 'change'}
          ],
          hall: [
            {required: true, message: '请选择大厅数量', trigger: 'change'}
          ],
          kitchen: [
            {required: true, message: '请选择厨房数量', trigger: 'change'}
          ],
          toilet: [
            {required: true, message: '请选择卫生间数量', trigger: 'change'}
          ],
          linkMan: [
            {required: true, message: '请填写联系人', trigger: 'change'}
          ],
          linkMobile: [
            {required: true, message: '请填写联系电话', trigger: 'change'},
            {validator: validateMobile, trigger: 'blur'}
          ]
        },
        province: null,
        city: [],
        county: [],
        uploadForm: {},
        fileList: []
      }
    },
    methods: {
      close () {
        this.$refs.editForm.resetFields();
        this.$refs.uploadImage.clearFiles();
        this.fileList = [];
        this.dialog=false;
      },
      submit () {
        this.$refs.editForm.validate((valid) => {
          if(!valid){
            return;
          }
          else {
            this.save();
          }
        });
      },
      save() {
        if(this.fileList == null || this.fileList.length == 0){
          this.$message({
            message: '请上传图片',
            type: 'warning'
          })
          return;
        }
        let data = this.dataForm;
        data.images = this.fileList;
        data.image = this.fileList[0].filePath;
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
      },
      beforeUpload(file){
        if(file.type != 'image/jpeg' && file.type != 'image/jpg' && file.type != 'image/png'){
          this.$message({
            message: '图片格式错误',
            type: 'error'
          });
          return;
        }
        return getUploadData().then(res => {
          this.uploadForm.token = res.data.token;
          this.uploadForm.key = res.data.key + file.name;
        });
      },
      uploadSuccess (response, file, fileList) {
        let uploadFile = {
          fileName: response.key,
          filePath: 'http://qa6yb49uz.bkt.clouddn.com/' + response.key
        }
        this.fileList.push(uploadFile);
      },
      uploadFailed (err, file, fileList){
        console.log(err);
      }
    }
  }
</script>

<style lang="less" scoped>
  .input-width {
    width: 200px;
  }
  .select-width {
    width: 150px;
  }
</style>
