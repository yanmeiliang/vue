import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../../../project/src/components/HelloWorld";
Vue.use(Router)
const routes=[
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }

];
//把路由暴露出去
export default new Router({
  routes})

















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

