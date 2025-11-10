<template>
  <div id="mainBanner">
    <div class="activeBannerVideo">
      <template v-if="activeModel">
        <video :muted="mainVideoMuted" :autoplay="mainVideoPlay" loop="loop" id="bannerVideo" playsinline ref="bannerVideo">
          <source :src="activeModel.path_full" type="video/mp4">
        </video>
        <div class="activeBannerVideoBtns">
          <button @click="playToggle">
            <img v-if="mainVideoPlay" src="/img/icons/v-pause.svg" alt="">
            <img v-else src="/img/icons/v-play.svg" alt="">
          </button>
          <button @click="volumeToggle">
            <img v-if="mainVideoMuted" src="/img/icons/video-volume-high.svg" alt="">
            <img v-else src="/img/icons/video-volume-slash.svg" alt="">
          </button>
        </div>
      </template>
    </div>
    <div class="bannerVideoSlider">
      <carousel 
        :autoplay="false"
        :navigationEnabled="true"
        :loop="true"
        :paginationEnabled="false"
        navigationNextLabel=""
        navigationPrevLabel=""
        :perPage="3">
        <slide v-for="(model,index) in models" :key="index">
          <div class="bannerVideoSliderItem" :class="{'active':activeModel&&model.id==activeModel.id}" @click="selectVideo(model)">
            <video muted playsinline>
              <source :src="model.path_full" type="video/mp4">
            </video>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      activeModel: null,
      mainVideoPlay: true, 
      mainVideoMuted: true, 
      models: []
    }
  },
  computed: {
    // models(){
    //   return [{
    //       id: 1,
    //       path: "/videos/fast.mp4",
    //     },{
    //       id: 2,
    //       path: "/videos/SecondWorldPromovideo.mp4",
    //     },{
    //       id: 3,
    //       path: "/videos/fast.mp4",
    //     },{
    //       id: 4,
    //       path: "/videos/SecondWorldPromovideo.mp4",
    //     },
    //   ]
    // }
  },
  mounted(){
    this.getModels();
  },
  methods:{
    ...mapActions({
      list: 'mediaFiles/getByKey',
    }),
    getModels(){
      this.list('banner_video').then(res => {
        this.models = res['data'];
        this.activeModel = this.models[0];
      })
    },
    selectVideo(model){
      this.activeModel = null;
      this.$nextTick(_ => {
        this.activeModel = model;
        // this.$nextTick(_ => {
        //   this.playVideo();
        // })
      })
    },
    // playVideo(){
    //   var bannerVideo = document.getElementById('bannerVideo');
    //   if(bannerVideo){
    //     bannerVideo.play();
    //     bannerVideo.muted = false;
    //   }
    // }
    playToggle(){
      this.mainVideoPlay = !this.mainVideoPlay;
      var bannerVideo = document.getElementById('bannerVideo');
      if(bannerVideo){
        if(this.mainVideoPlay){
          bannerVideo.play();
        }else{
          bannerVideo.pause();
        }
      }
    },
    volumeToggle(){
      this.mainVideoMuted = !this.mainVideoMuted;
      var bannerVideo = document.getElementById('bannerVideo');
      if(bannerVideo){
        bannerVideo.muted = this.mainVideoMuted;
      }
    }
  }
}
</script>
<style>
.bannerVideoSlider .VueCarousel-navigation-prev {
    transform: translateY(-50%) translateX(-150%) !important;
}
.bannerVideoSlider .VueCarousel-navigation-next {
    transform: translateY(-50%) translateX(150%) !important;
}
</style>
