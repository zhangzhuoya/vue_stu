<template>
  <div class="modal" id="modal">
    <div class="mask"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名:</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            ref="name"
            :value="stu.name"
            @input="changeRe('name',$event.target.value)"
          />
        </div>
        <div class="sex">
          <label for="sex">性别:</label>
          <input
            type="radio"
            name="sex"
            value="0"
            ref="sex"
            :checked="stu.sex == '0'"
            @change="changeRe('sex','0')"
          />
          <span>男</span>
          <input
            type="radio"
            name="sex"
            value="1"
            :checked="stu.sex == '1'"
            @change="changeRe('sex','1')"
          />
          <span>女</span>
        </div>
        <div>
          <label for="sNo">学号:</label>
          <input
            type="text"
            name="sNo"
            ref="sno"
            :value="stu.sNo"
            @input="changeRe('sNo',$event.target.value)"
          />
        </div>
        <div>
          <label for="email">邮箱:</label>
          <input
            type="text"
            name="email"
            ref="email"
            :value="stu.email"
            @input="changeRe('email',$event.target.value)"
          />
        </div>
        <div>
          <label for="birth">出生年:</label>
          <input
            type="text"
            name="birth"
            ref="birth"
            :value="stu.birth"
            @input="changeRe('birth',$event.target.value)"
          />
        </div>
        <div>
          <label for="phone">手机号:</label>
          <input
            type="text"
            name="phone"
            ref="phone"
            :value="stu.phone"
            @input="changeRe('phone',$event.target.value)"
          />
        </div>
        <div>
          <label for="address">住址:</label>
          <input
            type="text"
            name="address"
            ref="address"
            :value="stu.address"
            @input="changeRe('address',$event.target.value)"
          />
        </div>
        <div>
          <label for></label>
          <input type="button" value="提交" class="btn-submit" @click="submits" id="edit-submit" />
          <input type="button" value="重置" class="btn-reset" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from "vuex";
export default {
  data() {
    return {
      nstu: {}
    };
  },
  computed: {
    ...mapState({
      stu: state => state.activeStu
    })
  },
  methods: {
    changeRe(type, value) {
      this.nstu[type] = value;
    },
    ...mapActions(["upData"]),
    async submits() {
      let stus = Object.assign({}, this.stu, this.nstu);
      const { msg, status } = await this.upData(stus);
      console.log(msg, status);
     let type = 'suc'
      if (status == "fail") {
        type = 'err'
      } 
      this.$toast({msg,type})
    }
  },
  created() {
    console.log(this.stu);
  }
};
</script>

<style>
</style>