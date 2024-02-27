import homeWord from './components/homeWord'
import signUp from './components/signUp'
import loginUser from './components/loginUser'
import addResto from './components/addResto'
import restoList from './components/restoList'
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
    {
        name:'addResto',
        component:addResto,
        path:'/add'
    },
    {
        name:'restoList',
        component:restoList,
        path:'/all-list'
    },


]

const router=createRouter({
    history:createWebHistory(),
    routes

});
export default router