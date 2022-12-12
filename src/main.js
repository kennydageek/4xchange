import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// Global registration of components
const requireComponent = require.context(
  './components/global',
  true,
  /\.(js|vue)$/i
);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

// import layouts
import Private from './layouts/private-layout.vue';
import Public from './layouts/public-layout.vue';

Vue.component('private-layout', Private);
Vue.component('public-layout', Public);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
