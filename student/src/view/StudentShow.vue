<template>
  <div id="student-list" class="student-list content">
   <stu-search>

   </stu-search>
   <stu-table></stu-table>
  <turn-page></turn-page>
  <transition>
      <show-modal v-if="$store.state.showModal"></show-modal>
    </transition> 
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>