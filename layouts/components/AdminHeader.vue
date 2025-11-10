<template>
  <div id="adminHeader">
    <div class="adminHeaderRow">
      
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
    }
  },
  computed: {
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
