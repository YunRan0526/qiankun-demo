import './pubilc-path.js';
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const { name } = require('../package.json')
let router = null;
let instance = null;

//子应用钩子函数
export async function bootstrap() {
    console.log('bootstrap');
}
//子应用钩子函数
export async function mount(props) {
    function updateVuex(props) {
        for (const key in props) {
            store.commit('setGlobalState', { key, value: props[key] })
        }
    }
    //监听全局下发属性的改变 然后更新vuex
    props.onGlobalStateChange((state, prev) => {
        updateVuex(state)
        console.log('子应用：', state, prev);
    });
    render(props);
    console.log('mount', props);
}
//子应用钩子函数
export async function unmount() {
    console.log('unmount');
    instance.unmount()

}

function render(props = {}) {
    const { container } = props;
    router = createRouter({
        history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? `/${name}/` : '/'),
        routes,
    })

    instance = createApp(App)
    instance.use(ElementPlus)
    instance.use(store)
    instance.use(router)
    instance.mount(container ? container.querySelector('#app') : '#app')
    //调用此方法可通知父应用 数据更新
    instance.provide('$setGlobalState', props.setGlobalState)

}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

