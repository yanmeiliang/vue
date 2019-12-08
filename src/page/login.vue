<template>
<div class>
<h1>这是登录组件模板</h1>
  <mt-button type="default" icon="back" @click="test">default</mt-button>
  <mt-button type="primary" size="small">primary</mt-button>
  <mt-button type="danger" disabled="" icon="more">danger</mt-button>
</div>
</template>

<script>
    import { MessageBox } from 'mint-ui';
    import { Popup } from 'mint-ui';
    import  'bootstrap/dist/css/bootstrap.css'
    import { Toast } from 'mint-ui';
    export default {
        name: "login",
        methods:{
       test:function(){
           Toast({
               message: '这是消息',
               position: 'top',
               duration: 5000,
               iconClass: 'glyphicon glyphicon-heart'
           });
       }

            }


    }
</script>

<style  scoped lang="less">
  div{
    h1{
      color:red;
    }

  }
</style>
