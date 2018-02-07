import querystring from 'querystring';
import axios from "axios/dist/axios";


export default {
  name: 'Home',
  beforeRouteEnter(to, from, next) {

    let params = querystring.parse(to.path);
    console.log("Access Token: " + params.access_token);

    axios.get('http://localhost:8090/events',
      {
        'headers':
          {
            'Access-Control-Allow-Origin': 'http://localhost:8081',
            'Authorization': 'Bearer ' + params.access_token
          }
      })
      .then(response => {

        console.log(response);
      })
      .catch(e => {
        //this.errors.push(e)
      });
  }
}
