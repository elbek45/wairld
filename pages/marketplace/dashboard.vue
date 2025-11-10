<template>
  <div v-loading="loadRunning" class="marketplace-dashboard">
    <TopBanner />
    <Discount />
    <Characters />
    <Trending />
    <!-- <ExploreCategories /> -->
    <!-- <LatestBids /> -->
    <BestCollections />
    <CreateAndSellNFT />
  </div>
</template>

<script>
import TopBanner from '@/components/marketplace/TopBanner'
import Discount from '@/components/marketplace/Discount'
import Characters from '@/components/marketplace/Characters'
import Trending from '@/components/marketplace/Trending'
import ExploreCategories from '@/components/marketplace/ExploreCategories'
import LatestBids from '@/components/marketplace/LatestBids'
import BestCollections from '@/components/marketplace/BestCollections'
import CreateAndSellNFT from '@/components/marketplace/CreateAndSellNFT'
export default {
  components: {
    TopBanner,
    Discount,
    Characters,
    Trending,
    ExploreCategories,
    LatestBids,
    BestCollections,
    CreateAndSellNFT
  },
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.marketplace-dashboard {
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
}
</style>
