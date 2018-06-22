import Vue  from 'vue'
import App  from './App.vue'
import Auth from './Authentication'

Vue.use(Auth,{env:'development'})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
