<template>
  <div id="homePage">
    <!-- <HomeVideoBanner /> -->
    <FirstSection />
    <BlogLinks />
    <BuyNFT />
    <!-- <StepsSellNFT /> -->
    <!-- <Investors /> -->
    <Team />
    <JoinOurCommunity />
    <FAQ />
  </div>
</template>

<script>
import HomeVideoBanner from '@/components/homeSections/HomeVideoBanner'
import FirstSection from '@/components/homeSections/FirstSection'
import BlogLinks from '@/components/homeSections/BlogLinks'
import BuyNFT from '@/components/homeSections/BuyNFT'
import StepsSellNFT from '@/components/homeSections/StepsSellNFT'
import Investors from '@/components/homeSections/Investors'
import Team from '@/components/homeSections/Team'
import JoinOurCommunity from '@/components/homeSections/JoinOurCommunity'
import FAQ from '@/components/homeSections/FAQ'
export default {
  name: 'IndexPage',
  layout: 'home',
  components:{
    HomeVideoBanner,
    FirstSection,
    BlogLinks,
    BuyNFT,
    StepsSellNFT,
    Investors,
    Team,
    JoinOurCommunity,
    FAQ
  },
  computed: {
  },
  mounted(){
  },
  methods: {
  }
}
</script>
