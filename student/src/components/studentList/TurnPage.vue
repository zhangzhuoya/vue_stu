<template>
<ul id="turn-page">
    <li class="prev-page">上一页</li>
<template v-if="totalPage<8">
    <li v-for="i in totalPage" :key="i" @click = turnPage(i) :class="{ative:i===nowPage}">{{i}}</li>
<template/>

<template v-else>
     
<template/>
 <li class="next-page">下一页</li>
  
</ul>
  
</template>

<script>
export default {
   data(){
       return{
           nowPage:1,
           totalPage:7 
       }
      
   },
   methods:{
       turnPage(){
           this.nowPage = i
       }
   }
}
</script>

<style>
.active{
    color: aquamarine;
}
</style>