import {
  PublicClientApplication,
  type AccountInfo,
  type RedirectRequest
} from '@azure/msal-browser'
import { reactive } from 'vue'

export const msalConfig = {
  auth: {
    clientId: '2b346308-aab5-488a-afc9-f7c54e34a551',
    authority: 'https://login.microsoftonline.com/fc932da0-2952-467d-a204-fb2db070893c',
    redirectUri: window.location.origin, // Replace with your actual redirect URI
    postLogoutUri: window.location.origin
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false
  }
}
export const graphScopes: RedirectRequest = {
  scopes: ['user.read', 'openid', 'profile']
}
export const state = reactive({
  isAuthenticated: false,
  user: null as AccountInfo | null
})

export const msalInstance = new PublicClientApplication(msalConfig)
