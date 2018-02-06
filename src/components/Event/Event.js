import axios from 'axios/dist/axios'

export default {
  name: 'Event',
  data() {
    return {
      data: {}
    }
  },
  created() {
    axios.get('http://localhost:3000/events/' + this.$route.params.id)
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
