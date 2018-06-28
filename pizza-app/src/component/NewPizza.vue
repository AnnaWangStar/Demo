<template>
    <form action="">
        <h3 class="text-muted my-5">添加新pizza</h3>
       <!-- 品种 -->
        <div class="form-group row">
            <label for="" class="col-sm-1">品种</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <!-- 描述 -->
        <div class="form-group row">
            <label for="" class="col-sm-1">描述</label>
            <div class="col-sm-11">
                <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <!-- 选项1 -->
        <p><strong>选项1</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>
        <!--  选项2 -->
        <p><strong>选项2</strong></p>
        <div class="form-group row">
            <label for="" class="col-sm-1">尺寸</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label for="" class="col-sm-1">价格</label>
            <div class="col-sm-11">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <!-- 添加按钮 -->
        <div class="form-group row">
            <button type="button" @click="addMenuItem" class="btn btn-success btn-block">
                添加
            </button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return{
            newPizza:{}
        }
    },
    // 添加方法
    methods:{
        addMenuItem(){
            //新增数据的 数据结构
            let data={
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                    {
                        size:this.newPizza.size1,
                        price:this.newPizza.price1
                    },
                    {
                        size:this.newPizza.size2,
                        price:this.newPizza.price2
                    },
                ],}

                // 实现请求，将数据传给野狗平台中
                // axios vue-resource 也可以实现
                // es6提供了一个fetch
                fetch("https://wd6846125205vdfnry.wilddogio.com/menu.json",{
                    // post请求
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(data),
                })
                // 提交，
                // .then(res =>console.log(res))
                .then(res => res.json())
                // 添加成功后，跳转至menu页面
                .then(res => this.$router.push({name:"menuLink"}))
                // 出错，控制台打印出错误日志
                .catch(err => console.log(err))

        }
    }
    
}
</script>
