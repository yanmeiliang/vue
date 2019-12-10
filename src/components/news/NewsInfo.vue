<template>
   <div class="ne-content">
     <h3 class="title">新闻标题{{id}}</h3>
     <p class="subtitle">
     <span>发表时间：</span>
       <span>点击：0次</span>
     </p>
     <hr>
     <div class="content">
      <p>
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来


        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        实现新闻咨询列表点击跳转新闻详情
        1、把列表中的每一项改造成router-link，同时，在跳转的时候应该提供唯一的id标识符
        2、创建新闻详情的组件页面NewsInfo.vue
        3、在路由模块中将新闻详情的路由地址和组件页面对应起来

        ###实现新闻详情的页面布局和数据渲染
        ###实现新闻详情的页面布局和数据渲染
      </p>
     </div>
<!--     评论区域-->
     <comment-box></comment-box>
   </div>
</template>

<script>
  //导入评论
import comment from '../subcomponent/comment'
    export default {
        name: "NewsInfo",
        data(){
            return{
                id:this.$route.params.id,
                //这是将url传递过来的id传到data上便于使用
                newsInfo:[]
            }
        },
        methods:{
          getNewsInfo(){//获取新闻详情
              this.$http.get('').then(result=>{
                if(result.body.status==0)
                {
              this.newsInfo=result.body.message;
                }else{
                 // Toast('获取失败');
                }
              })
          }
        },
        components:{
            "comment-box":comment
        }
    }
</script>

<style scoped lang="less">
  .ne-content{
    padding: 0 4px;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0px;
      color: blue;
    }
    .subtitle{
   font-size: 15px;
      clor:#226aff;
      display: flex;
      justify-content: space-between;
    }
    .content{
    p{
      font-size: 12px;
      color: #ccc;
    }
    }
  }

</style>
