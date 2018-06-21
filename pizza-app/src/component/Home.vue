<template>
  <div class="raw">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <!-- 快捷键：button.btn.btn-success -->
        <button @click="goTOMenu()" class="btn btn-success">下单，请点我</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goTOMenu() {
      this.$router.push("/menu");
    }
  }
};
</script>

<style>
  #home{
    background: url('../../src/assets/pizza.jpg');
    height: 85vh;
    padding: 10%
  }
  
  h1,h2{
    margin: 6%;
  }

  .backgroud{
    background:#eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
