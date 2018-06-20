<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header">
            联系我们
        </div>

        <div class="card-budy">
            <div class="list-group mb-3">
                        <router-link tag="li" class="nav-link" :to="{name:'phoneLink'}">
                            <a class="list-group-items list-group-item-action">联系电话</a>
                        </router-link>
                   
                        <router-link tag="li" class="nav-link" :to="{name:'addressLink'}">
                            <a class="list-group-items list-group-item-action">联系地址</a>
                        </router-link>


                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

