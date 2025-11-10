<template>
  <div class="homeSection hero-section">
    <div class="mainContainer">
      <div class="text-center mb-4 floating">
        <img src="/img/mataverse.svg" class="g-logo" alt="" style="max-width: 120px;">
      </div>
      <h2 class="title title-64 title-dec text-center gradient-text" style="position: relative; z-index: 2;">
        Wairld: Генезис Нейровселенной
      </h2>
      <p class="text-center mt-4" style="font-size: 20px; max-width: 900px; margin-left: auto; margin-right: auto; color: rgba(255,255,255,0.95); position: relative; z-index: 2; line-height: 1.6;">
        Живая лаборатория для симбиотической эволюции человеческого и искусственного интеллекта. Создавайте, обучайте и развивайте ваших AI-агентов (NFI) в персистентном 3D-мире на Unreal Engine 5.
      </p>

      <div class="text-center mt-5" style="position: relative; z-index: 2;">
        <a href="/marketplace/dashboard" class="btn-modern btn-primary" style="margin: 0 10px;">
          Explore Marketplace
        </a>
        <a href="#learn-more" class="btn-modern btn-outline" style="margin: 0 10px; background: rgba(255,255,255,0.1); color: white; border-color: white;">
          Learn More
        </a>
      </div>

      <div class="fSectionGridSlider" v-if="models.length">
        <div class="fSectionGridSliderItem" v-for="(model,index) in models" :key="index">

          <video v-if="index < 3" :src="model.path_full" muted autoplay loop="loop" playsinline></video>

          <div v-eles class="imgBox" :style="`background-image: url(${model.path_full});`"></div>
          
          <div class="fSectionGridItemCont" v-if="model.title || model.description">
            <div class="fSectionGridItemTitle">{{model.title}}</div>
            <div class="fSectionGridItemTxt">{{model.description}}</div>
          </div>
        </div>
      </div>
      
      <div class="fSectionGrid" v-if="models.length">
        <div class="fSectionGridCol">
          <div class="fSectionGridMinVideo" v-if="models[0]">
            <video :src="models[0].path_full" muted autoplay loop="loop" playsinline></video>
          </div>
          <div class="fSectionGridMinVideo" v-if="models[1]">
            <video :src="models[1].path_full" muted autoplay loop="loop" playsinline></video>
          </div>
          <div class="fSectionGridMinVideo" v-if="models[2]">
            <video :src="models[2].path_full" muted autoplay loop="loop" playsinline></video>
          </div>
        </div>
        <div class="fSectionGridCol">
          <div class="fSectionGridItem" v-if="models[3]">
            <div class="imgBox" :style="`background-image: url(${models[3].path_full});`"></div>
            <div class="fSectionGridItemCont" v-if="models[3].title || models[3].description">
              <div class="fSectionGridItemTitle">{{models[3].title}}</div>
              <div class="fSectionGridItemTxt">{{models[3].description}}</div>
            </div>
          </div>
        </div>
        <div class="fSectionGridCol">
          <div class="fSectionGridItem fSectionGridItemMin" v-if="models[4]">
            <div class="imgBox" :style="`background-image: url(${models[4].path_full});`"></div>
          </div>
          <div class="fSectionGridItem fSectionGridItemMin" v-if="models[5]">
            <div class="imgBox" :style="`background-image: url(${models[5].path_full});`"></div>
          </div>
          <div class="fSectionGridItem fSectionGridItemMin" v-if="models[6]">
            <div class="imgBox" :style="`background-image: url(${models[6].path_full});`"></div>
          </div>
        </div>
        <div class="fSectionGridCol">
          <div class="fSectionGridItem" v-if="models[7]">
            <div class="imgBox" :style="`background-image: url(${models[7].path_full});`"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      models: []
    }
  },
  computed: {
  },
  mounted(){
    this.getModels();
  },
  methods:{
    ...mapActions({
      list: 'mediaFiles/getByKey',
    }),
    getModels(){
      this.list('gallery_section').then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
<style scoped lang="scss">
.homeSection{
  padding: 120px 0 100px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    border-radius: 50%;
    top: -250px;
    right: -250px;
    animation: floating 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -200px;
    left: -200px;
    animation: floating 8s ease-in-out infinite reverse;
  }
}

.gradient-text {
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .homeSection {
    padding: 80px 0 60px;
  }
}
</style>
