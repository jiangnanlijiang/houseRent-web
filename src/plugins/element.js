import Vue from 'vue'
import {
  Aside, Avatar,
  Badge, Button,
  Card, Carousel, CarouselItem, Col, Container,
  DatePicker, Dialog, Dropdown, DropdownMenu, DropdownItem,
  Footer, Form, FormItem,
  Input,
  Header,
  Image,
  Main, Menu, MenuItem, MenuItemGroup,
  Option, OptionGroup,
  Popover,
  Row, Radio, RadioGroup, Pagination,
  Select, Submenu,
  Table, TableColumn, Tabs, TabPane,
  Upload,
  Notification, Message, InfiniteScroll } from 'element-ui'


// <el-aside>
Vue.use(Aside)
// <el-avatar>
Vue.use(Avatar)

// <el-badge>
Vue.use(Badge)
// <el-button>
Vue.use(Button)

// <el-card>
Vue.use(Card)
// <el-carousel>
Vue.use(Carousel)
// <el-carousel-item>
Vue.use(CarouselItem)
// <el-col>
Vue.use(Col)
// <el-container>
Vue.use(Container)

// <el-date-picker>
Vue.use(DatePicker)
// <el-dialog>
Vue.use(Dialog)
//<el-dropdown>
Vue.use(Dropdown)
//<el-dropdown-item>
Vue.use(DropdownItem)
//<el-dropdown-menu>
Vue.use(DropdownMenu)

// <el-footer>
Vue.use(Footer)
// <el-form>
Vue.use(Form)
// <el-form-item>
Vue.use(FormItem)

// <el-header>
Vue.use(Header)

// <el-image>
Vue.use(Image)
// <el-input>
Vue.use(Input)

// <el-main>
Vue.use(Main)
// <el-menu>
Vue.use(Menu)
// <el-menu-item>
Vue.use(MenuItem)
// <el-menu-item-group>
Vue.use(MenuItemGroup)

// <el-option>
Vue.use(Option)
// <el-option-group>
Vue.use(OptionGroup)

// <el-popover>
Vue.use(Popover)

// <el-radio>
Vue.use(Radio)
// <el-radio-group>
Vue.use(RadioGroup)
// <el-pagination>
Vue.use(Pagination)
// <el-row>
Vue.use(Row)

// <el-select>
Vue.use(Select)
// <el-submenu>
Vue.use(Submenu)


// <el-table>
Vue.use(Table)
// <el-table-column>
Vue.use(TableColumn)
// <el-tabs>
Vue.use(Tabs)
// <el-tab-pane>
Vue.use(TabPane)

// <el-upload>
Vue.use(Upload)

// $notify
Vue.prototype.$notify = Notification
// $message
Vue.prototype.$message = Message
//
Vue.use(InfiniteScroll);
