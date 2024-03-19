import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import StockTransfer from './components/StockTransfer.vue';
import CreateNewTransfer from './components/CreateNewTransfer.vue';
import '@fortawesome/fontawesome-free/css/all.css';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: StockTransfer },
    { path: '/CreateNewTransfer', component: CreateNewTransfer }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
