<template>
  <div id="main">
    <v-loader :show="firstLoading" />
    <!-- start #mainWrap-->
    <div id="home"></div>
    <div id="mainWrap">
      <!-- start #header-->
      <app-header />
      <!-- end #header-->
      
      <!-- start #content-->
      <div id="content">
        <Nuxt />
      </div>
      <!-- end #content-->
      
    </div>
    <!-- end #mainWrap-->
    
    <!-- start #footer-->
    <app-footer />
    <!-- end #footer-->

    
  </div>

</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data(){
    return {
      firstLoading: true,
    }
  },
  mounted(){
    this.firstLoading = false;
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
