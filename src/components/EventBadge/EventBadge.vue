<template>
  <b-badge :variant="statusFn">{{ status }}</b-badge>
</template>

<script>
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
</script>

<style scoped>

</style>
