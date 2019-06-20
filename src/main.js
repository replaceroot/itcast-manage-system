// 引入基本样式
import '@/styles/reset.less'

import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

// 引入路由模块
import router from '@/router.js'

// 挂载Element模块
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
