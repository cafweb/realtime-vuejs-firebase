/**
 * Created by carlos on 07/01/17.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import RoomsComponent from './components/rooms.component.js';
import ChatComponent from './components/chat.component';
import RoomsCreateComponent from './components/rooms-create.component';

require('style!css!../node_modules/bootstrap/dist/css/bootstrap.min.css');

Vue.use(VueRouter);

var appComponent = Vue.extend({});

var router = new VueRouter();

router.map({
    '/chat/:room': {
        component : ChatComponent
    },
    '/rooms': {
        component : RoomsComponent
    },
    '/rooms-create' : {
        component: RoomsCreateComponent
    }
});

router.start(appComponent,"#app");
