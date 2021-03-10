<template>
  <div>
    <Home></Home>
  </div>
</template>

<script>
  //외부에 저장된 Home컴포넌트 가져오기
  import Home from "./components/Home.vue"

  export default {
    components: {
      Home
    }
  }
</script>

<style lang="scss">
body {
  background-color: #5bb5f1;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
