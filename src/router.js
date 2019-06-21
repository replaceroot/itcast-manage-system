import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录组件
import Login from '@/views/login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
Vue.use(VueRouter)

// 创建路由模块
var router = new VueRouter({
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
      // 重定向到welcome页面
      redirect: { name: 'Welcome' },
      // 创建子路由
      children: [
        {
          name: 'Welcome',
          path: 'welcome',
          component: Welcome
        }
      ]
    }
  ]
})

export default router
