<template>
    <div id="example" class="example">
        <!-- 输入数值1和数值2，进行相乘 -->
        <input type="text" v-model="parameter.num1"> *
        <input type="text" v-model="parameter.num2">
        <input type="button" value="=" @click="calculate()"> {{result}}

    </div>
</template>
<script>
export default {
  data() {
    return {
      result: "",
      parameter: {
        num1: "",
        num2: ""
      }
    };
  },
  methods: {
    calculate() {
      this.result = this.parameter.num1 * this.parameter.num2;
    }
  }
};
</script>

