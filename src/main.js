// //人口文件
import Vue from 'vue'
//导入App根文件


//按需导入mint-ui中的组件
// import MintUI from 'mint-ui'//导入所有组件
// import 'mint-ui/lib/style.css'//导入组件样式
// Vue.use(MintUI)
//注意组件库的使用路径是否正确
import {Header} from "mint-ui";
//样式
import 'mint-ui/lib/style.min.css'
import './mui/css/mui.min.css'
Vue.component(Header.name,Header);

import app from './App.vue'
var vm=new Vue({
  el:"#app",
  //渲染组件
  render:c=>c(app)}
)

























// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import ElementUI from "element-ui";
// import { Button, Cell } from 'mint-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import router from './router'
// //导入Min-UI
// import MintUI from 'mint-ui'
// //这里可以省略node_modules自己找
// import 'mint-ui/lib/style.css'
// //把MintUI安装到Vue中
// // Vue.use(MintUI);
// Vue.component(Button.name, Button)//注册
// Vue.use(ElementUI);
// Vue.config.productionTip = false
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   render:h=>h(App)
// })
