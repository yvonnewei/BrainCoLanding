<template>
    <div id="nav-wrapper" class="navigation-wrapper">
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div id="nav">
            <router-link to="/">首页</router-link>
            <a>产品中心</a>
            <a>新闻动态</a>
            <a>合作伙伴</a>
            <router-link to="/download">下载</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>

export default {
  name: "Navigation",
};
</script>

<style scoped lang="scss">
#nav-wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 60px;
    background: #a2a2a2;
    border-bottom: 1px solid #dadada;
    padding-right: 60px;
    .logo {
        float: left;
        width: 60px;
        height: 60px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    #nav {
        float: right;
        padding-right: 60px;
        a {
            line-height: 60px;
            padding: 0 10px;
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}

</style>