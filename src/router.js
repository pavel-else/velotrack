import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import History           from '@/components/History';

import RentalPointInfo from '@/components/Options/RentalPointInfo';
import GeneralSettings from '@/components/Options/GeneralSettings';
import Tariffs         from '@/components/Tariffs';
import Accessories     from '@/components/Accessories';
import Products        from '@/components/Products';
import Monitor         from '@/components/Monitor/Monitor';

import Test            from '@/views/Test';

const Login = () => import('@/views/Login');
const LoginByToken = () => import('@/components/LoginByToken');
const NotFound = { "template": '<h2>Page Not Found</h2>' };

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/');
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next('/Login');
};

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/views/Main'),
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/test',
            component: Test,
        },

        {
            path: '/monitor',
            component: Monitor,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/customers',
            component: {
                render(c) { return c('router-view') }
            },
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: '/',
                    name: 'Customers',
                    component: () => import('@/views/Customers/Customers'),
                },
                {
                    path: '/create',
                    name: 'CustomersCreate',
                    component: () => import('@/views/Customers/Create')
                }
            ],
        },
        {
            path: '/history',
            component: History,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/test',
            component: () => import('@/components/Test'),
        },
        {
            path: '/settings',
            redirect: '/settings/main',
            beforeEnter: ifAuthenticated,
            component: {
                render(c) { return c('router-view') }
            },
            children: [
                {
                    path: 'main',
                    component: RentalPointInfo
                },
                {
                    path: 'general',
                    component: GeneralSettings
                },
                {
                    path: 'tariffs',
                    component: Tariffs
                },
                {
                    path: 'products',
                    component: Products
                },
                {
                    path: 'accessories',
                    component: Accessories
                },
            ]
        },
        {
            path: '/repairs',
            component: {
                render(c) { return c('router-view') }
            },
            beforeEnter: ifAuthenticated,
            children: [
                {
                    path: '/',
                    redirect: 'plan'
                },
                {
                    path: 'plan',
                    component: () => import('@/components/Repairs/Plan'),
                },
                {
                    path: 'current',
                    component: () => import('@/components/Repairs/Current'),
                },
                {
                    path: 'history',
                    component: () => import('@/components/Repairs/History'),
                },
                {
                    path: 'settings',
                    component: () => import('@/components/Repairs/Settings'),
                },
            ]
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/token/:token',
            component: LoginByToken
        },
        {
            path: '*',
            component: NotFound,
        },
    ]
})
