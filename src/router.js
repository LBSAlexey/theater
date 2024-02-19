import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './views/MainPage.vue';
import ActorsPage from './views/ActorsPage.vue';
import PerformancePage from './views/PerformancePage.vue';
import PersonalPage from './views/PersonalPage.vue';
import AuthorizationPage from './views/AuthorizationPage.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            name: 'main',
            path: '/',
            component: MainPage
        },
        {
            name: 'actors',
            path: '/actors',
            component: ActorsPage
        },
        {
            name: 'performance',
            path: '/performance/play/:title',
            component: PerformancePage
        },
        {
            name: 'personal',
            path: '/actors/personal/:id',
            component: PersonalPage
        },
        {
            name: 'singUp',
            path: '/singup',
            component: AuthorizationPage
        }

    ]
})