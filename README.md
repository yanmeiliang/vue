# wpakproj
##我叫闫美靓
> ###这是一个NB的项目
>##NB不NB，用心去感受，每一行代码中的诗情画意

## Build Setup
* 代码上传到码云和githubhttps://gitee.com/yan_mei_liang
###项目制作：首页App组件
#####1、完成Header区域,使用的是Mint-UI中的Header组件
#####2、制作底部的Tabbar区域，使用的是MUI的Tabbar.html
+ 在制作购物车小图标的时候操作会相对多一些
+ 先把扩展图标的css样式，拷贝到项目中
+ 拷贝扩展字体库ttf文件，到项目中
+ 为购物车小图标，添加 肉下样式mui-icon mui-icon-extra mui-icon-extra-cart
+ 高亮用
```
//把路由暴露出去
export default new Router({
  routes,
  //
  linkActiveClass:'mui-active'
  //覆盖默认的路由高亮的类，默认的类叫做
})
mui-active
```
#####3、要在中间区域方一个rounter-view来展示路由匹配的组件
###点击tabbar中的路由链接，展示对应的路由组件
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
