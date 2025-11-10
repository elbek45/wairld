<template>
  <div id="mobNav">
    <div class="mobNavMask" @click="setMobNavShow(false)"></div>
    <div class="mobNavBody">
      <div class="mobNavHead">
        <div class="mobNavTitle">MENU</div>
        <div class="mobNavClose" @click="setMobNavShow(false)">
          <i class="icon-close"></i>
        </div>
      </div>

      <div class="mobNavItems">
        <ul>
          <li>
            <NuxtLink to="/">
              Metaverse
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/marketplace/dashboard">
              Marketplace
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/whitepaper">
              Whitepaper
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pitch-deck">
              Pitch Deck
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/roadmap">
              Roadmap
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/wiki">
              Wiki
            </NuxtLink>
          </li>
        </ul>
      </div>


      <div class="mobNavItems mt-4">
        <ul>
          <li>
            <a href="/partnership" @click.prevent="changeQuery('partnership','1')">Partnership</a>
          </li>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  computed: {
  },
  mounted(){
  },
  unmounted() {
  },
  methods:{
  }
};
</script>
