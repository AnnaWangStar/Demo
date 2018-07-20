<template>
  <div id="app">
    <div class="container">
      <!-- <calculator></calculator> -->
      <!-- <demo1></demo1>
      <demo2></demo2>
      <demo3></demo3>
      <demo4></demo4> -->
      <!-- <demo5></demo5> -->
      <!-- <game></game> -->
      <game2></game2>
    </div>
  </div>
</template>

<script>
import Calculator from "./component/Calculator";
import Demo1 from "./component/Demo1";
import Demo2 from "./component/Demo2";
import Demo3 from "./component/Demo3";
import Demo4 from "./component/Demo4";
import Demo5 from "./component/Demo5";
import Game from "./component/Game";
import Game2 from "./component/Game2";

export default {
  components: {
    calculator: Calculator,
    demo1: Demo1,
    demo2: Demo2,
    demo3: Demo3,
    demo4: Demo4,
    demo5: Demo5,
    game: Game,
    game2: Game2
  }
};
</script>

<style>
</style>
