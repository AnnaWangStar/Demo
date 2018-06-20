<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>

    <!-- 点击不同的路由，展示不同的内容 -->
    <div class="container">
      <router-view></router-view>
    </div>

    <!-- router-view复用 -->
    <br>
    <div class="container">
      <div class="row">
        <!-- 首页中，复用“关于我们”中的组件 -->
        <!-- 小屏展示12列，中屏展示4列 -->
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide">
          </router-view>
        </div>

      <div class="col-sm-12 col-md-4">
          <router-view name="delivary">
          </router-view>
        </div>

        <div class="col-sm-12 col-md-4">
          <router-view name="history">
          </router-view>
        </div>

      </div>
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
