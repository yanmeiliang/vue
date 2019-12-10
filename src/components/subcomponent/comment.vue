<template>
  <div class="cmt-content">
    <h3>发表评论</h3>
    <hr>

    <textarea  placeholder="请输入内容（最多120）"   maxlength="120" name="" id="" cols="30" rows="10"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼:&nbsp;&nbsp;用户：匿名用户发布时间：2019-12-12</div>
        <div class="cmt-body">设备采集和里贝里和·1</div>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
    <br><br><br>

  </div>

</template>

<script>
    export default {
        name: "component"
    }
</script>

<style scoped lang="less">
  .cmt-content{
    h3{
      font-size: 18px;
    }
    textarea{

      font-size: 14px;
      height: 85px;
      margin: 0;

    }
    .cmt-list{
      margin: 10px 0;
      .cmt-item {
        font-size: 13px;
        .cmt-title {
          line-height: 30px;
          background-color: #ccc;
        }

        .cmt-body {
          line-height: 30px;
          text-indent: 5em;
        }
      }
    }
  }
</style>
