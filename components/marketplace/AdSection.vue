<template>
  <div class="marketplaceSection">
    <div class="marketplace-container">
      <div class="adSection">
        <div class="adSectionCel" v-for="(model,index) in models" :key="index">
          <a :href="model.url" target="_blank">
            <img :src="model.image_full" alt="">
          </a>
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
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      getbyPositions: 'adsBanners/byPositions'
    }),
    getModels(){
      this.getbyPositions({positions: ['SmallOne','SmallTwo']}).then(res => {
        this.models = res['data'];
      })
    }
  }
}
</script>
