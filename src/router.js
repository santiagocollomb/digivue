import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';

Vue.use(Router);
Vue.use(VueMeta);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunkName: "Home"*/ './views/Home'),
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () =>
      import(/*webpackChunkName: "Servicios"*/ './views/Servicios'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () =>
      import(/*webpackChunkName: "Portfolio"*/ './views/Portfolio'),
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () =>
      import(/*webpackChunkName: "Contacto"*/ './views/Contacto'),
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: () =>
      import(/*webpackChunkName: "Recursos"*/ './views/Recursos'),
  },
  /*CLIENTES */
  {
    path: '/clientes/kuruf',
    name: 'Kuruf',
    component: () => import(/*webpackChunkName: "Kuruf"*/ './clientes/Kuruf'),
  },
  {
    path: '/clientes/pss-bikes',
    name: 'Pss',
    component: () => import(/*webpackChunkName: "Pss"*/ './clientes/Pss'),
  },
  {
    path: '/clientes/onework',
    name: 'Onework',
    component: () =>
      import(/*webpackChunkName: "Onework"*/ './clientes/Onework'),
  },
  {
    path: '/clientes/pablo-collomb',
    name: 'Pcollomb',
    component: () =>
      import(/*webpackChunkName: "Pcollomb"*/ './clientes/Pcollomb'),
  },
  {
    path: '/clientes/wolfschmidt',
    name: 'Wolf',
    component: () => import(/*webpackChunkName: "Wolf"*/ './clientes/Wolf'),
  },
  {
    path: '/clientes/piltri',
    name: 'Piltri',
    component: () => import(/*webpackChunkName: "Piltri"*/ './clientes/Piltri'),
  },
  {
    path: '/clientes/sena',
    name: 'Sena',
    component: () => import(/*webpackChunkName: "Sena"*/ './clientes/Sena'),
  },
  {
    path: '/clientes/kabala',
    name: 'Kabala',
    component: () => import(/*webpackChunkName: "Kabala"*/ './clientes/Kabala'),
  },
  {
    path: '/clientes/bda',
    name: 'Bda',
    component: () => import(/*webpackChunkName: "Bda"*/ './clientes/Bda'),
  },
  {
    path: '/clientes/caelis',
    name: 'Caelis',
    component: () => import(/*webpackChunkName: "Caelis"*/ './clientes/Caelis'),
  },
  { path: '*', redirect: '/' },
];

export default new Router({
  mode: 'history',
  routes,
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
