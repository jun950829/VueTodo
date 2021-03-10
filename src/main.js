import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//이벤트 버스 선언하기
export const eventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
