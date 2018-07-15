<template>
    <div>
        <div>计算器BY代凯</div>
        <div>这是代凯写的</div>
        <el-input v-model="beforeResultShowStr" placeholder=""></el-input>
        <el-input v-model="currentShowStr" placeholder=""></el-input>
        <table>
            <!-- 第一行 -->
            <tr>
                <td>
                    <el-button type="success" @click="append('7')">7</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('8')">8</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('9')">9</el-button>
                </td>
                <td>
                    <el-button type="primary" @click="operateNum('+')">+</el-button>
                </td>
            </tr>
            <!-- 第二行 -->
            <tr>
                <td>
                    <el-button type="success" @click="append('4')">4</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('5')">5</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('6')">6</el-button>
                </td>
                <td>
                    <el-button type="primary" @click="operateNum('-')">-</el-button>
                </td>
            </tr>
            <!-- 第三行 -->
            <tr>
                <td>
                    <el-button type="success" @click="append('1')">1</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('2')">2</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('3')">3</el-button>
                </td>
                <td>
                    <el-button type="primary" @click="operateNum('*')">*</el-button>
                </td>
            </tr>
            <!-- 第四行 -->
            <tr>
                <td>
                    <el-button type="warning" @click="clear()">C</el-button>
                </td>
                <td>
                    <el-button type="success" @click="append('0')">0</el-button>
                </td>
                <td>
                    <el-button type="danger" @click="calculate()">=</el-button>
                </td>
                <td>
                    <el-button type="primary" @click="operateNum('/')">/</el-button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      // 上一个结果，数字
      beforeResult: 0,
      // 上一个结果，字符
      beforeResultShowStr: "",
      // 当前输入，数字
      current: 0,
      // 当前输入，字符
      currentShowStr: "",
      // 上一次点击的运算
      lastOpt: "+",
      // 上一次操作的事件
      lastType: ""
    };
  },
  methods: {
    append(num) {
      if (this.current == 0) {
        this.current = num;
      } else {
        this.current = this.current + num;
      }
      this.currentShowStr = this.current;
      this.lastType = "append";
    },
    operateNum(opt) {
      if (this.lastType == "operateNum") {
        this.lastOpt = opt;
        this.beforeResultShowStr = this.beforeResult + opt;
        return;
      }
      this.beforeResult = this.$options.methods.caculateOpt(
        this.beforeResult,
        this.current,
        this.lastOpt
      );
      this.beforeResultShowStr = this.beforeResult + opt;
      this.current = 0;
      this.currentShowStr = "";
      this.lastOpt = opt;
      this.lastType = "operateNum";
    },
    caculateOpt(a, b, opt) {
      var result = 0;
      if (opt == "+") {
        result = parseFloat(a) + parseFloat(b);
      } else if (opt == "-") {
        result = parseFloat(a) - parseFloat(b);
      } else if (opt == "*") {
        result = parseFloat(a) * parseFloat(b);
      } else if (opt == "/") {
        result = parseFloat(a) / parseFloat(b);
      }
      return result;
    },
    calculate() {
      this.beforeResult = this.$options.methods.caculateOpt(
        this.beforeResult,
        this.current,
        this.lastOpt
      );
      this.beforeResultShowStr = this.beforeResult;
      this.current = 0;
      this.currentShowStr = "";
      this.lastOpt = "+";
      this.lastType = "calculate";
    },
    clear() {
      this.beforeResult = 0;
      this.beforeResultShowStr = "";
      this.current = 0;
      this.currentShowStr = "";
      this.lastOpt = "+";
      this.lastType = "clear";
    }
  }
};
</script>

