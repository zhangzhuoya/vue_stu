<template>
  <div :class="[type,animmate]" class="toast" v-if="life">{{msg}}</div>
</template>

<script>
export default {

};
</script>

<style>
.toast {
  width: 100px;
  height: 50px;
  position: fixed;
  line-height: 50px;
  text-align: center;
  top: 100px;
        left: calc(50% - 100px);

}
.suc {
  background-color: #f0f9eb;
  color: #67c23a;
}
.err {
  background-color: #fef0f0;
  color: #f56c6c;
}
@keyframes fadeIn {
    0%{
        top:0;
        opacity: 0;
    }
    100%{
        top:100px;
        opacity: 1;
    }
}
@keyframes fadeOut {
    100%{
        top:0px;
        opacity: 0;
    }
    0%{
        top:100px;
        opacity: 1;
    }
}
.fade-in{
    animation: fadeIn forwards .6s;
}

.fade-out{
    animation: fadeOut forwards .6s;
}
</style> 