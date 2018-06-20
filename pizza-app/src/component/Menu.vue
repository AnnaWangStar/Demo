<template>
    <h1>
        Menu
    </h1>
</template>
<script>
export default {
    // 组件内的守卫--离开组件之前
    beforeRouteLeave(to , from , next){
        if(confirm("确定离开点餐页面")==true){
            next();
        }else{
            next(false);
        }
    }
}
</script>
