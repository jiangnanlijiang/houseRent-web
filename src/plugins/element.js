import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Container, Header, Main, Footer, Aside, Card, Row, Col, Image, Radio, RadioGroup, Pagination,
  Menu, Submenu, MenuItemGroup, MenuItem, Table, TableColumn, Dialog, Select, OptionGroup, Option, Notification, Message } from 'element-ui'
// <el-button>
Vue.use(Button)
// <el-form>
Vue.use(Form)
// <el-form-item>
Vue.use(FormItem)
// <el-input>
Vue.use(Input)
// <el-container>
Vue.use(Container)
// <el-header>
Vue.use(Header)
// <el-main>
Vue.use(Main)
// <el-footer>
Vue.use(Footer)
// <el-aside>
Vue.use(Aside)
// <el-card>
Vue.use(Card)
// <el-row>
Vue.use(Row)
// <el-col>
Vue.use(Col)
// <el-image>
Vue.use(Image)
// <el-radio-group>
Vue.use(RadioGroup)
// <el-radio>
Vue.use(Radio)
// <el-pagination>
Vue.use(Pagination)
// <el-menu>
Vue.use(Menu)
// <el-submenu>
Vue.use(Submenu)
// <el-menu-item-group>
Vue.use(MenuItemGroup)
// <el-menu-item>
Vue.use(MenuItem)
// <el-table>
Vue.use(Table)
// <el-table-column>
Vue.use(TableColumn)
// <el-dialog>
Vue.use(Dialog)
// <el-select>
Vue.use(Select)
// <el-option-group>
Vue.use(OptionGroup)
// <el-option>
Vue.use(Option)

// $notify
Vue.prototype.$notify = Notification
// $message
Vue.prototype.$message = Message
