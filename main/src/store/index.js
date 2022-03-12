import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import qiankunActions from '../qiankun/qiankunActions'
import globalState from '../qiankun/globalState.js'
export default new Vuex.Store({
  state: globalState,
  mutations: {
    addAge(state) {
      state.age++
      //数据更新后 通过 qiankunActions.setGlobalState  通知子应用props改变了
      qiankunActions.setGlobalState(state)
    },
    initStore(state) {
      state.user = 'wang';
      state.age = 18;
      //数据更新后 通过 qiankunActions.setGlobalState  通知子应用props改变了
      qiankunActions.setGlobalState(state)
    },
    setGlobalState(state, obj) {
      state[obj.key] = obj.value
    }
  },
  getters: {
    getState(state) {
      return state
    }
  },
  actions: {
  },
  modules: {
  }
})
