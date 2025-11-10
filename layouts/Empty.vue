<template>
  <div id="main">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  mounted(){
    if(this.isDarkTheme){
      document.body.classList.add('darkTheme');
    }
    // this.cacheClear();
  },
  computed: {
  },
  methods: {
    cacheClear(){
      if(caches){
        caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))))
        console.log('cache deleted')
      }
    },
  }
};
</script>
