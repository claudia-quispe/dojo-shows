import Vue from 'vue'
import Vuex from 'vuex'
import VueFirestore from 'vue-firestore';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false

// acá se activan las librerias
Vue.use(Vuex)
Vue.use(VueFirestore, {key: 'id'});      // adding this use statement

new Vue({
  render: h => h(App),
  //store,
  router, 
}).$mount('#app')
