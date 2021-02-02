import Vue from 'vue';
import Buefy from 'buefy';
import device from 'vue-device-detector';
import VueInstaller from 'vue-pwa-installer';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/scss/app.scss';

Vue.use(Buefy);
Vue.use(device);
Vue.use(VueInstaller);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
