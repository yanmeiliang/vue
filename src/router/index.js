import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../../../project/src/components/HelloWorld";
Vue.use(Router)
const routes=[
  //配置路由规则的
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];
//把路由暴露出去
export default new Router({
  routes,
  //
  linkActiveClass:'mui-active'
  //覆盖默认的路由高亮的类，默认的类叫做
})

















// import login from "../page/login";
// import register from "../page/register";
// import account from "../page/account";

  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   component: HelloWorld
  // }
//   ,{
//   path:'/login',
//   name:'login',
//   component: login
// },{
//   path:'/register',
//   name:'register',
//   component: register
// },
  // {
  //   path:'/account',
  //   component:account,
  //   children:[
  //     {
  //       path:'login',
  //       name:'login',
  //       component: login
  //     },{
  //       path:'register',
  //       name:'register',
  //       component: register
  //     }
  //
  //   ]
  // }

  // : [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   }
  // ]

