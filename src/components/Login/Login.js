import authorize from 'oauth2-implicit/build'
import axios from "axios/dist/axios";
import querystring from 'querystring';

export default {
  name: 'Login',
  created() {

    window.location = 'http://keycloak.k8.wildwidewest.xyz/auth/realms/meltingpoc/protocol/openid-connect/auth?'
      + querystring.stringify({
        scope: 'read',
        client_id: 'meltingpoc',
        client_secret: '4a5bac8a-87e2-4ce1-a417-75f9f70bebef',
        response_type: "id_token token",
        redirect_uri: 'http://localhost:8081',
        grant_type: 'implicit',
        nonce: 1
      });
  }
}
