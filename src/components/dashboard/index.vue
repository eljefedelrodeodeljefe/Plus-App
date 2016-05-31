
<template>
  <section class="dashboard-container">
    <h1>Dashboard</h1>
    <calendar></calendar>
  </section>
</template>

<script>

export default {
  components: {
    'styles': require('./styles/styles.vue'),
    'calendar': require('../calendar/index.vue')
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
