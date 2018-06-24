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
export default {
    data(){
        return{
            email:'',
            password:'',
            
        }
    },
    // 方法
    methods:{
        
        onSubmit(){
            
        }
    }
}
</script>
