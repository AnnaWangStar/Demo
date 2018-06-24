<template>
    <!-- 左侧导航栏 -->
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <!-- 首页 -->
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">首页</router-link>
                </li>

                <!-- bug管理 -->
                <li class="nav-item">
                    <router-link tag="a" to="/bugs/bug" class="nav-item">bug管理</router-link>
                    <ul class="dropdown-menu">
                        <li><router-link class="dropdown-item" to="/bugs/bug">bug</router-link></li>
                        <li><router-link class="dropdown-item" to="/bugs/analysis">bug分析</router-link></li>
                    </ul>
                </li>





                <!-- 测试管理 -->
                <li class="nav-item">
                    <router-link to="/qa/test" class="nav-link">测试管理</router-link>
                </li>

                <!-- 小工具 -->
                <li class="nav-item">
                    <router-link to="/tools" class="nav-link">小工具</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>

</style>
