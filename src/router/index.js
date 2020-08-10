import Vue from 'vue';
import VueRouter from 'vue-router';

import Shows from '@/components/Shows'
import Details from '@/components/Details';  // asumiendo que hicimos este componente
import Edit from '@/components/Edit';
import NotFound from '@/components/NotFound';

Vue.use(VueRouter);    // instalamos explícitamente el router

//acá añadimos nuestras rutas
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Shows
        },
        {
            path: '/details/:id', 
            component: Details
        },
        {
            path: '/shows/:id', 
            component: Edit
        },
        {
            path: '*', 
            component: NotFound
        },
        

    ]
})