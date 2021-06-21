import Vue from 'vue'

import Home from './componets/Home.vue'
import VueRouter from 'vue-router'
import routes from './routes'


Vue.use(VueRouter)

const app = new Vue ({
    
    el : '#app',
    components : { Home },
    router : new VueRouter(routes),
    template : '<Home></Home>'
})

