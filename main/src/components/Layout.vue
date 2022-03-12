<template>
    <div class="layout">
        <div class="nav">
            <div class="menu">
                <div class="content">
                    <el-button @click="go('/')" type="primary">主应用</el-button>
                    <el-button @click="go('/vue3-demo')" type="primary">子应用vue3</el-button>
                </div>
                <div class="user">用户:{{user}} 年龄:{{ age }}</div>
            </div>
            <el-row>
                <el-button @click="$store.commit('addAge')" type="primary">从主应用修改数据</el-button>
            </el-row>
        </div>
        <router-view v-show="$route.meta.mainApp" class="view" />
        <div id="frame" v-show="!$route.meta.mainApp"></div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            user: state => state.user,
            age: state =>state.age
        })
    },
    methods: {
        go(path) {
            return path === this.$route.path || this.$router.push({ path })
        }
    },
    mounted() {


    }
}
</script>
<style lang="less" scoped>
.layout {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .nav {
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        border-bottom: solid 1px grey;
        .menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .content {
                flex: 1;
                box-sizing: border-box;
                padding: 5px 15px;
                display: flex;
                justify-content: flex-start;
            }
            .user {
                width: 300px;
                align-self: flex-end;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }
    .view {
        flex: 1;
    }
    #frame {
        flex: 1;
    }
}
</style>