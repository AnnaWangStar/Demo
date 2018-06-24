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

                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" class="form-control" v-model="confirmPassword">
                        </div>

                        <button class="btn btn-block btn-success">
                            注册
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
      password: "",
      confirmPassword: ""
    };
  },
  // 方法
  methods: {
    onSubmit() {
      // 判断密码和确认密码是否相同
      if (this.password === this.confirmPassword) {
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        alert("恭喜注册成功，系统将自动跳转至登录页面");
        axios
          .post("/users.json", formData)

          .then(res => this.$router.push({ name: "loginLink" }));
      } else {
        alert("两次密码不一致");
      }
    }
  }
};
</script>
