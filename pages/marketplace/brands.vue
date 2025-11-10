<template>
  <div v-loading="loadRunning">
    <TopBanner />
    <Brands />
    <AdSection />
    <BottomBanner class="marketplaceSection" />
    <!-- <LatestBids /> -->
    <CreateAndSellNFT />
  </div>
</template>

<script>
import Brands from '@/components/marketplace/Brands'
import BottomBanner from '@/components/marketplace/BottomBanner'
import TopBanner from '@/components/marketplace/TopBanner'
import AdSection from '@/components/marketplace/AdSection'
import LatestBids from '@/components/marketplace/LatestBids'
import CreateAndSellNFT from '@/components/marketplace/CreateAndSellNFT'
export default {
  components: {
    Brands,
    AdSection,
    LatestBids,
    CreateAndSellNFT,
    TopBanner,
    BottomBanner
  },
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
