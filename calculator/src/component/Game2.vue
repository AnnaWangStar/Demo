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
    <input type="button" @click="moveUp()" @keyup.up="moveUp()" value="向上">
    <input type="button" @click="moveDown()" @keyup.down="moveUp()" value="向下">
    <input type="button" @click="moveLeft()" @keyup.left="moveUp()" value="向左">
    <input type="button" @click="moveRight()" @keyup.right="moveUp()" value="向右">

    <input type="text" @keyup.up="moveUp()" value="向上">

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
      if (zeroLocation.length == 0) {
        return -1;
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

    // 判断两两是否相同，如果相同，返回true；如果不同，返回false；
    border() {
      // 横向比较
      for (var i = 0; i < this.gameData.length; i++) {
        for (var j = 0; j < this.gameData[i].length - 1; j++) {
          if (this.gameData[i][j] == this.gameData[i][j + 1]) {
            return true;
          }
        }
      }
      // 纵向比较
      for (var i = 0; i < this.gameData.length; i++) {
        for (var j = 0; j < this.gameData[i].length - 1; j++) {
          if (this.gameData[j][i] == this.gameData[j + 1][i]) {
            return true;
          }
        }
      }

      // 全都两两不同
      return false;
    },
    judgeSpace(tempGameData) {
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
        // 在剩余的空格中生成一个随机值
        this.fillNum4Blank();
      } else {
        // 没有变化，不生成随机值
        if (!this.border()) {
          // 如果，全部两两不相同
          if (confirm("是否重新开始游戏")) {
            this.gameData = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            this.fillNum4Blank();
            this.fillNum4Blank();
          }
        }
      }
    },
    // 上和左的方法
    addUpOrLeft(tempArr) {
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
      return resultArr;
    },
    // 下和右的方法
    addDownOrRight(tempArr) {
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
      return resultArr;
    },
    // 上下左右事件
    moveUp() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = this.columnNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = this.addUpOrLeft(tempArr);

        // 结果resultArr:[4,4]，覆盖gameData[][i]
        for (var j = 0; j < 4; j++) {
          if (j < resultArr.length) {
            this.gameData[j][i] = resultArr[j];
          } else {
            this.gameData[j][i] = 0;
          }
        }
      }

      this.judgeSpace(tempGameData);
    },

    moveDown() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        var tempArr = this.columnNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = this.addDownOrRight(tempArr);

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

      this.judgeSpace(tempGameData);
    },
    moveLeft() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));
      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = this.rowNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = this.addUpOrLeft(tempArr);

        // 结果resultArr:[2,2,4]，覆盖gameData[i][]
        for (var j = 0; j < 4; j++) {
          if (j < resultArr.length) {
            this.gameData[i][j] = resultArr[j];
          } else {
            this.gameData[i][j] = 0;
          }
        }
      }
      this.judgeSpace(tempGameData);
    },
    moveRight() {
      var tempGameData = JSON.parse(JSON.stringify(this.gameData));

      for (var i = 0; i < 4; i++) {
        // 把非0的数，按顺序存起来
        var tempArr = this.rowNotNone(i);

        // 计算tempArr:[2,2,4]
        var resultArr = this.addDownOrRight(tempArr);

        // 结果resultArr:[2,2,4]，覆盖gameData[i][]
        var count = 0;
        for (var j = 3; j >=0; j--) {
          if (count < resultArr.length) {
            this.gameData[i][j] = resultArr[count];
          } else {
            this.gameData[i][j] = 0;
          }
          count++;
        }
      }

      this.judgeSpace(tempGameData);
    }
  },

  created: function() {
    this.fillNum4Blank();
    this.fillNum4Blank();

    var father = this;
    document.onkeydown = function(e) {
      var key = window.event.keyCode;

      console.log("before"+JSON.parse(JSON.stringify(father.gameData)));
      if (key === 38) {
        father.moveUp();
      } else if (key === 40) {
        father.moveDown();
      } else if (key === 37) {
        father.moveLeft();
      } else if (key === 39) {
        father.moveRight();
      }
      console.log("after"+JSON.parse(JSON.stringify(father.gameData)));
    };
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

