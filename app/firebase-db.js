import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApJXZGDqxF0ZyUUCnikMkXTrQmUnthzNI",
    authDomain: "vuejs-firebase-cfc79.firebaseapp.com",
    databaseURL: "https://vuejs-firebase-cfc79.firebaseio.com",
    storageBucket: "vuejs-firebase-cfc79.appspot.com",
    messagingSenderId: "549704768854"
});

export default firebaseApp.database();