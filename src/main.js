import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

function main() {
  new Vue({
    el: '#app',
    router,
    store,
    mounted() {
      document.dispatchEvent(new Event('rendered'));
    },
    render: h => h(App)
  });
}

/* eslint-disable no-alert, no-console */
store
  .dispatch('appData/updateMyList')
  .catch(error => console.log(error))
  .then(main);
/* eslint-enable no-alert, no-console */
