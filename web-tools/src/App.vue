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
import Home from "./components/Home";
export default {
  components: {
    "app-home": Home,
     
  }
};
</script>

<style>
</style>
