<template>
  <div class="turn">
    <template>
      <ul id="turn-page">
        <li class="prev-page" @click="turnPage('prev')">上一页</li>
        <li
          v-for="(i,index) in totalPage"
          :key="index"
          @click="turnPage(i)"
          :class="{active:i===nowPage}"
        >{{i}}</li>
        <li class="next-page" @click="turnPage('next')">下一页</li>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    totalPage: Number,
    nowPage: Number
  },
  data() {
    return {
      nPage: 1
    };
  },
  methods: {
    turnPage(i) {

      if (i === 'prev') {
        console.log(1);
        
        if (this.nowPage !== 1) {
          this.nPage = this.nowPage - 1;
          console.log(this.nPage);
          // console.log(1);
          
        }
      } else if (i === "next") {
        if (this.nowPage !== this.totalPage) {
          this.nPage = this.nowPage + 1;
          console.log(this.nPage);
        }
      } else {
        this.nPage = i;
      }
      // this.nPage
      if (this.nPage === this.nowPage) {
        return;
      }
      this.$emit('currentPage',this.nPage);
    }
  }
};
</script>

<style>
.active {
  color: aquamarine;
}
</style>