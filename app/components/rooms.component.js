import db from '../firebase-db';
import Vue from 'vue';
import VueFire from 'vuefire';
import md5 from 'blueimp-md5';
import {} from 'bootstrap';

Vue.use(VueFire);

export default {
    template: require('html-loader!./templates/rooms.html'),
    data : function () {
        return {
            room : null,
            name:null,
            email:null
        }
    },
    firebase: {
        rooms: db.ref('chat/rooms')
    },
    methods:{
        openModal : function (room) {
            this.room = room.id
            $('#myModal').modal('show')
        },
        login : function () {
            localStorage.setItem('name',this.name);
            localStorage.setItem('email',this.email);
            localStorage.setItem('photo','http://www.gravatar.com/avatar/'+md5(this.email)+'.jpg');
            $('#myModal').modal('hide');
            this.$route.router.go('/chat/'+this.room)
        }

    }
};



