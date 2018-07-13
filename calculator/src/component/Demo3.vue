<template>
    <div>
        <!-- <el-input v-model="input" placeholder="计算式"></el-input> -->
        <el-table>
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

        <el-input v-model="input" placeholder="请输入内容"></el-input>
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
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      result: ""
    };
  },
  methods: {
    append(i) {
      //   alert(i)
      this.input = this.input + i;
    },
    calculate() {
      var num1 = 0;
      var num2 = 0;
      var str1 = "";
      var str2 = "";

      for (var j = 0; j < this.input.length; j++) {
        // 两个数的加法
        if (this.input[j] == "+") {
          // 取出+前的数
          for (var k = 0; k < j; k++) {
            str1 = str1 + this.input[k];
          }
          num1 = parseFloat(str1);
          // 取出+后的数
          for (var l = j; l < this.input.length; l++) {
            str2 = str2 + this.input[l];
          }
          num2 = parseFloat(str2);
        }
        this.result = num1 + num2;

        // else if (this.input[j] == "-") {
        //   var b = j;
        // } else if (this.input[j] == "*") {
        //   var c = j;
        // } else if (this.input[j] == "/") {
        //   var d = j;
        // }
      }
      return this.result;
    },
    clear() {
      this.input = "";
      this.result = "";
    }
  }
};
</script>

