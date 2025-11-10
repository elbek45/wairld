<template>
  <div id="header">
    <div class="largeContainer">
      <div class="innerHeader">
        <div class="logo">
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
    <LoginModal v-if="showLoginModal" :show="showLoginModal" @closed="showLoginModal=false" />
  </div>
</template>

<script>
import LoginModal from '@/components/models/LoginModal'
import HeaderNav from '@/components/elements/HeaderNav'
export default {
  components: {
    LoginModal,
    HeaderNav,
  },
  data(){
    return {
      showLoginModal: false,
      currentTheme: 'light'
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
