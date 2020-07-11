<template>
  <div class="left-menu">
            <dl id="menu-list">
                <dt>学生管理</dt>
                <router-link  to="/studentshow" tag="dd">学生列表</router-link>
                <router-link  to="/studentadd" tag="dd">新增学生</router-link>
                <router-link  to="/studentecharts" tag="dd">图表显示</router-link>

               
            </dl>
        </div>
</template>

<script>
export default {

}
</script>

<style>
</style>