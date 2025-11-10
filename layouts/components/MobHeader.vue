<template>
  <div id="mobHeader">
    <div class="mobHeaderCell">
      <button class="navBtn" @click="setMobNavShow(true)">
        <img src="/img/icons/navBar.svg" />
      </button>
    </div>
    <NuxtLink to="/">
      <img src="/img/new-logo.png" width="32px" alt="">
    </NuxtLink>
    <div class="mobHeaderCell" style="justify-content: flex-end;">
      <template v-if="currentProfile">
        <a href="#" class="themeToggleBtn mt-1 me-1" @click.prevent="toggleTheme">
          <img src="/img/icons/dark-theme.svg" class="dark-theme-img" alt="">
          <img src="/img/icons/light-theme.svg" class="light-theme-img" alt="">
        </a>
        <NuxtLink class="currentUser" to="/cabinet">
          <div class="currentUserPhoto" :style="`background-image: url(${currentProfile.photo_full})`"></div>
          <!-- <div class="currentUserFullname">{{ currentProfile.full_name }}</div> -->
        </NuxtLink>
      </template>
      <nav v-else class="headerEndNav">
        <ul>
          <li>
            <a href="#" class="themeToggleBtn" @click.prevent="toggleTheme">
              <img src="/img/icons/dark-theme.svg" class="dark-theme-img" alt="">
              <img src="/img/icons/light-theme.svg" class="light-theme-img" alt="">
            </a>
          </li>
          <li>
            <a href="/login" @click.prevent="changeQuery('login','1')">Log in</a>
          </li>
        </ul>
      </nav>
    </div>
    <MobNav v-if="mobNavShow" />
  </div>
</template>

<script>
import MobNav from './MobNav'
export default {
  components: {
    MobNav
  },
  data(){
    return {
      currentTheme: 'light'
    }
  },
  computed: {
    routeFullPath(){
      return this.$route.fullPath;
    }
  },
  watch:{
    routeFullPath(){
      this.setMobNavShow(false);
    }
  },
  mounted(){
    this.setMobNavShow(false);
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
