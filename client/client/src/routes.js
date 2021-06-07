import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import HelloWorld from './components/HelloWorld.vue'
import FrontPage from './components/FrontPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import ProfileUpload from './components/ProfileUpload.vue'


let  router=new VueRouter({
  mode:'history',
  routes:[
{path:'/',
 name:'HelloWorld',
 component:HelloWorld
},
{
  path:'/login',
  name:'Login',
  component:Login

},
{
  path:'/frontpage',
  name:'FrontPage',
  component:FrontPage

},
{path:'/profilepage',
 name:'ProfilePage',
 component:ProfilePage
},
{path:'/profileupload',
 name:'ProfileUpload',
 component:ProfileUpload
},


]









});
export default router
