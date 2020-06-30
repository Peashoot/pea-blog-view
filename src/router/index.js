import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "@/components/user/Login";
import Register from "@/components/user/Register";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/user/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user/register',
            name: 'Register',
            component: Register
        }
    ]
})