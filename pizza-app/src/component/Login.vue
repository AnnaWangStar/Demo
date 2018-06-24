<template>
    <div class="row mt-3">
        <div class="col-md-12 col-jg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../../src/assets/icon.png" alt="" class="mx-auto d-block">
                    <form @submit.prevent="onSubmit">

                        <div class="form-group">
                            <label for="emain">邮箱</label>
                            <input type="email" class="form-control" v-model="email">
                        </div>

                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password">
                        </div>

                        <button class="btn btn-block btn-success">
                            登录
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  // 方法
  methods: {
    onSubmit() {
      axios.get("/users.json").then(res => {
        // res.data 转化成数组
        const data = res.data;
        const users = [];
        // 遍历当前对象
        for (let key in data) {
          const user = data[key];
          users.push(user);
        }
        // 实现过滤
        let result = users.filter(user => {
          return user.email === this.email && user.password === this.password;
        });
        // 判断result的长度是否大于0
        if (result.length > 0 && result != null) {
            // 登录成功，页面跳转至首页
            this.$router.push({ name: "homeLink" })
        }else{
            alert("账号或密码错误")
        }
      });
    }
  }
};
</script>
