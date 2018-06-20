<template>
    <div>
        <h1>
            Home
        </h1>
        <!-- 快捷键：button.btn.btn-success -->
        <button @click="goTOMenu()" class="btn btn-success">下单，请点我</button>

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

