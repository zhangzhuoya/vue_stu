<template>
  <div class="modal" id="modal">
    <div class="mask" @click="$store.commit('setModal', false)"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" name="name" autocomplete="off" 

          ref="name"/>
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="radio" name="sex" value="0" 
          ref="sex"/>
          <span>男</span>
          <input type="radio" name="sex" value="1" />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" name="sNo" 
          ref="sno"
          />
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" name="email" 
          @input="recordChange('email', $event.target.value)" 
          ref="email"/>
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" name="birth" 
          ref="birth"
          @input="recordChange('birth', $event.target.value)"/>
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" name="phone" 
          ref="phone"
          @input="recordChange('phone', $event.target.value)" />
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" name="address" 
          ref="address"
          @input="recordChange('address', $event.target.value)"/>
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交"  class="btn" id="edit-submit" @click="commit" />
          <input type="button" value="重置" class="btn" @click="reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
 
}; 
</script>

<style>
</style>