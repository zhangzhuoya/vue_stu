<template>
<div id="app" class="wrapper">
  <left-menu/>
  <stu-header/>
  
    <div class="right-content">
<router-view>
  
  </router-view>

    </div>
</div>
  
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
import StuHeader from '@/components/StuHeader'

export default {
  components:{
    LeftMenu,
    StuHeader
  }

}
</script>

<style>
@import '../src/assets/css/index.css' 
</style>