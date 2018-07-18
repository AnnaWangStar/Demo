<template>
    <div>
        <table>
            <!-- 第一行 -->
            <tr>
                <td>
                    <div :class="colorData[0]">{{gameData[0]}}</div>
                </td>
                <td>
                    <div :class="colorData[1]">{{gameData[1]}}</div>
                </td>
                <td>
                    <div :class="colorData[2]">{{gameData[2]}}</div>
                </td>
                <td>
                    <div :class="colorData[3]">{{gameData[3]}}</div>
                </td>
            </tr>
            <!-- 第二行 -->
            <tr>
                <td>
                    <div :class="colorData[4]">{{gameData[4]}}</div>
                </td>
                <td>
                    <div :class="colorData[5]">{{gameData[5]}}</div>
                </td>
                <td>
                    <div :class="colorData[6]">{{gameData[6]}}</div>
                </td>
                <td>
                    <div :class="colorData[7]">{{gameData[7]}}</div>
                </td>
            </tr>
            <!-- 第三行 -->
            <tr>
                <td>
                    <div :class="colorData[8]">{{gameData[8]}}</div>
                </td>
                <td>
                    <div :class="colorData[9]">{{gameData[9]}}</div>
                </td>
                <td>
                    <div :class="colorData[10]">{{gameData[10]}}</div>
                </td>
                <td>
                    <div :class="colorData[11]">{{gameData[11]}}</div>
                </td>
            </tr>
            <!-- 第四行 -->
            <tr>
                <td>
                    <div :class="colorData[12]">{{gameData[12]}}</div>
                </td>
                <td>
                    <div :class="colorData[13]">{{gameData[13]}}</div>
                </td>
                <td>
                    <div :class="colorData[14]">{{gameData[14]}}</div>
                </td>
                <td>
                    <div :class="colorData[15]">{{gameData[15]}}</div>
                </td>
            </tr>
        </table>
        <input type="button" @click="moveUp()" value="向上">
        <input type="button" @click="moveUp()" value="向下">
        <input type="button" @click="moveUp()" value="左">
        <input type="button" @click="moveUp()" value="右">

    </div>
</template>
<script>
export default {
  data() {
    return {
      gameData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      colorData: [
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0",
        "color0"
      ]
    };
  },
  methods: {
    //   刷新样式
    refreshStyle() {
      for (var i = 0; i < this.gameData.length; i++) {
        this.colorData[i] = "color" + this.gameData[i];
      }
    },
    // 随机的一个为0的位置
    randomLocation() {
      var zeroLocation = [];
      //   找出所有为0的位置
      for (var i = 0; i < this.gameData.length; i++) {
        if (this.gameData[i] == 0) {
          zeroLocation.push(i);
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
    // 上下左右事件
    moveUp() {
      this.gameData[this.randomLocation()] = this.randomNumber();
      this.refreshStyle.bind(this)();
      

      console.log("moveUp");
    },
    moveDown() {
      this.gameData[this.randomLocation()] = this.randomNumber();
      this.refreshStyle.bind(this)();

      console.log("moveDown");
    },
    moveLeft() {
      this.gameData[this.randomLocation()] = this.randomNumber();
      this.refreshStyle.bind(this)();

      console.log("moveLeft");
    },
    moveRight() {
      this.gameData[this.randomLocation()] = this.randomNumber();
      this.refreshStyle.bind(this)();

      console.log("moveRight");
    }
  },
  created: function() {
    this.gameData[this.randomLocation()] = this.randomNumber();
    this.gameData[this.randomLocation()] = this.randomNumber();

    this.refreshStyle();
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

