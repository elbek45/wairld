<template>
  <div id="admin">
    <v-loader :show="firstLoading" />
    <!-- start #adminSideBar-->
    <AdminSideBar />
    <!-- end #adminSideBar-->
    <!-- start #mainWrap-->
    <div id="adminMainWrap">
      <!-- start #header-->
      <AdminHeader />
      <!-- end #header-->
      
      <!-- start #content-->
      <div id="content">
        <Nuxt />
      </div>
      <!-- end #content-->
      
    </div>
    <!-- end #mainWrap-->
  </div>

</template>

<script>
import AdminHeader from './components/AdminHeader';
import AdminSideBar from './components/AdminSideBar';
export default {
  components: {
    AdminHeader,
    AdminSideBar,
  },
  data(){
    return {
      firstLoading: true,
    }
  },
  mounted(){
    this.firstLoading = false;
    // this.cacheClear();
  },
  watch: {},
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
<style lang="scss">
@import '../assets/styles/admin.scss';
</style>

