// The Vue build version to load with the `import` commandss
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'
import VueCroppie from 'vue-croppie';
import 'croppie/croppie.css' // import the croppie css manually
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.use(VueCroppie);

Vue.config.productionTip = false;
Vue.use(VueRouter);

const store=new Vuex.Store({
 state:{
   userid:0,
   username:null,
   currentpageid:0,
   isAuthenticated:false,
   token:'',

},
mutations:{
  userupdate:(state,payload)=>{
  state.userid=payload.id;
  state.isAuthenticated=true;
  state.token=payload.token;
  localStorage.setItem('token', token);
},
logout:(state,payload)=>{
  localStorage.removeItem('token');
  state.userid=0;
  state.isAuthenticated=false;

},
},
getters:{


},
actions:{
userupdate:(context,payload)=>{
  context.commit('userupdate',payload)
},
logout:(context,payload)=>{
  context.commit('logout')
}

}




})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
