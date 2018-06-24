<template>
    <div id="app">
        <div class="container">
            <app-header></app-header>
        </div>
        <div class="container">
            <app-left-nav></app-left-nav>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
export default {
  components: {
    "app-header": Header,
    "app-left-nav": LeftNav,
  }
};
</script>

<style>
</style>
