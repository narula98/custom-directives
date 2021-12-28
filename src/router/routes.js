import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import DataComponent from '../components/DataComponent.vue';
import Vue from 'vue';

Vue.use(VueRouter);
const routes = [
{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
},
{
    path: '/data-component/:routeText/:dataText',
    name: 'DataComponent',
    component: DataComponent,
    props: true
}

];

export default new VueRouter({routes});