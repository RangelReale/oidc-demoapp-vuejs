// import { UserManager, WebStorageStateStore, User } from 'oidc-client';
import Oidc from 'oidc-client';

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.DEBUG;

let oidcProviderDomain = process.env.VUE_APP_AUTH_URL;
console.log(`oidcProviderDomain: ${process.env.VUE_APP_AUTH_URL}`)

const oidcClient = new Oidc.UserManager({
  userStore: new Oidc.WebStorageStateStore(),  
  authority: oidcProviderDomain,
  client_id: process.env.VUE_APP_AUTH_CLIENT,
  redirect_uri: window.location.origin + '/callback',
  response_type: 'code',
  scope: 'openid ' + (process.env.VUE_APP_AUTH_SCOPES ? process.env.VUE_APP_AUTH_SCOPES : ''),
  post_logout_redirect_uri: window.location.origin + '/home',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: false,
  filterProtocolClaims: false,
  loadUserInfo: true,
  includeIdTokenInSilentRenew : false,
})
export default oidcClient;
