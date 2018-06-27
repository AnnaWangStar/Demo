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
                <tbody>
                    <tr>
                        <td>榴莲pizza</td>
                        <td><button class="btn btn-outline-danger btn-sm">
                            &times;</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
// 添加NewPizza.vue
import NewPizza from './NewPizza' 
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

    components:{
        'app-new-pizza':NewPizza
    }

    
}
</script>

