import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import StockTransfer from './components/StockTransfer.vue';
import CreateNewTransfer from './components/CreateNewTransfer.vue';
import StockAdjustment from './components/StockAdjustment.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import AddNewAdjustment from './components/AddNewAdjustment.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: StockTransfer },
    { path: '/CreateNewTransfer', component: CreateNewTransfer },
    { path: '/StockAdjustment', component: StockAdjustment},
    { path: '/AddNewAdjustment', components: AddNewAdjustment}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
