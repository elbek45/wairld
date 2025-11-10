<template>
  <div id="adminCard" v-loading="loadRunning">
    <Nuxt />
  </div>
</template>

<script>
export default {
  layout: 'Admin',
  middleware: ['auth'],
  components:{
  },
  methods: {
  }
}
</script>
