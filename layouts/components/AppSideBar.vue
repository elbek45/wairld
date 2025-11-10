<template>
  <div id="sidebar" :class="{'closed':sidebarClosed}">
    <div class="sidebarInner scrollBar">
      <div class="sidebarToggleBtn" @click="toggleSideBar">
        <i class="icon-material-symbols_arrow-drop-down-rounded"></i>
      </div>
      <div class="sidebarNavBody">
        <nav class="sidebarNav">
          <ul>
            <li>
              <nuxt-link to="/marketplace/dashboard">
                <i class="icon-space-dashboard"></i>
                <span>Dashboard</span>
              </nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link to="/marketplace/exchange">
                <i class="icon-ri_exchange-fill"></i>
                <span>Exchange</span>
              </nuxt-link>
            </li> -->
            <li>
              <nuxt-link to="/marketplace/brands">
                <i class="icon-verified-brand-solid"></i>
                <span>Brands</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/marketplace/categories">
                <i class="icon-category-fill"></i>
                <span>Categories</span>
              </nuxt-link>
            </li>
            <!-- <li>
              <a href="#">
                <i class="icon-ion_create"></i>
                <span>NFT creation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-dollar-circle"></i>
                <span>Withdraw</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-mdi_graph-pie"></i>
                <span>Staking</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-mdi_box-arrow-up"></i>
                <span>Inventory</span>
              </a>
            </li> -->
          </ul>
        </nav>
      </div>

      <div class="sidebarNavFooter">
        <nav class="sidebarNav">
          <ul>
            <li v-if="currentUser">
              <a href="#" @click.prevent="logout">
                <i>
                  <img src="/img/icons/logout.svg" alt="">
                </i>
                <span>Log out</span>
              </a>
            </li>
            <li>
              <nuxt-link to="#">
                <i class="icon-info-with-circle"></i>
                <span>General instructions</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      sidebarClosed: false,
    }
  },
  created(){
    var sidebarClosed = this.$storage.getItem('sidebarClosed');
    if(sidebarClosed){
      this.sidebarClosed = sidebarClosed;
      this.setSideBarPosition(this.sidebarClosed);
    }
  },
  mounted(){
    this.addClassToBody();
  },
  watch: {},
  computed: {
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout',
      setSideBarPosition: 'app/setSideBarPosition',
    }),
    toggleSideBar(){
      this.sidebarClosed = !this.sidebarClosed;
      this.setSideBarPosition(this.sidebarClosed);
      this.$storage.setItem('sidebarClosed', this.sidebarClosed);
      this.addClassToBody();
    },
    logout(){
      this.logoutAction().then(res => {
        this.$router.push("/");
      })
    },
    addClassToBody(){
      if(this.sidebarClosed){
        document.body.classList.add('sidebarClosed');
      }else{
        document.body.classList.remove('sidebarClosed');
      }
    }
  }
};
</script>