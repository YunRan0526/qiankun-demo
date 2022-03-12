import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import start from '@/qiankun/index.js'

//启动qiankun
start({
  prefetch: true, // 可选，是否开启预加载，默认为 true。
  sandbox: { strictStyleIsolation: true }, // //开启css沙箱 防止子应用样式污染从而确保微应用的样式不会对全局造成影响。
  singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
})

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
