<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <!-- new pizza -->
            <app-new-pizza></app-new-pizza>
        </div>

        <div class="col-sm-12 col-md-4">
            <!-- 品种展示 -->
            <h3 class="text-muted my-5">菜单</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>品种</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <!-- 删除按钮 -->
                            <button class="btn btn-outline-danger btn-sm" @click="deleteData(item)">
                                &times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
// 添加NewPizza.vue
import NewPizza from "./NewPizza";
export default {
  //     data(){
  //         return{
  //             name:"Anna",
  //         }
  //     },

  //    // 组件内的守卫--进入组件之前
  //     beforeRouteEnter:(to ,from ,next)=>{
  //         next(vm =>{
  //             alert("hello"+vm.name);
  //         });
  //     },

  // 组件内的守卫--离开组件之前
  // beforeRouteLeave(to , from , next){
  //     if(confirm("确定离开")==true){
  //         next();
  //     }else{
  //         next(false);
  //     }
  // }

  data() {
    return {
      getMenuItems: []
    };
  },
  components: {
    "app-new-pizza": NewPizza
  },
  // 钩子
  created() {
    fetch("https://wd6846125205vdfnry.wilddogio.com/menu.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        // 得到数据库中所有的对象
        let menuArray = []
        // 遍历所有的对象，取出唯一的key，作为id，根据id去删除
        for (let key in data) {
          // console.log(key)
          // console.log(data[key])

          data[key].id = key;
          menuArray.push(data[key]);
        }
        this.getMenuItems = menuArray;
      });
  },
  methods: {
    deleteData(item) {
      fetch(
        "https://wd4241011795gxrnxa.wilddogio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        .then(data => this.$router.push({ name: "menuLink" }))
        .catch(err => console.log(err))
    }
  }
};
</script>

