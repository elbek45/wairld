<template>
  <div>
    <MobHeader />
    
    <HomeHeader v-if="isHomePage" />
    <InnerHeader v-else />

    <LoginModal v-if="loginShow" />
    <RegisterModal v-if="registerShow" />

    <PartnershipModal v-if="partnershipShow" />
  </div>
</template>

<script>
import InnerHeader from './InnerHeader'
import LoginModal from '@/components/models/LoginModal'
import RegisterModal from '@/components/models/RegisterModal'
import PartnershipModal from '@/components/models/PartnershipModal'
import HomeHeader from './HomeHeader'
import MobHeader from './MobHeader'
export default {
  components: {
    InnerHeader,
    HomeHeader,
    LoginModal,
    RegisterModal,
    MobHeader,
    PartnershipModal
  },
  data(){
    return {
    }
  },
  computed: {
    isHomePage(){
      return this.$route.name == 'index';
    },
    loginShow(){
      return this.$route.query['login'];
    },
    registerShow(){
      return this.$route.query['register'];
    },
    partnershipShow(){
      return this.$route.query['partnership'];
    }
  },
  mounted(){
    this.checkAuth();
  },
  unmounted() {
  },
  methods:{
    checkAuth(){
      const token = this.$storage.getToken();
      if(token){
        this.chechAuthLoading = true;
        this.$store.dispatch('auth/getCurrentUser').then(_ => {
          this.chechAuthLoading = false;
        }).catch(_ => {this.chechAuthLoading = false;})
      }
    },
  }
};
</script>
