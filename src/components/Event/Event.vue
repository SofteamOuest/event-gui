<template>
  <div>{{ $route.params.id }} {{ title }} {{ composer }} {{ status }} {{ url }}</div>
</template>

<script>
  export default {
    name: 'event',
    props: ['title', 'composer', 'status', 'url']
  }
</script>

<style scoped>

</style>
