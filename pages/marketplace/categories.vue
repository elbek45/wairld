<template>
  <div v-loading="loadRunning">
    <TopBanner class="mb-3" />
    <Categories />
    <BottomBanner class="marketplaceSection" />
    <AdSection />
    <Brands />
    <!-- <CategoriesTop /> -->
  </div>
</template>

<script>
import TopBanner from '@/components/marketplace/TopBanner'
import BottomBanner from '@/components/marketplace/BottomBanner'
import Categories from '@/components/marketplace/Categories'
import AdSection from '@/components/marketplace/AdSection'
import Brands from '@/components/marketplace/Brands'
import CategoriesTop from '@/components/marketplace/CategoriesTop'
export default {
  components: {
    Categories,
    AdSection,
    Brands,
    CategoriesTop,
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
