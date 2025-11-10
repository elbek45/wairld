<template>
  <div id="main" class="defaultLayout">
    <v-loader :show="firstLoading" />
    <!-- start #mainWrap-->
    <div id="home"></div>
    <div id="mainWrap">
      <!-- start #header-->
      <app-header />
      <!-- end #header-->

      <div id="main-row">
        <!-- start #sidebar-->
        <AppSideBar />
        <!-- end #sidebar-->
        
        <!-- start #main-content-->
        <div id="main-content">
          <Nuxt />
        </div>
        <!-- end #main-content-->

        <MobFooterNavBar />
        
      </div>
      
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
import AppSideBar from './components/AppSideBar';
import MobFooterNavBar from './components/MobFooterNavBar';
export default {
  components: {
    AppHeader,
    AppFooter,
    AppSideBar,
    MobFooterNavBar
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
