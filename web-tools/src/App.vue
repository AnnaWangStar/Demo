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

        <div class="container">
            <app-right-content></app-right-content>
        </div>

    </div>
</template>

<script>
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import RightCon from "./components/RightCon"
export default {
  components: {
    "app-header": Header,
    "app-left-nav": LeftNav,
    "app-right-content": RightCon,
  }
};
</script>

<style>
</style>
