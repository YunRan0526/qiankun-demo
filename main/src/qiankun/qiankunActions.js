import { initGlobalState } from 'qiankun';
import globalState from './globalState'
import store from '../store/index'
// 初始化定义传给子应用的数据
const qiankunActions = initGlobalState(globalState);

// 监听全局下发数据的改变 然后更新vuex
qiankunActions.onGlobalStateChange((state, prev) => {
    function updateVuex(props) {
        for (const key in props) {
            store.commit('setGlobalState', { key, value: props[key] })
        }
    }
    updateVuex(state)
    console.log('主应用:', state, prev);

});

export default qiankunActions