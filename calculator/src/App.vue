<template>
  <div id="app">
    <div class="container">
      <calculator></calculator>
      <demo1></demo1>
      <demo2></demo2>

    </div>
  </div>
</template>

<script>
import Calculator from "./component/Calculator";
import Demo1 from "./component/Demo1";
import Demo2 from "./component/Demo2";

export default {
  components: {
    calculator: Calculator,
    demo1: Demo1,
    demo2: Demo2
  }
};
</script>

<style>
</style>
