import './assets/main.scss';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);

const options = {
  position: 'top-center',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
};
app.use(Toast, options);
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
