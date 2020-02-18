import Vue from 'vue'
import App from './App/App.vue'
import VueGtag from 'vue-gtag';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(VueGtag, {
    config: { id: process.env.VUE_APP_GTAG }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
