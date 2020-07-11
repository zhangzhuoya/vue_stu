<template>
  <div id="student-list" class="student-list content">
   <stu-search>

   </stu-search>
   <stu-table></stu-table>
  <turn-page :totalPage="totalPage" :nowPage='nowPage' @currentPage='turnPage'></turn-page>
  <transition>
      <show-modal v-if="$store.state.showModal"></show-modal>
  </transition>
  </div>
</template>

<script>

import StuSearch from "@/components/studentList/StuSearch";
import StuTable from "@/components/studentList/StuTable";
import TurnPage from "@/components/studentList/TurnPage";
import ShowModal from "@/components/studentList/ShowModal";
import {mapActions ,mapState} from 'vuex'
export default {

   components: {
    StuSearch,
    StuTable,
    TurnPage,
    ShowModal
  },
  computed:{
    ...mapState({
      nowPage: state => state.nowPage,
      totalPage: state => state.totalPage,
      searchValue: state => state.searchValue,
    })
  },
  methods:{
    ...mapActions(["getStuList","searchList"]),
   turnPage(i) {
      if(this.searchValue === '') {
        this.getStuList(i);
      } else {
        this.searchList(i);
      }
    }
  },
  created(){
    this.getStuList(1)
  }
}
</script>
<style>
.v-enter, .v-leave-to{
  top:-100%;
  opacity: 0;
}
.v-enter-to, .v-leave {
  top: 0;
  opacity: 1;
}
.v-enter-active, .v-leave-active{
  transition: all .3s;
}
</style>