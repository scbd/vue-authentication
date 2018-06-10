import Vue  from 'vue'
import Vuex from 'vuex'
import App  from './App.vue'
import Auth       from './Authentication'


Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.$store = store
Vue.prototype.$store = store
Vue.use(Auth,{store})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
