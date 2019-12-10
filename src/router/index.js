//1、导入vue包
import Vue from 'vue'
//2、导入vue-router包
import Router from 'vue-router'
//3、安装路由
Vue.use(Router)
//导入对应的组件
import HomeContainer from "../components/tabbar/HomeContainer";
import MemberContainer from "../components/tabbar/MemberContainer";
import ShopContainer from "../components/tabbar/ShopContainer";
import SearchContainer from "../components/tabbar/SearchContainer";
import News from "../components/news/news";
import NewsInfo from "../components/news/NewsInfo";
//4、写路由表
const routes=[
  {path:'/',redirect:'/home'},
  {
    path:'/home',
    component:HomeContainer,
  },
  {path:'/member',component: MemberContainer},
  {path:'/shop',component:ShopContainer},
  {path:'/search',component:SearchContainer},
   {path:'/home/newList',component:News},
  {path:"/home/newsInfo/:id",component:NewsInfo}
];
//5、把路由暴露出去并实例化路由表和路由相关的一些配置
export default new Router({
  routes,
  //更改路由的vue-link样式
  linkActiveClass:'mui-active'
  //覆盖默认的路由高亮的类，默认的类叫做
})
