export default {
  name: 'event-badge',
  props: ['status'],
  data() {
    return {}
  },
  computed: {
    statusFn() {

      if (this.status === 'canceled') {
        return 'secondary'
      }
      return 'primary'
    }
  }
}
