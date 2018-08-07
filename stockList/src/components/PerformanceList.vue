<template>
    <div>
        <div>
            <el-table :data="performanceDatas" stripe border style="width: 100%">
                <el-table-column prop="id" label="ID">
                </el-table-column>
                <el-table-column prop="versionNum" label="版本号">
                </el-table-column>

                <el-table-column prop="memory" label="内存">
                </el-table-column>
                <el-table-column prop="cpu" label="CPU">
                </el-table-column>

                <el-table-column prop="firstFps" label="首屏">
                </el-table-column>
                <el-table-column prop="firstFps" label="灯光亮度">
                </el-table-column>

                <el-table-column prop="failRate" label="失败率">
            </el-table>
        </div>
        <div>
            <ve-line :data="tendency"></ve-line>
        </div>
    </div>
</template>
<script>
import VeLine from "v-charts/lib/line";
export default {
  data() {
    return {
      demo: [
        {
          id: 1,
          versionNum: "beta.1.1",
          memory: "12G",
          cpu: "3.20 GHz",
          firstFps: "2018-07-22 17:13:22",
          fail_rate: "20%"
        },
        {
          id: 2,
          versionNum: "beta.1.2",
          memory: "8G",
          cpu: "3.20 GHz",
          firstFps: "2018-07-22 17:12:22",
          fail_rate: "40%"
        }
      ],
      performanceDatas: [],
      tendency: {
        // columns: ["版本号", "内存", "CPU", "首帧时间", "失败率"],
        columns: ["versionNum", "memory", "cpu", "failRate"],
        rows: []
      }
    };
  },
  watch: {
    //watch:主要作用监听数据改变，计算属性也可以监听数据改变
    performanceDatas(newval, oldval) {
      for (var i = 0; i < newval.length; i++) {
        this.tendency.rows.push(newval[i]);
      }
        // this.tendency.rows.push({"内存":23});
      console.log(this.tendency);
    }
  },
  methods: {
    getAllData() {
      this.$ajax({
        method: "get",
        url: "/getAllData"
      }).then(res => {
        this.performanceDatas = res.data;
      });
    }
  },
  created() {
    this.getAllData();
  },
//   mounted() {
//     let res = this.getAllData();
//   },

  components: { VeLine }
};
</script>
