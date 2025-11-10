<template>
  <div>
    <ul class="product-page-tabs">
      <li v-for="(tab,index) in tabs" :key="index">
        <a :href="tab.key" @click.prevent="changeTab(tab.key)" :class="{'active':tab.key==currentTab}">{{tab.name}}</a>
      </li>
    </ul>
    <div class="product-page-tabs-body">
      <Description :model="model" v-if="currentTab == 'description'" />
      <Properties :model="model" v-if="currentTab == 'properties'" />
      <Bids :model="model" v-if="currentTab == 'price-graph'" />
      <PriceChangeGraph :model="model" v-if="currentTab == 'bids'" />
    </div>
  </div>
</template>

<script>
import Description from '@/components/product-tabs/Description'
import Properties from '@/components/product-tabs/Properties'
import Bids from '@/components/product-tabs/Bids'
import PriceChangeGraph from '@/components/product-tabs/PriceChangeGraph'
export default {
  props: ["model"],
  components:{
    Description,
    Properties,
    Bids,
    PriceChangeGraph,
  },
  data(){
    return {
      tabs: [
        {'name':'Description', 'key':'description'},
        {'name':'Properties', 'key':'properties'},
        // {'name':'Price graph', 'key':'price-graph'},
        // {'name':'Bids', 'key':'bids'},
      ],
      currentTab: 'description'
    }
  },
  methods: {
    changeTab(tab){
      this.currentTab = tab;
    }
  }
}
</script>
