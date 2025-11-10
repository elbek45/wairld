<template>
  <div class="dashboardSlider">
    <div class="marketplace-container">
      <carousel 
        v-if="showSlider"
        :autoplay="false"
        :scrollPerPage="true" 
        :navigationEnabled="false"
        :paginationEnabled="true"
        :perPage="1">
        <slide>
          <div class="dashboardSliderItem">
            <div class="dashboardSliderItemImage" style="background-image: url('/img/slider-image1.png');"></div>
            <div class="dashboardSliderItemContent">
              <div class="dashboardSliderItemContent1">
                <div class="dashboardSliderItemTitle">Become a honorable member</div>
                <div class="dashboardSliderItemTxt">Sign up and join beta testers team! You will get access to developers diary, news and much more</div>
              </div>
              <div class="dashboardSliderItemContent2">
                <a href="#" class="btn btn-white">
                  <span>Join our community</span>
                  <i class="icon-link-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="dashboardSliderItem">
            <div class="dashboardSliderItemImage" style="background-image: url('/img/slider-image1.png');"></div>
            <div class="dashboardSliderItemContent">
              <div class="dashboardSliderItemContent1">
                <div class="dashboardSliderItemTitle">Become a honorable member</div>
                <div class="dashboardSliderItemTxt">Sign up and join beta testers team! You will get access to developers diary, news and much more</div>
              </div>
              <div class="dashboardSliderItemContent2">
                <a href="#" class="btn btn-white">
                  <span>Join our community</span>
                  <i class="icon-link-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showSlider: true
    }
  },
  watch:{
    sidebarPostion(val){
      this.showSlider = false;
      setTimeout(_ => {
        this.showSlider = true;
      },200);
    }
  },
  methods: {
  }
}
</script>
