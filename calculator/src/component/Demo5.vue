<template>
    <div>
        <el-table-body>结果</el-table-body>
        <el-table-column prop="date" label="数字" width="100">
            <el-table-column label="7" width="60">
                <el-table-column label="4" width="60">
                    <el-table-column label="1" width="60">
                        <el-table-column label="clear" width="60"></el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table-column>
            <el-table-column label="8" width="60">
                <el-table-column label="5" width="60">
                    <el-table-column label="2" width="60">
                        <el-table-column label="0" width="60"></el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table-column>
            <el-table-column label="9" width="60">
                <el-table-column label="6" width="60">
                    <el-table-column label="3" width="60">
                        <el-table-column label="=" width="60"></el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table-column>
        <el-table-column prop="operator" label="运算符" width="80">
            <el-table-column label="+" width="80">
                <el-table-column label="-" width="80">
                    <el-table-column label="X" width="80">
                        <el-table-column label="/" width="80"></el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table-column>
        </el-table-column>
        </el-table>
        <div>计算器BY王醒</div>
        <el-input v-model="inputShow" placeholder="请输入内容" @keyup.enter.native="calculate()"></el-input>
        <el-input v-model="result" placeholder="结果是"></el-input>
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
                    <el-button type="primary" @click="append('+')">+</el-button>
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
                    <el-button type="primary" @click="append('-')">-</el-button>
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
                    <el-button type="primary" @click="append('*')">*</el-button>
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
                    <el-button type="primary" @click="append('/')">/</el-button>
                </td>
            </tr>
        </table>
        <el-input v-model="paramN" placeholder="请输入参数" @keyup.enter.native="calculateResult(paramN)"></el-input>
        递归结果：{{paramResult}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: [],
      inputShow: "",
      result: "",
      num: [],
      operator: [],
      paramN: "",
      paramResult: "",
      nResult: []
    };
  },
  methods: {
    recursionResult(fatherThis, n) {
      var temp = "";
      // 计算递归
      if (n >= 2) {
        temp =
          fatherThis.$options.methods.recursionResult(fatherThis, n - 1) +
          fatherThis.$options.methods.recursionResult(fatherThis, n - 2);
      } else {
        temp = 1;
      }
      return temp;
    },
    calculateResult(n) {
      var fatherThis = this;
      this.nResult = [];
      for (var i = 0; i < n; i++) {
        this.paramResult = this.$options.methods.recursionResult(fatherThis, i);
        this.nResult.push(this.paramResult);
      }
      console.log(this.nResult);
    },
    // 显示输入的所有数和操作符
    append(i) {
      this.inputShow += i;
    },
    // 遍历数据和运算符，分别存在两个数组中
    storage(input, num, operator) {
      var numTemp = "";
      for (var i = 0; i < input.length; i++) {
        if (
          input[i] == "+" ||
          input[i] == "-" ||
          input[i] == "*" ||
          input[i] == "/"
        ) {
          operator.push(input[i]);
          num.push(numTemp);
          numTemp = "";
        } else {
          numTemp = numTemp + input[i];
        }
      }
      // 将最后个数值push到数组中
      num.push(numTemp);
    },
    // 计算
    calculate() {
      this.input = this.inputShow.split("");
      this.$options.methods.storage(this.input, this.num, this.operator);
      var times = this.operator.length;
      var tempPriority = 0;

      for (var i = 0; i < times; i++) {
        var location = this.$options.methods.getLocation(this.operator);
        // 算出所有两个数运算的值
        if (this.operator[location] == "*") {
          tempPriority = this.num[location] * this.num[location + 1];
        } else if (this.operator[location] == "/") {
          tempPriority = this.num[location] / this.num[location + 1];
        } else if (this.operator[location] == "+") {
          tempPriority =
            parseFloat(this.num[location]) + parseFloat(this.num[location + 1]);
        } else if (this.operator[location] == "-") {
          tempPriority = this.num[location] - this.num[location + 1];
        } else {
          alert("未知错误");
        }
        this.num[location] = tempPriority;
        this.num.splice(location + 1, 1);
        this.operator.splice(location, 1);
      }
      this.result = this.num[0];
      console.log(this.result);

      // 绑定
      // this.$options.methods.clear.bind(this)();
    },
    // 清除所有数据
    clear() {
      this.input = [];
      this.inputShow = "";
      this.result = "";
      this.num = [];
      this.operator = [];
    },
    getLocation(operator) {
      // 遍历所有的符号数组，将第一个乘除返回
      for (var i = 0; i < operator.length; i++) {
        if (operator[i] == "*" || operator[i] == "/") {
          return i;
        }
      }
      // 如果没有乘除，默认从第一个运算符开始计算
      return 0;
    }
  }
};
</script>

