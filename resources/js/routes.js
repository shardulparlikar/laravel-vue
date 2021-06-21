import Home from './componets/Home.vue'
import Login from './componets/Login.vue'
import DashBoard from './componets/DashBoard.vue'


export default{
    mode : 'history',
    routes :[
        {
            path : '/',
            component : Home
        },{
        path : '/Login',
        component : Login

        },
        {
            path : '/dashboard',
            component : DashBoard
        }
    ]
}