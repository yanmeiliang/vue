// 人口文件
import Vue from 'vue'


//1.1、导入路由的包
import VueRouter from 'vue-router'
//1.2、安装路由
Vue.use(VueRouter);
//1.3导入自己的router中的index.js路由模块
import router from './router'



//按需导入Mint-UI中的组件
import {Header} from "mint-ui";
import 'mint-ui/lib/style.min.css'
Vue.component(Header.name,Header);



//导入MUI样式
import './mui/css/mui.min.css'
import './mui/css/icons-extra.css'


import app from './App.vue'
var vm=new Vue({
  el:"#app",
  //1.4、挂载路由模块到实例上
  router,
  //渲染组件
  render:c=>c(app)},


)








//按需导入mint-ui中的组件
//1.1、导入mintui包
// import MintUI from 'mint-ui'//导入所有组件
// import 'mint-ui/lib/style.css'//导入组件样式
//1.2、安装
// Vue.use(MintUI)
















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
