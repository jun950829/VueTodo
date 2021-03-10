<template>
  <div class="wrap">
    <h1>오늘의 할일을 입력하세요</h1>
    <p>할일 전체: {{ todoList.length }} / 완료된 일 : {{countDone}}/ 해야할 일 : {{todoList.length-countDone}}</p>
    <div>
      <!-- 리스트추가 -->
      <ListAdd @listAddEvent="todoAdd" @listEditEvent="todoEdit"></ListAdd>
      <!-- 리스트 보여주기 -->
      <List v-bind:todoList="todoList" @list-delete="listDelete" @list-done="listDone"></List>
    </div>
  </div>
</template>

<script>
import ListAdd from "./ListAdd";
import List from "./List";

export default {
  components: {
    ListAdd,
    List,
  },
  data() {
    return {
      //할일을 저장할 배열 만들기
      todoList: [],
    };
  },
  methods: {
    todoAdd(txt) {
      console.log(`home component: ${txt}`);
      this.todoList.push({ msg: txt, mode: "created" });
      console.log(this.todoList);
    },
    listDelete(index) {
        this.todoList.splice(index, 1);
    },
    listDone(index,smode) {
        this.todoList[index].mode=smode;
    },
    todoEdit(pmsg, pindex) {
        this.todoList[pindex].msg=pmsg;
        
    }
  },
  computed: {
      countDone() {
          var count = 0;
          //todoList의 각각의 내용 mode값을 체크하여 mode가 done인 요소만 카운트
          this.todoList.forEach(function(list) {
              if(list.mode === 'done') count++
          })
          return count;
      }
  },
};
</script>

<style scoped lang="scss">

.wrap {
  width: 600px;
  margin: 50px auto 0;
  padding: 30px;
  background: white;
  border-radius: 30px;
  color:#555;
  box-shadow: 0px 0 5px rgba(0,0,0,0.3);
  h1 {
      font-weight: normal;
      margin-bottom: 30px;
  }
}
</style>