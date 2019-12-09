<template>
<div>
<!--轮播图 -->
  <mt-swipe :auto="3000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
<!--  九宫格--六宫格G:\库函数\mui-master\mui-master\examples\hello-mui\examples-->
  <ul class="mui-table-view mui-grid-view mui-grid-9 ">
    <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
      <span class="mui-icon mui-icon-home"></span>
<!--      <img src="../../lib/menu1.png " alt="">-->
      <div class="mui-media-body">新闻资讯</div></a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
<!--      <img src="../../assets/menu2.png " alt="">-->
      <div class="mui-media-body">图片分享</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-4"><a href="#">
      <span class="mui-icon mui-icon-chatbubble"></span>
<!--      <img src="../../assets/menu3.png " alt="">-->
      <div class="mui-media-body">商品购买</div></a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4"><a href="#">
      <span class="mui-icon mui-icon-search"></span>
<!--      <img src="../../assets/menu4.png " alt="">-->
      <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4"><a href="#">
      <span class="mui-icon mui-icon-phone"></span>
<!--      <img src="../../assets/menu5.png " alt="">-->
      <div class="mui-media-body">视频专区</div></a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-5 mui-col-sm-4"><a href="#">
    <span class="mui-icon mui-icon-gear"></span>
<!--      <img src="../../assets/menu6.png " alt="">-->
    <div class="mui-media-body">联系我们</div></a>
  </li>

  </ul>
</div>
</template>

<script>
  //弹框
  import {Toast} from 'mint-ui'
    export default {
        name: "HomeContainer",
        data(){
            return{
                lunbotuList:[]//保存轮播图数组
            }
        },
        created(){
            this.getLunBo();
        },
        methods:{
//获取轮播图数据的方法
            getLunBo(){
   this.$http.get('').then((result)=>{
       console.log(result.body);
       if(result.body.status===0)
       {
           this.lunbotuList=register.body.message;
           //然后v-for循环选仍然list的给mt-swp-item记得加:key=item.id
       //    <mt-swip-item v-for="item in  lunbotuList" :key=item.id><img src="item.img"/></mt-swip-item>
       //自适应img  设置样式
       }else{
           //失败
       Toast('加载轮播图失败');
       }
   })
            }
        }
    }
</script>

<style scoped lang="less" >
//轮播图设置高度


.mint-swipe{
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background: skyblue;
    }
    &:nth-child(2) {
      background: green;
    }
    &:nth-child(3) {
      background:orange;
    }
  }
  //轮播图自适应
  //img{width:100%;height:100%}

}
//列表和边框干掉
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
</style>
