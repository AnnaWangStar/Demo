<template>
    <header>
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a href="/" class="navbar-brand">直播云</a>
            <!-- 登录 -->
            <ul class="navbar-nav ml-auto px-3">
                <li class="nav-item">
                    <router-link href="#" class="nav-link">域账户登录</router-link>
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <!-- 首页 -->
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">首页</router-link>
                            </li>
                            <!-- bug管理 -->
                            <li class="nav-item">
                                <router-link to="bugs/bug" class="nav-link">bugs管理</router-link>
                            </li>
                            <!-- 测试管理 -->
                            <li class="nav-item">
                                <router-link to="qa/test" class="nav-link">测试管理</router-link>
                            </li>
                            <!-- 小工具 -->
                            <li class="nav-item">
                                <router-link to="tools" class="nav-link">小工具</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <!--                 
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    首页
                </main> -->
            </div>
        </div>
    </header>
</template>
