import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin';
import Loader from './components/app/Loader.vue';
import currencyFilter from './filters/currency.filter';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.devtools = true;


Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: "AIzaSyCiYowlteoOsZlgJXOmNyjo7mjigwaGZ0w",
  authDomain: "vue-crm-26afb.firebaseapp.com",
  databaseURL: "https://vue-crm-26afb.firebaseio.com",
  projectId: "vue-crm-26afb",
  storageBucket: "vue-crm-26afb.appspot.com",
  messagingSenderId: "383488027031",
  appId: "1:383488027031:web:4f194cfa0512dc14cf7cd2",
  measurementId: "G-NT3DB6C4RL"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
