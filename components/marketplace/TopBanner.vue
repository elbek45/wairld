<template>
  <div v-if="model">
    <div class="marketplace-container">
      <div>
        <a class="dashboardSliderItem" :href="model.url" target="_blank">
          <div class="dashboardSliderItemImage" :style="`background-image: url(${model.image_full});`"></div>
        </a>
        <!-- <div class="dashboardSliderItemContent">
          <div class="dashboardSliderItemContent1">
            <div class="dashboardSliderItemTitle">Become a honorable member</div>
            <div class="dashboardSliderItemTxt">Sign up and join beta testers team! You will get access to developers diary, news and much more</div>
          </div>
          <div class="dashboardSliderItemContent2">
            <a href="#" class="btn btn-white">
              <span>Explore</span>
              <i class="icon-link-arrow"></i>
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      model: null
    }
  },
  mounted(){
    this.getModel();
  },
  methods: {
    ...mapActions({
      getbyPositions: 'adsBanners/byPositions'
    }),
    getModel(){
      this.getbyPositions({positions: ['LargeTop']}).then(res => {
        if(res['data'] && res['data'].length){
          this.model = res['data'][0];
        }
      })
    }
  }
}
</script>
