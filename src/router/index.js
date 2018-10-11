import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import todayYh from '../components/diffrence/yh/yh'
const routes  =[
    {
        path: '/todayYh',
        name: 'todayYh',
        component: todayYh
    }
]
const router = new Router({mode: 'history', routes})
export default router
