<template>
  <div id="example" class="example">
    <!-- 输入数值1和数值2，进行相乘 -->
    <input type="text" v-model="parameter.num1">
    <select v-model="operate">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
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
      },
      operate: ""
    };
  },
  created(){
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
　　　　this.operate = "/";
  },
  methods: {
    calculate() {
      if (this.operate == "+") {
        // this.operate ='-';
        this.result = parseFloat(this.parameter.num1) + parseFloat(this.parameter.num2);
      } else if (this.operate == "-") {
        this.result = this.parameter.num1 - this.parameter.num2;
      }else if (this.operate == "*") {
        this.result = this.parameter.num1 * this.parameter.num2;
      }else if (this.operate == "/") {
        this.result = this.parameter.num1 / this.parameter.num2;
      }
    }
  }
};
</script>

