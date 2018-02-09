import axios from 'axios/dist/axios'

const eventURL = 'http://localhost:8090/events';

export default {
  name: 'Event',
  data() {
    return {
      data: {}
    }
  },
  created() {

    let config = {
      headers:
        {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"),
          'Accept': 'application/json'
        }
    };

    console.log('one event');
    axios.get(eventURL + '/' + this.$route.params.id, config)
      .then(response => {
        // JSON responses are automatically parsed.
        this.data = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      axios.put('http://localhost:3000/events/' + this.data.id, this.data);

      this.$router.replace('/');
    }
  }
}
