<template>
    <div id="app">
        <div class="container">
            <app-home></app-home>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    "app-home": Header,
     
  }
};
</script>

<style>
</style>
