<template>
  <div id="mobFooterNav">
    <nav>
      <ul>
        <li>
          <nuxt-link to="/marketplace/dashboard">
            <i class="icon-space-dashboard"></i>
            <span>Dashboard</span>
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
            <i class="icon-mdi_box-arrow-up"></i>
            <span>Inventory</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-basket"></i>
            <span>Basket</span>
          </a>
        </li> -->
        <li>
          <nuxt-link to="/cabinet" v-if="currentProfile">
            <i class="icon-user"></i>
            <span>Profile</span>
          </nuxt-link>
          <a v-else href="/login" @click.prevent="changeQuery('login','1')">
            <i class="icon-user"></i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  created(){
  },
  mounted(){
  },
  computed: {
  },
  methods: {
  }
};
</script>