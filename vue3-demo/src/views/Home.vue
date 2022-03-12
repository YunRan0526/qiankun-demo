<template>
  <div class="home">
    <div>用户：{{ user }} 年龄：{{ age }}</div>
    <el-button @click="handler">从子应用修改数据</el-button>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  name: 'Home',
  inject: ['$setGlobalState'],
  components: {

  },
  computed: {
    ...mapState({
      user: (state) => state.user,
      age: (state) => state.age,
    }),
  },
  methods: {
    handler() {
      let temp = this.age + 1
      this.$store.commit('setGlobalState', { key: 'age', value: temp });
      this.$setGlobalState(this.$store.getters.getState);//提交到vuex 后 通知父应用更新
    }
  }
}
</script>
