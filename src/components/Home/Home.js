import querystring from 'querystring';
import axios from "axios/dist/axios";


export default {
  name: 'Home',
  beforeRouteEnter(to, from, next) {

    let params = querystring.parse(to.path);
    console.log("Access Token: [" + params.access_token + "]");

    sessionStorage.setItem("access_token", params.access_token);
  }
}
