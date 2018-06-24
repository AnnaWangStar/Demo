<template>
    <header>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a href="/" class="navbar-brand">直播云</a>
            <!-- 登录 -->
            <ul class="navbar-nav ml-auto px-3">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">域账户登录</router-link>
                </li>
            </ul>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <!-- 左侧导航栏 -->
                <nav class="el-row">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <!-- 首页 -->
                            <li class="nav-item">
                                <router-link to="/home" class="nav-link">首页</router-link>
                            </li>
                            <!-- bug管理 -->
                            <li class="dropdown">
                                <router-link to="/bugs/bug" class="nav-link">bugs管理</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link to="/bugs/bug">bug</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/bugs/analysis">bug分析</router-link>
                                    </li>

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
            </div>
        </div>
    </header>
</template>

