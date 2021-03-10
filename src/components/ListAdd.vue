<template>
  <div>
    <input type="text" v-model="msg" class="todoinput" />
    <button v-if="mode === 'add'" @click="listAdd">할일 추가</button>
    <button v-else>할일 수정</button>
  </div>
</template>

<script>
//이벤트 버스 사용하기
import { eventBus } from "../main";

export default {
  data() {
    return {
      msg: "할일을 추가 하세요",
      mode: "add",
    };
  },
  methods: {
    listAdd() {
      console.log(`ListAdd component : ${this.msg}`);
      this.$emit("listAddEvent", this.msg);
    },
  },
};
</script>

<style scoped lang="scss">
div {
  position: relative;
}
.todoinput {
  display: block;
  height: 50px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #eee;
  text-indent: 30px;
}

button {
  padding: 8px 15px;
  border: 1px solid #5bb5f1;
  border-radius: 30px;
  background: #5bb5f1;
  margin: 5px;
  color: white;
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
