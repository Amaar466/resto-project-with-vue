import homeWord from './components/homeWord'
import signUp from './components/signUp'
import loginUser from './components/loginUser'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:'homeWord',
        component:homeWord,
        path:'/'
    },
    {
        name:'signUp',
        component:signUp,
        path:'/sign-up'
    },
    {
        name:'loginUser',
        component:loginUser,
        path:'/login'
    },

]

const router=createRouter({
    history:createWebHistory(),
    routes

});
export default router