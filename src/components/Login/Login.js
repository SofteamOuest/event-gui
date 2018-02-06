import authorize from 'oauth2-implicit/build'


export default {
  name: 'Login',
  created() {
    const credentials = authorize({
      auth_uri: 'http://keycloak.k8.wildwidewest.xyz/auth/realms/meltingpoc/protocol/openid-connect/auth',
      client_id: 'meltingpoc',
      scope: ['read'],
      state: {
        location: window.location
      },
    });
  }
}
