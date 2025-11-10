<template>
  <div id="homeHeader">
    <div class="mainContainer">
      <div class="header">
        
        <div class="home-page-logo">
          <NuxtLink to="/" class="pt-0 pb-0">
            <img src="/img/new-logo.png" width="44px" alt="">
          </NuxtLink>
        </div>

        <HeaderNav />

        <div class="headerEnd">
          
          <nav class="headerEndNav">
            <ul>
              <li>
                <a href="#" class="themeToggleBtn" @click.prevent="toggleTheme">
                  <img src="/img/icons/dark-theme.svg" class="dark-theme-img" alt="">
                  <img src="/img/icons/light-theme.svg" class="light-theme-img" alt="">
                </a>
              </li>
              <li>
                <a href="/partnership" @click.prevent="changeQuery('partnership','1')">Partnership</a>
              </li>
              <li>
                <NuxtLink v-if="currentProfile" class="currentUser" to="/cabinet">
                  <div class="currentUserPhoto" :style="`background-image: url(${currentProfile.photo_full})`"></div>
                  <div class="currentUserFullname">{{ currentProfile.full_name }}</div>
                </NuxtLink>
                <a v-else href="/login" @click.prevent="changeQuery('login','1')">Log in</a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/elements/HeaderNav'
export default {
  components: {
    HeaderNav,
  },
  data(){
    return {
      currentTheme: 'light',
    }
  },
  computed: {
  },
  mounted(){
    if(this.isDarkTheme){
      this.currentTheme = 'dark';
    }else{
      this.currentTheme = 'light';
    }
  },
  unmounted() {
  },
  methods:{
    toggleTheme(){
      if(this.currentTheme =='dark'){
        this.currentTheme = 'light';
        document.body.classList.remove('darkTheme');
      }else{
        this.currentTheme = 'dark';
        document.body.classList.add('darkTheme');
      }
      this.$storage.setItem('theme',this.currentTheme);
    }
  }
};
</script>
<style scoped>
.currentUser{
  /* margin-top: 7px; */
}
</style>
