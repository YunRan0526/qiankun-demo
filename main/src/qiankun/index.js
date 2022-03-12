import globalState from './globalState'
import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun';
import store from '../store/index'
//定义子应用
const apps = [
    {
        name: 'vue3-demo',// 子应用名称 随意
        entry: 'http://localhost:9528',//子应用地址
        container: '#frame',//挂载容器
        activeRule: '/vue3-demo', // 以/vue3-demo 都会激活子应用
        props: {
            props: globalState
        }  //传递给子应用的数据
    }
];
const config = {
    beforeLoad: app => {
        console.log('before load', app.name)
        return Promise.resolve();
    },
    beforeMount: app => {
        console.log('渲染前', app.name)
    },
    afterMount: app => {
        console.log('渲染完毕', app.name)
        store.commit('initStore')
    },
    afterUnmount: app => {
        console.log('after unload', app.name)
    } // 子应用钩子函数
}

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event) => {
    console.error(event);
});
// 注册子应用
registerMicroApps(apps, config)

// 导出 qiankun 的启动函数
export default start;
