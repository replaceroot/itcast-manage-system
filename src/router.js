import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录组件
import Login from '@/views/login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import Users from '@/views/users/User.vue'
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
          // 注意嵌套路由中的路径千万不要加/否则会破坏路由的层级
          path: 'welcome',
          component: Welcome
        },
        {
          name: 'Users',
          path: 'users',
          component: Users
        }
      ]
    }
  ]
})

export default router
