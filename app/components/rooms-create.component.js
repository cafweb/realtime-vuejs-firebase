import db from '../firebase-db';
import Vue from 'vue';
import VueFire from 'vuefire';

Vue.use(VueFire);

var rooms = [{id:"001", name:"PHP", description:"Sala PHP"},
    {id:"002", name:"JS", description:"Sala JS"},
    {id:"003", name:"HTML", description:"Sala HTML"},
    {id:"004", name:"CSS", description:"Sala CSS"}];


export default  {
        template: require('html-loader!./templates/rooms-create.html'),
        ready: function () {
            var chatRef = db.ref('chat');
            var roomsChildren = chatRef.child('rooms');
            rooms.forEach(function (room) {
                roomsChildren.child(room.id).set({
                    id: room.id,
                    name: room.name,
                    description: room.description
                });
            })
        }
};

