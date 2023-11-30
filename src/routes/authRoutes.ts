import Authentication from '@/views/auth/Authentication.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import { RouteRecordRaw } from 'vue-router';

export const authRoutes: RouteRecordRaw = {
    path: '/auth',
    component: Authentication,
    children: [
        {
            path: 'signup',
            name: 'signup',
            component: SignUp,
        },
        {
            path: 'signin',
            name: 'signin',
            component: SignIn,
        },
    ],
};
