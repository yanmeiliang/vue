<template>
    <div>
      <h2>我是account</h2>
      <router-link to="/account/login">登录</router-link>
      <router-link to="/account/register">注册</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>

</style>
