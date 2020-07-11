<template>
  <div class="search">
    <label for="search-word">关键词：</label>
    <input type="text" id="search-word" v-model="words" />
    <button id="search-submit" @click="searchValue">搜索</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      words: ""
    };
  },
  methods: {
    ...mapActions(["getStuList", "searchList"]),
    ...mapMutations(["setSearchValue"]),
    searchValue() {
      this.setSearchValue(this.words);
      if (this.words === "") {
        this.getStuList(1);

      } else {
        this.searchList(1);
      }
    }
  }
};
</script>

<style>
</style>