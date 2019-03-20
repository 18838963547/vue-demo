import Vue from 'vue';
import VueRouter from 'vue-router'
import './css/index.scss';
import App from './App.vue'

Vue.use(VueRouter);
import router from './router.js'

new Vue({
    el:'#app',
    data:{
        msg:'nihaoa'
    },
    render:h=>h(App),
    router
})
