import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from './store';
// import '@/plugins/axios'
import axios from 'axios';

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4447/graphql/tenant/f3fd40b6-1306-4668-8a60-394126f76287',
  request: (operation) => {
    const token = store.state.auth.user.token.access_token;
    console.log(`Header token: ${token}`)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }  
})

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  store,
  router,
  apolloProvider
}).$mount('#app')
