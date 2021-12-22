import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexMain from '../views/main/indexMain.vue'
import Login from "../views/account/Login.vue"
import Signup from "../views/account/Signup.vue"
import mypage from "../views/mypage/indexmypage.vue"
import plant from "../views/plant/indexplant.vue"
import plantplus from "../views/plant/indexplantplus.vue"
import hospital from "../views/hospital/indexHospital.vue"
import community from "../views/community/indexCommunity.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IndexMain',
    component: IndexMain
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: mypage
  },
  {
    path: '/plant',
    name: 'plant',
    component: plant
  },
  {
    path: '/plantplus',
    name: 'plantplus',
    component: plantplus
  },
  {
    path: '/hospital',
    name: 'hospital',
    component: hospital
  },
  {
    path: '/community',
    name: 'community',
    component: community
  },

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router;
