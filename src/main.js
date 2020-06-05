// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAt0e6cmxpLJokyNdQXlTmqhMQzpagMhLw',
  authDomain: 'project-vue-7a6a2.firebaseapp.com',
  databaseURL: 'https://project-vue-7a6a2.firebaseio.com',
  projectId: 'project-vue-7a6a2',
  storageBucket: 'project-vue-7a6a2.appspot.com',
  messagingSenderId: '74946576056',
  appId: '1:74946576056:web:8024b4b20ed3c46f5b3e4d',
  measurementId: 'G-YB9LBKCM04'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate () {
    store.dispatch('fetchUser', {id: store.state.authId})
  }
})
