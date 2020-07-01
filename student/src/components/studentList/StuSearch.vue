<template>
  <div class="search">
      <label for="search-word">关键词：</label>
      <input type="text" id="search-word" />
      <button id="search-submit">搜索</button>

      <form id="search-form">
        <input type="radio" name="sex" id="male" value="0" />
        <label for="male">男</label>
        <input type="radio" name="sex" id="female" value="1" />
        <label for="female">女</label>
        <input type="radio" checked name="sex" id="all" value="-1" />
        <label for="all">不限</label>
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>