import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
    setGlobalState(state, obj) {
      state[obj.key]=obj.value
    }
  },
  getters:{
    getState(state){
      return state
    }
  },
  actions: {
  },
  modules: {
  }
})
