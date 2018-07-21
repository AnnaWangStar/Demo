<template>
  <div>
    <h1>Game2</h1>
    <table>
      <!-- 第一行 -->
      <tr v-for="(itemArray, rowNum) in gameData">
        <template v-for='(itemValue, columnNum) in itemArray'>
          <td>
            <!-- itemValue=gameData[rowNum][columnNum]-->
            <div :class="`color${itemValue}`">{{gameData[rowNum][columnNum]}}</div>
          </td>
        </template>
      </tr>
    </table>
    <input type="button" @click="moveUp()" @keyup.enter="moveUp()" value="向上">
    <input type="button" @click="moveDown()" @keyup.down="moveUp()" value="向下">
    <input type="button" @click="moveLeft()" @keyup.left="moveUp()" value="向左">
    <input type="button" @click="moveRight()" @keyup.right="moveUp()" value="向右">

  </div>
</template>
<script>
export default {
  data() {
    return {
      gameData: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    };
  },
  methods: {
    //   刷新样式
    // refreshStyle() {
    //   for (var i = 0; i < this.gameData.length; i++) {
    //     this.colorData[i] = "color" + this.gameData[i];
    //   }
    // },
    // 随机的一个为0的位置
    randomLocation() {
      var zeroLocation = [];
      //   找出所有为0的位置
      for (var i = 0; i < this.gameData.length; i++) {
        for (var j = 0; j < this.gameData[i].length; j++) {
          if (this.gameData[i][j] == 0) {
            var tempLocation = [i, j];
            zeroLocation.push(tempLocation);
          }
        }
      }
      return zeroLocation[Math.floor(Math.random() * zeroLocation.length)];
    },
    // 生成2或4
    randomNumber() {
      var i = Math.floor(Math.random() * 5);
      if (i < 4) {
        return 2;
      } else {
        return 4;
      }
    },
    // 在空白位置生成随机值
    fillNum4Blank() {
      // var tempLocation = this.randomLocation();
      // this.gameData[tempLocation[0]][tempLocation[1]] = this.randomNumber();
      var tempLocation = this.randomLocation();
      var rowNum = this.gameData[tempLocation[0]];
      rowNum[tempLocation[1]] = this.randomNumber();
      this.gameData.splice(tempLocation[0], 1, rowNum);
    },

    // 把一列中所有非0的数，按顺序存起来
    columnNotNone(i) {
      var tempArr = [];
      for (var j = 0; j < 4; j++) {
        if (this.gameData[j][i] != 0) {
          tempArr.push(this.gameData[j][i]);
        }
      }
      return tempArr;
    },

    // 把一行中所有非0的数，按顺序存起来
    rowNotNone(i) {
      var tempArr = [];
      for (var j = 0; j < 4; j++) {
        if (this.gameData[i][j] != 0) {
          tempArr.push(this.gameData[i][j]);
        }
      }
      return tempArr;
    },

    // 上下左右事件
    moveUp() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = this.columnNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = [];
        for (var k = 0; k < tempArr.length; k++) {
          // 如果相邻的两个数相等，就相加并合并成一个结果，放到resultArr，
          if (k + 1 < tempArr.length && tempArr[k] == tempArr[k + 1]) {
            resultArr.push(tempArr[k + 1] * 2);
            // 同时跳过第二个相加的值
            k++;
          } else {
            // 如果相邻的数不相等，则将数直接放在resultArr中
            resultArr.push(tempArr[k]);
          }
        }

        // 结果resultArr:[4,4]，覆盖gameData[][i]
        for (var j = 0; j < 4; j++) {
          if (j < resultArr.length) {
            this.gameData[j][i] = resultArr[j];
          } else {
            this.gameData[j][i] = 0;
          }
        }
      }

      // 判斷所有的值是否都未發生變化
      var flag = true;
      for (var i = 0; i < tempGameData.length; i++) {
        for (var j = 0; j < tempGameData[i].length; j++) {
          if (tempGameData[i][j] != this.gameData[i][j]) {
            flag = false;
          }
        }
      }

      if (!flag) {
        //   在剩余的空格中生成一个随机值
        this.fillNum4Blank();
      }

      console.log("moveUp");
    },

    moveDown() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        var tempArr = this.columnNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = [];
        for (var k = tempArr.length - 1; k >= 0; k--) {
          // 如果相邻的两个数相等，就相加并合并成一个结果，放到resultArr，
          if (k - 1 >= 0 && tempArr[k] == tempArr[k - 1]) {
            resultArr.push(tempArr[k] * 2);
            // 同时跳过第二个相加的值
            k--;
          } else {
            // 如果相邻的数不相等，则将数直接放在resultArr中
            resultArr.push(tempArr[k]);
          }
        }

        // 结果resultArr:[8,4]，覆盖gameData[][i]
        var count = 0;
        for (var j = 3; j >= 0; j--) {
          if (count < resultArr.length) {
            this.gameData[j][i] = resultArr[count];
          } else {
            this.gameData[j][i] = 0;
          }
          count++;
        }
      }

      // 判斷所有的值是否都未發生變化
      var flag = true;
      for (var i = 0; i < tempGameData.length; i++) {
        for (var j = 0; j < tempGameData[i].length; j++) {
          if (tempGameData[i][j] != this.gameData[i][j]) {
            flag = false;
          }
        }
      }

      if (!flag) {
        //   在剩余的空格中生成一个随机值
        this.fillNum4Blank();
      }
    },
    moveLeft() {
      console.log(JSON.stringify(this.gameData));

      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = [];
        for (var j = 0; j < 4; j++) {
          if (this.gameData[i][j] != 0) {
            tempArr.push(this.gameData[i][j]);
          }
        }

        // 计算tempArr:[2,2,4]
        var resultArr = [];

        for (var k = 0; k < tempArr.length; k++) {
          // 如果相邻的两个数相等，就相加并合并成一个结果，放到resultArr，
          if (k + 1 < tempArr.length && tempArr[k] == tempArr[k + 1]) {
            resultArr.push(tempArr[k + 1] * 2);
            // 同时跳过第二个相加的值
            k++;
          } else {
            // 如果相邻的数不相等，则将数直接放在resultArr中
            resultArr.push(tempArr[k]);
          }
        }

        // 结果resultArr:[2,2,4]，覆盖gameData[i][]
        for (var j = 0; j < 4; j++) {
          if (j < resultArr.length) {
            this.gameData[i][j] = resultArr[j];
          } else {
            this.gameData[i][j] = 0;
          }
        }
      }

      // 判斷所有的值是否都未發生變化
      var flag = true;
      for (var i = 0; i < tempGameData.length; i++) {
        for (var j = 0; j < tempGameData[i].length; j++) {
          if (tempGameData[i][j] != this.gameData[i][j]) {
            flag = false;
          }
        }
      }

      if (!flag) {
        //   在剩余的空格中生成一个随机值
        this.fillNum4Blank();
      }
    },
    moveRight() {
      console.log(JSON.stringify(this.gameData));

      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = [];
        for (var j = 0; j < 4; j++) {
          if (this.gameData[i][j] != 0) {
            tempArr.push(this.gameData[i][j]);
          }
        }

        // 计算tempArr:[2,2,4]
        var resultArr = [];

        for (var k = 0; k < tempArr.length; k++) {
          // 如果相邻的两个数相等，就相加并合并成一个结果，放到resultArr，
          if (k + 1 < tempArr.length && tempArr[k] == tempArr[k + 1]) {
            resultArr.push(tempArr[k + 1] * 2);
            // 同时跳过第二个相加的值
            k++;
          } else {
            // 如果相邻的数不相等，则将数直接放在resultArr中
            resultArr.push(tempArr[k]);
          }
        }

        // 结果resultArr:[2,2,4]，覆盖gameData[i][]
        for (var j = 0; j < 4; j++) {
          if (j < resultArr.length) {
            this.gameData[i][3 - j] = resultArr[resultArr.length - 1 - j];
          } else {
            this.gameData[i][3 - j] = 0;
          }
        }
      }

      // 判斷所有的值是否都未發生變化
      var flag = true;
      for (var i = 0; i < tempGameData.length; i++) {
        for (var j = 0; j < tempGameData[i].length; j++) {
          if (tempGameData[i][j] != this.gameData[i][j]) {
            flag = false;
          }
        }
      }

      if (!flag) {
        //   在剩余的空格中生成一个随机值
        this.fillNum4Blank();
      }

      console.log(JSON.stringify(this.gameData));
    }
  },

  created: function() {
    this.fillNum4Blank();
    this.fillNum4Blank();

    console.log(this.gameData);
    // this.refreshStyle();
  }
};
</script>
<style>
.color0 {
  background: #c0c4cc;
}
.color2 {
  background: #eee4da;
}
.color4 {
  background: #ede0c8;
}
.color8 {
  background: #f2b179;
}
.color16 {
  background: #f59563;
}
.color32 {
  background: #f67c5f;
}
.color64 {
  background: #f65e3b;
}
.color128 {
  background: #edcf72;
}

.color256 {
  background: #edcc61;
}
.color512 {
  background: #0444bf;
}
.color1024 {
  background: #a79674;
}
.color2048 {
  background: #282726;
}

div {
  width: 60px;
  height: 60px;
  line-height: 55px;
  text-align: center;
  border: 1px;
}
</style>

