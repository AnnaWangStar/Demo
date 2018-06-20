<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>

    <!-- 点击不同的路由，展示不同的内容 -->
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Header from './component/Header';
export default {
  components:{
    "app-header":Header
  }
}
</script>

<style>

</style>
