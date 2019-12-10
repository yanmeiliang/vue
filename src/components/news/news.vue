<template>
 <div>
   <ul class="mui-table-view">
     <li class="mui-table-view-cell mui-media">
       <router-link to="/home/newsInfo/10">
         <img class="mui-media-object mui-pull-left" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3770064398,4110132465&fm=26&gp=0.jpg">
         <div class="mui-media-body">
           <h4>幸福</h4>
           <p class='mui-ellipsis'>
             <span>发表时间:2019-12-10  21:33:12</span>
             <span>点击:0次</span>
           </p>
         </div>
       </router-link>
     </li>
     <li class="mui-table-view-cell mui-media">
       <a href="javascript:;">
         <img class="mui-media-object mui-pull-left" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2039159940,1009584548&fm=26&gp=0.jpg">
         <div class="mui-media-body">
           <h4>木屋</h4>
           <p class='mui-ellipsis'>
             <span>发表时间:2019-12-10  21:33:12</span>
             <span>点击:0次</span>
           </p>
         </div>
       </a>
     </li>
     <li class="mui-table-view-cell mui-media">
       <a href="javascript:;">
         <img class="mui-media-object mui-pull-left" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2777480701,3081791725&fm=26&gp=0.jpg">
         <div class="mui-media-body">
          <h4>CBD</h4>
           <p class='mui-ellipsis'>
             <span>发表时间:2019-12-10  21:33:12</span>
             <span>点击:0次</span></p>
         </div>
       </a>
     </li>
     <li class="mui-table-view-cell mui-media">
       <a href="javascript:;">
         <img class="mui-media-object mui-pull-left" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2746120682,390938867&fm=26&gp=0.jpg">
         <div class="mui-media-body">
           <h4>幸福</h4>
           <p class='mui-ellipsis'>
           <span>发表时间:2019-12-10  21:33:12</span>
             <span>点击:0次</span>
           </p>
         </div>
       </a>
     </li>
     <li class="mui-table-view-cell mui-media">
       <a href="javascript:;">
         <img class="mui-media-object mui-pull-left" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3337020166,4184020880&fm=26&gp=0.jpg">
         <div class="mui-media-body">
           <h4>幸福</h4>
           <p class='mui-ellipsis'>
             <span>发表时间:2019-12-10  21:33:12</span>
             <span>点击:0次</span>
           </p>
         </div>
       </a>
     </li>
   </ul>
 </div>
</template>

<script>
    export default {
        name: "news"
    }
</script>

<style scoped lang="less">
.mui-table-view{
  li{
    h4{
      color: #cb3fed;
    }
    .mui-ellipsis{
      font-size: 12px;
      color:#226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
